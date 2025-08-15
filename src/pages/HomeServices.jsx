import ContactFormSection from "../components/modules/homeservices/ContactFormSection";
import HomeServicesBanner from "../components/modules/homeservices/HomeServicesBanner";
import HomeServicesSection from "../components/modules/homeservices/HomeServicesSection";
import MarketingProsSection from "../components/modules/homeservices/MarketingProsSection";
import WorkingWithBestServicePage from "../components/modules/homeservices/WorkingWithBestServicePage";
import HvacNewsSection from "../components/modules/hvacpage/HvacNewsSection";



export default function HomeServices() {
  return (
    <div>
      <HomeServicesBanner />
      <MarketingProsSection />
      <HomeServicesSection />
     <WorkingWithBestServicePage/>
      <ContactFormSection />
      <HvacNewsSection />
    </div>
  );
}
