# WHI-51 Remediation Plan (Content, Messaging, SEO)

Date: 2026-04-19
Issue: WHI-51
Scope: Convert audit findings into a launch-ready execution plan.

## 1. Priority roadmap

### P0 (must complete before launch)
1. Remove all technical/internal copy from patient-facing pages.
2. Implement unique metadata for all core routes.
3. Add canonical, OG fields, `robots`, and `sitemap`.
4. Add baseline JSON-LD clinic entity + breadcrumb.
5. Align homepage, services, appointment messaging with one positioning narrative.

### P1 (first 2 weeks post-launch)
1. Expand service depth blocks (indications, stages, recovery, FAQ, pricing anchors).
2. Add appointment trust microcopy (response SLA, privacy note, expected next step).
3. Improve team/about trust proof (credentials, process, equipment detail).

### P2 (first 30-45 days)
1. Build SEO content cadence for high-intent local service queries.
2. Add FAQ schema on services/prices/appointment.
3. Run CTR iteration on title/meta pairs from GSC data.

## 2. Workstream breakdown

## A) Messaging and Copy (Owner: CMO)
Tasks:
- Finalize positioning statement and proof hierarchy.
- Approve route-level copy (`H1`, support copy, CTA, trust block).
- Approve route-level SEO title/description.

Definition of done:
- No internal build language on any core route.
- Consistent value proposition across `/`, `/services`, `/appointment`.
- Metadata copy approved for 100% core routes.

Dependencies:
- Final brand naming convention from stakeholders.

## B) SEO implementation (Owner: CTO)
Tasks:
- Route metadata wiring.
- Canonical logic for production domain and basePath mode.
- Add `src/app/robots.ts` and `src/app/sitemap.ts`.
- Add JSON-LD insertion point in layout/page templates.

Definition of done:
- Each core route has unique `title` and `description`.
- Canonical resolves correctly for production URLs.
- `robots.txt` and `sitemap.xml` generated and valid.
- JSON-LD passes validation without critical errors.

Dependencies:
- CMO metadata copy package.

## C) Experience and trust UX (Owner: UXDesigner)
Tasks:
- Replace subtitle blocks with patient-oriented value copy.
- Add trust modules on high-intent pages.
- Ensure CTA hierarchy and mobile readability.

Definition of done:
- Every core page has one primary CTA above fold.
- Appointment page includes reassurance block.
- Readability and spacing validated on mobile.

Dependencies:
- CMO-approved copy blocks.

## 3. Suggested execution sequence
1. Lock messaging system and route copy (CMO).
2. Apply metadata + crawl/index + schema baseline (CTO).
3. Apply UX trust modules and CTA hierarchy polish (UXDesigner).
4. QA pass for content and SEO acceptance criteria.
5. Launch and begin P1 backlog.

## 4. QA gate (must pass)
- Zero technical/internal wording in patient-facing text.
- 8/8 core routes have unique title + description.
- Canonical tags are present and correct.
- Sitemap and robots reflect production policy.
- JSON-LD has no critical validation errors.
- Appointment page communicates response expectation and data usage.

## 5. KPI targets after rollout
- +20-30% improvement in organic CTR on non-brand route pages (first 30-60 days).
- +10-20% increase in appointment form completion rate.
- Reduction in bounce on service/pricing pages after copy depth update.

