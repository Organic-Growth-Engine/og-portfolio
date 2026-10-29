# OG Portfolio

Portfolio website for OG Engine showcasing creative work across media, video editing, social media, performance marketing, influencer marketing, and web experiences.

## Folder Structure

```text
og-portfolio/
├── index.html                   # Home page
├── editing.html                 # Video editing page
├── influencer-marketing.html    # Influencer marketing page
├── media.html                   # Media projects page
├── performance-marketing.html   # Performance marketing page
├── smm.html                     # Social media management page
├── web-experiences.html         # Web experiences page (was events.html)
├── app.js                       # Logic for home page (animations, cursor, scroll)
├── case.js                      # Logic for case study pages (renders videos & content)
├── style.css                    # Main stylesheet
├── media-manifest.json          # Manifest mapping media URLs to optimized versions
├── vite.config.js               # Vite configuration and build setup
├── assets/                      # Static logos and images
│   └── optimized/               # Optimized WebP images
├── public/
│   ├── influencer/              # Influencer Marketing videos + "<name>-poster.jpg" thumbnails
│   └── web-experiences/         # Web Experiences screenshots, videos + posters
└── scripts/
    └── optimize-media.mjs       # Script to compress videos and images
```

## Important Files

- **`index.html`**: The main landing page with brand showcase and horizontal scroll section.
- **Case Pages (`*.html`)**: Six individual pages for each service/category.
- **`app.js`**: Handles homepage animations, custom cursor, and mobile scroll behavior.
- **`case.js`**: Reads page attributes and loads the right case details, videos, and galleries.
- **`style.css`**: Contains all site styles, layout rules, and responsive design for desktop and mobile.
- **`media-manifest.json`**: Stores references to optimized media files hosted on CloudFront.
- **`vite.config.js`**: Configures multi-page bundling and base path (`/portfolio/`).
- **`scripts/optimize-media.mjs`**: Compresses media files using FFmpeg/ImageMagick and uploads them to S3.

## Influencer Marketing Page

The Influencer Marketing page (`influencer-marketing.html`) works like the Media and Editing pages:

- **6 main boxes.** Clicking a box plays that client's video in the big frame and shows the client name, category and "Services provided".
- **"More of our work".** The other client videos, in two groups: "Restaurants & Cafes" and "Brands & Studios". On-screen videos autoplay muted.

### Where the videos are

All Influencer Marketing videos are stored **inside the project**, in `public/influencer/` (not on AWS/CloudFront):

```text
public/influencer/
├── budget-bar.mp4              # video (720×1280, web-ready)
├── budget-bar-poster.jpg       # thumbnail shown in the box / before the video loads
├── finns-cafe-and-dine.mp4
├── finns-cafe-and-dine-poster.jpg
└── ...                         # 13 videos + 13 posters in total
```

Vite serves `public/` at the site's base path, so a file there is loaded from `/portfolio/influencer/<name>.mp4`. `npm run dev` and `npm run build` both use these files, and the build copies them into `dist/`.

| Section | Clients (file name) |
| --- | --- |
| Main boxes, in order | Budget Bar (`budget-bar`), Finns Cafe & Dine (`finns-cafe-and-dine`), Bluva (`bluva`), Girls Flavour (`girls-flavour`), Cafe Lumos (`cafe-lumos`), Adige Dosa House (`adige-dosa-house`) |
| More of our work: Restaurants & Cafes | Cinnamon Courtyard (`cinnamon-courtyard`), Nior Cafe (`nior-cafe`), Lord of Foods (`lord-of-foods`), Cinnamon Kitchen (`cinnamon-kitchen`), Hovv Patio & Farm (`hovv-patio-and-farm`) |
| More of our work: Brands & Studios | Doshi Design Studio (`doshi-design-studio`), Jain Life (`jain-life`) |

### How the big video looks

The videos are tall phone reels (9:16), but the big frame stays **wide (16:9)**, like the Editing page. The reel fills the frame edge to edge, with no black bars. The top and bottom of the reel are cropped.

- Each main work can set `focus` in `case.js`. It picks which part of the reel stays in view: `"0%"` is the top and `"50%"` is the middle. The default is `"30%"`, set in `style.css` as `--video-focus`.
- On phones (760px wide or less), the client name and services sit **below** the video so they don't cover it. On bigger screens they sit over the bottom of the video.

### How to add or replace a video

1. Put the video in `public/influencer/` as `<name>.mp4`. Use a lowercase name with dashes, for example `new-client.mp4`.
2. Add a thumbnail next to it named `<name>-poster.jpg`, for example `new-client-poster.jpg`. To take one from the video:
   `ffmpeg -ss 3 -i public/influencer/new-client.mp4 -frames:v 1 -vf scale=720:-2 -q:v 4 public/influencer/new-client-poster.jpg`
3. In `case.js`, use `localVideo("influencer/new-client")` (the folder inside `public/`, then the file name without `.mp4`):
   - **Main box:** add or replace an entry in `cases.influencer.works`, with `client`, `category`, `services`, `video` and an optional `focus`.
   - **More of our work:** add an item to `influencerPortfolioCategories`.
