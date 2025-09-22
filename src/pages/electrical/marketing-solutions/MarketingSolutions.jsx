import AdvertisingSection from "../../../components/modules/electrical/marketingsolutions/AdvertisingSection";
import ExpertiseCarousel from "../../../components/modules/electrical/marketingsolutions/ExpertiseCarousel";
import FinalSection from "../../../components/modules/electrical/marketingsolutions/FinalSection";
import HeroSection from "../../../components/modules/electrical/marketingsolutions/HeroSection";
import MarketingSolutionsCarousel from "../../../components/modules/electrical/marketingsolutions/MarketingSolutionsCarousel";
import TestimonialsSection from "../../../components/modules/electrical/marketingsolutions/TestimonialsSection";

import WorkingWithTheBestSection from "../../../components/modules/electrical/marketingsolutions/WorkingWithTheBestSection";
import SpotlightStories from "../../../components/modules/electrical/SpotlightStories";


export default function MarketingSolutions2() {
  return (
    <div>
      <HeroSection />
      <MarketingSolutionsCarousel />
      <AdvertisingSection />
      <TestimonialsSection />
      <ExpertiseCarousel />
      <WorkingWithTheBestSection />
         
          <SpotlightStories/>
      <FinalSection />
    </div>
  );
}
