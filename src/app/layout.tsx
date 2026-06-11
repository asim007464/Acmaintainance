import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SITE } from "@/lib/constants";

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
  title: {
    default: `${SITE.name} | AC Maintenance Dubai`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Dubai's trusted AC maintenance experts since 2014. AC repair, servicing, installation & emergency callouts. Also electrical, plumbing & property services.",
  keywords: [
    "AC maintenance Dubai",
    "AC repair Dubai",
    "air conditioning service Dubai",
    "AC installation Dubai",
    "HVAC maintenance UAE",
    "emergency AC repair Dubai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased bg-white text-neutral-900 overflow-x-clip">
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
