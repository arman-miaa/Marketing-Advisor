import Nationwide from "../../components/modules/hvacpage/Nationwide";
import CallToActionSection from "../../components/modules/plumbing/CallToActionSection";
import ClientSuccessSection from "../../components/modules/plumbing/ClientSuccessSection";
import HeroSection from "../../components/modules/plumbing/HeroSection";
import HvacNewsSection from "../../components/modules/plumbing/HvacNewsSection";
import HvacSolutionsCarousel from "../../components/modules/plumbing/HvacSolutionsCarousel";
import KeepTechsBusySection from "../../components/modules/plumbing/KeepTechsBusySection";
import RevenueMaxSection from "../../components/modules/plumbing/RevenueMaxSection";
import VideoTestimonialsSection from "../../components/modules/plumbing/visibleTestimonials";
import WorkingWithTheBestSection from "../../components/modules/plumbing/WorkingWithTheBestSection";


export default function Plumbing() {
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
