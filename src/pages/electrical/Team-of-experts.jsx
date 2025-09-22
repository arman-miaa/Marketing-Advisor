import ClientTestimonial from "../../components/modules/electrical/team-of-experts/ClientTestimonial";
import FinalCtaSection from "../../components/modules/electrical/team-of-experts/FinalCtaSection";
import GrowthPartners from "../../components/modules/electrical/team-of-experts/GrowthPartners";
import HeroSection from "../../components/modules/electrical/team-of-experts/HeroSection";
import MarketingTeam from "../../components/modules/electrical/team-of-experts/MarketingTeam";
import RevenueCarousel from "../../components/modules/electrical/team-of-experts/RevenueCarousel";
import NavigationMenu from "../../shared/NavigationMenu";




export default function TeamOfExperts2() {
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
