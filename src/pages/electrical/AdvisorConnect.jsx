import ConnectCarousel from "../../components/modules/electrical/advisorconnect2/ConnectCarousel";
import FirstChoiceSection from "../../components/modules/electrical/advisorconnect2/FirstChoiceSection";
import HeroSection from "../../components/modules/electrical/advisorconnect2/HeroSection copy";
import OpportunityHub from "../../components/modules/electrical/advisorconnect2/OpportunityHub";
import RevenueMAXSection from "../../components/modules/electrical/advisorconnect2/RevenueMAXSection";
import SeeConnectInAction from "../../components/modules/electrical/advisorconnect2/SeeConnectInAction";
import SuccessStoriesSection from "../../components/modules/electrical/advisorconnect2/SuccessStoriesSection";
import ContactFormSection from "../../shared/ContactFormSection";
import NavigationMenu from "../../shared/NavigationMenu";


export default function AdvisorConnect2() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu />
      <OpportunityHub />
      <FirstChoiceSection />
      <SeeConnectInAction />
      <ConnectCarousel />
      <RevenueMAXSection />
      <SuccessStoriesSection />
      <ContactFormSection />
    </div>
  );
}
