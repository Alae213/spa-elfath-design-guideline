# DECISIONS — SPA El Fath Design Guideline

| ID | Date | Decision | Rationale | Status |
|----|------|----------|-----------|--------|
| D1 | 2026-09-17 | Disk name `spa-elfath-design-guideline` (kebab-case), display name "SPA elfath Design Guideline" | Spaces break URLs/tooling | Accepted |
| D2 | 2026-09-17 | Stack aligned to `SPA elFath Website`: Next 16.3.5 + React 19 + TS5 + Tailwind 4 + `@/*` alias | Reuse skills/agents, no drift | Accepted |
| D3 | 2026-09-17 | Content as local MDX (`src/content/guidelines`) + `@next/mdx` | Git-tracked, no CMS for v0, matches HIG static nature | Accepted |
| D4 | 2026-09-17 | Brand = SPA identity inside HIG chrome (`#1D65AF`, `#193B62`, `#FAF8F6`, IBM Plex Sans Arabic) | Requested — hybrid not Apple native | Accepted |
| D5 | 2026-09-17 | Icons = Extract SVGs via Playwright crawl → local `src/components/icons` | Most faithful; fallback to Hugeicons mapping | Accepted |
| D6 | 2026-09-17 | Scope v0 = Foundation skeleton (shell + 3 pages) — not full 100+ clone | Faster UAT, iterative | Accepted |
| D7 | 2026-09-17 | Interactions = Full parity (sticky sidebar, collapsible, platform picker, search ⌘K, breadcrumbs, dark/light, TOC) | User requested full parity | Accepted |
| D8 | 2026-09-17 | Search v0 = `fuse.js` local, `next-themes` for theme | No Algolia key needed | Accepted |
| D9 | 2026-09-17 | `proxy.ts` pattern if i18n added later (Next 16) | Avoid `middleware.ts` bug | Reserved |
| D10 | — | Add more here — never renumber, append only | — | — |

## Deferred
- AR/FR i18n (borrow `src/proxy.ts` + dictionaries pattern from SPA Website when needed)
- CMS choice (evaluate Contentlayer/Keystatic in v1 if MDX scale painful)
