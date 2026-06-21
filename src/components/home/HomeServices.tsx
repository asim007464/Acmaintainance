import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { HOME_FEATURED_SERVICES } from "@/lib/constants";
import { HOME_FEATURED_IMAGES } from "@/lib/images";
import { getServiceWhatsAppLink } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const FEATURED_BULLETS: Record<string, string[]> = {
  "ac-maintenance": [
    "AC repair, servicing & installation",
    "New AC unit installation",
    "Same-day service across Dubai",
  ],
  electrical: [
    "Wiring & lighting installations",
    "Safety inspections & certifications",
    "Emergency electrical repairs",
  ],
  "cctv-smart-home": [
    "CCTV camera installation",
    "Smart home automation",
    "Remote monitoring setup",
  ],
};

export function HomeServices() {
  return (
    <section className="relative pb-20 lg:pb-28">
      <div className="bg-red-600 pt-12 sm:pt-16 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                AC, Electrical & Smart Home Solutions
              </h2>
            </div>
            <div className="lg:border-l lg:border-white/25 lg:pl-12">
              <p className="text-white/85 leading-relaxed">
                AQ AC Experts delivers trusted AC maintenance, professional electrical
                work, and CCTV & smart home installations — keeping homes and
                businesses across Dubai cool, safe, and connected.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-28 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {HOME_FEATURED_SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-200/80 transition-all duration-300 hover:shadow-xl"
            >
              <Link
                href={`/services/${service.slug}`}
                className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                aria-label={`View ${service.title} details`}
              />

              <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-neutral-100 sm:aspect-[5/4]">
                <Image
                  src={HOME_FEATURED_IMAGES[service.id]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="pointer-events-none flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
                  {service.category}
                </p>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  {service.shortDescription}
                </p>

                <ul className="mb-5 flex-1 space-y-2">
                  {(FEATURED_BULLETS[service.id] ?? []).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-neutral-700 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-neutral-100 pt-4">
                  <WhatsAppButton
                    href={getServiceWhatsAppLink(service.title)}
                    size="md"
                    fullWidth={false}
                    className="pointer-events-auto relative z-20"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
