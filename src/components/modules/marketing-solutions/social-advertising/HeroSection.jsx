
import HeroVideo from "../../../../assets/images/marketing-solutions/social-advertising/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Be the HVAC Business"
      subHeading="They Know and Call First"
      description="Turn social ads into steady calls. Stay top-of-mind before the emergency hits."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
