# CONVENTIONS — spa-elfath-design-guideline

> Mirrors `SPA elFath Website/context/developer/CONVENTIONS.md` — keep consistent.

## File Organization
- `src/components/ui/` — primitives (Button, Input)
- `src/components/layout/` — chrome (TopNav, Sidebar, etc.)
- `src/components/mdx/` — MDX custom components
- `src/components/icons/` — SVGs barrel
- `src/lib/` — `mdx.ts`, `search.ts`, `platform.ts`
- `src/content/guidelines/` — MDX source

## Naming
- Components: `PascalCase.tsx`, hooks `useX.ts`, lib `kebab.ts`
- Tasks: global `T#` never renumbered — `TODO.md` is truth.

## Code Style
- Server Components by default; `"use client"` only for interactivity (search, picker, drawer, TOC spy).
- Tailwind 4: use CSS vars + `@theme inline` (no `tailwind.config.js` unless needed).
- Icons: `currentColor`, `aria-hidden`, parent controls `44×44`.
- Commits: `feat: guidelines shell (T4)`, `docs: context kit (T2)` — conventional.

## A11y
- `*:focus-visible` 2px solid brand + 2px offset.
- `html lang="en" dir="ltr"` (no RTL needed for HIG clone — unlike SPA Website `dir=rtl` for AR).
- Touch targets `44×44` min.

## Workflow
- Solo builder — `main` stays deployable. Short branches only for risky crawls.
- Do not commit/push unless asked. Verify `npm run build` + `npx tsc --noEmit` + `npm run lint` before request review.
- `NODE_OPTIONS=--dns-result-order=ipv4first` for any network stall (IPv6 bug).
