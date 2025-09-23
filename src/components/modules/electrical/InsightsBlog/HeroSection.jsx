import img1 from "../../../../assets/images/electrical/Blogs/ElectricianSEO.jpg.2507231246491.webp";
import SharedHeroSection2 from "../../../../shared/SharedHeroSection2";

export default function HeroSection() {
  return (
    <div className="text-left">
      <SharedHeroSection2
        heading="What Every Electrician Should Know About SEO"
        subHeading="Published Jul 23, 2025"
        imageSrc={img1}
        bgGradient="linear-gradient(to right, #FFECFA, #93c5fd)"
      />
    </div>
  );
}
