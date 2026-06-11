import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { HIGHLIGHTS, SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { getPhoneLink } from "@/lib/utils";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

function StatsBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-red-600 text-white rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-xl text-center ${className}`}
    >
      <p className="text-2xl sm:text-3xl font-bold">10+</p>
      <p className="text-xs sm:text-sm font-medium text-white/90">Years</p>
      <div className="w-8 h-px bg-white/40 mx-auto my-2 sm:my-3" />
      <p className="text-2xl sm:text-3xl font-bold">98%</p>
      <p className="text-xs sm:text-sm font-medium text-white/90">Satisfaction</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white pattern-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Mobile & tablet: stacked layout */}
          <div className="lg:hidden w-full space-y-4">
            <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-xl bg-neutral-100">
              <Image
                src={IMAGES.aboutMain}
                alt="Technician at work"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-neutral-100">
                <Image
                  src={IMAGES.aboutSecondary1}
                  alt="Professional plumbing service"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-neutral-100">
                <Image
                  src={IMAGES.aboutSecondary2}
                  alt="Expert maintenance work"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>

            <StatsBadge className="w-full max-w-xs mx-auto" />
          </div>

          {/* Desktop: collage with center badge */}
          <div className="hidden lg:block relative w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="row-span-2 relative rounded-2xl overflow-hidden h-[420px] shadow-xl bg-neutral-100">
                <Image
                  src={IMAGES.aboutMain}
                  alt="Technician at work"
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[200px] shadow-lg bg-neutral-100">
                <Image
                  src={IMAGES.aboutSecondary1}
                  alt="Professional plumbing service"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[200px] shadow-lg bg-neutral-100">
                <Image
                  src={IMAGES.aboutSecondary2}
                  alt="Expert maintenance work"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <StatsBadge className="min-w-[140px] px-6 py-8" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-3">
              24/7 Hassle-Free
            </p>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight lg:flex-1">
                Transforming Spaces with Quality and Expertise
              </h2>
              <div className="hidden lg:block w-px bg-neutral-200 shrink-0" />
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed lg:flex-1 lg:pt-1">
                Since {SITE.founded}, {SITE.name} has been a trusted partner for
                AC maintenance and property services in Dubai. Our certified team
                delivers reliable, high-quality solutions tailored to your needs.
              </p>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 lg:hidden">
              Since {SITE.founded}, {SITE.name} has been a trusted partner for
              AC maintenance and property services in Dubai. Our certified team
              delivers reliable, high-quality solutions tailored to your needs.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 sm:gap-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-200 flex items-center justify-center shrink-0">
                    <ServiceIcon name={item.icon} className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors text-center"
              >
                Read More
              </Link>
              <a href={getPhoneLink()} className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{SITE.phone}</p>
                  <p className="text-sm text-neutral-500">Call For Booking</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
