import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getPhoneLink, getEmailLink } from "@/lib/utils";
import { CTASection } from "@/components/home/CTASection";
import { SocialIcon } from "@/components/icons/SocialIcon";

export function Footer() {
  return (
    <footer>
      <CTASection />

      {/* Red contact bar */}
      <div className="bg-red-600 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white text-center sm:text-left">
            <a href={getPhoneLink()} className="flex flex-col sm:flex-row items-center gap-3 hover:opacity-90">
              <Phone className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm text-white/80">Have a Question?</p>
                <p className="font-bold">{SITE.phone}</p>
              </div>
            </a>
            <a href={getEmailLink()} className="flex flex-col sm:flex-row items-center gap-3 hover:opacity-90">
              <Mail className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm text-white/80">Contact us at</p>
                <p className="font-semibold text-sm">{SITE.email}</p>
              </div>
            </a>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <MapPin className="w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm text-white/80">We are located at</p>
                <p className="font-semibold text-sm break-words">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black footer */}
      <div className="bg-black text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pb-8 md:pb-0 md:pr-10 text-center md:text-left">
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                For expert AC maintenance and reliable solutions, reach out to{" "}
                {SITE.shortName}. We&apos;re here to help!
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                {[
                  { name: "facebook" as const, label: "Facebook", href: SITE.social.facebook },
                  { name: "x" as const, label: "X", href: SITE.social.twitter },
                  { name: "youtube" as const, label: "YouTube", href: SITE.social.youtube },
                  { name: "instagram" as const, label: "Instagram", href: SITE.social.instagram },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-white/70 hover:bg-red-700 hover:text-white transition-colors"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                ))}
              </div>
            </div>

            <div className="py-8 md:py-0 md:px-10 text-center md:text-left">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5">Company</h3>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 md:pt-0 md:pl-10 text-center md:text-left">
              <h3 className="font-bold text-sm tracking-widest uppercase mb-5">Reach Out</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/40">
            <p>
              {new Date().getFullYear()} © {SITE.name} | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
