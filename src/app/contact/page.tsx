import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionImage } from "@/components/ui/SectionImage";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { getPhoneLink, getEmailLink, getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name}. Call ${SITE.phone} or email ${SITE.email}.`,
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: SITE.phone,
    href: getPhoneLink(),
    description: "Available 24/7 for bookings",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: SITE.email,
    href: getEmailLink(),
    description: SITE.emailAlt,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: SITE.address,
    description: "Dubai, UAE",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Available",
    description: "Emergency services anytime",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out for quotes, questions, or to start your next project."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-14 sm:py-20 lg:py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-6">
              <SectionImage
                src={IMAGES.contact}
                alt="Contact AQ AC Experts"
                aspect="portrait"
                className="mb-2"
              />

              <SectionHeading
                eyebrow="Reach Out"
                title="Get In Touch"
                description="Multiple ways to connect with our team."
                align="left"
              />

              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-neutral-900 hover:text-red-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-neutral-900">{item.value}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 lg:p-10 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 h-56 sm:h-72 lg:h-96">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509374!2d55.227!3d25.137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA4JzEzLjIiTiA1NcKwMTMnMzcuMiJF!5e0!3m2!1sen!2sae!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
