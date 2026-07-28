import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date();
const toSitemapImages = (image?: string) =>
  image && image.startsWith("/") ? [absoluteUrl(image)] : undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: toSitemapImages("/images/header.png"),
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: toSitemapImages("/images/acmaintiance.png"),
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: toSitemapImages("/images/acmaintiance.png"),
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    images: toSitemapImages(
      SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES["hvac-maintenance"],
    ),
  }));

  return [...staticPages, ...servicePages];
}
