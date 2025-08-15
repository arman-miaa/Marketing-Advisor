
import ClientSuccessSection from "../components/modules/hvacpage/ClientSuccessSection";
import HeroSection from "../components/modules/hvacpage/HeroSection";
import HvacNewsSection from "../components/modules/hvacpage/HvacNewsSection";
import HvacSolutionsCarousel from "../components/modules/hvacpage/HvacSolutionsCarousel";
import KeepTechsBusySection from "../components/modules/hvacpage/KeepTechsBusySection";
import Nationwide from "../components/modules/hvacpage/Nationwide";
import RevenueMaxSection from "../components/modules/hvacpage/RevenueMaxSection";
import VideoTestimonialsSection from "../components/modules/hvacpage/visibleTestimonials";
import WorkingWithTheBestSection from "../components/modules/hvacpage/WorkingWithTheBestSection";


export default function HvacPage() {
  return (
      <div>
      <HeroSection />
      <Nationwide />
      <RevenueMaxSection />
      <HvacSolutionsCarousel />
      <VideoTestimonialsSection/>
      <WorkingWithTheBestSection/>
      <KeepTechsBusySection />
      <ClientSuccessSection/>
      <HvacNewsSection />
    </div>
  )
}
