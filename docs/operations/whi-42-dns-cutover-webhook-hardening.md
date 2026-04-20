# WHI-42 DNS Cutover + Webhook Hardening Runbook

Issue: [WHI-42](/issues/WHI-42)  
Parent: [WHI-20](/issues/WHI-20)

## Scope

- Cut over `white-dental.ru` and `www.white-dental.ru` from legacy hosting to GitHub Pages.
- Keep rollback path documented and ready before record changes.
- Enforce production webhook endpoint configuration for appointment form.
- Define minimum hardening and observability requirements for external relay.

## 1) Preconditions (must be true before cutover)

1. GitHub repository Pages is enabled and deployment from Actions is healthy.
2. `public/CNAME` contains apex domain (`white-dental.ru`).
3. Repository variable `NEXT_PUBLIC_APPOINTMENT_ENDPOINT` is set to production `https://` endpoint.
4. External webhook relay owner confirms:
- request schema acceptance (`name`, `phone`, `message`, `sourcePage`);
- CORS allows `https://white-dental.ru` and `https://www.white-dental.ru`;
- rate-limit and abuse controls are enabled;
- logging/alerting is enabled.
5. DNS provider access is available to execute and rollback records.
6. Existing DNS records are exported/snapshotted before modifications.

## 2) Target DNS records for GitHub Pages

Set low TTL (300s) at least 30 minutes before cutover window if possible.

For apex `white-dental.ru`:
- `A 185.199.108.153`
- `A 185.199.109.153`
- `A 185.199.110.153`
- `A 185.199.111.153`

For `www.white-dental.ru`:
- `CNAME white-provenance.github.io.`

Remove conflicting legacy `A/AAAA/CNAME` records for apex and `www`.

## 3) GitHub configuration checklist

1. Repository `Settings -> Pages -> Custom domain` = `white-dental.ru`.
2. Keep "Enforce HTTPS" enabled once certificate is issued.
3. Confirm latest `Deploy to GitHub Pages` workflow run succeeded on `main`.

## 4) Webhook hardening baseline (external backend)

Required controls:
- shared-secret verification (`X-Webhook-Signature` HMAC SHA-256 preferred);
- strict origin allowlist and CORS methods limited to `POST`;
- request size limit (<= 16KB);
- per-IP rate limiting and bot filtering;
- 5-10 second upstream timeout and idempotency key support;
- structured logs with request ID and response status;
- alert on 5xx rate and timeout spikes.

Production readiness SLO/alerts:
- availability target >= 99.5% for submission endpoint;
- alert when 5xx ratio > 5% for 5 minutes;
- alert when p95 latency > 2s for 10 minutes;
- alert when zero successful submissions during clinic open hours.

## 5) Cutover execution sequence

1. Confirm preconditions and snapshot current DNS zone.
2. Merge/deploy latest `main` to Pages and wait for green workflow.
3. Apply DNS changes for apex + `www`.
4. Run verification script:
   `bash scripts/ops/verify-cutover.sh --domain white-dental.ru --www-domain www.white-dental.ru --webhook-url https://<relay-host>/...`
5. Validate:
- `https://white-dental.ru` loads new site;
- `https://www.white-dental.ru` resolves to same content;
- appointment form test submission returns success;
- webhook logs show new production-origin traffic.
6. Post evidence (dig output, curl headers, screenshots, webhook log excerpts) to issue thread.

## 6) Rollback plan

Trigger rollback if any of the following persists > 15 minutes:
- domain does not resolve to Pages IPs;
- HTTPS/certificate fails;
- appointment webhook fails with sustained 5xx/timeout;
- critical page regressions.

Rollback actions:
1. Restore previous DNS records from pre-cutover snapshot.
2. If needed, remove custom domain from GitHub Pages to avoid partial routing.
3. Keep status page/issue updated with incident timestamp and mitigation.
4. Re-run verification against restored legacy endpoint.

## 7) Blocking credentials/escalation

This repository can prepare configuration and runbook, but cannot perform registrar/GitHub settings actions without privileged access.

Required privileged operators:
- Domain/DNS owner for `white-dental.ru`;
- GitHub repo admin for Pages custom-domain settings;
- Webhook backend owner for secret rotation and monitoring.

## 8) Execution split (comment `2026-04-19`)

- CTO executes GitHub deployment/API operations directly (Pages settings, deploy validation).
- DevOps executes DNS cutover verification, webhook smoke checks, and rollout/rollback coordination.
- Secure credential handoff is tracked in [WHI-43](/issues/WHI-43); do not post raw credentials/tokens in issue comments.
