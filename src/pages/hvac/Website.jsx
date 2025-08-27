import BuiltToDoMore from "../../components/modules/hvacpage/website/BuiltToDoMore";
import CreativeAdvantage from "../../components/modules/hvacpage/website/CreativeAdvantage";
import FinalCtaSection from "../../components/modules/hvacpage/website/FinalCtaSection";
import HeroSection from "../../components/modules/hvacpage/website/HeroSection";
import RevenueSolutionsCarousel from "../../components/modules/hvacpage/website/RevenueSolutionsCarousel";
import WebImpact from "../../components/modules/hvacpage/website/WebImpact";


export default function Website() {
  return (
    <div>
      <HeroSection />
      <WebImpact />
      <CreativeAdvantage />
      <BuiltToDoMore />
      <RevenueSolutionsCarousel />
      <FinalCtaSection/>
    </div>
  )
}
