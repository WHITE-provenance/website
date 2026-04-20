import type { Metadata } from "next";
import { clinicInfo } from "@/lib/site-content";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl = rawSiteUrl && /^https?:\/\//.test(rawSiteUrl) ? rawSiteUrl : "https://white-provenance.github.io";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || process.env.PAGES_BASE_PATH?.trim();
const basePath = rawBasePath && rawBasePath !== "/" ? rawBasePath.replace(/\/+$/, "") : "";

export const metadataBase = new URL(siteUrl);

function withBasePath(pathname: string): string {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  if (!basePath) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${normalizedPath}`;
}

export function absoluteUrl(pathname = "/"): string {
  return new URL(withBasePath(pathname), metadataBase).toString();
}

export function createRouteMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const canonical = absoluteUrl(pathname);
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
      siteName: clinicInfo.name,
      url: canonical,
      images: [
        {
          url: absoluteUrl("/favicon.ico"),
          width: 512,
          height: 512,
          alt: "WHITE provenance — стоматология в Новосибирске",
        },
      ],
    },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(
  items: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildClinicJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinicInfo.name,
    image: absoluteUrl("/favicon.ico"),
    url: absoluteUrl("/"),
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressLocality: clinicInfo.city,
      streetAddress: clinicInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.geo.latitude,
      longitude: clinicInfo.geo.longitude,
    },
    openingHours: ["Mo-Sa 09:00-21:00", "Su 10:00-18:00"],
    areaServed: clinicInfo.city,
    priceRange: "₽₽",
  };
}