4. Run `npm run dev` and open `http://localhost:3000/portfolio/influencer-marketing.html`.

If a video's size is not 720×1280, pass it: `localVideo("influencer/name", { width: 360, height: 640 })`.

### Files changed for this page

| File | Change |
| --- | --- |
| `case.js` | `localVideo()` helper; the 6 main works (`works`); the "More of our work" list (`influencerPortfolioCategories`); shows each work's name, category and services; crops tall videos to fill the wide frame (`markTallVideo`, `focus`) |
| `influencer-marketing.html` | "Services provided" list in the caption (replaces the quote); `case-feature--details` class; "More of our work" section |
| `style.css` | services list styles; tall-video crop (`.case-feature.is-portrait`); phone layout (caption below the video, services on one line) |
| `public/influencer/` | **new**: 13 videos + 13 poster images |
| `README.md` | this section |

## Web Experiences Page

The Web Experiences page is **`web-experiences.html`** (renamed from `events.html`). In `case.js` its data is `cases.web`, and the page sets `data-case="web"`. The home page section (`#web-experiences-section` in `index.html` and `style.css`) and `vite.config.js` point to the new file name.

It works like the Influencer Marketing page:

- **6 main boxes.** Boxes 1–5 are websites: clicking one shows its screenshot in the big frame. Box 6 plays a showreel video. Below the picture: the project name, the type of website, a short description and a **"Visit website"** link that opens the live site in a new tab. The link is hidden for projects without one (Travelocity Tourism).
- **"More of our work".** Two groups: "Websites" (the 5 screenshots) and "Showreels" (3 videos, which autoplay muted when on screen).
- **Cover image.** The laptop photo is the page's top image and the home page section background: `assets/optimized/Web-feature.webp` (+ `Web-feature-960.webp` for small screens, `Web-feature.jpg` original). It replaces the old `Events-feature` images.

### Where the files are

Everything is stored **inside the project**, in `public/web-experiences/`:

```text
public/web-experiences/
├── anaya-escapes.webp                       # website screenshots (1600×900)
├── tranquility-lux.webp
├── navi-mudra.webp
├── travelocity-tourism.webp
├── travplan.webp
├── restaurant-booking-showreel.mp4          # box 6 + Showreels (1600×900)
├── restaurant-booking-showreel-poster.jpg
├── architecture-website-showreel.mp4        # Showreels (1920×1080)
├── architecture-website-showreel-poster.jpg
├── drone-code-animation.mp4                 # Showreels (1280×720)
└── drone-code-animation-poster.jpg
```

- **Screenshots** are 16:9, the same shape as the big frame, so nothing is cut off. Each one is the original screenshot placed in a simple browser window with the site address in the top bar.
- **Videos** were made smaller for the web (H.264, 30 fps, fast start). The restaurant video was 4:3, so it was cropped to its middle 16:9 part.

### How to add or replace a project

1. **Screenshot:** save a 16:9 image (1600×900 works well) as `public/web-experiences/<name>.webp`, for example `new-site.webp`.
   **Video:** save it as `public/web-experiences/<name>.mp4` with a `<name>-poster.jpg` thumbnail next to it (see the `ffmpeg` command in the Influencer section).
2. In `case.js`, add or replace an entry in `cases.web.works`:

   ```js
   {
     client: "New Site",
     category: "Type of website",
     about: "One or two sentences about the project.",
     link: "https://www.new-site.com/", // optional
     image: localImage("web-experiences/new-site.webp"),
     // or, for a video: video: localVideo("web-experiences/new-site", WIDE_VIDEO),
   },
   ```

3. To show it in "More of our work", add an item to `webPortfolioCategories` in `case.js`.
4. Run `npm run dev` and open `http://localhost:3000/portfolio/web-experiences.html`.

`WIDE_VIDEO` means 1600×900. For other sizes, pass them: `localVideo("web-experiences/name", { width: 1920, height: 1080 })`.

### Files changed for this page

| File | Change |
| --- | --- |
| `events.html` → `web-experiences.html` | renamed; caption has a description and a "Visit website" link (replaces the quote); `case-feature--caption-below` class; "More of our work" section |
| `case.js` | `cases.events` → `cases.web` with the 6 works; `webPortfolioCategories`; `localImage()` helper; `localVideo()` now takes the folder too (`"influencer/…"`, `"web-experiences/…"`); works can be an image or a video; caption shows `about` and `link` |
| `style.css` | description + link styles (`.case-about`, `.case-link`); caption below the picture (`.case-feature--caption-below`); home section renamed to `#web-experiences-section` with the new cover image |
| `index.html` | home page section links to `web-experiences.html` |
| `vite.config.js` | builds `web-experiences` instead of `events` |
| `assets/optimized/` | **new** `Web-feature.jpg`, `Web-feature.webp`, `Web-feature-960.webp`; removed `Events-feature.*` |
| `public/web-experiences/` | **new**: 5 screenshots, 3 videos + 3 posters |
| `README.md` | this section |

> The `dist/` folder is an old build and still contains `events.html`. Run `npm run build` to rebuild it.

## How to Run

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
