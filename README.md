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

If `NEXT_PUBLIC_APPOINTMENT_ENDPOINT` is not set (or invalid), the form shows a user-visible fallback path with phone/email contact details.
