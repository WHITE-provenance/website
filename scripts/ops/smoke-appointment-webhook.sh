#!/usr/bin/env bash
set -euo pipefail

webhook_url=""
origin_domain="white-dental.ru"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --webhook-url)
      webhook_url="${2:-}"
      shift 2
      ;;
    --origin-domain)
      origin_domain="${2:-}"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

if [[ -z "$webhook_url" ]]; then
  cat >&2 <<'USAGE'
Usage:
  bash scripts/ops/smoke-appointment-webhook.sh \
    --webhook-url https://relay.example.com/appointments \
    [--origin-domain white-dental.ru]
USAGE
  exit 1
fi

payload='{"name":"Smoke Test","phone":"+70000000000","message":"WHI-42 synthetic check","sourcePage":"/appointment"}'

echo "== CORS preflight =="
curl -fsSI -X OPTIONS "$webhook_url" \
  -H "Origin: https://$origin_domain" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: content-type" | sed -n '1,20p'

echo
echo "== Synthetic submission =="
curl -fsS -X POST "$webhook_url" \
  -H "Content-Type: application/json" \
  -H "Origin: https://$origin_domain" \
  --data "$payload" | sed -n '1,20p'

echo
echo "Webhook smoke request completed."
