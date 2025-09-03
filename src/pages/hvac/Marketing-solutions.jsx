import AdvertisingSection from "../../components/modules/hvacpage/marketingSolutions/AdvertisingSection";
import ExpertiseCarousel from "../../components/modules/hvacpage/marketingSolutions/ExpertiseCarousel";
import FinalSection from "../../components/modules/hvacpage/marketingSolutions/FinalSection";
import HeroSection from "../../components/modules/hvacpage/marketingSolutions/HeroSection";
import MarketingSolutionsCarousel from "../../components/modules/hvacpage/marketingSolutions/MarketingSolutionsCarousel";
import TestimonialsSection from "../../components/modules/hvacpage/marketingSolutions/TestimonialsSection";
import VideoTestimonialsSection from "../../components/modules/hvacpage/marketingSolutions/VideoTestimonialsSection";
import WorkingWithTheBestSection from "../../components/modules/hvacpage/marketingSolutions/WorkingWithTheBestSection";


export default function MarketingSolutions() {
  return (
    <div>
      <HeroSection />
      <MarketingSolutionsCarousel />
      <AdvertisingSection />
      <TestimonialsSection />
      <ExpertiseCarousel />
      <WorkingWithTheBestSection />
      <VideoTestimonialsSection />
      <FinalSection/>
    </div>
  )
}
