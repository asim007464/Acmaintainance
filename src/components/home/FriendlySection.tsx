import { CheckCircle } from "lucide-react";
import { STATS } from "@/lib/constants";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ReviewAvatars } from "@/components/ui/ReviewAvatars";

export function FriendlySection() {
  return (
    <section className="bg-section-dark text-white py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          <div>
            <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Friendly Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8">
              Same-Day Service at Low Cost, Delivered by Our Expert Team!
            </h2>
            <ul className="space-y-4">
              {[
                "5-Star Rated Service",
                "24/7 Availability",
                "10+ Years of Experience",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-12">
            <p className="text-white/70 leading-relaxed mb-8">
              Whether it&apos;s a small repair or a large installation, we ensure that
              every project is completed with the utmost care, professionalism, and
              attention to detail. Trust us to handle your home or business with the
              highest standards of service.
            </p>
            <ReviewAvatars size="sm" />
          </div>
        </div>

        <StatsCounter stats={STATS} light />
      </div>
    </section>
  );
}
