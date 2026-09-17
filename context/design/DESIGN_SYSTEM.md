# DESIGN_SYSTEM — SPA El Fath Design Guideline (HIG Skin)

> Mirrors `SPA elFath Website/context/design/DESIGN_SYSTEM.md` — adapted for HIG chrome.

## Palette (exact — do not change brand-300/400)
- **Brand:** `brand-300 #1D65AF` (primary), `brand-400 #193B62` (deep), `brand-200 #69A2E5` (hover), `brand-100 rgba(163,192,223,0.35)` (selection/soft)
- **System:** `system-50 #FAF8F6` (page bg light), `system-100 #F5F4F3`, `system-200 #ECE8E4` (borders), `system-300 #D9D9D9`, `system-400 #737373`, `system-500 #1F1F1F` (foreground)
- **Dark:** `bg #0A0A0A`, `surface #1A1A1A`, `border #2A2A2A`, `text #EDEDED` — brand tints remain.
- **Semantic:** success `#0A7A42`, warning `#B45309`, danger `#BE123C` — use sparingly for Do/Don't.

## Typography
- **Family:** `IBM Plex Sans Arabic` via `next/font/google` (`src/app/layout.tsx:5`) for ALL locales — even EN HIG clone. Weights 300–700. Variable `--font-plex-arabic`. Fallback `system-ui`.
- **Western digits everywhere** (no Arabic-Indic numerals).
- **Scale (HIG-like):** `h1 32/36 700`, `h2 22/28 600`, `h3 17/24 600`, `body 15/22 400`, `caption 12/16 500`, `code 13/20 mono`.
- **Tokens:** CSS vars in `src/app/globals.css:3` + `@theme inline` (brand/system/background/foreground/font-sans).

## Layout & Chrome
- **TopNav:** `h-14`, `sticky top-0 z-40`, `backdrop-blur + border-b`, search + theme + hamburger.
- **Sidebar:** `w-64 xl:w-72`, `sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto`, collapsible `SidebarSection` (details/summary), active = `bg-brand-100 text-brand-400 font-600 + left 2px brand border`.
- **Content:** `max-w-3xl mx-auto px-6 py-8`, prose `prose-zinc` (Tailwind typography).
- **TOC:** `hidden xl:block w-56 sticky top-20` — auto from `h2/h3` via `rehype-slug`.
- **Breadcrumbs:** `text-xs text-system-400` with `›` separator.
- **PlatformPicker:** segmented `rounded-full bg-system-100 p-1` — active `bg-white shadow-sm text-brand-400`.

## Components (HIG-specific)
- **Callout:** `border-l-4 pl-4 py-3` — info `border-brand-300 bg-brand-100/50`, warning `border-amber-500 bg-amber-50`.
- **Do / Don't:** 2-col grid, `Do` green border + check icon, `Don't` red border + x icon, `rounded-lg overflow-hidden border`.
- **Capsule/Code:** `bg-system-100 rounded-md px-1.5 py-0.5 font-mono text-[13px]`.
- **Card (category grid):** `border border-system-200 bg-white p-5 hover:shadow-md transition`, sharp `0px` corners per SPA masonry override (0 radius, flush), `hover:border-brand-200`.

## Interaction & A11y
- **Hover:** lighter blue `#69A2E5`, `transition 150ms`.
- **Focus-visible:** `outline 2px solid var(--brand-300) + offset 2px` (`src/app/globals.css:60`).
- **Touch:** min `44×44` for all interactive.
- **Motion:** `prefers-reduced-motion` respected; `scroll-behavior: smooth` unless reduced.

## Anti-Patterns (forbidden)
- Generic gradients / rounded 2xl cards / AI-slop heroes — explicitly forbidden (mirrors SPA Website).
- No `Geist` font — must use `IBM Plex Sans Arabic`.
- Never change `brand-300/400` hex.
