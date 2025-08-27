import AdvertisingBenefitsSection from "../../components/modules/hvacpage/advertising-ai/AdvertisingBenefitsSection";
import FinalCtaSection from "../../components/modules/hvacpage/advertising-ai/FinalCtaSection";
import HeroSection from "../../components/modules/hvacpage/advertising-ai/HeroSection";
import OneSystemSection from "../../components/modules/hvacpage/advertising-ai/OneSystemSection";
import RevenueIntelligenceSection from "../../components/modules/hvacpage/advertising-ai/RevenueIntelligenceSection";
import RevenueSolutionsCarousel from "../../components/modules/hvacpage/advertising-ai/RevenueSolutionsCarousel";
import RevenueTrackingSection from "../../components/modules/hvacpage/advertising-ai/RevenueTrackingSection";


export default function AdvertisingAi() {
  return (
    <div>
      <HeroSection />
      <AdvertisingBenefitsSection />
      <RevenueTrackingSection />
      <OneSystemSection />
      <RevenueSolutionsCarousel />
      <RevenueIntelligenceSection />
      <FinalCtaSection/>
    </div>
  )
}
