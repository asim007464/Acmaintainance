"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
