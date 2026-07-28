import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { HomeServices } from "@/components/home/HomeServices";
import { FriendlySection } from "@/components/home/FriendlySection";
import { WhyUsBanner } from "@/components/home/WhyUsBanner";
import { HomeContact } from "@/components/home/HomeContact";
import { FAQ } from "@/components/home/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import { absoluteUrl, buildPageMetadata, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

export const metadata = buildPageMetadata({
  description:
    "Book AC maintenance, AC repair, AC installation, duct cleaning, and full technical services in Dubai with AQ AC Experts.",
  keywords: [
    "Dubai AC company",
    "AC duct cleaning Dubai",
    "split AC repair Dubai",
    "central AC maintenance Dubai",
    "commercial AC service Dubai",
    "AC technician Dubai Marina",
    "AC repair Jumeirah",
    "AC service Business Bay",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getFaqSchema()} />
      <JsonLd
        data={getBreadcrumbSchema([{ name: "Home", url: absoluteUrl("/") }])}
      />
      <Hero />
      <AboutSection />
      <HomeServices />
      <FriendlySection />
      <WhyUsBanner />
      <section className="bg-neutral-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dubai AC Experts"
            title="AC Maintenance, Repair, Installation and Property Services Across Dubai"
            description="This section adds location-rich service copy that helps search engines understand what the business does, where it operates, and which service terms matter most."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-neutral-900">
                Residential and Commercial AC Services
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {SITE.name} provides AC maintenance in Dubai for apartments, villas, offices,
                retail units, and commercial properties. Our technicians handle split AC repair,
                central AC servicing, duct cleaning, thermostat issues, gas refilling, and same-day
                emergency callouts.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-neutral-900">
                Complete Technical Services
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Alongside air conditioning work, we offer electrical, plumbing, painting,
                carpentry, partitioning, kitchen hood cleaning, and preventive maintenance support
                for homes and businesses throughout Dubai.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-neutral-900">
                Why Customers Search for Us
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Customers typically find us when searching for AC repair Dubai, AC service Dubai,
                AC installation Dubai, HVAC maintenance Dubai, and emergency AC repair near me. This
                page now reflects those service intents in natural on-page copy instead of keyword
                stuffing.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-neutral-900">
              Areas We Commonly Serve in Dubai
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              We provide AC maintenance, AC repair, AC installation, and technical services across
              Dubai, including high-demand areas where customers often search for local technicians.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700">
              {SERVICE_AREAS.join(", ")}
            </p>
          </div>
        </div>
      </section>
      <HomeContact />
      <FAQ />
    </>
  );
}
