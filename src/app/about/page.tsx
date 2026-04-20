import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { clinicCredentials, proofMetrics } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "О клинике WHITE provenance | Стоматология в Новосибирске",
  description:
    "Подход WHITE provenance: цифровая диагностика, клинические протоколы и прозрачная коммуникация с пациентом.",
  pathname: "/about",
});

const principles = [
  "Клиническая точность: решения принимаются на основе диагностики и понятных критериев.",
  "Командный подход: врачи разных специализаций согласуют тактику лечения совместно.",
  "Прозрачность: пациент заранее понимает этапы, сроки и бюджет лечения.",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "О клинике", path: "/about" },
        ])}
      />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">О клинике</p>
          <h1>О клинике WHITE provenance</h1>
          <p className="lead">
            Мы строим лечение вокруг клинической точности, прозрачной коммуникации и уважения к
            времени пациента.
          </p>
          <p className="notice">
            Наша цель — чтобы пациент понимал диагноз, план лечения и ожидаемый результат до начала
            процедур.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Записаться на консультацию
            </Link>
            <Link href="/team" className="button button-light">
              Познакомиться с врачами
            </Link>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Наши стандарты</h2>
          <div className="list-grid">
            {principles.map((item) => (
              <article key={item} className="card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Клинические и организационные подтверждения</h2>
          <div className="grid-2">
            {clinicCredentials.map((credential) => (
              <article key={credential.title} className="card">
                <h3>{credential.title}</h3>
                <p>{credential.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-band">
          {proofMetrics.map((metric) => (
            <article key={metric.label} className="proof-item">
              <p className="proof-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p>{metric.note}</p>
            </article>
          ))}
        </section>
      </div>
    </SiteShell>
  );
}
