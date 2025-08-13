import ContactFormSection from "../components/modules/homeservices/ContactFormSection";
import HomeServicesBanner from "../components/modules/homeservices/HomeServicesBanner";
import HomeServicesSection from "../components/modules/homeservices/HomeServicesSection";
import MarketingProsSection from "../components/modules/homeservices/MarketingProsSection";
import HvacNewsSection from "../components/modules/hvacpage/HvacNewsSection";
import WorkingWithTheBestSection from "../components/modules/hvacpage/WorkingWithTheBestSection";


export default function HomeServices() {
  return (
    <div>
      <HomeServicesBanner />
      <MarketingProsSection />
      <HomeServicesSection />
      <WorkingWithTheBestSection />
      <ContactFormSection />
      <HvacNewsSection />
    </div>
  );
}
