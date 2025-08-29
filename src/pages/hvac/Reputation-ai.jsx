import ContentSection from "../../components/modules/hvacpage/reputation-ai/ContentSection";
import FinalCtaSection from "../../components/modules/hvacpage/reputation-ai/FinalCtaSection";
import HeroSection from "../../components/modules/hvacpage/reputation-ai/HeroSection";
import LoadedWithFeatures from "../../components/modules/hvacpage/reputation-ai/LoadedWithFeatures";
import ReputationMatters from "../../components/modules/hvacpage/reputation-ai/ReputationMatters";
import RevenueCarousel from "../../components/modules/hvacpage/reputation-ai/RevenueCarousel";
import NavigationMenu from "../../shared/NavigationMenu";


export default function ReputationAi() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu />
      <ReputationMatters />
      <ContentSection />
      <LoadedWithFeatures />
      <RevenueCarousel />
      <FinalCtaSection/>
    </div>
  )
}
