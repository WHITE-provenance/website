import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { pricesFaq, pricingReassurance } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Цены на стоматологию в Новосибирске | WHITE provenance",
  description:
    "Актуальные ориентиры по ценам на консультацию, гигиену, лечение и имплантацию. Получите персональный план лечения после диагностики.",
  pathname: "/prices",
});

const priceRows = [
  { service: "Первичная консультация", price: "от 1 500 ₽", details: "Осмотр, сбор жалоб, базовая диагностика" },
  { service: "Профессиональная гигиена", price: "от 5 000 ₽", details: "Снятие налета, полировка, рекомендации по уходу" },
  { service: "Лечение кариеса", price: "от 6 000 ₽", details: "Анестезия, изоляция, реставрация" },
  { service: "Имплантация", price: "от 45 000 ₽", details: "Хирургический этап, контроль и план ортопедии" },
];

export default function PricesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Цены", path: "/prices" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(pricesFaq)} />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Цены</p>
          <h1>Цены на стоматологические услуги</h1>
          <p className="lead">
            Публикуем ориентировочную стоимость ключевых услуг. Финальная смета зависит от
            клинической ситуации и согласуется до начала лечения.
          </p>
          <p className="notice">
            Информация на странице не является публичной офертой и служит для предварительного
            информирования.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Получить план и смету
            </Link>
          </div>
        </section>

        <section className="section card">
          <h2 className="section-title">Ориентиры по стоимости</h2>
          <div className="list-grid">
            {priceRows.map((row) => (
              <article key={row.service} className="card price-card">
                <h3>{row.service}</h3>
                <p className="price-value">{row.price}</p>
                <p>{row.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <article className="card">
            <h2 className="section-title">Как мы фиксируем стоимость</h2>
            <div className="stacked-list">
              {pricingReassurance.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
          <aside className="card">
            <h2>Финансовая предсказуемость</h2>
            <p>
              Перед стартом каждого этапа вы видите состав работ и стоимость. Если в ходе лечения
              требуется корректировка плана, врач обсуждает это с вами заранее.
            </p>
            <Link href="/appointment" className="button button-light">
              Обсудить ваш план
            </Link>
          </aside>
        </section>

        <section className="section">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="list-grid">
            {pricesFaq.map((item) => (
              <article key={item.question} className="card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
