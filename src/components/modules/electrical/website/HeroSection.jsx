import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/hvac/website/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Stand Out."
      subHeading="Get Chosen."
      description="Electrical websites that get you more customers."
      buttonText="Get Started"
      buttonLink="/electrical/get-started"
    />
  );
}
