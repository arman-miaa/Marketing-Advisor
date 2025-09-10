import BuiltToDoMore from "../../../components/modules/marketing-solutions/platform-and-reporting/BuiltToDoMore";
import CreativeAdvantage from "../../../components/modules/marketing-solutions/platform-and-reporting/CreativeAdvantage";
import FinalCtaSection from "../../../components/modules/marketing-solutions/platform-and-reporting/FinalCtaSection";
import HeroSection from "../../../components/modules/marketing-solutions/platform-and-reporting/HeroSection";
import RevenueSolutionsCarousel from "../../../components/modules/marketing-solutions/platform-and-reporting/RevenueSolutionsCarousel copy";
import WebImpact from "../../../components/modules/marketing-solutions/platform-and-reporting/WebImpact";
import NavigationMenu from "../../../shared/NavigationMenu";


export default function PlatformAndReporting() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu />
      <WebImpact />
      <CreativeAdvantage />
      <BuiltToDoMore />
      <RevenueSolutionsCarousel />
      <FinalCtaSection />
    </div>
  );
}
