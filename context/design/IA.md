# IA — Information Architecture (Apple HIG Mirror)

> Source: `https://developer.apple.com/design/human-interface-guidelines/` — JS-rendered, Playwright crawl required to finalize. This is v0 seed (3 pages) + full IA placeholder.

## Top-Level Navigation (mirrors HIG)
1. **Foundations** — Principles, Layout, Typography, Color, Icons, Materials, etc.
2. **Patterns** — Navigation, Modals, Search, Onboarding, etc.
3. **Components** — Buttons, Lists, Tables, Sheets, Menus, etc.
4. **Technologies** — Widgets, Live Activities, App Intents, etc.
5. **Platforms** — iOS, macOS, visionOS, watchOS, tvOS, iPadOS (filter via PlatformPicker)

## Sidebar Tree (v0 seeded)
```
Guidelines
├── Foundations
│   ├── Overview         → /guidelines/foundations/overview  (SEEDED)
│   └── Layout          → /guidelines/foundations/layout    (SEEDED)
└── Components
    └── Buttons         → /guidelines/components/buttons   (SEEDED)
```

## Full IA (to be crawled — scaffold target)
```
Foundations
├── Accessibility, App Icons, Branding, Color, Dark Mode, Layout, Typography, Icons, Materials, Motion
Patterns
├── Loading, Navigation, Notifications, Search, Settings, Onboarding
Components
├── Bars, Buttons, Controls, Indicators, Lists & Tables, Menus, Pickers, Sheets
Technologies
├── Widgets, Live Activities, Watch Complications, Apple Pencil
```

## Route Convention
- File: `src/content/guidelines/<category>/<slug>.mdx`
- URL: `/guidelines/<category>/<slug>`
- Frontmatter: `title, description, category, platforms[], order, updatedAt`
- `src/lib/mdx.ts` → `getTree()` builds sidebar order by `order` asc.

## Platform Filtering
Each MDX can declare `platforms: ["iOS","macOS","visionOS"]` — `PlatformPicker` filters blocks with `data-platform` attribute. If empty, shown on all.

## Next Steps
- Run `scripts/crawl-hig.mjs` (Playwright) to dump full IA to `ICONS.md` appendix + `src/content/guidelines` stubs.
