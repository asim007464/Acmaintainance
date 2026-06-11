"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const linkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
      active ? "text-red-600" : "text-neutral-900 hover:text-red-600"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px] gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg bg-neutral-900 flex items-center justify-center shrink-0">
              <span className="text-red-600 font-black text-lg sm:text-xl">R</span>
            </div>
            <div className="min-w-0 leading-tight">
              <p className="font-bold text-red-600 text-xs sm:text-sm truncate">{SITE.shortName}</p>
              <p className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wide truncate">
                Technical Services LLC
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link href={link.href} className={`flex items-center gap-1 ${linkClass(link.href)}`}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-neutral-100 py-2 max-h-[70vh] overflow-y-auto">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:text-red-600 hover:bg-red-50 transition-colors border-b border-neutral-100"
                        >
                          All Services
                        </Link>
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button href="/contact" variant="primary" size="sm">
              Get A Quote
            </Button>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-neutral-900 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${linkClass(link.href)}`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 ml-2 space-y-1 border-l border-neutral-200 pl-3">
                      <Link
                        href="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-sm font-medium text-neutral-700 hover:text-red-600 rounded-lg"
                      >
                        All Services
                      </Link>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-red-600 rounded-lg"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${linkClass(link.href)}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Get A Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
