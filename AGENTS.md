<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# spa-elfath-design-guideline

**Purpose:** A clone of Apple's Human Interface Guidelines, re-skinned as the internal design reference for **SPA El Fath** (school brand). Gives El Fath product/engineering teams an Apple-standard reference for building consistent UI — brand `brand-300 #1D65AF`, `IBM Plex Sans Arabic`, full HIG chrome (sidebar, search ⌘K, platform picker, dark/light). Full context: `context/project/OVERVIEW.md`.

**Current focus:** fill the 16 seeded MDX guideline pages with real El Fath brand content (they're placeholders today), keep the app working and reviewable. Deliver source-of-truth details for the design system in `context/`.

## Architecture (read this first — it's not what it looks like)

- **`src/lib/navigation.ts` is the single source of truth** for the homepage grid, sidebar, breadcrumbs, AND the ⌘K search index (`src/lib/search.ts`). Adding a guideline page = add a nav item here AND create the MDX file. Nothing renders without a nav entry.
- Routes are file-system derived: `src/content/guidelines/<category>/<slug>.mdx` → `/guidelines/<category>/<slug>` (`src/lib/mdx.ts`). Frontmatter: `title, description, category, order, icon` — `order` sorts the homepage listing.
- **Placeholder bodies are hidden.** MDX whose body starts with `Empty foundation - content coming soon` renders only its title/icon/description (`isEmpty` check in `src/app/guidelines/[...slug]/page.tsx`). Page content appears the moment you write a real body.
- **⚠️ `get-started/design-principles` and `foundations/accessibility` are hardcoded Arabic RTL layouts** in `[...slug]/page.tsx`. Design-principles renders a local `principles` array — edits to its `.mdx` file are NEVER displayed. Other pages use the generic MDXRemote fallback (LTR/EN).
- MDX styling lives inline in `[...slug]/page.tsx` and `src/components/mdx/` — `mdx-components.tsx` at root is stale/legacy, don't rely on it.

## Design tokens (trust code over docs)

- `src/app/globals.css` is truth: the **Apple palette (`--apple-*`)** is primary; legacy `--brand-*`/`--system-*` are BRIDGED to it (e.g. `brand-300` = `--apple-blue` #0071e3). `context/design/DESIGN_SYSTEM.md` still cites old hexes (#1D65AF) — code wins. Never change the bridge hexes.
- Base font is **Inter** (`--font-inter`); Arabic/RTL content switches to **`IBM Plex Sans Arabic`** via `.font-arabic`/`[dir=rtl]`. No Geist, no new fonts without checking `src/app/layout.tsx`.
- A11y defaults: 44×44 touch targets, 2px brand focus-visible outline, `prefers-reduced-motion` respected.

## Commands

- `npm run dev` (use `NODE_OPTIONS=--dns-result-order=ipv4first npm run dev` on any network stall — IPv6 bug on this machine).
- **Verify before review:** `npm run build && npx tsc --noEmit && npm run lint`. `scripts/` and `tmp/` are eslint-ignored.
- Icons: live UI uses `@hugeicons/core-free-icons` (imported in `navigation.ts`). Separate extraction pipeline `npm run crawl:hig[:pw]` (Playwright needs `npx playwright install chromium`) → `npm run icons:build` (svgo optional) → `src/components/icons/generated` — don't mix the two systems.

## Workflow

- Solo builder on `main` — keep it deployable. Don't commit/push unless asked. Conventional commits with global `T#` from `context/project/TODO.md` (never renumber).
- Server Components by default; `"use client"` only for interactivity (search, drawer, theme, TOC spy).
- Plan/spec lives in `context/`: `project/OVERVIEW.md`, `project/TODO.md`, `design/DESIGN_SYSTEM.md`, `design/IA.md`, `developer/CONVENTIONS.md`.