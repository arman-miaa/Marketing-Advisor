import AdvertisingBenefitsSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/AdvertisingBenefitsSection";
import FinalCtaSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/FinalCtaSection";
import HeroSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/HeroSection";
import OneSystemSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/OneSystemSection";
import RevenueIntelligenceSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/RevenueIntelligenceSection";
import RevenueSolutionsCarousel from "../../../components/modules/marketing-solutions/capacity-marketing-engine/RevenueSolutionsCarousel";
import RevenueTrackingSection from "../../../components/modules/marketing-solutions/capacity-marketing-engine/RevenueTrackingSection";


export default function CapacityMarketingEngine() {
  return (
    <div>
           <HeroSection />
            <AdvertisingBenefitsSection />
            <RevenueTrackingSection />
            <OneSystemSection />
            <RevenueSolutionsCarousel />
            <RevenueIntelligenceSection />
            <FinalCtaSection />
    </div>
  )
}
