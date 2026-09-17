# ARCHITECTURE — spa-elfath-design-guideline

## Entrypoints
- `src/app/layout.tsx` — root layout (font, theme provider, `html lang="en" dir="ltr"`)
- `src/app/page.tsx` — redirect to `/guidelines`
- `src/app/guidelines/layout.tsx` — HIG shell (TopNav + Sidebar + Breadcrumbs)
- `src/app/guidelines/[...slug]/page.tsx` — MDX catch-all (ISR static)

## Route Tree
```
src/app/
├── layout.tsx
├── page.tsx
├── globals.css
└── guidelines/
    ├── layout.tsx
    ├── page.tsx              # homepage category grid
    └── [...slug]/page.tsx    # renders MDX
src/content/guidelines/
├── foundations/overview.mdx
├── foundations/layout.mdx
└── components/buttons.mdx
```

## Data Flow
`src/lib/mdx.ts`:
- `getAllSlugs(): string[]` — glob `src/content/**/*.mdx`
- `getDocBySlug(slug): { frontmatter, content, toc }` — gray-matter + MDX compile
- `getTree(): TreeNode[]` — groups by category + sorts by `order`

`src/lib/search.ts`:
- `buildIndex(docs)` → `Fuse` instance; client `SearchDialog` queries.

## Components
- `src/components/layout/*` — TopNav, Sidebar, SidebarSection, Breadcrumbs, TOC, PlatformPicker, SearchDialog, ThemeToggle
- `src/components/ui/*` — Button, Input (44×44)
- `src/components/icons/*` — local SVGs barrel
- `src/components/mdx/*` — Callout, DoDont, PlatformBlock

## Server vs Client
- Server: `layout.tsx`, `page.tsx`, `MDX` rendering
- Client (`"use client"`): `Sidebar` (collapsible + localStorage), `SearchDialog`, `PlatformPicker`, `ThemeToggle`, `TOC` scroll spy, mobile drawer

## Config
- `next.config.ts:1` — `createMDX()`, `images.formats: ["avif","webp"]`, `remotePatterns: [developer.apple.com]`
- `tsconfig.json:21` — `@/*` alias
- `eslint.config.mjs:9` — ignores `.next` etc.

## Decision Log
See `context/project/DECISIONS.md` — D1–D10.
