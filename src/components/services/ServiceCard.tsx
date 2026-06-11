import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { type Service } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { getServiceWhatsAppLink } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ServiceCard({ service }: { service: Service }) {
  const isPrimary = service.slug === "hvac-maintenance";
  const imageSrc =
    SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES["hvac-maintenance"];

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white card-hover ${
        isPrimary
          ? "border-2 border-red-600 ring-4 ring-red-100"
          : "border-neutral-200"
      }`}
    >
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        aria-label={`View ${service.title} details`}
      />

      <div className="pointer-events-none relative z-1">
        <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {isPrimary && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
              <Star className="h-3 w-3 fill-white" />
              Our Specialty
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="mb-2 text-lg font-bold text-neutral-900 sm:mb-3 sm:text-xl">
            {service.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600 sm:mb-6 sm:text-base">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="pointer-events-none relative z-20 mt-auto border-t border-neutral-100 px-5 py-4 sm:px-6 sm:py-5">
        <WhatsAppButton
          href={getServiceWhatsAppLink(service.title)}
          className="pointer-events-auto"
        />
      </div>
    </article>
  );
}
