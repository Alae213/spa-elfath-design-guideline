# WORKFLOW — spa-elfath-design-guideline

## Commands
```bash
npm install                  # install
npm run dev                  # next dev (http://localhost:3000)
npm run build                # must pass before review
npm run lint                 # eslint
npx tsc --noEmit             # typecheck
NODE_OPTIONS=--dns-result-order=ipv4first npm run dev  # IPv6 workaround
```

## Pipeline per Feature
`scope-checker → feature-planner → build → code-reviewer → test-writer → context-updater`

## Branching
- `main` is deployable. No long-lived branches.
- Commit style: `feat: sidebar collapse (T4)`, `chore: deps (T6)`

## UAT Gate
Done = browser UAT checklist + owner approval. No feature marked done without it.

## Network Quirk (this machine)
IPv6 egress broken. Always retry with `NODE_OPTIONS=--dns-result-order=ipv4first` or `curl -4`.
