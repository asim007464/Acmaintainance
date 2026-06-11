"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:bg-[#1da851] sm:h-auto sm:w-auto sm:px-5 sm:py-3 sm:hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" />
      <span className="hidden font-semibold text-sm sm:inline">WhatsApp us</span>
    </a>
  );
}
