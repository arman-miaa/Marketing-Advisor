
import HeroVideo from "../../../../assets/images/marketing-solutions/video-advertising/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Be the HVAC Company"
      subHeading="Everyone Knows"
      description="Show off who you are and why you’re the one to call when comfort is on the line."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
