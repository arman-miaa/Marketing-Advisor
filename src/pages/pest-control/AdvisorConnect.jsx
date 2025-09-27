import ContactFormSection from "../../components/modules/homeservices/ContactFormSection";
import ConnectCarousel from "../../components/modules/pest-control/advisorConnect/ConnectCarousel";
import FirstChoiceSection from "../../components/modules/pest-control/advisorConnect/FirstChoiceSection";
import HeroSection from "../../components/modules/pest-control/advisorConnect/HeroSection";
import OpportunityHub from "../../components/modules/pest-control/advisorConnect/OpportunityHub";
import RevenueMAXSection from "../../components/modules/pest-control/advisorConnect/RevenueMAXSection";
import SeeConnectInAction from "../../components/modules/pest-control/advisorConnect/SeeConnectInAction";
import SuccessStoriesSection from "../../components/modules/pest-control/advisorConnect/SuccessStoriesSection";
import NavigationMenu from "../../shared/NavigationMenu";



export default function PAdvisorConnect() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu/>
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
