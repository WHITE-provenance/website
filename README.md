# WHITE provenance website

Новый сайт клиники WHITE provenance на Next.js + TypeScript.

## Tech baseline

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static-safe appointment submission via external relay endpoint

Технический план и этапы: `docs/technical-plan.md`.

## Run locally

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`.

## Environment

For appointment forwarding from a static GitHub Pages build:

```bash
NEXT_PUBLIC_APPOINTMENT_ENDPOINT=https://example.com/clinic/webhook
```

Production deploys require `NEXT_PUBLIC_APPOINTMENT_ENDPOINT` as a repository variable in GitHub Actions (`Settings -> Secrets and variables -> Actions -> Variables`).

If `NEXT_PUBLIC_APPOINTMENT_ENDPOINT` is not set (or invalid), the form shows a user-visible fallback path with phone/email contact details.

## Operations

- DNS cutover + webhook hardening runbook: `docs/operations/whi-42-dns-cutover-webhook-hardening.md`
- Post-cutover verification script: `scripts/ops/verify-cutover.sh`
- Webhook synthetic smoke script: `scripts/ops/smoke-appointment-webhook.sh`
