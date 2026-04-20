# WHI-51 Page Copy + SEO Spec

Date: 2026-04-19
Owner: CMO
Purpose: Implementation-ready content and SEO requirements for current route set.

## 1. Evidence snapshot (current state)
- Home subtitle is technical/internal: `src/app/page.tsx:12`
- About subtitle contains placeholder language (`заготовкой под USP`): `src/app/about/page.tsx:9`
- Services subtitle references CMS/internal workflow: `src/app/services/page.tsx:10`
- Offers subtitle references CMS publishing internals: `src/app/offers/page.tsx:10`
- Prices subtitle exposes MVP implementation status: `src/app/prices/page.tsx:16`
- Team subtitle references typed model internals: `src/app/team/page.tsx:10`
- Contacts subtitle references data model internals: `src/app/contacts/page.tsx:10`
- Appointment subtitle references relay/webhook and static deploy internals: `src/app/appointment/page.tsx:52`
- Global metadata is generic/same for all pages: `src/app/layout.tsx:15`

## 2. Page-level copy and metadata requirements

### `/` Home
- H1: `Стоматология WHITE provenance в Новосибирске`
- Supporting copy: `Диагностика, лечение и восстановление зубов с прозрачным планом и понятной стоимостью. На первом приеме объясняем этапы лечения и согласовываем бюджет.`
- Primary CTA: `Записаться на консультацию`
- Secondary CTA: `Посмотреть услуги и цены`
- SEO title: `Стоматология в Новосибирске — WHITE provenance`
- Meta description: `Лечение зубов, имплантация и диагностика в Новосибирске. Прозрачный план лечения, современное оборудование, запись на консультацию онлайн.`

### `/services` Services
- H1: `Услуги стоматологии WHITE provenance`
- Supporting copy: `Подбираем лечение по клиническим показаниям и объясняем каждый этап: сроки, стоимость и ожидаемый результат.`
- Primary CTA: `Записаться на консультацию`
- SEO title: `Услуги стоматологии в Новосибирске | WHITE provenance`
- Meta description: `Диагностика, терапия, хирургия и имплантация в Новосибирске. Пошаговый план лечения и прозрачная коммуникация с врачом.`

### `/prices` Prices
- H1: `Цены на стоматологические услуги`
- Supporting copy: `Показываем ориентиры по стоимости до начала лечения. Финальная смета формируется после диагностики и согласуется с пациентом.`
- Primary CTA: `Получить план и смету`
- SEO title: `Цены на стоматологию в Новосибирске | WHITE provenance`
- Meta description: `Актуальные цены на консультацию, гигиену, лечение и имплантацию. Получите персональный план лечения и смету после диагностики.`

### `/team` Team
- H1: `Команда врачей WHITE provenance`
- Supporting copy: `Врачи разных специализаций работают по единым клиническим протоколам, чтобы лечение было предсказуемым и безопасным.`
- Primary CTA: `Записаться к врачу`
- SEO title: `Врачи стоматологии WHITE provenance в Новосибирске`
- Meta description: `Команда стоматологов WHITE provenance: специализации, опыт и подход к лечению. Подбор врача под ваш клинический случай.`

### `/about` About
- H1: `О клинике WHITE provenance`
- Supporting copy: `Мы объединяем цифровую диагностику, командную работу врачей и прозрачную коммуникацию, чтобы пациент понимал план лечения и результат.`
- Primary CTA: `Записаться на консультацию`
- SEO title: `О клинике WHITE provenance | Стоматология в Новосибирске`
- Meta description: `Узнайте о подходе клиники WHITE provenance: стандарты качества, цифровая диагностика и внимание к прогнозируемому результату лечения.`

### `/contacts` Contacts
- H1: `Контакты и запись`
- Supporting copy: `Свяжитесь с нами по телефону или оставьте заявку онлайн. Подскажем по услугам, стоимости и ближайшему времени приема.`
- Primary CTA: `Позвонить в клинику`
- Secondary CTA: `Оставить заявку`
- SEO title: `Контакты стоматологии WHITE provenance в Новосибирске`
- Meta description: `Адрес, телефон и онлайн-запись в стоматологию WHITE provenance. Быстрая связь с администратором и подбор удобного времени приема.`

### `/appointment` Appointment
- H1: `Запись на прием в WHITE provenance`
- Supporting copy: `Оставьте контакты, и администратор свяжется с вами для подтверждения записи и подбора удобного времени.`
- Trust microcopy block: `Ответим в рабочее время клиники. Ваши данные используются только для обработки заявки.`
- Primary CTA: `Отправить заявку`
- SEO title: `Онлайн-запись к стоматологу в Новосибирске | WHITE provenance`
- Meta description: `Запишитесь на консультацию в WHITE provenance онлайн. Уточним запрос, подберем врача и согласуем удобное время приема.`

### `/offers` Offers
- H1: `Акции и специальные предложения`
- Supporting copy: `Актуальные предложения клиники с понятными условиями и сроками действия.`
- Primary CTA: `Записаться по акции`
- SEO title: `Акции стоматологии в Новосибирске | WHITE provenance`
- Meta description: `Специальные предложения WHITE provenance: профессиональная гигиена, имплантация и другие услуги по выгодным условиям.`

## 3. Technical SEO spec (for CTO)
1. Metadata architecture
- Add route-level metadata for all indexable pages.
- Keep one global brand template plus route overrides.

2. Required fields per route
- `title`
- `description`
- `openGraph.title`
- `openGraph.description`
- `openGraph.images`
- `alternates.canonical`

3. Crawl/index assets
- Add `src/app/robots.ts`
- Add `src/app/sitemap.ts`

4. Structured data (minimum)
- Sitewide clinic entity: `Dentist` (or `MedicalClinic`) JSON-LD.
- `BreadcrumbList` for all inner pages.
- `FAQPage` for `/services`, `/prices`, `/appointment`.

## 4. UX content QA requirements (for UXDesigner)
- Remove all technical/internal wording from subtitles and helper copy.
- Add explicit trust modules on high-intent pages: response time, next steps, data usage note.
- Ensure CTA labels are action-specific and consistent across page and metadata intent.

## 5. Acceptance criteria for WHI-51 close
- 100% of core routes have user-facing value copy (no technical placeholders).
- 100% of indexable routes have unique title and description.
- Robots + sitemap exist and match production domain behavior.
- JSON-LD validates without critical errors for selected schema types.

