import CallToActionSection from "../../components/modules/pest-control/CallToActionSection";
import ClientSuccessSection from "../../components/modules/pest-control/ClientSuccessSection";
import HeroSection from "../../components/modules/pest-control/HeroSection";
import HvacNewsSection from "../../components/modules/pest-control/HvacNewsSection";
import HvacSolutionsCarousel from "../../components/modules/pest-control/HvacSolutionsCarousel";
import KeepTechsBusySection from "../../components/modules/pest-control/KeepTechsBusySection";
import Nationwide from "../../components/modules/pest-control/Nationwide";
import RevenueMaxSection from "../../components/modules/pest-control/RevenueMaxSection";
import VideoTestimonialsSection from "../../components/modules/pest-control/visibleTestimonials";
import WorkingWithTheBestSection from "../../components/modules/pest-control/WorkingWithTheBestSection";


export default function PestControl() {
  return (
    <div>
      <HeroSection />
      <Nationwide />
      <RevenueMaxSection />
      <HvacSolutionsCarousel />
      <VideoTestimonialsSection />
      <WorkingWithTheBestSection />
      <KeepTechsBusySection />
      <ClientSuccessSection />
      <HvacNewsSection />
      <CallToActionSection />
    </div>
  );
}
