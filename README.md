# Ben Swann — Personal Website

A cinematic, responsive personal website for Ben Swann built with React, TypeScript, Tailwind CSS, GSAP and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
```

The deployable output is written to `dist/`.

## Deploy to Netlify

Connect the project folder to Netlify. The included `netlify.toml` uses `npm run build` and publishes `dist`.

## Content and assets

- Timeline copy and image mappings: `src/data.ts`
- Page structure and interactions: `src/App.tsx`
- Responsive design and motion styling: `src/styles.css`
- Optimized photos, logos and videos: `public/media/`

The desktop timeline appears at 900px and wider. On smaller screens it becomes a touch-friendly horizontal timeline with snap scrolling and previous/next controls. Reduced-motion preferences disable the intro, video and nonessential animation.
