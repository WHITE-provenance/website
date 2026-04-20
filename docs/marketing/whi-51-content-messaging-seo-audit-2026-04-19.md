# WHI-51 Content, Messaging, and SEO Audit

Date: 2026-04-19
Owner: CMO
Issue: WHI-51 (in progress)

## 1. Executive summary
The current site is a technical MVP with complete route coverage, but not launch-ready from a marketing or SEO perspective.

Primary blockers:
- Placeholder/internal engineering copy is visible on core pages and weakens trust.
- Positioning is not yet differentiated enough for local clinic competition.
- SEO implementation is baseline-only (single global metadata), so search visibility and CTR potential are severely constrained.

## 2. Audit scope
Reviewed:
- Core content model: `src/lib/site-content.ts`
- All route pages: `src/app/**/page.tsx`
- Global metadata/layout: `src/app/layout.tsx`
- Built HTML output in `out/` after `npm run build`
- Technical launch expectations in `docs/technical-plan.md`

## 3. Findings by severity

### Critical
1. Page subtitles expose internal build language instead of patient-facing value.
- Examples include references to technical startup, CMS migration, typed models, static deploy relay, and MVP staging.
- Affects trust, conversion intent, and brand perception.

2. SEO metadata is effectively non-existent at page level.
- All key routes currently ship the same title/description from root layout.
- No route-specific search intent capture (services, prices, contacts, appointment).

3. Local SEO entity signals are missing.
- No schema.org `Dentist`/`MedicalClinic`/`LocalBusiness` JSON-LD.
- No structured support for address/phone/opening hours/reviews/geo.

### High
1. Positioning is underdeveloped.
- Current promise is generic (modern clinic, digital diagnostics, protocols).
- Missing proof stack: doctor credentials, treatment outcomes, process transparency, guarantees, patient objections handling.

2. Conversion pages need stronger microcopy.
- Appointment flow has working fallback UX, but no reassurance copy around response time, privacy, or what happens next.

3. Service pages are too shallow for SEO and decision-making.
- Service list cards are brief and not mapped to intent-rich landing semantics.

### Medium
1. Brand consistency risks.
- Brand naming style appears as `WHITE provenance`; needs finalized brand standard usage everywhere.

2. Contact and price trust signals are incomplete.
- Missing opening hours, map embed/link strategy, legal and pricing disclaimers in patient-readable format.

## 4. Messaging gaps and required direction

Current messaging is architecture-first; it needs to become outcome-first.

Required message hierarchy:
1. Core promise: predictable dental outcomes with transparent treatment plans.
2. Differentiators: digital diagnostics, specialist team, protocolized safety, clear pricing communication.
3. Trust proof: doctor bios with credentials, equipment/protocol specifics, social proof/testimonials.
4. Conversion confidence: response SLAs, contact alternatives, plain-language next step after form submit.

## 5. SEO gap matrix

Current gaps:
- No per-page `title`/`description`.
- No canonical tags strategy.
- No Open Graph/Twitter cards per route.
- No sitemap/robots strategy visible in app routes.
- No schema.org implementation for local clinic entity and key page types.
- No content depth for service-intent keywords.

Minimum launch SEO requirements:
1. Metadata framework
- Unique title/description for each route.
- Canonical for every indexable route.
- OG image + route-specific OG title/description.

2. Technical discovery controls
- `sitemap.xml` generation for all primary routes.
- `robots.txt` with production crawl directives.

3. Structured data
- Sitewide clinic entity (`Dentist` or `MedicalClinic`).
- `FAQPage` for high-intent pages (services/prices/appointment).
- `BreadcrumbList` for inner pages.

4. Content depth
- Expand each core service into dedicated sections: indications, process, contraindications, recovery, pricing anchors, FAQ.

## 6. Recommended page-copy deliverables (next content sprint)

Required per route (`/`, `/services`, `/prices`, `/about`, `/team`, `/contacts`, `/appointment`, `/offers`):
- Primary headline (`H1`) with patient outcome framing.
- Supporting value proposition (2-3 sentences).
- Trust block (proof/evidence).
- CTA block (primary + secondary).
- SEO fields: title, meta description, OG title, OG description.

## 7. Growth priorities (first 30 days post-launch)
1. Capture bottom-funnel demand first.
- Prioritize SEO content for high-intent service and price queries in Novosibirsk.

2. Increase appointment conversion rate.
- Tighten form reassurance copy and trust indicators on `/appointment` and `/contacts`.

3. Build compounding trust content.
- Publish doctor spotlight and treatment explainer content on a fixed cadence.

## 8. Launch messaging recommendations
Primary launch narrative:
- "Predictable dental care in Novosibirsk with transparent plans, specialist doctors, and modern diagnostics."

Short launch CTA:
- "Book a consultation and receive a clear treatment roadmap on your first visit."

## 9. Cross-functional handoff
For CTO:
- Implement per-route metadata model and schema injection points.
- Add sitemap/robots generation.
- Ensure canonical URL logic works for GitHub Pages/basePath modes.

For UXDesigner:
- Replace technical subtitles with patient-oriented copy blocks.
- Add trust modules (doctor proof, treatment process, FAQ layout, contact confidence cues).
- Validate hierarchy and readability on mobile first.

## 10. Content QA checklist (must-pass before launch)
- No technical/internal implementation wording visible to patients.
- Every indexable page has unique title and meta description.
- Every page has one clear primary CTA.
- Contact details are complete, consistent, and clickable.
- Service/pricing claims are specific and legally safe.
- Structured data validates without critical errors.

