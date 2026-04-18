import Link from "next/link";
import { clinicInfo, navItems } from "@/lib/site-content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <header className="border-b border-[var(--line)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {clinicInfo.name}
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--accent)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
      <footer className="border-t border-[var(--line)] bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-600">
          <p>{clinicInfo.name}</p>
          <p>
            {clinicInfo.city}, {clinicInfo.address}
          </p>
          <p>
            {clinicInfo.phone} · {clinicInfo.email}
          </p>
        </div>
      </footer>
    </div>
  );
}
