# Vinay Naidu Portfolio

## What This Is

A personal portfolio website for a robotics engineer specializing in autonomous underwater vehicles. Showcases hands-on field experience and technical depth through project case studies with architecture diagrams, hardware specs, and deployment videos. Hosted on GitHub Pages.

## Core Value

Visitors leave understanding Vinay is an expert in underwater autonomy who has actually built and deployed real systems in the field — not just theory.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Underwater-themed UI with subtle wave animations
- [ ] Clean, professional design aligned to underwater robotics domain
- [ ] Project showcase with rich technical detail:
  - System architecture diagrams
  - Sensor specs and hardware lists
  - GitHub repository links
  - GIFs/videos of projects in action
- [ ] Dev mode for manually adding/editing projects and uploading media
- [ ] Dark/light theme toggle (carried over from current)
- [ ] GitHub Pages compatible (static, no build required)

### Out of Scope

- Resume/CV section — not wanted
- Blog/articles — deferred to future milestone
- Inline code snippets — GitHub links sufficient
- Performance metrics — videos/GIFs show this better
- Build process/bundler — keep it simple for GitHub Pages

## Context

**Current state:** Single-file portfolio (~730 lines in index.html) with:
- Tab-based navigation (About, Projects, Upload, Contact)
- Dev mode toggle (Ctrl+Shift+D) for project management
- Hardcoded projects protected from deletion
- GIF demos in assets/ directory
- CSS custom properties for theming

**Refactor scope:** Complete UI overhaul while preserving dev mode functionality. Moving from generic portfolio to underwater robotics themed experience.

**Target user:** Recruiters, collaborators, and fellow robotics engineers who want to understand Vinay's technical depth and field experience.

## Constraints

- **Hosting**: GitHub Pages — must work as static files, no server-side processing
- **Architecture**: Single HTML file preferred (or minimal files) for easy deployment
- **Dev mode**: Must retain ability to add/edit projects without touching code
- **Browser**: Modern browsers only (CSS custom properties, ES6+)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep single-file architecture | Simple GitHub Pages deployment, proven to work | — Pending |
| Subtle wave animations | Professional aesthetic, not distracting | — Pending |
| No resume section | Portfolio speaks for itself through projects | — Pending |
| Defer blog to future | Focus on core portfolio first | — Pending |

---
*Last updated: 2026-01-15 after initialization*
