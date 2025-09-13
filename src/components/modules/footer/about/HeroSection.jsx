
import HeroImg from "../../../../assets/images/footer/about/about-us.jpg.2503270833494.webp";

import SharedHeroSection from "../../../../shared/SharedHeroSection";
export default function HeroSection() {
  return (
    <SharedHeroSection
      imageSrc={HeroImg}
      heading="Our Goal:"
      subHeading="Help Business Owners Reach Theirs"
    
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
