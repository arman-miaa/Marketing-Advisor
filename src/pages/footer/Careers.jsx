import OurValues from "../../components/modules/footer/about/OurValues";
import FinalCtaSection from "../../components/modules/footer/careers/FinalCtaSection";
import HeroSection from "../../components/modules/footer/careers/HeroSection";
import JoinOurStory from "../../components/modules/footer/careers/JoinOurStory";
import OurPeople from "../../components/modules/footer/careers/OurPeople";
import OurPurpose from "../../components/modules/footer/careers/OurPurpose";
import RevenueCarousel from "../../components/modules/footer/careers/RevenueCarousel";
import TestimonialsSection from "../../components/modules/footer/careers/TestimonialsSection";


export default function Careers() {
  return (
    <div>
      <HeroSection />
      <OurPurpose />
      <OurValues />
      <OurPeople />
      <RevenueCarousel />
      <TestimonialsSection />
      <JoinOurStory/>
      
      <FinalCtaSection/>
    </div>
  )
}
