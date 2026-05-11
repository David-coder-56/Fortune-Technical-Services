# Fortune Technical Services Inc. — Website

A modern, high-performance multi-page website for Fortune Technical Services Inc., a premier mining, drilling, and geological services company based in Monrovia, Liberia.

## Tech Stack

- **React 18** + Vite
- **Tailwind CSS** with custom brand tokens
- **Framer Motion** for page transitions and scroll animations
- **@react-three/fiber** + **@react-three/drei** for the 3D WebGL hero element
- **React Router v6** for client-side routing
- **Lucide React** for icons

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0B1F3A` | Primary brand, backgrounds |
| Gold | `#F59E0B` | Accent, CTAs, highlights |
| Steel | `#4B5563` | Secondary elements |
| Charcoal | `#020617` | Dark section backgrounds |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — 3D hero, stats, services preview, featured projects, CTA |
| `/about` | Company history, mission/vision, timeline, team |
| `/services` | Bento grid of all 6 service lines with interactive hover |
| `/projects` | Filter tab portfolio with project detail modals |
| `/contact` | Dual-column contact form with floating labels + validation |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot module replacement)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  assets/             # Static images and 3D models
  components/
    common/           # StatCounter, SectionHeading
    layout/           # Navbar, Footer, PageWrapper
    sections/         # (Reusable section blocks)
    3d/               # DrillCanvas (WebGL/Three.js)
  hooks/              # useScroll, useCounter
  pages/              # Home, About, Services, Projects, Contact
  styles/             # index.css (Tailwind + custom CSS)
  utils/              # animations.js, data.js
  App.jsx             # Router + AnimatePresence
  main.jsx            # Entry point
```

## Notes

- The 3D drill rig canvas degrades gracefully — if WebGL is unavailable, a `Suspense` fallback spinner is shown.
- Contact form has full client-side validation (name, email format, message length).
- All copy uses realistic mining/drilling industry language — no placeholder text.
- Ticker animation in footer is pure CSS, no JavaScript.
- ISO certifications shown: ISO 9001, ISO 14001, ISO 45001.
