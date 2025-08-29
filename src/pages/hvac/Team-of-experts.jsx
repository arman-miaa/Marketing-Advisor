import ClientTestimonial from "../../components/modules/hvacpage/team-of-experts/ClientTestimonial";
import FinalCtaSection from "../../components/modules/hvacpage/team-of-experts/FinalCtaSection";
import GrowthPartners from "../../components/modules/hvacpage/team-of-experts/GrowthPartners";
import HeroSection from "../../components/modules/hvacpage/team-of-experts/HeroSection";
import MarketingTeam from "../../components/modules/hvacpage/team-of-experts/MarketingTeam";
import RevenueCarousel from "../../components/modules/hvacpage/team-of-experts/RevenueCarousel";
import NavigationMenu from "../../shared/NavigationMenu";


export default function TeamOfExperts() {
  return (
      <div>
      <HeroSection />
      <NavigationMenu/>
      <MarketingTeam />
      <ClientTestimonial />
      <GrowthPartners />
      <RevenueCarousel />
      <FinalCtaSection/>
    </div>
  )
}
