import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { offers } from "@/lib/site-content";

export default function OffersPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="Акции"
        subtitle="Раздел акций готов к подключению расписания публикаций и сроков действия из CMS."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <article key={offer.id} className="rounded-xl bg-white p-5 ring-1 ring-[var(--line)]">
            <h2 className="text-lg font-semibold">{offer.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{offer.description}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
