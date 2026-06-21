const img = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

/** Primary AC Maintenance & Installation photo — used site-wide */
export const AC_MAINTENANCE_IMAGE = "/images/ac-maintenance-installation.png";

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
  hero: AC_MAINTENANCE_IMAGE,
  aboutMain: AC_MAINTENANCE_IMAGE,
  aboutSecondary1: img("1607472586893-edb57bdc0e39", 600, 400),
  aboutSecondary2: img("1504328345606-18bbc8c9d7d1", 600, 400),
  contact: AC_MAINTENANCE_IMAGE,
  faq: AC_MAINTENANCE_IMAGE,
  aboutPage: AC_MAINTENANCE_IMAGE,
  team: AC_MAINTENANCE_IMAGE,
  servicesBanner: AC_MAINTENANCE_IMAGE,
} as const;

export const HOME_FEATURED_IMAGES: Record<string, string> = {
  "ac-maintenance": AC_MAINTENANCE_IMAGE,
  electrical: img("1621905251189-08b45d6a269e"),
  "cctv-smart-home": img("1563986768609-322da13575f3"),
};

/** @deprecated Use HOME_FEATURED_IMAGES */
export const HOME_AC_IMAGES = HOME_FEATURED_IMAGES;

/** Unique, content-matched photos — one per service slug */
export const SERVICE_IMAGES: Record<string, string> = {
  "hvac-maintenance": AC_MAINTENANCE_IMAGE,
  electrical: img("1621905251189-08b45d6a269e"),
  "cctv-smart-home": img("1563986768609-322da13575f3"),
  partitioning: img("1497366216548-37526070297c"),
  "painting-services": img("1562259949-e8e7689d7828"),
  "ceilings-gypsum": img("1600607687644-c7171b42498f"),
  "carpentry-services": img("1504148455328-c376907d081c"),
  "kitchen-equipment-hood-cleaning": img("1558002038-1055907df827"),
  "plumbing-services": img("1585704032915-c3400ca199e7"),
};
