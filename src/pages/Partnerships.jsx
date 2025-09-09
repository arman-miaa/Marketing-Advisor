import ClientSuccessStories from "../components/modules/hvacpage/Partnerships/ClientSuccessStories";
import ContactSection from "../components/modules/hvacpage/Partnerships/ContactSection";
import HeroSection from "../components/modules/hvacpage/Partnerships/HeroSection";
import IndustryPartnerships from "../components/modules/hvacpage/Partnerships/IndustryPartnerships";
import ServiceTitan from "../components/modules/hvacpage/Partnerships/ServiceTitan";
import SmartIntegrations from "../components/modules/hvacpage/Partnerships/SmartIntegrations";
import StrategicPartnerships from "../components/modules/hvacpage/Partnerships/StrategicPartnerships";
import TechnologyPartners from "../components/modules/hvacpage/Partnerships/TechnologyPartners";



export default function Partnerships() {
  return (
    <div>
      <HeroSection />
      <StrategicPartnerships />
      <ServiceTitan />
      <IndustryPartnerships />
      <SmartIntegrations />
      <TechnologyPartners />
      <ClientSuccessStories />
      <ContactSection/>
    </div>
  );
}
