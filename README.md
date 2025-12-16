# Majd Zahreldeen — Portfolio

This is a Vite + React + TypeScript portfolio scaffold with Three.js animations and Tailwind CSS. Bio and projects are placeholders and will be updated.

## Local development

- Install deps: `npm ci`
- Start dev server: `npm run dev`
- Build: `npm run build`
- Preview built site: `npm run preview`

## Deployment (Vercel)

This project is ready for Vercel and will publish the `dist` folder produced by `npm run build`.

To deploy:
1. Go to https://vercel.com/new and import the repository (select `majd-zahreldeen-portfolio`).
2. Set Build Command: `npm run build` and Output Directory: `dist`.
3. Click Deploy — Vercel will auto-deploy from `main` on push.

You can also use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## CI
A GitHub Actions workflow is included at `.github/workflows/ci.yml` that runs `npm ci` and `npm run build` on push and pull requests to ensure the build succeeds before deployments. The workflow now also runs `npm run optimize:images` in a separate `images` job and makes the optimized images available to the `build` job as an artifact, so the site build includes optimized AVIF/WebP/JPEG assets automatically.

## Adding assets & content
- Replace `src/data/projects.ts` with your real project data.
- Add high-resolution source images (PNG/JPEG) to `public/raw-images/` and run `npm run optimize:images` to generate AVIF/WebP/JPEG variants in `public/images/` (the app will automatically use those if present).
- Replace `public/logo.svg` and `public/og-image.svg` with your branding.

---

If you want, I can push this repo to Vercel for you or add a `vercel.json` with custom routes — tell me if you want that.
