import CallToActionSection from "../../components/modules/roofing/CallToActionSection";
import ClientSuccessSection from "../../components/modules/roofing/ClientSuccessSection";
import HeroSection from "../../components/modules/roofing/HeroSection";
import HvacNewsSection from "../../components/modules/roofing/HvacNewsSection";
import HvacSolutionsCarousel from "../../components/modules/roofing/HvacSolutionsCarousel";
import KeepTechsBusySection from "../../components/modules/roofing/KeepTechsBusySection";
import Nationwide from "../../components/modules/roofing/Nationwide";
import RevenueMaxSection from "../../components/modules/roofing/RevenueMaxSection";

import WorkingWithTheBestSection from "../../components/modules/roofing/WorkingWithTheBestSection";


export default function Roofing() {
  return (
    <div>
      <HeroSection />
      <Nationwide />
      <RevenueMaxSection />
      <HvacSolutionsCarousel />
    
      <WorkingWithTheBestSection />
      <KeepTechsBusySection />
      <ClientSuccessSection />
      <HvacNewsSection />
      <CallToActionSection />
    </div>
  );
}
