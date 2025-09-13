import SharedHeroSection from "../../../../shared/SharedHeroSection";
import HeroImg from "../../../../assets/images/footer/careers/careers.jpg.2506231040047.webp";
export default function HeroSection() {
  return (
    <SharedHeroSection
      imageSrc={HeroImg}
      heading="A Place Like No Other,"
      subHeading="People Like No Other Place"
      description=""
      buttonText="Get Started"
      buttonLink="/hvac/get-started"
    />
  );
}
