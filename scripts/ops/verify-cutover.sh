#!/usr/bin/env bash
set -euo pipefail

domain=""
www_domain=""
webhook_url=""
expected_www_target="white-provenance.github.io."
expected_ips=(
  "185.199.108.153"
  "185.199.109.153"
  "185.199.110.153"
  "185.199.111.153"
)

while [[ $# -gt 0 ]]; do
  case "$1" in
    --domain)
      domain="${2:-}"
      shift 2
      ;;
    --www-domain)
      www_domain="${2:-}"
      shift 2
      ;;
    --webhook-url)
      webhook_url="${2:-}"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

if [[ -z "$domain" || -z "$www_domain" || -z "$webhook_url" ]]; then
  cat >&2 <<'USAGE'
Usage:
  bash scripts/ops/verify-cutover.sh \
    --domain white-dental.ru \
    --www-domain www.white-dental.ru \
    --webhook-url https://relay.example.com/appointments
USAGE
  exit 1
fi

echo "== DNS lookup ($domain) =="
apex_ips="$(dig +short A "$domain" | sort)"
echo "$apex_ips"

echo
echo "== DNS lookup ($www_domain) =="
www_cname="$(dig +short CNAME "$www_domain" | head -n 1)"
echo "$www_cname"

echo
echo "== HTTPS headers ($domain) =="
curl -fsSI "https://$domain" | sed -n '1,12p'

echo
echo "== HTTPS headers ($www_domain) =="
curl -fsSI "https://$www_domain" | sed -n '1,12p'

echo
echo "== Webhook health probe (OPTIONS) =="
curl -fsSI -X OPTIONS "$webhook_url" | sed -n '1,20p'

echo
echo "== Assertions =="

for ip in "${expected_ips[@]}"; do
  if ! grep -qx "$ip" <<<"$apex_ips"; then
    echo "Missing expected apex IP: $ip" >&2
    exit 1
  fi
done

if [[ "$www_cname" != "$expected_www_target" ]]; then
  echo "Unexpected www CNAME target: $www_cname (expected $expected_www_target)" >&2
  exit 1
fi

echo "All checks passed."
