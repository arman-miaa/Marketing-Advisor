
import HeroVideo from "../../../../assets/images/marketing-solutions/leads-ai/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Not All Leads are"
      subHeading="Created Equal"
      description="Pest control companies finally know how to turn more leads into revenue."
      buttonText="Get Started"
      buttonLink="/pest-control/get-started"
    />
  );
}
