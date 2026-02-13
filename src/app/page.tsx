import CommercialSection from "@/components/Commercial";
import HeroSection from "@/components/HeroSection";
import TerraceSection from "@/components/Terrace";
import ResidentialSection from "@/components/ResidentialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResidentialSection />
      <CommercialSection />
      <TerraceSection />
    </>
  );
}
