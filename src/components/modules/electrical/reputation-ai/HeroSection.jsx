import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroVideo from "../../../../assets/images/hvac/reputation-ai/output.mp4";
export default function HeroSection() {
  return (
    <SharedHeroSection
      videoSrc={HeroVideo}
      heading="Trust"
      subHeading="Drives Bookings"
      description="When it comes to someone choosing you, your reputation is a deal-maker."
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
