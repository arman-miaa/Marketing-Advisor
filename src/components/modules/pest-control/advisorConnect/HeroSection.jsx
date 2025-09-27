import HeroVideo from "../../../../assets/images/hvac/advisorConnect/output.mp4";
import SharedHeroSection from "../../../../shared/SharedHeroSection";

export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Make Every"
      subHeading="Visit Count"
      description=""
      buttonText="Get Started"
      buttonLink="/pest-control/get-started"
    />
  );
}
