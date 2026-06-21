import type { Metadata } from "next";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { StatsCounter } from "@/components/home/StatsCounter";
import { STATS, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — trusted property maintenance experts in Dubai since ${SITE.founded}.`,
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional property maintenance services that exceed client expectations through innovation, quality craftsmanship, and unwavering reliability.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Dubai's most trusted name in technical services, setting the standard for excellence in property maintenance and customer satisfaction.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, safety, and customer-first approach guide everything we do. We treat every project as if it were our own property.",
  },
];

const yearsInBusiness = new Date().getFullYear() - SITE.founded;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Discover the story behind Dubai's trusted AC maintenance specialists."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Dubai's AC Maintenance Specialists"
                align="left"
              />
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
                AQ AC Experts has been keeping Dubai cool for over
                a decade. AC maintenance is our core expertise — from split units and
                central systems to commercial chillers — backed by certified technicians
                and same-day emergency service.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Beyond AC, we offer electrical, plumbing, painting, and full property
                maintenance. One trusted team for everything your home or business needs.
              </p>
              <ul className="space-y-3">
                {[
                  "AC repair, servicing & installation",
                  "All brands & unit types",
                  "24/7 emergency AC callouts",
                  "Serving all areas of Dubai",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-900">
                    <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <SectionImage
              src={IMAGES.aboutPage}
              alt="AC maintenance technician at work in Dubai"
              aspect="video"
              priority
              overlay={
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:right-auto lg:max-w-xs bg-red-600 text-white rounded-2xl px-6 py-5 shadow-2xl">
                  <p className="text-4xl sm:text-5xl font-bold mb-1">{yearsInBusiness}+</p>
                  <p className="text-lg font-semibold">Years of Excellence</p>
                  <p className="text-white/80 text-sm mt-1">Serving Dubai with pride</p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionImage
            src={IMAGES.team}
            alt="AQ AC Experts team"
            aspect="wide"
            overlay={
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="p-6 sm:p-10 max-w-lg">
                  <p className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
                    Our Team
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    Certified Technicians You Can Trust
                  </h2>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-neutral-50 text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter stats={STATS} />
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-neutral-200 rounded-2xl p-8 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
