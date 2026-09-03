# Kaustubh Warme — Portfolio Website

Premium Neo-Brutalist portfolio for an AI/ML engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk + Inter + IBM Plex Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.tsx      # Fonts, metadata, global styles
    globals.css     # Design system CSS
    page.tsx        # Main single-page portfolio
  components/
    Navbar.tsx
    Hero.tsx
    NodeGraph.tsx   # Canvas node animation
    MetricStrip.tsx
    ProjectsSection.tsx
    ProjectDetail.tsx
    SkillsGrid.tsx
    ExperienceSection.tsx
    ResearchSection.tsx
    AboutSection.tsx
    ContactSection.tsx
    Footer.tsx
  data/
    projects.ts     # Edit projects here
    skills.ts       # Edit skills here
    experience.ts   # Edit experience here
    research.ts     # Edit research here
```

## Updating Content

All content lives in `/src/data/`. Edit the TypeScript files directly — no CMS required.

### To update your resume link

In `src/components/Navbar.tsx` and `src/components/ContactSection.tsx`, replace `href="#"` with your resume URL.

### To update GitHub / LinkedIn

In `src/components/ContactSection.tsx` and `src/components/Footer.tsx`, replace the placeholder URLs with your actual profiles.

## Design System

| Token | Value |
|---|---|
| Background | `#F5F2E9` |
| Text | `#111111` |
| Accent | `#0057FF` |
| Border | `2px solid #111` |
| Card shadow | `6px 6px 0 #111` |
