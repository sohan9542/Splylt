# SPYLT — Scroll Animation Study

A frontend recreation of the [Awwwards Site of the Day](https://www.awwwards.com/sites/spylt-milk) marketing experience for **SPYLT**, a protein + caffeine flavoured milk brand (original design by [Tubik Studio](https://tubikstudio.com/works/spylt)).

Built by [Sohanur Rahman](https://github.com/sohan9542) as a portfolio project to practice scroll-driven storytelling with GSAP.

> This is an unofficial learning recreation. SPYLT branding and product imagery belong to their respective owners.

## Live demo

No public deployment is configured for this repository yet. Run locally with the steps below.

## Features

- Smooth scrolling via GSAP `ScrollSmoother`
- Hero entrance timeline with `SplitText` character reveals and clip-path subtitle wipe
- Scroll-scrubbed hero tilt / scale transition
- Message section word-color scrub and paragraph reveal
- Horizontally pinned flavor carousel driven by vertical scroll
- Responsive layout with Tailwind CSS v4

## Tech stack

| Layer     | Choice                                                                  |
| --------- | ----------------------------------------------------------------------- |
| UI        | React 19 + TypeScript                                                   |
| Bundler   | Vite 8                                                                  |
| Styling   | Tailwind CSS v4 (`@tailwindcss/vite`)                                   |
| Animation | GSAP 3 + `@gsap/react` (`ScrollTrigger`, `ScrollSmoother`, `SplitText`) |
| Quality   | ESLint, Prettier, Vitest                                                |
| CI        | GitHub Actions                                                          |

## Architecture

```
src/
  App.tsx                 # Registers GSAP plugins, ScrollSmoother shell
  components/             # Reusable UI pieces (Navbar, flavor title/slider)
  constants/              # Flavor, nutrient, and testimonial data + helpers
  sections/               # Page sections composed in App
  index.css               # Design tokens, section styles, utilities
public/
  images/ videos/ fonts/  # Static brand assets served as-is
```

The page is a single-route static SPA. Section components own their GSAP timelines via `useGSAP`. Product data lives in `src/constants` so the flavor slider and future nutrition/testimonial sections share the same source of truth.

**Implemented sections today:** Hero, Message, Flavors.  
**Assets / styles prepared but not wired yet:** nutrition, benefits, testimonials, and footer (see unused CSS blocks and media under `public/`).

## Local setup

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/sohan9542/Splylt.git
cd Splylt
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Environment variables

None required. See [`.env.example`](./.env.example).

## Scripts

| Script                 | Purpose                             |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start Vite dev server               |
| `npm run build`        | Typecheck and production build      |
| `npm run preview`      | Preview the production build        |
| `npm run lint`         | ESLint                              |
| `npm run typecheck`    | TypeScript project build (`tsc -b`) |
| `npm run format`       | Format with Prettier                |
| `npm run format:check` | Check Prettier formatting (CI)      |
| `npm run test`         | Run Vitest once                     |
| `npm run test:watch`   | Vitest watch mode                   |

## Project structure

```
.
├── .github/workflows/ci.yml
├── public/                 # Static images, videos, fonts
├── src/
│   ├── components/
│   ├── constants/
│   ├── sections/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── eslint.config.js
```

## Notes

- Large MP4/WebP assets are committed under `public/` for the unfinished sections; they inflate clone size but are intentional media for the full page recreation.
- GSAP `SplitText` and `ScrollSmoother` are used from the installed `gsap` package. Confirm your GSAP license covers Club plugins if you deploy commercially.
