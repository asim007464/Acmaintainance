import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { HomeServices } from "@/components/home/HomeServices";
import { FriendlySection } from "@/components/home/FriendlySection";
import { WhyUsBanner } from "@/components/home/WhyUsBanner";
import { HomeContact } from "@/components/home/HomeContact";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HomeServices />
      <FriendlySection />
      <WhyUsBanner />
      <HomeContact />
      <FAQ />
    </>
  );
}
