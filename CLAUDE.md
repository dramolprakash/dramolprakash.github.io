# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Dr. Amol Prakash, deployed via GitHub Pages at [https://dramolprakash.github.io](https://dramolprakash.github.io). Built with Next.js 14 (App Router, static export) and Tailwind CSS.

## Commands

```bash
npm run dev      # Local dev server at http://localhost:3000
npm run build    # Static export to out/ (GitHub Pages artifact)
npm run lint     # ESLint
```

Deployment is fully automated: push to `main` → GitHub Actions builds → deploys to GitHub Pages via `actions/deploy-pages`. You must enable **GitHub Pages → Source: GitHub Actions** in the repo settings for this to work.

## Architecture

### Tech Stack
- **Next.js 14** App Router with `output: 'export'` (static site, no server)
- **Tailwind CSS** for all styling
- **No external animation library** — scroll reveals use `IntersectionObserver` via inline hooks; hover effects are CSS transitions in `globals.css`

### File Layout

```
src/
  app/
    page.tsx          # Assembles all section components in order
    layout.tsx        # Root layout with <head> metadata and Google Fonts
    globals.css       # All custom CSS: design tokens, .reveal animations,
                      #   .btn-primary/secondary/ghost, .gradient-text,
                      #   .img-placeholder, .skill-badge, .card-hover
  lib/
    data.ts           # ALL site content (projects, experience, skills, etc.)
                      #   Edit here to update any text without touching components
  components/
    ui/
      ImagePlaceholder.tsx   # Styled placeholder shown where real photos go
    Navbar.tsx        # Sticky navbar with scroll-based active section tracking
    Hero.tsx          # Typing animation, animated counters, profile photo
    About.tsx         # Bio, lifestyle photo placeholders, highlights grid
    Skills.tsx        # Category cards with colored icon headers + skill badges
    Projects.tsx      # Filterable project grid with ImagePlaceholder slots
    Experience.tsx    # Vertical timeline with dot + card layout
    Education.tsx     # Degrees, certifications, awards — all with logo placeholders
    Testimonials.tsx  # Quote cards with avatar placeholders
    Contact.tsx       # mailto-based contact form + social links
    Footer.tsx        # Nav links, social links, copyright
public/
  assets/
    headshot_circle.png   # Existing headshot — used in Hero and About
  .nojekyll             # Prevents GitHub Pages from running Jekyll
```

### Design System
All color variables are defined as CSS custom properties in `globals.css` and map to Tailwind's `slate` palette:
- Background: `slate-950` / `slate-900` (alternating sections)
- Cards: `slate-800/50` with `border-slate-700/50`
- Primary accent: `blue-500` (#3B82F6)
- Secondary accent: `cyan-500` (#06B6D4)
- Gradient text: `.gradient-text` class (blue → cyan)

### Scroll Reveal Pattern
Every section component uses this identical pattern — do not deviate:
```tsx
const sectionRef = useRef<HTMLElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 100}ms`;
          el.classList.add('visible');
        });
      }
    });
  }, { threshold: 0.05 });
  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);
```
Add `.reveal` to any element you want to animate in. The `.reveal` / `.reveal.visible` styles are in `globals.css`.

### Image Placeholders
Every zone where a real photo will eventually go uses `<ImagePlaceholder label="..." hint="..." shape="..."/>`.
- `shape="circle"` — for headshots/avatars
- `shape="wide"` — for `aspect-video` banners
- `shape="default"` — for `aspect-[4/3]` cards

When replacing a placeholder with a real image, use `next/image` with the file placed in `public/assets/`.

### Content Updates
All editable content (bio text, project details, experience, skills, etc.) lives in `src/lib/data.ts`. Changing text or adding entries there automatically propagates to the relevant components — no component code needs to be touched for content-only updates.

### Key Resume/Contact Links
Update these in `src/lib/data.ts → personal`:
- `resumeUrl` — direct link to hosted PDF resume
- `calendlyUrl` — Calendly scheduling link
