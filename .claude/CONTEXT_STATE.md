## Current Status
**Status**: Major redesign in progress
**Task**: Dark-first theme + wow effects
**Updated**: 2026-03-09

## Current Work
- [x] Dark theme system (ThemeProvider + ThemeToggle + CSS variables)
- [x] Aurora GLSL shader hero background (mouse-reactive, scroll parallax)
- [x] Magnetic button effects (MagneticButton component)
- [x] Glow card effects (GlowCard component)
- [x] Spotlight cursor (dark mode only)
- [x] All sections updated for dark mode
- [x] Fixed SocialSidebar wrong links + placeholder email
- [x] Cleaned up globals.css !important overrides
- [x] Footer year updated to 2026
- [x] .mcp.json + .claude/ config added
- [ ] Verify build compiles
- [ ] Test dark/light toggle visually
- [ ] Integrate MagneticButton + GlowCard into existing sections

## Key Changes (2026-03-09)
- Theme default: dark mode
- New components: ThemeProvider, ThemeToggle, HeroBackground (shader), MagneticButton, GlowCard, SpotlightCursor
- All sections now support dark: variants
- globals.css cleaned of aggressive !important centering

## Next Steps
- Integrate MagneticButton into CTA buttons and nav
- Wrap project cards with GlowCard
- Add scroll-driven animations (parallax sections)
- Consider adding more projects to showcase
- Deploy to Vercel
