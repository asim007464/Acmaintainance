import type { Metadata } from "next";
import {
  FAQS,
  SERVICE_AREAS,
  SERVICES,
  SITE,
  type Service,
} from "@/lib/constants";
import { IMAGES, SERVICE_IMAGES } from "@/lib/images";

const fallbackSiteUrl = "https://www.aqacexperts.com";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? fallbackSiteUrl;

export const defaultOgImage = IMAGES.hero;
const placeholderSocialUrls = new Set([
  "https://facebook.com",
  "https://twitter.com",
  "https://youtube.com",
  "https://instagram.com",
]);

export const baseKeywords = [
  "AC maintenance Dubai",
  "AC repair Dubai",
  "AC service Dubai",
  "AC installation Dubai",
  "HVAC maintenance Dubai",
  "air conditioning repair Dubai",
  "air conditioning maintenance Dubai",
  "same day AC repair Dubai",
  "24/7 AC repair Dubai",
  "split AC repair Dubai",
  "central AC maintenance Dubai",
  "duct cleaning Dubai",
  "AC gas refill Dubai",
  "emergency AC service Dubai",
  "property maintenance Dubai",
  "technical services Dubai",
  "emergency AC repair Dubai",
  "same day AC service Dubai",
  ...SERVICE_AREAS.flatMap((area) => [
    `AC repair ${area}`,
    `AC maintenance ${area}`,
    `technical services ${area}`,
  ]),
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteUrl).toString();
}

export function buildKeywords(keywords: string[] = []) {
  return Array.from(new Set([...baseKeywords, ...keywords]));
}

type PageSeoInput = {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = defaultOgImage,
}: PageSeoInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const pageTitle = title ? `${title} | ${SITE.shortName}` : `${SITE.name} | AC Maintenance Dubai`;

  return {
    title,
    description,
    keywords: buildKeywords(keywords),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: pageTitle,
      description,
      siteName: SITE.name,
      locale: "en_AE",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ? `${title} - ${SITE.name}` : `${SITE.name} homepage`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

export function buildServiceKeywords(service: Service) {
  return [
    service.title,
    `${service.title} Dubai`,
    `${service.title.toLowerCase()} Dubai`,
    `${service.shortDescription.split(".")[0]} Dubai`,
    ...service.features.map((feature) => `${feature} Dubai`),
  ];
}

export function getLocalBusinessSchema() {
  const sameAs = Object.values(SITE.social).filter(
    (url) => !placeholderSocialUrls.has(url),
  );

  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${absoluteUrl()}/#business`,
    name: SITE.name,
    url: absoluteUrl(),
    image: absoluteUrl(IMAGES.hero),
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Dubai",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
    ],
    foundingDate: String(SITE.founded),
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    sameAs,
    description: SITE.heroDescription,
    services: SERVICES.map((service) => service.title),
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    provider: {
      "@type": "HVACBusiness",
      name: SITE.name,
      url: absoluteUrl(),
      telephone: SITE.phone,
    },
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(
      SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES["hvac-maintenance"],
    ),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      url: absoluteUrl(`/contact?service=${service.slug}`),
    },
  };
}
