
import HeroVideo from "../../../../assets/images/marketing-solutions/brand-storytelling/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Your Story"
      subHeading="Makes a Difference"
      description="Your HVAC business has a story that sets you apart. We want to tell it."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
