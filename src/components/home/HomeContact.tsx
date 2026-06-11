import Image from "next/image";
import { Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { HomeContactForm } from "@/components/contact/HomeContactForm";

export function HomeContact() {
  return (
    <section className="bg-red-600 py-12 sm:py-16 lg:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-stretch">
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[340px] lg:min-h-0 lg:aspect-4/5 shadow-xl">
            <Image
              src={IMAGES.contact}
              alt="Contact our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-sm p-5 sm:p-6 m-3 sm:m-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white text-sm sm:text-base">24/7 Contact Support</p>
                  <p className="text-white/70 text-xs sm:text-sm truncate">{SITE.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-white mb-6 sm:mb-8">
              <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                Have Questions? We&apos;re Just a Message Away!
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need AC maintenance, a quote, or want to start a project —
                our team is ready to assist. Contact us today.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-2xl flex-1">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
