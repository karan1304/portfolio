# Karan Sharma — Portfolio (Next.js + Tailwind CSS)

Next.js (App Router), Tailwind CSS v4, Framer Motion. Layout follows the "Light" design: hero with browser mockup, work, services, process, about, resume, news, testimonial, contact.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before you deploy
1. **Images** — replace `src/assets/images/index.js` with your own file (and image files).
   Keep the same export: `export const SVG = { Karan, TailorMan, ... }`.
   The current file only draws labelled placeholders.
2. **CV** — put your PDF at `public/Resume.pdf`.
3. **Contact form** — EmailJS ids live in `.env.local` (see `.env.example`).
   Add the same three variables in your host's environment settings.
4. **Content** — each section's text and data sits at the top of its component in `src/components/`. Replace the placeholder quote in `Testimonial.jsx` with a real one.

## Structure
- `src/app/` — layout (fonts, metadata) and the single page
- `src/components/` — Navbar, Home, About, Portfolio, Resume, News, Contact + small parts
- `src/app/globals.css` — Tailwind theme (colours, fonts) and shared classes
