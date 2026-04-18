import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="Услуги"
        subtitle="Каркас раздела услуг готов для дальнейшей детализации категорий и CMS-синхронизации."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl bg-white p-5 ring-1 ring-[var(--line)]">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
