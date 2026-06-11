export const SITE = {
  name: "Right Zone Technical Services LLC",
  shortName: "Right Zone",
  tagline: "Trusted Experts in AC Maintenance Since 2014",
  heroDescription:
    "Your one-stop solution for AC maintenance, HVAC, electrical, painting, carpentry, and more. We combine innovation, quality, and reliability to keep your spaces cool and comfortable.",
  phone: "+971 52 2432906",
  phoneRaw: "971522432906",
  email: "info@rztechservices.com",
  emailAlt: "support@rztechservices.com",
  address: "8, Union Coop, Al Quoz 1, Dubai (UAE)",
  whatsappMessage:
    "Hello! I need AC maintenance service in Dubai. Please share availability and a quote.",
  founded: 2014,
  primaryService: "AC Maintenance",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "hvac-maintenance",
    title: "AC Maintenance",
    shortDescription:
      "Expert AC repair, servicing, and installation — our #1 specialty. Same-day service available across Dubai.",
    description:
      "AC maintenance is our core expertise. We keep your air conditioning systems running at peak performance with professional servicing, deep cleaning, gas refilling, duct cleaning, and emergency repairs. Whether it's a split unit, central AC, or commercial chiller — our certified technicians deliver fast, reliable results that lower your energy bills and extend equipment life.",
    features: [
      "AC installation & replacement",
      "Deep cleaning & filter replacement",
      "Gas refilling & leak detection",
      "Duct cleaning & air balancing",
      "24/7 emergency AC repairs",
    ],
    icon: "wind",
  },
  {
    slug: "electrical",
    title: "Electrical",
    shortDescription:
      "Professional electrical solutions from fixes to energy-efficient lighting installations.",
    description:
      "We provide professional electrical solutions for residential and commercial properties. From fixing common issues to installing energy-efficient lighting, our certified electricians deliver safe, reliable work with included safety inspections for your peace of mind.",
    features: [
      "Wiring & rewiring services",
      "Energy-efficient lighting installation",
      "Safety inspections & certifications",
      "Circuit breaker & panel upgrades",
      "Emergency electrical repairs",
    ],
    icon: "zap",
  },
  {
    slug: "partitioning",
    title: "Partitioning",
    shortDescription:
      "Custom glass, wood, or pivoting dividers for functional and stylish spaces.",
    description:
      "Create functional and stylish living or working spaces with our custom partitioning solutions. We design and install glass, wood, and pivoting dividers that perfectly match any home or business style while maximizing space utilization.",
    features: [
      "Glass partition walls",
      "Wooden room dividers",
      "Pivoting door systems",
      "Office cubicle installation",
      "Custom design consultation",
    ],
    icon: "layout",
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    shortDescription:
      "Transform your space with vibrant colors and high-quality finishes.",
    description:
      "Transform your space with vibrant colors, high-quality finishes, and expert guidance. Our painting services are designed to match your unique style and create the perfect atmosphere for any residential or commercial property.",
    features: [
      "Interior & exterior painting",
      "Color consultation",
      "Texture & decorative finishes",
      "Commercial spray painting",
      "Surface preparation & priming",
    ],
    icon: "paintbrush",
  },
  {
    slug: "ceilings-gypsum",
    title: "Ceilings & Gypsum",
    shortDescription:
      "Stylish decorative ceilings, elegant moldings, and premium finishes.",
    description:
      "Upgrade your space with stylish decorative ceilings, elegant moldings, and high-quality gypsum finishes. Our skilled craftsmen deliver precision work that elevates the aesthetic appeal of any room.",
    features: [
      "False ceiling installation",
      "Gypsum board partitioning",
      "Decorative cornices & moldings",
      "LED integrated ceiling designs",
      "Acoustic ceiling solutions",
    ],
    icon: "layers",
  },
  {
    slug: "carpentry-services",
    title: "Carpentry Services",
    shortDescription:
      "Custom furniture, sturdy shelves, and durable cabinets crafted to perfection.",
    description:
      "Get high-quality custom furniture, sturdy shelves, and durable cabinets crafted to perfection. Our carpentry services blend elegance with functionality for homes and businesses across Dubai.",
    features: [
      "Custom furniture design",
      "Kitchen cabinet installation",
      "Wardrobe & shelving systems",
      "Door & window frame work",
      "Wood repair & restoration",
    ],
    icon: "hammer",
  },
  {
    slug: "flooring-wall-cladding",
    title: "Flooring & Wall Cladding",
    shortDescription:
      "Premium flooring materials and sleek wall cladding for a polished look.",
    description:
      "Upgrade your interiors with premium flooring materials and sleek wall cladding panels. We deliver sophisticated, modern finishes that transform any space into a polished, professional environment.",
    features: [
      "Hardwood & laminate flooring",
      "Tile & marble installation",
      "Vinyl & SPC flooring",
      "Wall cladding panels",
      "Floor leveling & preparation",
    ],
    icon: "grid",
  },
  {
    slug: "kitchen-equipment-hood-cleaning",
    title: "Kitchen Equipment / Hood Cleaning",
    shortDescription:
      "Thorough equipment cleaning, grease removal, and hood maintenance.",
    description:
      "Keep your kitchen efficient and safe with thorough equipment cleaning, grease removal, and regular maintenance. Our hood cleaning services ensure optimal ventilation and compliance with safety standards.",
    features: [
      "Commercial hood deep cleaning",
      "Grease trap maintenance",
      "Kitchen equipment sanitization",
      "Exhaust system inspection",
      "Scheduled maintenance plans",
    ],
    icon: "chef-hat",
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    shortDescription:
      "Expert plumbing for residential, commercial, and emergency needs.",
    description:
      "Our expert plumbing services are designed to meet all your residential, commercial, and emergency needs with efficiency and precision. From leak repairs to full pipe installations, we handle it all.",
    features: [
      "Leak detection & repair",
      "Pipe installation & replacement",
      "Drain cleaning & unblocking",
      "Water heater services",
      "24/7 emergency plumbing",
    ],
    icon: "droplets",
  },
];

