#!/usr/bin/env node
/**
 * Shrinks every CloudFront photo and video used in case.js, uploads the
 * small versions to S3 under "optimized/", and records them in
 * media-manifest.json. case.js reads that manifest and uses the small
 * versions automatically, falling back to the originals if one is missing.
 *
 * Needs: ffmpeg, ImageMagick (magick), AWS CLI with access to the bucket.
 *   brew install ffmpeg imagemagick awscli && aws configure
 *
 * Run:   node scripts/optimize-media.mjs            (process + upload)
 *        node scripts/optimize-media.mjs --no-upload (process only)
 *
 * Safe to re-run: files already in the manifest are skipped. Videos are read
 * straight from CloudFront, so the large originals are never saved to disk.
 */
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CDN = "https://d3p12bvhtoj2vu.cloudfront.net";
const BUCKET = "s3://og-portfolios-262666781508-ap-southeast-2-an";
const PREFIX = "optimized";
const OUT = join(ROOT, ".media-out");
const MANIFEST = join(ROOT, "media-manifest.json");
const upload = !process.argv.includes("--no-upload");

for (const tool of ["ffmpeg", "ffprobe", "magick", ...(upload ? ["aws"] : [])]) {
  if (spawnSync("which", [tool]).status !== 0) {
    console.error(`Missing "${tool}". Install with: brew install ffmpeg imagemagick awscli`);
    process.exit(1);
  }
}

const source = readFileSync(join(ROOT, "case.js"), "utf8");
const urls = [...new Set(source.match(/https:\/\/d3p12bvhtoj2vu\.cloudfront\.net\/[^"'\s]+/g))];
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};

// "media/Knotic+Vid Main.mp4" -> "media/knotic-vid-main"
function slug(url) {
  const path = decodeURIComponent(url.slice(CDN.length + 1).replace(/\+/g, " "));
  return path
    .replace(/\.[^./]+$/, "")
    .split("/")
    .map((part) => part.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))
    .join("/");
}

const run = (cmd, args) => execFileSync(cmd, args, { stdio: ["ignore", "pipe", "inherit"] }).toString();

function probe(file) {
  const out = run("ffprobe", [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height:stream_side_data=rotation",
    "-of", "json", file,
  ]);
  const stream = JSON.parse(out).streams[0];
  const rotation = Math.abs(stream.side_data_list?.[0]?.rotation || 0);
  return rotation === 90 || rotation === 270
    ? { width: stream.height, height: stream.width }
    : { width: stream.width, height: stream.height };
}

function processVideo(url, base) {
  const video = `${base}-720.mp4`;
  const poster = `${base}-poster.jpg`;
  mkdirSync(dirname(join(OUT, video)), { recursive: true });

  // 720p H.264, ~2.5 Mbps cap, metadata at the front so playback starts fast.
  run("ffmpeg", [
    "-y", "-hide_banner", "-loglevel", "error", "-stats",
    "-i", url,
    "-map", "0:v:0", "-map", "0:a:0?",
    "-vf", "scale='if(gt(iw,ih),-2,min(720,iw))':'if(gt(iw,ih),min(720,ih),-2)'",
    "-c:v", "libx264", "-preset", "medium", "-crf", "25",
    "-maxrate", "2500k", "-bufsize", "5000k", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "96k", "-ac", "2",
    "-movflags", "+faststart",
    join(OUT, video),
  ]);
  run("ffmpeg", [
    "-y", "-hide_banner", "-loglevel", "error",
    "-ss", "1", "-i", join(OUT, video), "-frames:v", "1",
    "-q:v", "4", join(OUT, poster),
  ]);

  return { type: "video", src: video, poster, ...probe(join(OUT, video)) };
}

function processImage(url, base) {
  const tmp = join(OUT, `${base}.original`);
  mkdirSync(dirname(tmp), { recursive: true });
  run("curl", ["-sSfL", "-o", tmp, url]);

  const sizes = {};
  for (const width of [800, 1600]) {
    const file = `${base}-${width}.webp`;
    // auto-orient applies the camera rotation flag before it is stripped.
    run("magick", [tmp, "-auto-orient", "-strip", "-resize", `${width}x${width}>`, "-quality", "78", join(OUT, file)]);
    sizes[width] = file;
  }
  const [width, height] = run("magick", ["identify", "-format", "%w %h", join(OUT, sizes[1600])])
    .trim()
    .split(" ")
    .map(Number);
  rmSync(tmp);

  return { type: "image", src: sizes[1600], small: sizes[800], width, height };
}

let done = 0;
for (const url of urls) {
  done += 1;
  if (manifest[url]) continue;

  const base = slug(url);
  const isVideo = /\.(mp4|mov|m4v|webm)$/i.test(url);
  console.log(`\n[${done}/${urls.length}] ${base}`);

  try {
    const entry = isVideo ? processVideo(url, base) : processImage(url, base);

    if (upload) {
      for (const key of [entry.src, entry.poster, entry.small].filter(Boolean)) {
        run("aws", [
          "s3", "cp", join(OUT, key), `${BUCKET}/${PREFIX}/${key}`,
          "--cache-control", "public, max-age=31536000, immutable",
          "--only-show-errors",
        ]);
      }
    }

    for (const key of ["src", "poster", "small"]) {
      if (entry[key]) entry[key] = `${CDN}/${PREFIX}/${entry[key]}`;
    }
    manifest[url] = entry;
    // Save after every file so an interrupted run keeps its progress.
    writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  } catch (error) {
    console.error(`  Skipped ${url}: ${error.message.split("\n")[0]}`);
  }
}

console.log(`\nDone. ${Object.keys(manifest).length}/${urls.length} files optimized.`);
if (!upload) console.log("Upload was skipped (--no-upload). Upload .media-out/ to optimized/ before deploying.");
