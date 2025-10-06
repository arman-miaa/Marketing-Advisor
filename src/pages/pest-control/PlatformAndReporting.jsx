import BuiltToDoMore from "../../components/modules/pest-control/platform-and-reporting/BuiltToDoMore";
import CreativeAdvantage from "../../components/modules/pest-control/platform-and-reporting/CreativeAdvantage";
import FinalCtaSection from "../../components/modules/pest-control/platform-and-reporting/FinalCtaSection";
import HeroSection from "../../components/modules/pest-control/platform-and-reporting/HeroSection";
import RevenueSolutionsCarousel from "../../components/modules/pest-control/platform-and-reporting/RevenueSolutionsCarousel copy";

import NavigationMenu from "../../shared/NavigationMenu";
import WebImpact from "../../components/modules/pest-control/platform-and-reporting/WebImpact";
// helo

export default function PPlatformAndReporting() {
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
