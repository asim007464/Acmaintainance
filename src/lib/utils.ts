import { SITE } from "./constants";

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.phoneRaw}?text=${text}`;
}

export function getServiceWhatsAppLink(serviceName: string): string {
  return getWhatsAppLink(
    `Hello! I would like to book ${serviceName} with ${SITE.name}.`
  );
}

export function getPhoneLink(): string {
  return `tel:${SITE.phoneRaw}`;
}

export function getEmailLink(): string {
  return `mailto:${SITE.email}`;
}
