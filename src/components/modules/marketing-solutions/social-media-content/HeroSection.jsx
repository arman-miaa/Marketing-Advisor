
import HeroVideo from "../../../../assets/images/marketing-solutions/social-media-content/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Posts That Perform."
      subHeading="Content That Gets Jobs."
      description="Social media and local content built for HVAC businesses, not influencers."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
