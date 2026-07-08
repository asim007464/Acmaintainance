"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-start">
          <div className="max-w-2xl mx-auto w-full">
            <p className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-3 text-center">
              Repair & Installation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 sm:mb-10 text-center">
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
