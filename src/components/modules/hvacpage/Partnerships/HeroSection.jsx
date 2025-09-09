import SharedHeroSection from "../../../../shared/SharedHeroSection";
import heroImg from "../../../../assets/images/hvac/Partnerships/HVAC-Logos.jpg.2506060935570.webp"


export default function HeroSection() {
  return (
    <div>
      <SharedHeroSection
        imageSrc={heroImg}
        subHeading="Backed by the Best"
        description="Partnerships built to grow HVAC businesses"
        buttonText="Get Started"
        buttonLink="/hvac/get-started"
      />
    </div>
  );
}
