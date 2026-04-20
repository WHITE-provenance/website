import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { clinicInfo } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Контакты стоматологии WHITE provenance в Новосибирске",
  description:
    "Адрес, телефон и онлайн-запись в стоматологию WHITE provenance. Быстрая связь с администратором клиники.",
  pathname: "/contacts",
});

export default function ContactsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/contacts" },
        ])}
      />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Контакты</p>
          <h1>Контакты и запись</h1>
          <p className="lead">
            Свяжитесь с нами по телефону или оставьте заявку онлайн. Подскажем по услугам и подберем
            удобное время приема.
          </p>
          <p className="notice">Администратор отвечает в рабочие часы клиники.</p>
          <div className="actions">
            <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`} className="button button-gold">
              Позвонить в клинику
            </a>
            <Link href="/appointment" className="button button-light">
              Оставить заявку
            </Link>
          </div>
        </section>

        <section className="section grid-3">
          <article className="card">
            <h2>Адрес</h2>
            <p>{clinicInfo.city}</p>
            <p>{clinicInfo.address}</p>
          </article>
          <article className="card">
            <h2>Телефон и email</h2>
            <p>{clinicInfo.phone}</p>
            <p>{clinicInfo.email}</p>
          </article>
          <article className="card">
            <h2>Режим работы</h2>
            <p>{clinicInfo.hours}</p>
          </article>
        </section>
      </div>
    </SiteShell>
  );
}
