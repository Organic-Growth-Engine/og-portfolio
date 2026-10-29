# OG Portfolio

Portfolio website for OG Engine showcasing creative work across media, video editing, social media, performance marketing, influencer marketing, and events.

## Folder Structure

```text
og-portfolio/
├── index.html                   # Home page
├── editing.html                 # Video editing page
├── events.html                  # Events page
├── influencer-marketing.html    # Influencer marketing page
├── media.html                   # Media projects page
├── performance-marketing.html   # Performance marketing page
├── smm.html                     # Social media management page
├── app.js                       # Logic for home page (animations, cursor, scroll)
├── case.js                      # Logic for case study pages (renders videos & content)
├── style.css                    # Main stylesheet
├── media-manifest.json          # Manifest mapping media URLs to optimized versions
├── vite.config.js               # Vite configuration and build setup
├── assets/                      # Static logos and images
│   └── optimized/               # Optimized WebP images
├── public/
│   └── influencer/              # Influencer Marketing videos + "<name>-poster.jpg" thumbnails
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
3. In `case.js`, use `localVideo("new-client")`:
   - **Main box:** add or replace an entry in `cases.influencer.works`, with `client`, `category`, `services`, `video` and an optional `focus`.
   - **More of our work:** add an item to `influencerPortfolioCategories`.
4. Run `npm run dev` and open `http://localhost:3000/portfolio/influencer-marketing.html`.

If a video's size is not 720×1280, pass it: `localVideo("name", { width: 360, height: 640 })`.

### Files changed for this page

| File | Change |
| --- | --- |
| `case.js` | `localVideo()` helper; the 6 main works (`works`); the "More of our work" list (`influencerPortfolioCategories`); shows each work's name, category and services; crops tall videos to fill the wide frame (`markTallVideo`, `focus`) |
| `influencer-marketing.html` | "Services provided" list in the caption (replaces the quote); `case-feature--details` class; "More of our work" section |
| `style.css` | services list styles; tall-video crop (`.case-feature.is-portrait`); phone layout (caption below the video, services on one line) |
| `public/influencer/` | **new**: 13 videos + 13 poster images |
| `README.md` | this section |

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

## Portfolio email signups

`media-leads.js` handles the existing footer form. `api/media-leads.js` is a Vercel serverless endpoint that inserts email addresses into `public."media leads"` in the existing waitlist Supabase project. It does not send emails.

Set `SUPABASE_URL` and `SUPABASE_SECRET_KEY` on the **portfolio Vercel project**, using the same values as the main website waitlist, then redeploy. Never use a `VITE_` prefix for the secret. Environment variables on the main website are not automatically shared with this separate project.

The SQL migration was applied to project `obrdevbbgkeoqifuetbh` on 27 October 2026. It enables RLS and blocks browser roles from reading or writing leads. The server uses the existing service key. Do not rerun the creation migration on that database.

Requests use `/api/media-leads` on the portfolio deployment and `/portfolio/api/media-leads` when accessed through the main site's existing proxy. Use Vercel's development environment to run the serverless endpoint locally; the Vite-only dev server does not run API functions.
