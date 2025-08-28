import BusinessSuccessSection from "../components/modules/homepage/BusinessSuccessSection";
import CallToActionSection from "../components/modules/homepage/CallToActionSection";
import HeroSection from "../components/modules/homepage/HeroSection";
import IndustrySection from "../components/modules/homepage/IndustrySection";
import ServicesSection from "../components/modules/homepage/ServicesSection";
import WorkingWithBest from "../components/modules/homepage/WorkingWithBest";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BusinessSuccessSection />
      <ServicesSection />
      <IndustrySection />
      <WorkingWithBest />
      <CallToActionSection/>
    </div>
  )
}
