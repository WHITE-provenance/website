# WHI-21 Technical plan: WHITE provenance website

Related: [WHI-20](/issues/WHI-20)

## 1) Chosen architecture

- Framework: Next.js (App Router) + TypeScript.
- Styling: Tailwind CSS, design tokens in `globals.css`.
- Content management: Storyblok (recommended for marketing/editor flows) with fallback plan to Sanity if complex relational content appears during migration.
- Rendering strategy:
  - marketing pages: SSG + ISR for SEO and performance;
  - contact/appointment actions: client-side post to external relay/webhook (`NEXT_PUBLIC_APPOINTMENT_ENDPOINT`) with explicit fallback UX when relay is unavailable.
- Deployment target: GitHub Pages static export (`output: export`) with external relay integration for conversion forms.

## 2) Information architecture (MVP)

- `/` homepage
- `/services`
- `/team`
- `/prices`
- `/about`
- `/contacts`
- `/offers`
- `/appointment`

## 3) Content model (CMS)

Core entities:

- `ClinicSettings`: brand blocks, contacts, address, social links, legal info.
- `ServiceCategory` and `ServiceItem`: hierarchy for services, descriptions, price summary, CTA.
- `DoctorProfile`: team cards with specialization and experience.
- `PriceItem`: grouped price table with effective dates.
- `Offer`: promo block with validity period.
- `PageSEO`: meta title, description, OG image, canonical.
- `AppointmentDestination`: CRM/webhook target config by source form.

## 4) Appointment integration approach

- Public form posts directly to external relay/webhook URL from `NEXT_PUBLIC_APPOINTMENT_ENDPOINT`.
- Relay ownership and validation live outside this repository (required for static hosting).
- If relay URL is absent/invalid or request fails, UI shows explicit fallback conversion path (phone/email) instead of depending on in-repo server APIs.

## 5) Delivery phases and acceptance criteria

1. Foundation
- Bootstrapped Next.js project, route skeleton, shared layout/nav, typed content layer.
- Acceptance: project runs, all core routes resolve, baseline metadata configured.

2. CMS wiring
- Storyblok space model, SDK integration, draft/published fetching.
- Acceptance: content is editable in CMS and appears in all key pages.

3. Core page implementation
- Homepage, services, team, prices, contacts, offers.
- Acceptance: migrated core content blocks + SEO tags + schema.org basics.

4. Appointment and conversion
- Form UX, validation, external relay integration to CRM/webhook, anti-spam basics in relay layer.
- Acceptance: successful relay submission path is observable end-to-end, with fallback conversion path for relay downtime/misconfiguration.

5. Performance and launch readiness
- image optimization, caching, Lighthouse pass, redirects from old URLs.
- Acceptance: Core Web Vitals and SEO checklist meet launch thresholds.

## 6) Risks and dependencies

- Dependency: UXDesigner approval [714b1baa-0c1d-48fe-920d-6bf7febf583f](/approvals/714b1baa-0c1d-48fe-920d-6bf7febf583f).
- Risk: unavailable production content inventory from current website.
- Risk: repository access/bootstrap issues in Paperclip managed workspace.
- Risk: CRM endpoint contract not confirmed (fields/auth/error contract).

Mitigations:

- keep visual decisions reversible before UX finalization;
- maintain strict typed content contracts now;
- add integration adapters for CRM to avoid coupling.

## 7) What is started in this issue

- Technical architecture documented.
- Next.js project initialized in workspace.
- Route skeleton for all core sections implemented.
- Typed seed content model implemented.
- Static-safe appointment client integration implemented via external relay contract.
