import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { brandLine, clinicInfo } from "@/lib/site-content";
import { buildClinicJsonLd, metadataBase } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase,
  title: "WHITE provenance — стоматология в Новосибирске",
  description:
    "Стоматология WHITE provenance: диагностика, лечение и восстановление зубов с прозрачным планом лечения.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WHITE provenance — стоматология в Новосибирске",
    description: brandLine,
    siteName: clinicInfo.name,
    locale: "ru_RU",
    type: "website",
    url: "/",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "WHITE provenance — стоматология в Новосибирске",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <JsonLd data={buildClinicJsonLd()} />
        {children}
      </body>
    </html>
  );
}
