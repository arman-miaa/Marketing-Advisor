import AdvertisingSection from "../../components/modules/pest-control/marketingSolutions/AdvertisingSection";
import ExpertiseCarousel from "../../components/modules/pest-control/marketingSolutions/ExpertiseCarousel";
import FinalSection from "../../components/modules/pest-control/marketingSolutions/FinalSection";
import HeroSection from "../../components/modules/pest-control/marketingSolutions/HeroSection";
import MarketingSolutionsCarousel from "../../components/modules/pest-control/marketingSolutions/MarketingSolutionsCarousel";
import TestimonialsSection from "../../components/modules/pest-control/marketingSolutions/TestimonialsSection";
import VideoTestimonialsSection from "../../components/modules/pest-control/marketingSolutions/VideoTestimonialsSection";
import WorkingWithTheBestSection from "../../components/modules/pest-control/marketingSolutions/WorkingWithTheBestSection";



export default function PMarketingSolutions() {
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
