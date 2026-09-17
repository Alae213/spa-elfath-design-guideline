# ICONS — SF Symbols Inventory & Extraction Pipeline

## Goal
Extract all SF Symbols / HIG glyphs as local SVG React components (`src/components/icons/*`) — most faithful clone. Fallback to Hugeicons mapping where glyph is font-ligature not inline SVG.

## Inventory (seed — 12 priority icons for foundation)
| Name | HIG Usage | File | Notes |
|------|-----------|------|-------|
| search | TopNav search | `Search.tsx` | magnifying glass |
| chevron-down | Sidebar collapsible | `ChevronDown.tsx` | 12px, rotates 180 when open |
| chevron-right | Breadcrumbs | `ChevronRight.tsx` | 10px |
| external | External links | `External.tsx` | arrow up-right |
| apple | PlatformPicker Apple | `Apple.tsx` |  |
| iphone | PlatformPicker iOS | `IPhone.tsx` | device outline |
| mac | PlatformPicker macOS | `Mac.tsx` | macbook |
| vision | PlatformPicker visionOS | `Vision.tsx` | headset |
| watch | PlatformPicker watchOS | `Watch.tsx` | watch |
| tv | PlatformPicker tvOS | `Tv.tsx` | tv |
| moon/sun | Theme toggle | `Moon.tsx` / `Sun.tsx` | — |
| menu / close | Mobile drawer | `Menu.tsx` / `Close.tsx` | hamburger X |

## Full Inventory — TODO (Playwright crawl)
Run:
```bash
NODE_OPTIONS=--dns-result-order=ipv4first npx playwright test # or node scripts/crawl-hig.mjs
```
For each HIG page, collect:
- `svg` outerHTML
- `img[src*="symbol" i]`
- Computed `font-family: "SF Symbols"` ligatures

Append to table: `| name | source URL | category | count | status | fallback |`

## Pipeline
1. **Crawl** `scripts/crawl-hig.mjs` — Playwright, `waitUntil: networkidle`, extract.
2. **Raw** → `tmp/raw-icons/<name>.svg`
3. **Optimize** `svgo` — `removeDimensions`, `convertColors: currentColor`, `removeViewBox: false`, ensure `viewBox="0 0 24 24"`.
4. **Componentize** `scripts/icons-build.mjs` — wrapper:
   ```tsx
   export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
     return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path .../></svg>
   }
   ```
5. **Barrel** `src/components/icons/index.ts` re-exports.

## Component Spec
- Props: `React.SVGProps<SVGSVGElement> & { size?: number }` — default 20, `className` controls color via `currentColor`.
- A11y: `aria-hidden="true"` by default; if `aria-label` passed, set `role="img"`.
- Touch: parent button ensures `44×44`.

## Fallback Mapping (if glyph is font not SVG)
Map SF name → Hugeicons equivalent in `src/components/icons/mapping.ts` — document decision in `DECISIONS.md`.
