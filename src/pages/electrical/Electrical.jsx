import CallToActionSection from "../../components/modules/electrical/CallToActionSection";
import ClientSuccessSection from "../../components/modules/electrical/ClientSuccessSection";
import HeroSection from "../../components/modules/electrical/HeroSection";
import HvacNewsSection from "../../components/modules/electrical/HvacNewsSection";
import HvacSolutionsCarousel from "../../components/modules/electrical/HvacSolutionsCarousel";
import KeepTechsBusySection from "../../components/modules/electrical/KeepTechsBusySection";
import Nationwide from "../../components/modules/electrical/Nationwide";
import RevenueMaxSection from "../../components/modules/electrical/RevenueMaxSection";
import SpotlightStories from "../../components/modules/electrical/SpotlightStories";
import WorkingWithTheBestSection from "../../components/modules/electrical/WorkingWithTheBestSection";


export default function Electrical() {
  return (
      <div>
          <HeroSection />
          <Nationwide />
          <RevenueMaxSection />
          <HvacSolutionsCarousel />
          <SpotlightStories/>
          <WorkingWithTheBestSection />
          <KeepTechsBusySection />
          <ClientSuccessSection />
          <HvacNewsSection />
          <CallToActionSection/>
    </div>
  )
}
