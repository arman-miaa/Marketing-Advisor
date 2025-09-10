import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/marketing-solutions/capacity-marketing-engine/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Your Schedule."
      subHeading="Fully Optimized."
      description="Keep your technicians busy. Keep your revenue growing."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}