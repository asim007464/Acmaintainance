import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `AC maintenance, repair & installation plus full property services from ${SITE.name} in Dubai.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="AC maintenance is our specialty. We also offer electrical, plumbing, painting, and complete property maintenance across Dubai."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-14 sm:pb-20 lg:pb-28 bg-neutral-50 text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Professional Maintenance Services"
            description="Trusted technicians for AC, electrical, plumbing, and complete property care across Dubai."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
