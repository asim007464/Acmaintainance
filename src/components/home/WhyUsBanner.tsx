import { WHY_US } from "@/lib/constants";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

export function WhyUsBanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="bg-red-600 p-6 sm:p-10 lg:p-14 lg:w-[38%] shrink-0">
            <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
              People Trust
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Why We Are Best
            </h2>
            <p className="text-white/85 leading-relaxed">
              We deliver quality services on time and within budget, always ensuring
              customer satisfaction across Dubai.
            </p>
          </div>

          <div className="bg-neutral-100 p-6 sm:p-10 lg:p-14 flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {WHY_US.slice(0, 3).map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                  <ServiceIcon name={item.icon} className="w-10 h-10 text-neutral-900" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
