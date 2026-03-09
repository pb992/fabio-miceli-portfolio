# Fabio Miceli Portfolio

## Project Overview

Personal portfolio website for Fabio Miceli, Full-Stack Developer. One-page design with dark-first theme, interactive effects, and aurora shader hero.

**Purpose**: Personal safety net independent from VibeCoded Tools partnership (Plan B).
**Repo**: https://github.com/pb992/fabio-miceli-portfolio

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
- **CSS Variables**: `--background`, `--foreground`, `--surface`, `--surface-hover`, `--border`

### Interactive Effects
- **Hero**: Custom GLSL aurora shader (simplex noise, mouse-reactive, scroll parallax)
- **Hero mobile**: CSS gradient fallback (no WebGL on touch devices)
- **Cursor**: SpotlightCursor (page-wide glow, dark mode only, disabled on touch)
- **Cards**: GlowCard (radial gradient follows mouse) — used in ProjectsSection
- **Buttons**: MagneticButton (content follows cursor) — Hero, Skills, CTA

### Animation Pattern
- All sections: `viewport={{ once: true, amount: 0.15 }}`
- Staggered fade-in with delay * index
- Mobile: touch detection disables WebGL/spotlight/mouse effects

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
    HeroSection.tsx    Full-viewport hero + MagneticButton CTA
    HeroBackground.tsx GLSL aurora shader / mobile CSS fallback
    SkillsSection.tsx  4-category accordion + MagneticButton CTA
    PhilosophySection.tsx  3 pillars
    ProjectsSection.tsx    Bento grid with GlowCard
    CollaborationsSection.tsx  Logo marquee
    AboutSection.tsx   Personal intro + stat boxes
    CTASection.tsx     WhatsApp direct form + MagneticButton
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
Hero → Skills → Philosophy → Projects → Collaborations → About → CTA → Footer
(with SectionDividers between each)
Fixed: FloatingWhatsApp, SocialSidebar, ThemeToggle, SpotlightCursor
```

## Contact Info

- **Email**: fabio.miceli_2011@libero.it
- **WhatsApp**: +39 347 493 0068
- **LinkedIn**: linkedin.com/in/fabio-miceli
- **GitHub**: github.com/pb992

## Development

```bash
npm run dev    # Dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Deployment

- **Platform**: Vercel (planned)
- **URL**: https://fabio-miceli-portfolio.vercel.app

## Conventions

- All components are 'use client' (Framer Motion requirement)
- Dark mode: `dark:` Tailwind variants + CSS variables
- Animations: `viewport={{ once: true, amount: 0.15 }}`
- Mobile: touch detection, CSS fallbacks, no mouse-only features
- .mcp.json in .gitignore (local absolute paths)
