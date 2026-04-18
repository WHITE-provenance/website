# WHITE provenance website

Новый сайт клиники WHITE provenance на Next.js + TypeScript.

## Tech baseline

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API endpoint for appointment requests (`/api/appointments`)

Технический план и этапы: `docs/technical-plan.md`.

## Run locally

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`.

## Environment

For appointment forwarding:

```bash
APPOINTMENT_WEBHOOK_URL=https://example.com/clinic/webhook
```

If `APPOINTMENT_WEBHOOK_URL` is not set, appointment endpoint returns successful non-forwarded response (`queued: false`) for local/dev scenarios.
