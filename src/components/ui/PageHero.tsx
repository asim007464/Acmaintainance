import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-neutral-900 py-12 sm:py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/60 mb-4 sm:mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2 max-w-full">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-red-600 transition-colors truncate">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-red-600 truncate">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{title}</h1>
        {description && (
          <p className="text-base sm:text-lg text-white/70 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
