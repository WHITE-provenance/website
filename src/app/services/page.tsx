import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { services, servicesFaq } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Услуги стоматологии в Новосибирске | WHITE provenance",
  description:
    "Диагностика, терапия, хирургия и имплантация в Новосибирске. Пошаговый план лечения и прозрачная коммуникация с врачом.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Услуги", path: "/services" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(servicesFaq)} />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Услуги</p>
          <h1>Услуги стоматологии WHITE provenance</h1>
          <p className="lead">
            Подбираем лечение по клиническим показаниям и объясняем, что будет происходить на каждом
            этапе: от диагностики до контроля результата.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Записаться на консультацию
            </Link>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Основные направления</h2>
          <p>Каждый план лечения обсуждается с пациентом заранее: цели, этапы, сроки и бюджет.</p>
          <div className="grid-3">
            {services.map((service) => (
              <article key={service.id} className="card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="list-grid">
            {servicesFaq.map((item) => (
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
