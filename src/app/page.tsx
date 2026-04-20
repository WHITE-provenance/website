import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import {
  careJourneySteps,
  clinicInfo,
  doctors,
  homeTrustBullets,
  primaryProofSignals,
  proofMetrics,
  responsePromise,
  treatmentCases,
} from "@/lib/site-content";
import { buildBreadcrumbJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Стоматология в Новосибирске — WHITE provenance",
  description:
    "Лечение зубов, диагностика и имплантация в Новосибирске. Прозрачный план лечения, понятная стоимость и запись на консультацию онлайн.",
  pathname: "/",
});

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Главная", path: "/" }])} />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Стоматология нового поколения</p>
          <h1>Стоматология WHITE provenance в Новосибирске</h1>
          <p className="lead">
            Диагностика, лечение и восстановление зубов с понятным планом, сроками и стоимостью.
            На первом приеме объясняем каждый этап и согласовываем клиническую тактику.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Записаться на консультацию
            </Link>
            <Link href="/prices" className="button button-light">
              Посмотреть цены
            </Link>
          </div>
          <ul className="trust-list" aria-label="Почему нам доверяют">
            {homeTrustBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="notice">{responsePromise}</p>
        </section>

        <section className="section proof-band proof-band-primary" aria-label="Ключевые клинические подтверждения">
          {primaryProofSignals.map((signal) => (
            <article key={signal.title} className="proof-item">
              <p className="eyebrow">Доказательная база</p>
              <h2>{signal.title}</h2>
              <p>{signal.summary}</p>
              <p>{signal.evidence}</p>
            </article>
          ))}
        </section>

        <section className="section split-section">
          <div>
            <p className="eyebrow">Клинические кейсы</p>
            <h2 className="section-title">Результаты, которые можно проверить по этапам лечения</h2>
            <p>
              Показываем не только итог, но и логику лечения: с чем пришел пациент, какие решения
              приняла команда и какой клинический результат получили.
            </p>
            <div className="actions">
              <Link href="/about" className="button button-light">
                Подход и стандарты клиники
              </Link>
              <Link href="/appointment" className="button button-gold">
                Обсудить похожий случай
              </Link>
            </div>
          </div>
          <div className="case-list">
            {treatmentCases.map((caseItem) => (
              <article key={caseItem.id} className="case-card">
                <h3>{caseItem.title}</h3>
                <p>
                  <strong>Врач:</strong> {caseItem.clinician}
                </p>
                <p>
                  <strong>Запрос:</strong> {caseItem.request}
                </p>
                <p>
                  <strong>Тактика:</strong> {caseItem.treatment}
                </p>
                <p>
                  <strong>Результат:</strong> {caseItem.outcome}
                </p>
                <p className="case-period">Срок: {caseItem.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof-support" aria-label="Поддерживающие операционные показатели">
          <p className="eyebrow">Поддерживающие показатели</p>
          <h2 className="section-title">Операционные метрики подтверждают стабильность маршрута</h2>
          <div className="proof-band">
            {proofMetrics.map((metric) => (
              <article key={metric.label} className="proof-item">
                <p className="proof-value">{metric.value}</p>
                <h3>{metric.label}</h3>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section mixed-layout">
          <article className="card timeline-card">
            <h2 className="section-title">Как проходит лечение</h2>
            <ol className="journey-list">
              {careJourneySteps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </article>
          <aside className="card team-callout">
            <h2>Команда под один клинический маршрут</h2>
            <p>
              Врачи разных специализаций работают по единым протоколам, чтобы решения не
              противоречили друг другу.
            </p>
            <div className="stacked-list">
              {doctors.map((doctor) => (
                <p key={doctor.id}>
                  <strong>{doctor.name}</strong> · {doctor.role}
                </p>
              ))}
            </div>
            <Link href="/team" className="button button-light">
              Посмотреть команду
            </Link>
          </aside>
        </section>

        <section className="section card conversion-panel" aria-label="Запись на консультацию">
          <p className="eyebrow">Следующий шаг</p>
          <h2 className="section-title">Запишитесь на консультацию и получите прозрачный план лечения</h2>
          <p>
            На первом визите определяем приоритеты, объясняем этапность и фиксируем понятный план
            по срокам и бюджету.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Записаться на консультацию
            </Link>
            <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`} className="button button-light">
              Позвонить в клинику
            </a>
          </div>
          <p className="notice">{responsePromise}</p>
        </section>

        <section className="section testimonial card">
          <p className="eyebrow">Пациентский опыт</p>
          <blockquote>
            &quot;В клинике объяснили, зачем нужен каждый этап, дали понятный план по срокам и
            бюджету, а после лечения пригласили на контроль. Это сняло тревогу и помогло спокойно
            пройти весь маршрут.&quot;
          </blockquote>
          <p className="quote-author">Пациент WHITE provenance, комплексный план лечения</p>
        </section>
      </div>
    </SiteShell>
  );
}
