import Image from "next/image";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { ReviewAvatars } from "@/components/ui/ReviewAvatars";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="AC maintenance technician at work"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="max-w-2xl">
          <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Let&apos;s get to work
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-4 sm:mb-6">
            {SITE.tagline}
          </h1>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 sm:mb-10 max-w-xl">
            {SITE.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Get A Quote
            </Button>
            <Button href="/about" variant="outline-dark" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>

          <ReviewAvatars />
        </div>
      </div>
    </section>
  );
}
