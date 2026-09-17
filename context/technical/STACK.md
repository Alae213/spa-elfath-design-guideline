# STACK — spa-elfath-design-guideline

| Layer | Choice | Version | Why |
|-------|--------|---------|-----|
| Framework | Next.js (App Router) | 16.3.5 | Align with `SPA elFath Website/package.json:11` |
| UI | React | 19.2.8 | Server Components by default |
| Language | TypeScript | 5 (strict) | — |
| Styling | Tailwind CSS | 4 (`@tailwindcss/postcss`) | `@import "tailwindcss"` + `@theme inline` |
| Typography | `@tailwindcss/typography` | latest | Prose for MDX |
| Fonts | `next/font/google` IBM Plex Sans Arabic | — | `layout.tsx:6` — weights 300–700 |
| Content | `@next/mdx` + `remark-gfm` + `rehype-slug` + `rehype-autolink-headings` | — | MDX in `src/content/guidelines` |
| Parsing | `gray-matter` | — | Frontmatter |
| Search | `fuse.js` | — | Local, no key |
| Theme | `next-themes` | — | class strategy, system pref |
| Icons | local SVGs + `svgo` + Playwright crawl | — | Extract SVGs |
| Lint | `eslint-config-next` | 16.3.5 | `eslint.config.mjs` |
| Deploy | Vercel | — | Sibling to SPA Website |

## Scripts
```bash
npm install                  # install
npm run dev                  # next dev
npm run build                # must pass before review
npm run lint                 # eslint
npx tsc --noEmit             # typecheck
NODE_OPTIONS=--dns-result-order=ipv4first npm run dev  # if network stalls (IPv6 bug)
```

## Path Alias
`tsconfig.json:21` → `@/*` → `./src/*`

## Adding Deps
```bash
NODE_OPTIONS=--dns-result-order=ipv4first npm install <pkg>
```
Document new remote image hosts in `next.config.ts` `images.remotePatterns`.
