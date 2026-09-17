# SECURITY — spa-elfath-design-guideline

- No secrets in repo — `.env*` gitignored. Future keys (search provider) go in Vercel env, documented in `context/technical/ENVIRONMENT.md` placeholder.
- `next.config.ts` `poweredByHeader: false`, `images.formats: avif/webp`.
- CSP: consider `next.config.ts` headers in v1 (default Next).
- MDX: no raw HTML execution — `rehype` sanitized; no `dangerouslySetInnerHTML` for user content.
- Icons: SVGs sanitized via `svgo` — strip `on*` handlers, `style` with JS.
