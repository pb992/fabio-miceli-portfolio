# Fabio Miceli Portfolio

## Project Overview

Personal portfolio website for Fabio Miceli, Full-Stack Developer. One-page design with dark-first theme, interactive effects, and aurora shader hero.

**Purpose**: Personal safety net independent from VibeCoded Tools partnership (Plan B).

## Technology Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (postcss, `darkMode: 'class'`)
- **Animation**: Framer Motion 12
- **3D**: React Three Fiber 9 + Three.js 0.180 + @react-three/drei 10
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Manrope (display) via next/font

## Design System

### Theme
- **Default**: Dark mode (#0a0a1a background)
- **Toggle**: Top-right button (sun/moon animated swap)
- **Storage**: localStorage, default 'dark', anti-flash script in head

### Color Palette
- **Primary**: Violet (#6366f1 light / #818cf8 dark)
- **Secondary**: Blue (#3b82f6 light / #60a5fa dark)
- **Accent**: Amber/Gold (#fbbf24)
- **CSS Variables**: `--background`, `--foreground`, `--surface`, `--surface-hover`, `--border`, `--primary`, `--secondary`, `--accent`

### Effects
- **Hero**: Custom GLSL aurora shader (simplex noise, mouse-reactive, scroll parallax)
- **Cursor**: SpotlightCursor (page-wide glow, dark mode only)
- **Cards**: GlowCard (radial gradient follows mouse)
- **Buttons**: MagneticButton (content follows cursor on hover)

## Architecture

```
src/
  app/
    layout.tsx        Root layout + ThemeProvider + ThemeToggle
    page.tsx          Home page (single page)
    globals.css       CSS variables, theme styles, utilities
    sitemap.ts        SEO sitemap
  components/
    ThemeProvider.tsx  Dark/light mode context + hook
    ThemeToggle.tsx    Animated theme switch button
    HeroSection.tsx    Full-viewport hero with CTA
    HeroBackground.tsx GLSL aurora shader (React Three Fiber)
    SkillsSection.tsx  4-category accordion
    PhilosophySection.tsx  3 pillars (Strategy, Execution, Results)
    ProjectsSection.tsx    Project case studies
    CollaborationsSection.tsx  Company logo marquee
    CTASection.tsx     Contact form + social links
    Footer.tsx         Copyright + policies
    SectionDivider.tsx SVG dividers (wave, dots, geometric)
    FloatingWhatsApp.tsx  Fixed WhatsApp button
    SocialSidebar.tsx  Left-side social links (desktop)
    MagneticButton.tsx Magnetic hover effect wrapper
    GlowCard.tsx       Mouse-following glow card
    SpotlightCursor.tsx Page-wide cursor spotlight
```

## Page Flow

```
Hero (full viewport, aurora shader bg)
  ↓ SectionDivider (wave)
Skills (4 categories, accordion)
  ↓ SectionDivider (dots)
Philosophy (3 pillars)
  ↓ SectionDivider (geometric)
Projects (2 case studies)
  ↓ SectionDivider (wave)
Collaborations (5 company logos, infinite scroll)
CTA (contact form + socials)
Footer

Fixed: FloatingWhatsApp (bottom-right), SocialSidebar (left, desktop), ThemeToggle (top-right), SpotlightCursor (dark mode)
```

## Contact Info

- **Email**: fabio.miceli_2011@libero.it
- **WhatsApp**: +39 347 493 0068
- **LinkedIn**: linkedin.com/in/fabio-miceli
- **GitHub**: github.com/fabio-miceli

## Development

```bash
npm run dev    # Dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Deployment

- **Platform**: Vercel
- **URL**: https://fabio-miceli-portfolio.vercel.app
- **Build output**: Standard (not static export)

## Conventions

- All components are client components ('use client') due to Framer Motion
- Dark mode classes: use `dark:` Tailwind variants
- CSS variables for theme-dependent colors (defined in globals.css)
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}`
- Text centering handled per-component (no global !important overrides)
