
import NavigationMenu from "../../shared/NavigationMenu";

import HeroSection from "../../components/modules/electrical/website/HeroSection";
import WebImpact from "../../components/modules/electrical/website/WebImpact";
import CreativeAdvantage from "../../components/modules/electrical/website/CreativeAdvantage";
import BuiltToDoMore from "../../components/modules/electrical/website/BuiltToDoMore";
import RevenueSolutionsCarousel from "../../components/modules/electrical/website/RevenueSolutionsCarousel";
import FinalCtaSection from "../../components/modules/electrical/website/FinalCtaSection";


export default function Website2() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu/>
      <WebImpact />
      <CreativeAdvantage />
      <BuiltToDoMore />
      <RevenueSolutionsCarousel />
      <FinalCtaSection/>
    </div>
  )
}
