
import HeroVideo from "../../../../assets/images/pest-control/pbanner.mp4";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Track Everything"
      subHeading="That Matters"
      description="Pest control companies finally have one platform to rule them all."
      buttonText="Get Started"
      buttonLink="/pest-control/get-started"
    />
  );
}
