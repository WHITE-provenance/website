import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { offers } from "@/lib/site-content";
import { buildBreadcrumbJsonLd, createRouteMetadata } from "@/lib/seo";

export const metadata = createRouteMetadata({
  title: "Акции стоматологии в Новосибирске | WHITE provenance",
  description:
    "Актуальные акции WHITE provenance: специальные условия на востребованные стоматологические услуги в Новосибирске.",
  pathname: "/offers",
});

export default function OffersPage() {
  return (
    <SiteShell>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Акции", path: "/offers" },
        ])}
      />
      <div className="container page">
        <section className="hero">
          <p className="eyebrow">Специальные условия</p>
          <h1>Акции и специальные предложения</h1>
          <p className="lead">
            Публикуем актуальные предложения клиники с понятными условиями и сроками действия.
          </p>
          <p className="notice">Точные условия уточняйте у администратора при записи.</p>
        </section>

        <section className="section">
          <div className="grid-3">
            {offers.map((offer) => (
              <article key={offer.id} className="card">
                <h2>{offer.title}</h2>
                <p>{offer.description}</p>
                <p>{offer.validUntil}</p>
                <div className="actions">
                  <Link href="/appointment" className="button button-gold">
                    Записаться по акции
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
