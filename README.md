# Geofrey Kayinamura — Portfolio

Personal portfolio site for **Kayinamura Karimba Geofrey**, Backend Engineer and Software Engineering student at Rwanda Coding Academy.

## Live demo

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) and set your custom domain (e.g. `geofreykayin.dev`).

## Tech stack

- React 19 + Vite 7
- Tailwind CSS 3
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment variables

Copy `.env.example` to `.env` and fill in optional values:

| Variable | Description |
|----------|-------------|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL for the contact form |
| `VITE_CALENDLY_URL` | Calendly link for "Book a call" |

Without Formspree, the contact form falls back to opening the user's email client.

## Assets to add

Place these in `public/` before deploying:

- `profile.png` — professional headshot (replaces `profile.svg`)
- `cv.pdf` — resume for the download button
- `projects/*.png` — optional project screenshots

See `public/ASSETS.md` for details.

## Build & deploy

```bash
npm run build
npm run preview
```

### Vercel

```bash
npx vercel
```

`vercel.json` is included for SPA routing.

## Project structure

```
src/
  components/Portfolio.jsx   # All UI sections
  constants/data.js        # Profile, projects, experience, etc.
public/                      # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

Private — all rights reserved.
