import { HomeContactForm } from "@/components/contact/HomeContactForm";

export function HomeContact() {
  return (
    <section className="bg-red-600 py-12 sm:py-16 lg:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col text-center items-center">
            <div className="text-white mb-6 sm:mb-8">
              <p className="text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                Have Questions? We&apos;re Just a Message Away!
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Whether you need AC maintenance, a quote, or want to start a project —
                our team is ready to assist. Contact us today.
              </p>
            </div>

            <div className="w-full bg-white rounded-2xl p-5 sm:p-7 lg:p-8 shadow-2xl">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
