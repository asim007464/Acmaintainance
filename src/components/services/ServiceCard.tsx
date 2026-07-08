import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { type Service } from "@/lib/constants";
import { SERVICE_IMAGES } from "@/lib/images";
import { getServiceWhatsAppLink } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ServiceCard({ service }: { service: Service }) {
  const isPrimary = service.slug === "hvac-maintenance";
  const imageSrc =
    SERVICE_IMAGES[service.slug] ?? SERVICE_IMAGES["hvac-maintenance"];
  const highlights = service.features.slice(0, 4);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/80 transition-all duration-300 hover:shadow-lg hover:ring-neutral-300/80"
    >
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        aria-label={`View ${service.title} details`}
      />

      <div className="relative z-1 aspect-4/3 w-full shrink-0 overflow-hidden bg-neutral-100 sm:aspect-[5/4]">
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            isPrimary ? "object-top" : ""
          }`}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none relative z-1 flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-lg font-bold leading-snug text-neutral-900">
          {service.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-neutral-600">
          {service.shortDescription}
        </p>

        <ul className="mb-5 flex-1 space-y-2">
          {highlights.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs leading-relaxed text-neutral-700 sm:text-sm"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
              <span>{feature}</span>
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
  );
}
