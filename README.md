# TIS Homepage Redesign

An animated, responsive redesign of the [Tulas International School](https://tis.edu.in/) homepage. Brand copy, school facts and the yellow and navy identity are kept from the original site.

**Live demo:** _add your Vercel/Netlify URL here_

## Features

All four optional features are implemented, not just two.

| Feature | Where | Notes |
| --- | --- | --- |
| Custom cursor | `components/animation/CustomCursor.jsx` | Spring-driven ring (`useSpring`), grows over links, buttons and inputs, disabled when `pointer: coarse` |
| Scroll-triggered reveals | `components/animation/Reveal.jsx` | `whileInView` with `once: true`, 0.5s, staggered by index |
| Light/dark theme switcher | `hooks/useTheme.js`, `components/ui/ThemeToggle.jsx` | CSS variables + Tailwind `dark:` class, saved in `localStorage`, set before first paint to avoid a flash |
| Scroll progress bar | `components/animation/ScrollProgress.jsx` | `useScroll` + `useSpring`, transform-only so it stays at 60 FPS |

Also included: count-up stats, pausable brand marquee, snap-scrolling personalities carousel, validated enquiry form, skip link, visible focus states, `prefers-reduced-motion` support and 48px minimum touch targets.

## Tech stack

React 18, Vite 5, Tailwind CSS 3, Framer Motion 11, lucide-react.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  components/
    animation/   CustomCursor, ScrollProgress, Reveal, CountUp
    sections/    Header, Hero, Marquee, About, Sports, Community, Testimonials, Enquiry, Footer
    ui/          Button, SectionHeading, ThemeToggle, Avatar
  data/content.js   All copy and links, separate from markup
  hooks/useTheme.js
  App.jsx
```

## Design decisions

- **Colour:** TIS yellow (`#F5B700`) is used as a fill with navy text for contrast, never as text on a light background. Colours are CSS variables, so the dark theme is one block of overrides.
- **Type:** Bricolage Grotesque for headlines, DM Sans for body text.
- **Motion:** one orchestrated hero sequence, then a single reveal pattern. Motion uses `transform` and `opacity` only.
- **Accessibility:** semantic landmarks, labelled form fields with `aria-describedby` errors, reduced-motion support.

## Deploy

- **Vercel / Netlify:** import the repo. Build command `npm run build`, output directory `dist`.

## Known limitations

- The enquiry form validates on the client and shows a confirmation, but does not send data anywhere. Replace the handler in `Enquiry.jsx` with a call to the admissions API.
- Images are loaded from tis.edu.in; `Avatar` falls back to initials if a photo fails to load.

## Assets and copyright

Copy, logo and photographs belong to Tulas International School. This project is an assessment concept only.
