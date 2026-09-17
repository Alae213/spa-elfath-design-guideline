# CI_CD — spa-elfath-design-guideline

- **Deploy:** Vercel Git integration — push → preview URL, merge `main` → production.
- **Checks:** `npm run build` + `npx tsc --noEmit` + `npm run lint` must pass in CI.
- Keep `spa-elfath.framer.website` reference site live until cutover (if SPA Website custom domain changes).

## Env
Document in `context/technical/ENVIRONMENT.md` when needed. No env required for local dev v0.
