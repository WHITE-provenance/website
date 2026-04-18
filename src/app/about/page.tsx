import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="О клинике"
        subtitle="Страница о клинике с заготовкой под USP, историю бренда, оборудование и стандарты качества."
      />
      <article className="rounded-xl bg-white p-6 text-slate-700 ring-1 ring-[var(--line)]">
        WHITE provenance — стоматология в Новосибирске с фокусом на предсказуемые клинические протоколы, цифровую диагностику и прозрачную коммуникацию с пациентом.
      </article>
    </SiteShell>
  );
}
