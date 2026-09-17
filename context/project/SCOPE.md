# SCOPE — SPA El Fath Design Guideline

## v0 — Foundation Skeleton (current)
- Next.js 16 App Router shell with HIG chrome: `TopNav`, `Sidebar` (collapsible, sticky), `Breadcrumbs`, `TOC` (desktop), mobile drawer
- Full parity interactions: `PlatformPicker` (iOS/macOS/visionOS/watchOS/tvOS), `Search` (⌘K + fuse.js), `Theme` (light/dark via next-themes), keyboard a11y
- MDX pipeline wired; 3 seeded pages
- Icon extraction pipeline scaffolded + 12 priority SVGs
- `npm run build` / `tsc --noEmit` / `lint` green

## v1 — Content Scale
- Mirror full Apple HIG IA (4 top categories, ~60 pages)
- Populate MDX from crawl, image optimization, full search index

## v2 — Deploy & Extras
- Vercel deploy, analytics, optional AR/FR i18n

## Out of Scope — v0/v1
- User accounts, e-commerce, DB, paid services
- CMS / headless — content is Git-tracked MDX
- 4th language
- Backend form handling

## Acceptance Criteria (v0 Done = Browser UAT)
- Sidebar sticky + collapsible + active state + keyboard nav
- Search finds seeded MDX
- Platform filter toggles content blocks
- Light/dark persists, respects `prefers-color-scheme`
- Prose + code + Do/Don't blocks render correctly
- Mobile: hamburger drawer, 44×44 touch targets, no layout shift
