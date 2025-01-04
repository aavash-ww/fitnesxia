import ReviewSection from "../components/ReviewSection";
import FreeTiralSection from "../components/FreeTiralSection";
import Hero from "../components/HeroSection/Hero";
import PartnerSection from "../components/PartnerSection";
import ChoosePlanSection from "../components/ChoosePlanSection";
import ProgramSection from "../components/ProgramSection";
import ServicesSection from "../components/ServicesSection";

function Homepage() {
  return (
    <>
      <Hero />
      <PartnerSection />
      <FreeTiralSection />
      <ProgramSection />
      <ServicesSection />
      <ChoosePlanSection />
      <ReviewSection />
    </>
  );
}

export default Homepage;
