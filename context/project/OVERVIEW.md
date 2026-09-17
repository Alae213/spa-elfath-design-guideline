# OVERVIEW — SPA El Fath Design Guideline

**Project:** `spa-elfath-design-guideline` — clone of `https://developer.apple.com/design/human-interface-guidelines/` adapted as the internal design reference for SPA El Fath.

**Display name:** SPA elfath Design Guideline  
**Disk name:** `spa-elfath-design-guideline` (kebab-case) — `C:\projects\spa-elfath-design-guideline`  
**Stack:** Next.js 16.3.5 + React 19 + TypeScript 5 (strict) + Tailwind 4 (`@tailwindcss/postcss`) — path alias `@/*` → `./src/*`

## Purpose
Provide SPA El Fath product/engineering teams a familiar, Apple-HIG-grade reference for building consistent UI — but skinned with SPA brand identity:
- Brand: `brand-300 #1D65AF`, `brand-400 #193B62`, `brand-200 #69A2E5`, `system-50 #FAF8F6`
- Typography: `IBM Plex Sans Arabic` via `next/font/google` (all locales, weights 300–700) — Western digits
- Chrome mirrors Apple HIG: sticky sidebar, collapsible sections, platform picker, search (⌘K), breadcrumbs, TOC, dark/light.

## Non-Goals (v0 skeleton)
- Not a full 100+ page clone yet — foundation shell + homepage + 2–3 seeded guideline pages only.
- No backend, no DB, no auth. Content is local MDX (`src/content/guidelines/**/*.mdx`).
- No CMS. i18n deferred (EN only for v0).

## Relation to SPA elFath Website
- Sibling project: `C:\projects\SPA elFath Website` — trilingual showcase site (`src/app/[lang]/`).
- Reuses same design tokens (`context/design/DESIGN_SYSTEM.md`), conventions (`context/developer/CONVENTIONS.md`), and workflow.
- Deploy target: Vercel (sibling of existing site).

## Key Routes (v0)
- `/` → redirect to `/guidelines`
- `/guidelines` → HIG homepage (category grid + intro)
- `/guidelines/[...slug]` → MDX detail (e.g., `/guidelines/foundations/layout`)

## Where to Look
- IA: `context/design/IA.md`
- Design tokens: `context/design/DESIGN_SYSTEM.md`
- Icon inventory: `context/design/ICONS.md`
- Stack & architecture: `context/technical/STACK.md`, `context/technical/ARCHITECTURE.md`
- Task list: `context/project/TODO.md`, `SCOPE.md`, `ROADMAP.md`, `DECISIONS.md`
