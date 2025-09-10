import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/marketing-solutions/revenue-intelligence/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Revenue"
      subHeading="Is the Endgame"
      description="Marketing for HVAC businesses–focused on your bottom line."
      buttonText="Schedule a Consultation"
      buttonLink="/hvac/get-started"
    />
  );
}