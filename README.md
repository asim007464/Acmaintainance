# Right Zone Technical Services — Website

A modern, responsive Next.js replica of [rztechservices.com](https://rztechservices.com/) with improved design and full functionality.

## Features

- **Responsive design** — Mobile-first layout across all pages
- **WhatsApp booking** — Floating button + per-service booking links
- **Contact form** — Sends inquiries via WhatsApp with pre-filled message
- **Animated stats** — Counter animations on scroll
- **FAQ accordion** — Expandable questions on the home page
- **9 service pages** — Individual detail pages with features and CTAs

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, stats, FAQ, contact |
| `/about` | Company story, mission, vision, values |
| `/contact` | Contact form, info cards, map |
| `/services` | All services grid |
| `/services/[slug]` | Individual service detail pages |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Lucide React icons

## Customization

Edit `src/lib/constants.ts` to update contact info, services, FAQs, and site content.
