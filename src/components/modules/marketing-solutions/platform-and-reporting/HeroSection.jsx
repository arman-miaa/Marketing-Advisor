
import HeroVideo from "../../../../assets/images/marketing-solutions/budgets-ai/output.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Track Everything"
      subHeading="That Matters"
      description="HVAC companies finally have one platform to rule them all."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
