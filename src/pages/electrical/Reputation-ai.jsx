
import ContentSection from "../../components/modules/electrical/reputation-ai/ContentSection";
import FinalCtaSection from "../../components/modules/electrical/reputation-ai/FinalCtaSection";
import HeroSection from "../../components/modules/electrical/reputation-ai/HeroSection";
import LoadedWithFeatures from "../../components/modules/electrical/reputation-ai/LoadedWithFeatures";
import ReputationMatters from "../../components/modules/electrical/reputation-ai/ReputationMatters";
import RevenueCarousel from "../../components/modules/electrical/reputation-ai/RevenueCarousel";
import NavigationMenu from "../../shared/NavigationMenu";


export default function ReputationAi2() {
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