export const FAQS = [
  {
    question: "What AC services do you offer?",
    answer:
      "We specialize in AC maintenance, repair, installation, deep cleaning, gas refilling, duct cleaning, and 24/7 emergency AC callouts across Dubai. We also offer electrical, plumbing, painting, and full property maintenance.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can easily request a quote by contacting us through our website, via email, or by calling our office. We'll provide you with a customized estimate based on your requirements.",
  },
  {
    question: "Are your services available in all areas of Dubai?",
    answer:
      "Yes, we serve all areas of Dubai, ensuring that our services are accessible to residential, commercial, and industrial clients throughout the city.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "We have been proudly serving clients since 2014, providing reliable, high-quality maintenance solutions for over 10 years.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes, we offer emergency services for critical situations that require immediate attention, available 24/7.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Absolutely! Our team consists of certified and skilled technicians who are trained to handle a wide range of technical and maintenance services.",
  },
];

export const STATS = [
  { label: "Skilled Technicians", value: 50, suffix: "+" },
  { label: "Safety Compliance", value: 100, suffix: "%" },
  { label: "Successful Services", value: 4, suffix: "k+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];

export const WHY_US = [
  {
    title: "Quality and Safety First",
    description:
      "We ensure top-notch results while maintaining the highest safety standards.",
    icon: "shield",
  },
  {
    title: "Custom Solutions",
    description:
      "We offer customized services to meet the unique needs of each client.",
    icon: "settings",
  },
  {
    title: "Reliable Support",
    description:
      "Always here to assist, ensuring smooth communication and satisfaction.",
    icon: "headphones",
  },
  {
    title: "24/7 Contact Support",
    description: "Round-the-clock assistance whenever you need us most.",
    icon: "clock",
  },
];

export type HomeAcHighlight = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
};

export const HOME_AC_HIGHLIGHTS: HomeAcHighlight[] = [
  {
    id: "ac-servicing",
    slug: "hvac-maintenance",
    title: "AC Repair & Servicing",
    shortDescription:
      "Routine tune-ups, filter changes, and fault diagnosis for split, central, and commercial AC — keeping your cooling reliable all year.",
  },
  {
    id: "ac-emergency",
    slug: "hvac-maintenance",
    title: "Emergency AC Repairs",
    shortDescription:
      "AC stopped working in the Dubai heat? Our certified technicians respond fast with same-day and 24/7 emergency callouts across the city.",
  },
  {
    id: "ac-cleaning",
    slug: "hvac-maintenance",
    title: "Deep Cleaning & Gas Refill",
    shortDescription:
      "Full coil cleaning, duct sanitization, leak detection, and gas top-ups — restore airflow, cut energy bills, and extend your unit's life.",
  },
];

export const HIGHLIGHTS = [
  {
    title: "AC Specialists",
    description:
      "AC maintenance is our primary focus — certified technicians for all brands and unit types across Dubai.",
    icon: "wind",
  },
  {
    title: "Same-Day AC Service",
    description:
      "Broken AC in Dubai heat? We offer fast same-day repair and emergency callouts, 24/7.",
    icon: "timer",
  },
  {
    title: "Fair, Transparent Pricing",
    description:
      "No hidden costs on AC servicing, gas refills, or repairs. Quality work at honest rates.",
    icon: "award",
  },
];
