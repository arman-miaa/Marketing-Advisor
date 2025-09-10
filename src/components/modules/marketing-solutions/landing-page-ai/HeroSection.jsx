import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/marketing-solutions/landing-page-ai/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Landing Pages That"
      subHeading="Nail It. Every Time."
      description="Instantly created landing pages for HVAC businesses that get visitors to call, book, and hire."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}