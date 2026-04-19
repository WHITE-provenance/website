# WHI-38 Production Deployment, GitHub Pages CI/CD, and Secrets Inventory

Issue: [WHI-38](/issues/WHI-38)  
Parent: [WHI-37](/issues/WHI-37)  
Dependency: [WHI-41](/issues/WHI-41)

## 1) Deployment target and publication method

- Target platform: GitHub Pages
- Target URL pattern: `https://white-provenance.github.io` (exact smoke URL must come from owner handoff)
- Publication method: GitHub Actions (not branch-only publishing)

Implemented repo artifacts:
- Workflow: `.github/workflows/deploy-pages.yml`
- Static export config toggle: `next.config.ts` via `PAGES_EXPORT=true`
- Guarded build script: `npm run build:pages`

## 2) GitHub Actions flow (Pages)

1. `actions/configure-pages@v5` configures Pages metadata/base path.
2. `npm run build:pages` runs static export (`output: export`) when enabled.
3. `actions/upload-pages-artifact@v3` uploads `./out`.
4. `actions/deploy-pages@v4` publishes artifact.

Safety control:
- Workflow is gated by repo variable `ENABLE_GH_PAGES_DEPLOY == 'true'`.
- This prevents accidental deploy attempts before owner/access handoff is complete.

## 3) Critical runtime constraint

- GitHub Pages is static hosting.
- `src/app/api/appointments/route.ts` cannot run on Pages.
- `build:pages` intentionally fails if `src/app/api` exists, with explicit message.

Required architecture for go-live:
1. Static frontend on GitHub Pages.
2. External server-side relay/function for appointment submission.
3. Frontend form posts to that external endpoint.

## 4) DNS scope (updated per user direction)

- DNS is **not edited in this WHI-38 execution path**.
- Runbook no longer assumes DNS cutover changes in this issue.
- Any future custom-domain migration is a separate decision/work item.

## 5) Secrets and ownership

Required launch-now handoff (from WHI-41 delivery package):
1. `github_pages_source + exact smoke_url`
- Static-safe Pages build/publish settings
- Exact reachable smoke URL accepted by QA owner

2. `webhook/fallback contract for static site`
- Appointment UX path no longer depends on `/api/appointments`
- User-visible fallback conversion path confirmed
- External relay ownership/contract explicitly documented if relay remains in scope

## 6) Current blocker state

`WHI-38` remains blocked by [WHI-41](/issues/WHI-41) until static-safe behavior lands.

No further production execution should proceed before:
- static-safe Pages publish package from WHI-41,
- exact smoke URL is reachable and validated for QA.
