# Eat a Banana Podcast

Astro site for the Eat a Banana podcast, deployed to GitHub Pages.

## Local development

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

To validate the production output locally:

```sh
npm run check
npm run build
npm run preview
```

## Episodes

Edit `src/data/episodes.ts` to add or update episodes. Each record drives the episode archive, detail page, and `rss.xml` feed. Replace the placeholder Cloudflare R2 URL and YouTube URL with the real episode links. Use `HH:MM:SS` for the optional duration so podcast apps can parse it correctly.

The RSS feed is available at `/rss.xml` after building. The audio files remain external to this repository and are referenced through their public R2 URLs.

## GitHub Pages and DNS

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. In the repository settings, set Pages to **GitHub Actions**.

`public/CNAME` currently contains `eatabananapodcast.com` as a placeholder based on the repository name. Replace it with the final custom domain if different. In Namecheap, point the apex domain at GitHub Pages with the four current GitHub Pages A records, and point `www` to `<username>.github.io` with a CNAME record. Confirm the exact records in GitHub's Pages settings before publishing DNS changes.

## Design

The first pass uses a reduced paper, ink, and acid-green palette as a temporary visual system. The abstract homepage art is intentionally a replaceable placeholder for the supplied palette image.
