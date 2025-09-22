
import CreativeFirepower from "../../components/modules/electrical/ranking-ai/CreativeFirepower";
import FinalCtaSection from "../../components/modules/electrical/ranking-ai/FinalCtaSection";
import HeroSection from "../../components/modules/electrical/ranking-ai/HeroSection";
import LoadedWithFeatures from "../../components/modules/electrical/ranking-ai/LoadedWithFeatures";
import RevenueCarousel from "../../components/modules/electrical/ranking-ai/RevenueCarousel";
import SearchEngineOptimization from "../../components/modules/electrical/ranking-ai/SearchEngineOptimization";
import NavigationMenu from "../../shared/NavigationMenu";


export default function RankingAi2() {
  return (
    <div>
      <HeroSection />
      <NavigationMenu/>
      <SearchEngineOptimization />
      <CreativeFirepower />
      <LoadedWithFeatures />
      <RevenueCarousel />
      <FinalCtaSection/>
    </div>
  )
}
