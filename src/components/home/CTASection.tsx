import Link from "next/link";
import { Wind, Phone, Wrench } from "lucide-react";

const ctaColumns = [
  {
    icon: Wind,
    title: "AC Maintenance",
    description:
      "Routine servicing, deep cleaning, and tune-ups to keep your cooling running efficiently all year.",
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description:
      "AC stopped working? Our certified technicians offer same-day and 24/7 emergency callouts in Dubai.",
  },
  {
    icon: Phone,
    title: "Free Consultation",
    description:
      "Not sure what you need? Speak with our team for honest advice and a transparent quote.",
  },
];

export function CTASection() {
  return (
    <section className="bg-neutral-800 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ctaColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center text-center md:items-start md:text-left bg-neutral-700/40 border border-white/10 rounded-2xl p-6 sm:p-7"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center mb-5 shrink-0">
                <column.icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">{column.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6 grow">{column.description}</p>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-800 transition-colors shadow-lg"
              >
                Get A Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
