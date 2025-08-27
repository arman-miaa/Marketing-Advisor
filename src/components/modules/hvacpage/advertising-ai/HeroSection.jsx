import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/hvac/output4.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Advertising That Brings"
      subHeading="In Real Jobs"
      description="Show up where it matters. Get more HVAC jobs."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}