import CallToActionSection from "../../components/modules/landscaping/CallToActionSection";
import ClientSuccessSection from "../../components/modules/landscaping/ClientSuccessSection";
import HeroSection from "../../components/modules/landscaping/HeroSection";
import HvacNewsSection from "../../components/modules/landscaping/HvacNewsSection";
import HvacSolutionsCarousel from "../../components/modules/landscaping/HvacSolutionsCarousel";
import KeepTechsBusySection from "../../components/modules/landscaping/KeepTechsBusySection";
import Nationwide from "../../components/modules/landscaping/Nationwide";
import RevenueMaxSection from "../../components/modules/landscaping/RevenueMaxSection";
import VideoTestimonialsSection from "../../components/modules/landscaping/visibleTestimonials";
import WorkingWithTheBestSection from "../../components/modules/landscaping/WorkingWithTheBestSection";


export default function Landscaping() {
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
