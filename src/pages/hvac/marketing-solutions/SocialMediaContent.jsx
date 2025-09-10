import BuiltToDoMore from "../../../components/modules/marketing-solutions/social-media-content/BuiltToDoMore";
import CreativeAdvantage from "../../../components/modules/marketing-solutions/social-media-content/CreativeAdvantage";
import FinalCtaSection from "../../../components/modules/marketing-solutions/social-media-content/FinalCtaSection";
import HeroSection from "../../../components/modules/marketing-solutions/social-media-content/HeroSection";
import RevenueSolutionsCarousel from "../../../components/modules/marketing-solutions/social-media-content/RevenueSolutionsCarousel copy";
import WebImpact from "../../../components/modules/marketing-solutions/social-media-content/WebImpact";
import NavigationMenu from "../../../shared/NavigationMenu";


export default function SocialMediaContent() {
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
