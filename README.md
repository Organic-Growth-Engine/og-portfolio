# OG Portfolio

Portfolio website for OG Engine showcasing creative work across media, video editing, social media, performance marketing, influencer marketing, and events.

## Folder Structure

```text
og-portfolio/
��� index.html                   # Home page
��� editing.html                 # Video editing page
��� events.html                  # Events page
��� influencer-marketing.html    # Influencer marketing page
��� media.html                   # Media projects page
��� performance-marketing.html   # Performance marketing page
��� smm.html                     # Social media management page
��� app.js                       # Logic for home page (animations, cursor, scroll)
��� case.js                      # Logic for case study pages (renders videos & content)
��� style.css                    # Main stylesheet
��� media-manifest.json          # Manifest mapping media URLs to optimized versions
��� vite.config.js               # Vite configuration and build setup
��� assets/                      # Static logos and images
�   ��� optimized/               # Optimized WebP images
��� scripts/
    ��� optimize-media.mjs       # Script to compress videos and images
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


## Portfolio email signups

`media-leads.js` handles the existing footer form. `api/media-leads.js` is a Vercel serverless endpoint that inserts email addresses into `public."media leads"` in the existing waitlist Supabase project. It does not send emails.

Set `SUPABASE_URL` and `SUPABASE_SECRET_KEY` on the **portfolio Vercel project**, using the same values as the main website waitlist, then redeploy. Never use a `VITE_` prefix for the secret. Environment variables on the main website are not automatically shared with this separate project.

The SQL migration was applied to project `obrdevbbgkeoqifuetbh` on 27 October 2026. It enables RLS and blocks browser roles from reading or writing leads. The server uses the existing service key. Do not rerun the creation migration on that database.

Requests use `/api/media-leads` on the portfolio deployment and `/portfolio/api/media-leads` when accessed through the main site's existing proxy. Use Vercel's development environment to run the serverless endpoint locally; the Vite-only dev server does not run API functions.
