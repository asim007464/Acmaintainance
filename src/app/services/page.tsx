import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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

      <section className="pb-14 sm:pb-20 lg:pb-28 bg-neutral-50 text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <SectionImage
              src={IMAGES.servicesBanner}
              alt="Professional AC and property maintenance services in Dubai"
              aspect="wide"
              overlay={
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent flex items-center">
                  <div className="p-6 sm:p-10 max-w-xl">
                    <p className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
                      Professional Service
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Expert Solutions for Every Property Need
                    </h2>
                  </div>
                </div>
              }
            />
          </div>

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
