import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { offers, services } from "@/lib/site-content";

export default function Home() {
  return (
    <SiteShell>
      <section className="grid gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[var(--line)]">
        <SectionHeader
          title="Стоматология WHITE provenance"
          subtitle="Технический старт новой версии сайта: структура контента, маршруты и запись на прием готовы для дальнейшего UX и CMS наполнения."
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white"
          >
            Записаться
          </Link>
          <Link href="/services" className="rounded-full border border-[var(--line)] px-5 py-2 text-sm">
            Смотреть услуги
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl bg-white p-5 ring-1 ring-[var(--line)]">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl bg-white p-8 ring-1 ring-[var(--line)]">
        <h2 className="text-2xl font-semibold tracking-tight">Актуальные предложения</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {offers.map((offer) => (
            <article key={offer.id} className="rounded-xl border border-[var(--line)] p-4">
              <h3 className="font-medium">{offer.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{offer.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
