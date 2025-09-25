import AdvertisingBenefitsSection from "../../components/modules/pest-control/revenue-intelligence/AdvertisingBenefitsSection";
import FinalCtaSection from "../../components/modules/pest-control/revenue-intelligence/FinalCtaSection";
import HeroSection from "../../components/modules/pest-control/revenue-intelligence/HeroSection";

import RevenueIntelligenceSection from "../../components/modules/pest-control/revenue-intelligence/RevenueIntelligenceSection";
import RevenueSolutionsCarousel from "../../components/modules/pest-control/revenue-intelligence/RevenueSolutionsCarousel";
import RevenueTrackingSection from "../../components/modules/pest-control/revenue-intelligence/RevenueTrackingSection";
import OneSystemSection from "../../components/modules/pest-control/revenue-intelligence/OneSystemSection";


export default function PRevenueIntelligence() {
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
  );
}
