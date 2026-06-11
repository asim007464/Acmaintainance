"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left image + CTA */}
          <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[420px] lg:h-[560px] shadow-xl bg-neutral-100">
            <Image
              src={IMAGES.faq}
              alt="AC repair service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-neutral-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Still Have Doubts?</h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Feel free to reach out. We&apos;re here to help and provide all the
                answers you need!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-800 transition-colors text-sm"
              >
                Submit Your Query
              </Link>
            </div>
          </div>

          {/* FAQ accordion */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-3">
              Repair & Installation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 sm:mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-xl overflow-hidden border transition-colors ${
                      isOpen ? "border-red-600" : "border-neutral-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(index)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                        isOpen
                          ? "bg-red-600 text-white"
                          : "bg-white text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      <span className="font-semibold pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 shrink-0 transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 bg-neutral-50 border-t border-neutral-100">
                        <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
