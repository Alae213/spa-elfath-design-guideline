# TASK-LIST — spa-elfath-design-guideline

> Single source of truth — global `T#` never renumbered. Reference in commits.

| ID | Title | Status | Files | Notes |
|----|-------|--------|-------|-------|
| T1 | Scaffold Next.js 16 project | Done | `package.json:5`, `src/app/layout.tsx:1` | create-next-app 16.3.5 + Tailwind 4 |
| T2 | Context kit | Done | `context/**` | TODO.md (empty) + OVERVIEW.md + kit |
| T3 | Brand tokens + globals.css | Todo | `src/app/globals.css:1`, `src/app/layout.tsx:1` | SPA brand, IBM Plex Arabic |
| T4 | HIG shell layout | Todo | `src/app/guidelines/layout.tsx`, `src/components/layout/*` | TopNav/Sidebar/Breadcrumbs |
| T5 | Interactions (PlatformPicker/Search/Theme) | Todo | `src/components/layout/*`, `src/lib/search.ts` | Full parity |
| T6 | MDX pipeline | Todo | `next.config.ts:1`, `src/lib/mdx.ts` | @next/mdx + content |
| T7 | Seed 3 MDX pages + homepage | Todo | `src/content/guidelines/**/*.mdx` | overview/layout/buttons |
| T8 | Icon extraction pipeline | Todo | `src/components/icons/*`, `context/design/ICONS.md:1` | Playwright + svgo |
| T9 | Polish + a11y | Todo | `src/components/mdx/*` | TOC, prose, 44×44 |
| T10 | Verify build/lint/tsc | Todo | — | gate |

## How to use
- Update Status: `Todo → In Progress → Done` + tick `TODO.md`.
- Never rename T# after creation.
