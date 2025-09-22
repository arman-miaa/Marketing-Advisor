import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/hvac/team-of-experts/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Your Success"
      subHeading="Is Our Business"
      description="Your business deserves experts in HVAC marketing. Now you have them."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
