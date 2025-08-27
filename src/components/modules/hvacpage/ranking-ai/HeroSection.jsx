import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/hvac/ranking-ai/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Own Your Local"
      subHeading="Search Results"
      description="HVAC companies that rank higher get hired."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
