import HeroVideo from "../../../../assets/images/hvac/advisorConnect/output.mp4";
import SharedHeroSection from "../../../../shared/SharedHeroSection";

export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Make Every"
      subHeading="Visit Count"
      description="Convert more customers without lifting a finger."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
