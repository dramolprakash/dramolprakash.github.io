# Site Maintenance Reference

Everything on the site flows from two files. Start here before touching any component.

---

## The two files that run everything

| File | What it controls |
|------|-----------------|
| `src/lib/data.ts` | All text content, URLs, projects, certifications, experience, education |
| `public/assets/` | All images and static files (resume PDF, headshot, etc.) |

You will almost never need to edit a component directly. Change content in `data.ts`; drop files into `public/assets/`.

---

## Links and URLs — where each one lives

All links are in `src/lib/data.ts` under the `personal` object (lines 1–19).

| What | Field | Current value | Status |
|------|-------|---------------|--------|
| GitHub profile | `personal.github` | `https://github.com/dramolprakash` | ✅ live |
| LinkedIn | `personal.linkedin` | `https://www.linkedin.com/in/dramolprakash/` | ✅ live |
| Tableau public | `personal.tableau` | `https://public.tableau.com/app/profile/amol.prakash8604/vizzes` | ✅ live |
| LeetCode | `personal.leetcode` | `https://leetcode.com/u/user0929aV/` | ✅ live |
| Email | `personal.email` | `amolprakash11@gmail.com` | ✅ live |
| Twitter / X | `personal.twitter` | `https://x.com/amolkrxk` | ✅ live |
| Instagram | `personal.instagram` | `https://www.instagram.com/amol.krxk/` | ✅ live |
| Resume PDF | `personal.resumeUrl` | `/assets/resume.pdf` | ✅ live |
| Calendly | `personal.calendlyUrl` | `'#'` | ⚠️ placeholder (not shown on site yet) |

**To update any link:** open `src/lib/data.ts`, find the field, replace the value.

---

## Assets — where files live and how to swap them

| Asset | File path | Used in | How to replace |
|-------|-----------|---------|----------------|
| Headshot | `public/assets/headshot_circle.png` | `src/app/page.tsx` | Drop a rectangular PNG/JPG into `public/assets/`, then update the `src` path in page.tsx. The current file is a circular-masked PNG — swap it for a straight rectangular crop to match the non-circular display. |
| Resume PDF | `public/assets/resume.pdf` | `personal.resumeUrl` in data.ts | Drop an updated PDF into `public/assets/resume.pdf` (overwrite). No code change needed. |

**Naming convention:** keep asset filenames lowercase with underscores, e.g. `resume_2025.pdf`, `headshot_v2.png`.

---

## How to add or edit each section

### Certifications
File: `src/lib/data.ts` → `export const certifications` (line ~236)

Each entry:
```ts
{
  name: 'Certification Name',
  issuer: 'Issuing Organization',
  year: '2025',
  url: '',  // paste your Credly / issuer verify URL here; leave '' until you have it
},
```
Add a new `{ }` block inside the array. The site renders them as a vertical list matching the Projects layout. When `url` is set, the whole card becomes a link and a `verify ↗` badge appears.

---

### Projects
File: `src/lib/data.ts` → `export const projects` (line ~66)

Each entry:
```ts
{
  id: 7,                          // increment from the last project
  group: 'ml',                    // 'ml' | 'mobile' | 'web' — controls which section it appears in
  title: 'Project Name',
  problem: 'One sentence: what problem does this solve?',
  description: 'Longer description for future use.',
  tools: ['Python', 'SQL'],       // shown as tags — keep to 5–6 max for display
  metrics: ['91% F1-score', ...], // metrics[0] is shown as the callout on the right
  github: 'https://github.com/dramolprakash/your-repo',
  demo: '',                       // optional live demo URL; shows 'live demo ↗' badge when set
  featured: false,
},
```

**Routing rule:** projects are grouped by the `group` field — `'ml'` → ML / AI, `'mobile'` → Mobile Apps, `'web'` → Web Apps. To add a fourth group, add a new filter constant at the top of `src/app/page.tsx` and a new `<div>` block in the Projects section.

---

### Published Apps (App Store / Play Store)
File: `src/app/page.tsx` → `{/* Published Apps */}` section (~line 160)

The two cards currently have `href="#"`. When you have your developer page URLs:
1. Add two new fields to `personal` in `data.ts`:
   ```ts
   appStore: 'https://apps.apple.com/developer/your-id',
   playStore: 'https://play.google.com/store/apps/developer?id=YourName',
   ```
2. In `page.tsx`, replace the two `href="#"` values with `personal.appStore` and `personal.playStore`, and remove the `onClick={(e) => e.preventDefault()}` guard.

---

### Education (hero section)
File: `src/app/page.tsx` → `{/* Education */}` block

The two lines are hardcoded directly in the component (not pulled from `data.ts`) for layout control. Edit them there:
- Line 1: degree + university
- Line 2: degree + university

To add a third line (e.g. a role or extra degree), copy one of the `<div className="flex items-center gap-2 ...">` rows and paste it in.

---

## Where each social link appears on the page

| Location | Links shown |
|----------|-------------|
| Sticky nav (top) | github, linkedin, tableau, email (email hidden on mobile) |
| Hero social row (below CTAs) | github, linkedin, twitter, instagram, tableau |
| Footer | github, linkedin, twitter, instagram, leetcode |

All of these read from `personal.*` in `data.ts` — update the field once and it updates everywhere.

---

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically to `https://dramolprakash.github.io`.

Local dev: `npm run dev` → http://localhost:3000
Build check: `npm run build` (output goes to `out/`)

---

## Quick checklist for common tasks

- **New job / update current role** → `src/lib/data.ts` → `experience` array
- **New certification** → `src/lib/data.ts` → `certifications` array
- **New project** → `src/lib/data.ts` → `projects` array (increment `id`)
- **Change resume PDF** → drop file in `public/assets/`, update `personal.resumeUrl`
- **Change headshot** → drop new image in `public/assets/`, update path in `page.tsx` line ~130
- **Update Twitter/Instagram** → `src/lib/data.ts` → `personal.twitter` / `personal.instagram`
- **Update App Store links** → see "Published Apps" section above
- **Change email** → `src/lib/data.ts` → `personal.email`
- **Change tagline** → `src/lib/data.ts` → `personal.tagline`
