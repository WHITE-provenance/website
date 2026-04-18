import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { doctors } from "@/lib/site-content";

export default function TeamPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="Команда"
        subtitle="Страница команды подключена к типизированной модели профилей врачей."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {doctors.map((doctor) => (
          <article key={doctor.id} className="rounded-xl bg-white p-5 ring-1 ring-[var(--line)]">
            <h2 className="text-lg font-semibold">{doctor.name}</h2>
            <p className="mt-1 text-sm text-slate-700">{doctor.role}</p>
            <p className="mt-2 text-sm text-slate-600">{doctor.experience}</p>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
