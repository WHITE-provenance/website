import { JsonLd } from "@/components/json-ld";
import { AppointmentForm } from "@/components/appointment-form";
import { SiteShell } from "@/components/site-shell";
import {
  appointmentFaq,
  appointmentReassurancePoints,
  clinicInfo,
  responsePromise,
} from "@/lib/site-content";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Онлайн-запись к стоматологу в Новосибирске | WHITE provenance",
  description:
    "Запишитесь на консультацию в WHITE provenance онлайн. Подберем врача и согласуем удобное время приема.",
  pathname: "/appointment",
});

const contactTimeline = [
  "Оставляете заявку и коротко описываете запрос.",
  "Администратор уточняет детали и помогает подобрать врача.",
  "Подтверждаем время визита и присылаем памятку перед приемом.",
];

export default function AppointmentPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Запись", path: "/appointment" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(appointmentFaq)} />
      <div className="container page">
        <section className="appointment-conversion">
          <div className="hero">
            <p className="eyebrow">Онлайн-запись</p>
            <h1>Запись на прием в WHITE provenance</h1>
            <p className="lead">
              Оставьте контакты, и администратор свяжется с вами для подтверждения записи и подбора
              удобного времени.
            </p>
            <p className="notice">
              Мы используем ваши данные только для обработки заявки и обратной связи.
            </p>
            <p className="notice">{responsePromise}</p>
            <div className="actions">
              <a href="#appointment-form" className="button button-gold">
                Перейти к форме записи
              </a>
            </div>
          </div>

          <section className="appointment-side-stack">
            <article className="card reassurance-card">
              <p className="eyebrow">Перед отправкой заявки</p>
              <h2>Что произойдет после формы</h2>
              <div className="stacked-list">
                {appointmentReassurancePoints.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
              <p className="notice">
                Нужна срочная связь?{" "}
                <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`}>{clinicInfo.phone}</a>
                {" · "}
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </p>
            </article>

            <section id="appointment-form" className="card appointment-form-card">
              <p className="eyebrow">Форма записи</p>
              <h2>Оставьте заявку сейчас</h2>
              <p>Подтвердим визит и подберем врача под ваш запрос.</p>
              <AppointmentForm />
            </section>
          </section>
        </section>

        <section className="section split-section">
          <article className="card">
            <h2 className="section-title">Как проходит подтверждение записи</h2>
            <ol className="journey-list">
              {contactTimeline.map((step, index) => (
                <li key={step}>
                  <h3>Шаг {index + 1}</h3>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </article>
          <aside className="card">
            <h2>Что подготовить к первому визиту</h2>
            <div className="stacked-list">
              <p>Коротко опишите, что беспокоит сейчас и как давно появились симптомы.</p>
              <p>Если есть свежие снимки или заключения, возьмите их с собой или отправьте заранее.</p>
              <p>Сообщите об аллергиях и принимаемых лекарствах для безопасного планирования лечения.</p>
            </div>
          </aside>
        </section>

        <section className="section">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="list-grid">
            {appointmentFaq.map((item) => (
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
