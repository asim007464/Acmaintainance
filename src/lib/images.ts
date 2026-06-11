const img = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

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
  hero: `https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80`,
  aboutMain: img("1558618666-fcd25c85cd64", 800, 600),
  aboutSecondary1: img("1607472586893-edb57bdc0e39", 600, 400),
  aboutSecondary2: img("1504328345606-18bbc8c9d7d1", 600, 400),
  contact: img("1558618666-fcd25c85cd64", 800, 1000),
  faq: img("1621905251918-48416bd8575a", 800, 1000),
  aboutPage: img("1558618666-fcd25c85cd64", 900, 700),
  team: img("1621905251918-48416bd8575a", 1200, 500),
  servicesBanner: img("1558618666-fcd25c85cd64", 1200, 500),
} as const;

export const HOME_AC_IMAGES: Record<string, string> = {
  "ac-servicing": img("1558618666-fcd25c85cd64"),
  "ac-emergency": img("1621905251918-48416bd8575a"),
  "ac-cleaning": img("1581092160607-ee22621dd758"),
};

/** Unique, content-matched photos — one per service slug */
export const SERVICE_IMAGES: Record<string, string> = {
  "hvac-maintenance": img("1558618666-fcd25c85cd64"),
  electrical: img("1621905251189-08b45d6a269e"),
  partitioning: img("1497366216548-37526070297c"),
  "painting-services": img("1562259949-e8e7689d7828"),
  "ceilings-gypsum": img("1600607687644-c7171b42498f"),
  "carpentry-services": img("1504148455328-c376907d081c"),
  "flooring-wall-cladding": img("1615874959474-d609969a20ed"),
  "kitchen-equipment-hood-cleaning": img("1558002038-1055907df827"),
  "plumbing-services": img("1585704032915-c3400ca199e7"),
};
