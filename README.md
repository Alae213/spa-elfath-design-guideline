# SPA El Fath — Design Guidelines (Apple HIG Clone)

Clone of [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) — re-skinned with SPA El Fath brand. Foundation skeleton with full HIG chrome.

**Stack:** Next.js 16.3.5 + React 19 + TypeScript 5 (strict) + Tailwind 4 + MDX (`next-mdx-remote`) — `src/app/layout.tsx:1` uses `IBM Plex Sans Arabic`.

**Brand:** `brand-300 #1D65AF`, `brand-400 #193B62`, `system-50 #FAF8F6` — see `context/design/DESIGN_SYSTEM.md:1`.

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000 → /guidelines
npm run build        # must pass before review
npm run lint
npx tsc --noEmit
# if network stalls on this machine:
NODE_OPTIONS=--dns-result-order=ipv4first npm run dev
```

## Routes

- `/` → redirect to `/guidelines`
- `/guidelines` → category grid (homepage)
- `/guidelines/[...slug]` → MDX detail (16 pages seeded via `src/content/guidelines/**/*.mdx`)

## Project Structure

```
src/app/guidelines/layout.tsx   # HIG shell: TopNav + Sidebar + Breadcrumbs
src/components/layout/*         # TopNav, Sidebar (collapsible, sticky), SearchDialog (⌘K), PlatformPicker, ThemeToggle, TOC
src/components/icons/*          # 12 priority SVGs (currentColor, 44×44)
src/lib/mdx.ts                  # getAllSlugs / getDocBySlug (gray-matter)
src/content/guidelines/         # MDX source (foundations, patterns, components, technologies)
context/                        # 17 markdown files — IA, DESIGN_SYSTEM, ICONS, STACK, etc.
scripts/crawl-hig.mjs           # Playwright crawl → tmp/raw-icons + ICONS.md
scripts/icons-build.mjs         # svgo → src/components/icons/generated
```

## Full Parity Interactions (v0)

- Sticky sidebar `w-72` + collapsible sections (localStorage) + active state
- TopNav `h-14` backdrop-blur + mobile drawer
- PlatformPicker (All / iOS / macOS / visionOS / watchOS / tvOS)
- Search `⌘K` via `fuse.js` over `src/lib/navigation.ts:1`
- Breadcrumbs from `usePathname()`
- TOC `hidden xl:block` sticky + scroll-spy
- Dark/light via `next-themes` (`class` strategy, system pref)

## Icons — Extract SVGs

12 icons are live in `src/components/icons/index.ts:1`. Full inventory plan in `context/design/ICONS.md:1`.

```bash
npm run crawl:hig        # fallback fetch (JS-heavy, partial)
npm run crawl:hig:pw     # Playwright (full, needs: npx playwright install chromium)
npm run icons:build      # svgo → generated components
```

## Context Kit

- `context/project/TODO.md:1` — empty checklist (T1–T10 unchecked, you fill)
- `context/project/OVERVIEW.md:1` — purpose + relation to `C:/projects/SPA elFath Website`
- `context/design/IA.md:1` — full HIG IA mirror
- `context/technical/STACK.md:1` + `ARCHITECTURE.md:1`
- `context/developer/CONVENTIONS.md:1`

## Verification

```bash
npm run build && npx tsc --noEmit && npm run lint
# → 21 static pages, 0 TS errors, 0 lint errors (scripts ignored)
```

## Deploy

Vercel Git integration — push `main` → preview + prod. No env required for v0.

## Next (you will provide)

You mentioned you will give more details + additional `/context` files — drop them in `context/` and we will wire IA/content/icons. Open `TODO.md` to start.
