import img1 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import SharedHeroSection2 from "../../../../shared/SharedHeroSection2";

export default function HeroSection() {
  return (
    <div>
      <SharedHeroSection2
        heading="Your HVAC Website Should Work as Hard as You Do"
        subHeading="Published Jun 05, 2025"
        imageSrc={img1}
        bgGradient="linear-gradient(to right, #FFECFA, #93c5fd)"
      />
    </div>
  );
}
