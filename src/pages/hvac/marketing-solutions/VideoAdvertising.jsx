import BuiltToDoMore from "../../../components/modules/marketing-solutions/video-advertising/BuiltToDoMore";
import CreativeAdvantage from "../../../components/modules/marketing-solutions/video-advertising/CreativeAdvantage";
import FinalCtaSection from "../../../components/modules/marketing-solutions/video-advertising/FinalCtaSection";
import HeroSection from "../../../components/modules/marketing-solutions/video-advertising/HeroSection";
import RevenueSolutionsCarousel from "../../../components/modules/marketing-solutions/video-advertising/RevenueSolutionsCarousel copy";
import WebImpact from "../../../components/modules/marketing-solutions/video-advertising/WebImpact";
import NavigationMenu from "../../../shared/NavigationMenu";


export default function VideoAdvertising() {
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
