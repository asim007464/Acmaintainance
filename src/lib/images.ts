const img = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

/** AC maintenance & installation photo — used for all AC service imagery */
export const AC_MAINTENANCE_IMAGE = "/images/acmaintiance.png";

/** CCTV & smart home photo — used for smart home service imagery */
export const SMART_HOME_IMAGE = "/images/smarthome.png";

/** Electrical service photo */
export const ELECTRICAL_IMAGE = "/images/electrition.png";

/** Contact/support photo — Asian team ready to assist customers */
export const CONTACT_SUPPORT_IMAGE = img("1573164119057-4bb0c2ef2fb8", 900, 1000);

/** About page — AC specialists & Dubai experience */
export const ABOUT_SPECIALISTS_IMAGE = AC_MAINTENANCE_IMAGE;

/** About page — certified technicians & trusted team */
export const ABOUT_TEAM_IMAGE = img("1558618666-fcd25c85cd64", 1200, 500);

export const REVIEW_AVATARS = [
  {
    src: img("1507003211169-0a1dd7228f2d", 80, 80),
    alt: "Happy customer",
  },
  {
    src: img("1494790108377-be9c29b29330", 80, 80),
    alt: "Satisfied client",
  },
  {
    src: img("1472099645785-5658abf4ff4e", 80, 80),
    alt: "Verified reviewer",
  },
  {
    src: img("1438761681033-6461ffad8d80", 80, 80),
    alt: "Dubai homeowner",
  },
] as const;

export const IMAGES = {
  hero: "/images/header.png",
  aboutMain: AC_MAINTENANCE_IMAGE,
  aboutSecondary1: img("1607472586893-edb57bdc0e39", 600, 400),
  aboutSecondary2: img("1504328345606-18bbc8c9d7d1", 600, 400),
  contact: CONTACT_SUPPORT_IMAGE,
  faq: AC_MAINTENANCE_IMAGE,
  aboutPage: ABOUT_SPECIALISTS_IMAGE,
  team: ABOUT_TEAM_IMAGE,
  servicesBanner: AC_MAINTENANCE_IMAGE,
} as const;

export const HOME_FEATURED_IMAGES: Record<string, string> = {
  "ac-maintenance": AC_MAINTENANCE_IMAGE,
  electrical: ELECTRICAL_IMAGE,
  "cctv-smart-home": SMART_HOME_IMAGE,
};

/** @deprecated Use HOME_FEATURED_IMAGES */
export const HOME_AC_IMAGES = HOME_FEATURED_IMAGES;

/** Unique, content-matched photos — one per service slug */
export const SERVICE_IMAGES: Record<string, string> = {
  "hvac-maintenance": AC_MAINTENANCE_IMAGE,
  electrical: ELECTRICAL_IMAGE,
  "cctv-smart-home": SMART_HOME_IMAGE,
  partitioning: img("1497366216548-37526070297c"),
  "painting-services": img("1562259949-e8e7689d7828"),
  "ceilings-gypsum": img("1600607687644-c7171b42498f"),
  "carpentry-services": img("1504148455328-c376907d081c"),
  "kitchen-equipment-hood-cleaning": img("1558002038-1055907df827"),
  "plumbing-services": img("1585704032915-c3400ca199e7"),
};
