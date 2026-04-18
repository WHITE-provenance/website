import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/site-shell";

const priceRows = [
  { service: "Первичная консультация", price: "от 1 500 ₽" },
  { service: "Профессиональная гигиена", price: "от 5 000 ₽" },
  { service: "Лечение кариеса", price: "от 6 000 ₽" },
  { service: "Имплантация", price: "от 45 000 ₽" },
];

export default function PricesPage() {
  return (
    <SiteShell>
      <SectionHeader
        title="Цены"
        subtitle="MVP-таблица цен. На следующем этапе переедет в CMS и дополняется юридическими примечаниями."
      />
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-[var(--line)]">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {priceRows.map((row) => (
              <tr key={row.service} className="border-b border-[var(--line)] last:border-0">
                <td className="px-4 py-3">{row.service}</td>
                <td className="px-4 py-3 text-right font-medium">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SiteShell>
  );
}
