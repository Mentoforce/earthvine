import CommercialSection from "@/components/Commercial";
import HeroSection from "@/components/HeroSection";
import TerraceSection from "@/components/Terrace";
import ResidentialSection from "@/components/ResidentialSection";
import CTASection from "@/components/CTA";
import ServicesPreview from "@/components/Services";
import WalkthroughSection from "@/components/WalkthroughSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResidentialSection />
      <CommercialSection />
      <TerraceSection />
      <WalkthroughSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
