# WHI-51 Copy Replacement Map (Implementation Aid)

Date: 2026-04-19
Owner: CMO
Purpose: Direct text replacement guide for current codebase.

## 1) Subtitle replacements (high priority)

### Home
File: `src/app/page.tsx:12`
- Current:
  `Технический старт новой версии сайта: структура контента, маршруты и запись на прием готовы для дальнейшего UX и CMS наполнения.`
- Replace with:
  `Диагностика, лечение и восстановление зубов с понятным планом, сроками и стоимостью. На первом приеме объясняем каждый этап и согласовываем тактику лечения.`

### About
File: `src/app/about/page.tsx:9`
- Current:
  `Страница о клинике с заготовкой под USP, историю бренда, оборудование и стандарты качества.`
- Replace with:
  `Мы объединяем цифровую диагностику, командную работу врачей и прозрачную коммуникацию, чтобы пациент понимал план лечения и результат.`

### Services
File: `src/app/services/page.tsx:10`
- Current:
  `Каркас раздела услуг готов для дальнейшей детализации категорий и CMS-синхронизации.`
- Replace with:
  `Подбираем лечение по клиническим показаниям и объясняем каждый этап: сроки, стоимость и ожидаемый результат.`

### Offers
File: `src/app/offers/page.tsx:10`
- Current:
  `Раздел акций готов к подключению расписания публикаций и сроков действия из CMS.`
- Replace with:
  `Актуальные предложения клиники с понятными условиями и сроками действия.`

### Prices
File: `src/app/prices/page.tsx:16`
- Current:
  `MVP-таблица цен. На следующем этапе переедет в CMS и дополняется юридическими примечаниями.`
- Replace with:
  `Показываем ориентиры по стоимости до начала лечения. Финальная смета формируется после диагностики и согласуется с пациентом.`

### Team
File: `src/app/team/page.tsx:10`
- Current:
  `Страница команды подключена к типизированной модели профилей врачей.`
- Replace with:
  `Врачи разных специализаций работают по единым клиническим протоколам, чтобы лечение было предсказуемым и безопасным.`

### Contacts
File: `src/app/contacts/page.tsx:10`
- Current:
  `Контакты вынесены в единую модель данных для переиспользования в шаблонах и CMS.`
- Replace with:
  `Свяжитесь с нами по телефону или оставьте заявку онлайн. Подскажем по услугам, стоимости и ближайшему времени приема.`

### Appointment
File: `src/app/appointment/page.tsx:52`
- Current:
  `Форма отправляет заявку во внешний relay/webhook для статического деплоя на GitHub Pages.`
- Replace with:
  `Оставьте контакты, и администратор свяжется с вами для подтверждения записи и подбора удобного времени.`

## 2) Headline adjustments (recommended)

### Home
File: `src/app/page.tsx:11`
- Current: `Стоматология WHITE provenance`
- Replace with: `Стоматология WHITE provenance в Новосибирске`

### Contacts
File: `src/app/contacts/page.tsx:9`
- Current: `Контакты`
- Replace with: `Контакты и запись`

### Offers
File: `src/app/offers/page.tsx:9`
- Current: `Акции`
- Replace with: `Акции и специальные предложения`

## 3) Appointment microcopy additions (recommended)

File: `src/app/appointment/page.tsx` (form area)
- Add reassurance line:
  `Мы используем ваши данные только для обработки заявки и обратной связи.`
- Add response expectation line:
  `Обычно связываемся в рабочее время клиники в ближайшее время после отправки формы.`

## 4) SEO metadata replacements (for route metadata)

### Root metadata currently generic
File: `src/app/layout.tsx:15`
Current:
- `title`: `WHITE provenance`
- `description`: `Современный сайт стоматологической клиники WHITE provenance`

Recommended global fallback:
- `title`: `WHITE provenance — стоматология в Новосибирске`
- `description`: `Стоматология WHITE provenance: диагностика, лечение и восстановление зубов с прозрачным планом лечения.`

Route-level overrides to add:
- `/`: `Стоматология в Новосибирске — WHITE provenance`
- `/services`: `Услуги стоматологии в Новосибирске | WHITE provenance`
- `/prices`: `Цены на стоматологию в Новосибирске | WHITE provenance`
- `/team`: `Врачи стоматологии WHITE provenance в Новосибирске`
- `/about`: `О клинике WHITE provenance | Стоматология в Новосибирске`
- `/contacts`: `Контакты стоматологии WHITE provenance в Новосибирске`
- `/appointment`: `Онлайн-запись к стоматологу в Новосибирске | WHITE provenance`
- `/offers`: `Акции стоматологии в Новосибирске | WHITE provenance`

## 5) QA checks after replacement
- No technical/internal wording remains in subtitles.
- CTA intent matches each page purpose.
- Metadata snippets are unique per route and semantically aligned with on-page text.

