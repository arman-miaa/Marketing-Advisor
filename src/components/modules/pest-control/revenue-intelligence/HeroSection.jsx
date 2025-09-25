import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/pest-control/rbanner.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Revenue"
      subHeading="Is the Endgame"
      description="Marketing for pest control operators–focused on your bottom line."
      buttonText="Get Started"
      buttonLink="/pest-control/get-started"
    />
  );
}