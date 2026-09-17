# ROADMAP — SPA El Fath Design Guideline

| Phase | Tasks | Exit Criteria |
|-------|-------|---------------|
| **v0 Foundation** | T1–T10 (see `TODO.md`) | Shell + 3 MDX pages + icons pipeline + build green |
| **v1 Content** | T11–T15 | 60+ MDX pages, full search, image pipeline, IA complete |
| **v2 Polish** | T16–T18 | Vercel prod, UAT sign-off, monitoring |

## Milestones
- **M0** (this PR): project scaffold + `/context` kit + brand tokens
- **M1**: shell layout + interactions (PlatformPicker/Search/Theme)
- **M2**: MDX + seeded content + icons
- **M3**: v0 verification + preview deploy

## Dependencies
- Node 24, npm 11 — `NODE_OPTIONS=--dns-result-order=ipv4first` on this machine (IPv6 broken)
- Playwright for HIG crawl (dev-only)
