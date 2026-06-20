import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CompetencesPreview } from "@/components/sections/CompetencesPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TemoignagesCarousel } from "@/components/sections/TemoignagesCarousel";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Cabinet d'avocat à Marrakech agréé près la Cour de Cassation. Plus de 45 ans d'expertise juridique en droit commercial, bancaire et des sociétés.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CompetencesPreview />
      <WhyChooseUs />
      <TemoignagesCarousel />
      <CtaSection />
      <ContactSection />
    </>
  );
}
