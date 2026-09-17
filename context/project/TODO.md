# TODO — SPA El Fath Design Guideline (HIG Clone)

> Empty checklist seed for foundation. Mark `[x]` when done. Reference `T#` in commits.

## Foundation (v0) — Current Sprint
- [ ] T1 — Scaffold Next.js 16 project (`spa-elfath-design-guideline`) with TS + Tailwind 4
- [ ] T2 — Create `/context` folder: `TODO.md` + `OVERVIEW.md` + Full HIG kit placeholders
- [ ] T3 — Configure `globals.css` with SPA brand tokens + IBM Plex Sans Arabic
- [ ] T4 — Build HIG shell layout: `TopNav` + `Sidebar` + `Breadcrumbs` (responsive)
- [ ] T5 — Implement `PlatformPicker` + `Theme (dark/light)` + `Search` (full parity)
- [ ] T6 — Set up MDX pipeline (`@next/mdx`) + `src/content/guidelines` structure
- [ ] T7 — Seed homepage + 3 detail pages (foundations/overview, foundations/layout, components/buttons)
- [ ] T8 — Icon extraction pipeline: Playwright crawl → `ICONS.md` inventory → local SVGs
- [ ] T9 — Polish: TOC, prose, mobile drawer, a11y (44×44, focus-visible)
- [ ] T10 — Verify: `npm run build` + `npx tsc --noEmit` + `npm run lint` pass

## v1 — Content Expansion (next)
- [ ] T11 — Mirror full HIG IA (Foundations / Patterns / Components / Technologies)
- [ ] T12 — Populate all category MDX from HIG crawl (50+ pages)
- [ ] T13 — Image optimization + remotePatterns for developer.apple.com assets
- [ ] T14 — Fuse.js search index over all MDX
- [ ] T15 — Add i18n (EN primary, optional AR/FR per SPA Website)

## v2 — Polish & Deploy
- [ ] T16 — Vercel deploy + preview URLs
- [ ] T17 — UAT checklist + owner approval
- [ ] T18 — Analytics / monitoring

---

*Source of truth: `TASK-LIST.md` will replace this when project matures. Keep global T# numbering — never renumber.*
