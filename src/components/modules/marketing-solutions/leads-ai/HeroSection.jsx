
import HeroVideo from "../../../../assets/images/marketing-solutions/leads-ai/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Not All Leads are"
      subHeading="Created Equal"
      description="HVAC companies finally know how to turn more leads into revenue."
      buttonText="Find Out How"
      buttonLink="/hvac/get-started"
    />
  );
}
