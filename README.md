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
