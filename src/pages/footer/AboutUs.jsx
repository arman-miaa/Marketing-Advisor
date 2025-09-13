import AboutAdvisor from "../../components/modules/footer/about/AboutAdvisor";
import CareerSection from "../../components/modules/footer/about/CareerSection";
import FinalCtaSection from "../../components/modules/footer/about/FinalCtaSection";
import HeroSection from "../../components/modules/footer/about/HeroSection";
import HvacNewsSection from "../../components/modules/footer/about/HvacNewsSection";
import LeadershipTeam from "../../components/modules/footer/about/LeadershipTeam";
import OurValues from "../../components/modules/footer/about/OurValues";
import TestimonialSection from "../../components/modules/footer/about/TestimonialSection";


export default function AboutUs() {
  return (
    <div>
      <HeroSection />
      <AboutAdvisor />
      <OurValues />
      <LeadershipTeam />
      <CareerSection/>
      
<TestimonialSection/>
      <HvacNewsSection/>
      <FinalCtaSection/>
    </div>
  )
}
