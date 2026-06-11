import Image from "next/image";
import Link from "next/link";
import { HOME_AC_HIGHLIGHTS } from "@/lib/constants";
import { HOME_AC_IMAGES } from "@/lib/images";
import { getServiceWhatsAppLink } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HomeServices() {
  return (
    <section className="relative pb-20 lg:pb-28">
      {/* Red header block */}
      <div className="bg-red-600 pt-12 sm:pt-16 pb-24 sm:pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
                Our Specialty
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Complete AC Maintenance Solutions
              </h2>
            </div>
            <div className="lg:border-l lg:border-white/25 lg:pl-12">
              <p className="text-white/85 leading-relaxed">
                AC maintenance is what we do best. From routine servicing to
                emergency breakdowns and deep cleaning, Right Zone keeps homes and
                businesses across Dubai cool, efficient, and comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-28 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HOME_AC_HIGHLIGHTS.map((highlight) => (
            <article
              key={highlight.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl card-hover border border-neutral-100"
            >
              <Link
                href={`/services/${highlight.slug}`}
                className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                aria-label={`View ${highlight.title} details`}
              />
              <div className="pointer-events-none">
                <div className="relative h-44 sm:h-52 overflow-hidden bg-neutral-100">
                  <Image
                    src={HOME_AC_IMAGES[highlight.id]}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {highlight.shortDescription}
                  </p>
                  <WhatsAppButton
                    href={getServiceWhatsAppLink(highlight.title)}
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
