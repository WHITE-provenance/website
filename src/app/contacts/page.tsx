import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";
import { clinicInfo } from "@/lib/site-content";

export default function ContactsPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="Контакты"
        subtitle="Контакты вынесены в единую модель данных для переиспользования в шаблонах и CMS."
      />
      <div className="rounded-xl bg-white p-6 ring-1 ring-[var(--line)]">
        <p>{clinicInfo.city}</p>
        <p>{clinicInfo.address}</p>
        <p className="mt-2">{clinicInfo.phone}</p>
        <p>{clinicInfo.email}</p>
      </div>
    </SiteShell>
  );
}
