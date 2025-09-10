
import HeroVideo from "../../../assets/images/marketing-solutions/budgets-ai/output.mp4";
import SharedHeroSection from "../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Putting Your Budget"
      subHeading="Where It Matters"
      description="Your dollars, invested in the areas that drive the most valuable HVAC jobs—automatically."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
