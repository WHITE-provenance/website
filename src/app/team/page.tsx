import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { doctors } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Врачи стоматологии WHITE provenance в Новосибирске",
  description:
    "Команда стоматологов WHITE provenance: специализации, опыт, сертификации и комплексный подход к лечению в Новосибирске.",
  pathname: "/team",
});

export default function TeamPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Врачи", path: "/team" },
        ])}
      />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Команда</p>
          <h1>Команда врачей WHITE provenance</h1>
          <p className="lead">
            В клинике работают специалисты разных профилей, чтобы пациент получал комплексное и
            предсказуемое лечение.
          </p>
          <p className="notice">
            Для сложных случаев проводим внутренний консилиум и формируем единый маршрут лечения.
          </p>
          <div className="actions">
            <Link href="/appointment" className="button button-gold">
              Записаться к врачу
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <article key={doctor.id} className="card doctor-card">
                <h2>{doctor.name}</h2>
                <p>{doctor.role}</p>
                <p>{doctor.experience}</p>
                <p>{doctor.focus}</p>
                <div className="chip-list" aria-label={`${doctor.name} образование и членства`}>
                  {doctor.credentials.map((item) => (
                    <span key={`${doctor.id}-${item}`} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="stacked-list">
                  <h3>Сертификации</h3>
                  {doctor.certifications.map((item) => (
                    <p key={`${doctor.id}-${item}`}>{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
