import Link from "next/link";
import { clinicInfo, navItems } from "@/lib/site-content";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="container utility-bar">
          <p>{clinicInfo.city}</p>
          <div className="utility-links">
            <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`}>{clinicInfo.phone}</a>
            <span>·</span>
            <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
            <span>·</span>
            <span>{clinicInfo.hours}</span>
          </div>
        </div>
        <div className="container nav-row">
          <Link href="/" className="brand-mark">
            <span className="brand-main">WHITE</span>
            <span className="brand-sub">provenance</span>
          </Link>
          <nav className="desktop-nav" aria-label="Главное меню">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/appointment" className="button button-light desktop-cta">
            Записаться
          </Link>
          <details className="mobile-menu">
            <summary>Меню</summary>
            <div className="mobile-menu-panel">
              <a className="mobile-contact" href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`}>
                {clinicInfo.phone}
              </a>
              <p className="mobile-hours">{clinicInfo.hours}</p>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/offers" className="footer-link">
                Спецпредложения
              </Link>
              <Link href="/appointment" className="button button-gold">
                Записаться на консультацию
              </Link>
            </div>
          </details>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">{clinicInfo.name}</p>
            <p>{clinicInfo.city}</p>
            <p>{clinicInfo.address}</p>
          </div>
          <div>
            <p className="footer-title">Связь</p>
            <p>{clinicInfo.phone}</p>
            <p>{clinicInfo.email}</p>
          </div>
          <div>
            <p className="footer-title">Режим работы</p>
            <p>{clinicInfo.hours}</p>
            <Link href="/appointment" className="footer-link">
              Оставить заявку онлайн
            </Link>
            <Link href="/offers" className="footer-link footer-link-muted">
              Спецпредложения
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
