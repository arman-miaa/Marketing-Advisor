import ConnectCarousel from "../../components/modules/hvacpage/advisorConnect/ConnectCarousel";
import FirstChoiceSection from "../../components/modules/hvacpage/advisorConnect/FirstChoiceSection";
import HeroSection from "../../components/modules/hvacpage/advisorConnect/HeroSection";
import OpportunityHub from "../../components/modules/hvacpage/advisorConnect/OpportunityHub";
import RevenueMAXSection from "../../components/modules/hvacpage/advisorConnect/RevenueMAXSection";
import SeeConnectInAction from "../../components/modules/hvacpage/advisorConnect/SeeConnectInAction";
import SuccessStoriesSection from "../../components/modules/hvacpage/advisorConnect/SuccessStoriesSection";
import ContactFormSection from "../../shared/ContactFormSection";


export default function AdvisorConnect() {
  return (
    <div>
      <HeroSection />
      <OpportunityHub />
      <FirstChoiceSection />
      <SeeConnectInAction />
      <ConnectCarousel />
      <RevenueMAXSection />
      <SuccessStoriesSection />
      <ContactFormSection/>
      
    </div>
  )
}
