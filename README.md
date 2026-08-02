# JuaraKu — Landing Page

A premium, modern landing page for JuaraKu, a coding & AI education platform for children.
Built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> **Note on fonts:** the build fetches "Baloo 2" and "Plus Jakarta Sans" from Google Fonts via
> `next/font/google` at build time. This requires outbound access to `fonts.googleapis.com` /
> `fonts.gstatic.com`. If you're building in a network-restricted environment, either allow
> those domains or swap the loader in `app/layout.tsx` for locally hosted font files.

## Project structure

```
app/
  layout.tsx        Root layout — fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind layers, base styles, reduced-motion handling
components/
  Navbar.tsx           Sticky nav with mobile menu
  Footer.tsx            Site footer
  sections/             One component per landing page section
  ui/                    Reusable primitives (Button, Card, SectionHeading, Counter, Logo, FloatingBlob)
  illustrations/         Hand-built SVG hero illustration
lib/
  data.ts                All page copy & structured content, centralized
  utils.ts                Small className helper
```

## Design notes

- **Brand palette** is derived directly from the JuaraKu gold-medal mark: blues
  (`#0B5FAF`, `#1E78C8`, `#1E4AA8`) for trust and depth, gold (`#FFC83D`, `#F6B800`) for
  achievement and energy, on a white/neutral base (`#F8FAFC`, `#EEF4F8`, `#374151`).
- **Type system:** "Baloo 2" (rounded, friendly, confident) for headlines paired with
  "Plus Jakarta Sans" (clean, premium, highly legible) for body and UI text.
- **No 3D engine.** All "3D-style" depth comes from layered SVG illustrations, soft
  gradients, blobs, shadows, and subtle glassmorphism — per the brief's constraint against
  Three.js / WebGL / canvas-based 3D.
- **Motion** is handled entirely by Framer Motion: scroll-triggered fades, staggered grid
  reveals, hover lifts, an animated number counter, and gentle infinite floating on
  decorative/hero elements. `prefers-reduced-motion` is respected globally in `globals.css`.
- **Accessibility:** semantic landmarks (`header`, `main`, `footer`, `nav`), a skip-to-content
  link, visible focus rings, `aria-expanded`/`aria-controls` on the FAQ accordion, and
  `aria-label`s on icon-only controls.
- The **logo** is a hand-built inline SVG placeholder (gold medal + blue ribbon) standing in
  for the client-provided logo asset — swap `components/ui/Logo.tsx` for the real file when
  available.

## Production build

```bash
npm run build
npm run start
```

The project has been verified to build cleanly (`next build`) and pass `next lint` with zero
warnings.
# juaraku-landing-page
