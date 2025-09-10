import BuiltToDoMore from "../../../components/modules/marketing-solutions/brand-storytelling/BuiltToDoMore";
import CreativeAdvantage from "../../../components/modules/marketing-solutions/brand-storytelling/CreativeAdvantage";
import FinalCtaSection from "../../../components/modules/marketing-solutions/brand-storytelling/FinalCtaSection";
import HeroSection from "../../../components/modules/marketing-solutions/brand-storytelling/HeroSection";
import RevenueSolutionsCarousel from "../../../components/modules/marketing-solutions/brand-storytelling/RevenueSolutionsCarousel copy";
import WebImpact from "../../../components/modules/marketing-solutions/brand-storytelling/WebImpact";
import NavigationMenu from "../../../shared/NavigationMenu";


export default function BrandStorytelling() {
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
  )
}
