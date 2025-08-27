import CreativeFirepower from "../../components/modules/hvacpage/ranking-ai/CreativeFirepower";
import FinalCtaSection from "../../components/modules/hvacpage/ranking-ai/FinalCtaSection";
import HeroSection from "../../components/modules/hvacpage/ranking-ai/HeroSection";
import LoadedWithFeatures from "../../components/modules/hvacpage/ranking-ai/LoadedWithFeatures";
import RevenueCarousel from "../../components/modules/hvacpage/ranking-ai/RevenueCarousel";
import SearchEngineOptimization from "../../components/modules/hvacpage/ranking-ai/SearchEngineOptimization";


export default function RankingAi() {
  return (
    <div>
      <HeroSection />
      <SearchEngineOptimization />
      <CreativeFirepower />
      <LoadedWithFeatures />
      <RevenueCarousel />
      <FinalCtaSection/>
    </div>
  )
}
