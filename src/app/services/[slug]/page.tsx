import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { getServiceWhatsAppLink, getPhoneLink } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const serviceImage =
    SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES["hvac-maintenance"];

  return (
    <>
      <PageHero
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden mb-8 shadow-lg bg-neutral-100">
                <Image
                  src={serviceImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                  <ServiceIcon name={service.icon} className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">{service.title}</h2>
                  <p className="text-neutral-600">Professional service in Dubai</p>
                </div>
              </div>

              <p className="text-lg text-neutral-600 leading-relaxed mb-10">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-neutral-900 mb-6">What We Offer</h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-neutral-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#1da851] transition-colors w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  Book Now on WhatsApp
                </a>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-neutral-900 text-neutral-900 text-sm sm:text-base font-semibold rounded-full hover:bg-neutral-900 hover:text-white transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span className="truncate">{SITE.phone}</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-bold text-lg text-neutral-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm text-neutral-600">
                  {[
                    "Certified technicians",
                    "Same-day service available",
                    "Fair, transparent pricing",
                    "24/7 emergency support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-neutral-900 mb-4">Other Services</h3>
                <ul className="space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-sm text-neutral-600 hover:text-red-600 transition-colors"
                      >
                        <ServiceIcon name={s.icon} className="w-4 h-4 text-red-600" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
