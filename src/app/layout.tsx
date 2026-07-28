import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { absoluteUrl, buildKeywords, defaultOgImage, getLocalBusinessSchema, siteUrl } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} | AC Maintenance Dubai`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Dubai's trusted AC maintenance experts since 2014. AC repair, servicing, installation & emergency callouts. Also electrical, plumbing & property services.",
  keywords: buildKeywords(),
  alternates: {
    canonical: absoluteUrl("/"),
  },
  applicationName: SITE.name,
  category: "Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: SITE.name,
    locale: "en_AE",
    title: `${SITE.name} | AC Maintenance Dubai`,
    description:
      "Dubai's trusted AC maintenance experts since 2014. AC repair, servicing, installation & emergency callouts. Also electrical, plumbing & property services.",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${SITE.name} AC maintenance services in Dubai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | AC Maintenance Dubai`,
    description:
      "Dubai's trusted AC maintenance experts since 2014. AC repair, servicing, installation & emergency callouts. Also electrical, plumbing & property services.",
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased bg-white text-neutral-900 overflow-x-clip">
        <JsonLd data={getLocalBusinessSchema()} />
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="grow min-w-0">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
