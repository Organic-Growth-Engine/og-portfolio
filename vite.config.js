const { resolve } = require("node:path");
const { defineConfig } = require("vite");

const pages = [
  "index",
  "media",
  "editing",
  "smm",
  "performance-marketing",
  "influencer-marketing",
  "web-experiences",
];

module.exports = defineConfig({
  base: "/portfolio/",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)]),
      ),
    },
  },
});