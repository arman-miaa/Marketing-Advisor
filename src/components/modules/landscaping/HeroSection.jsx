import HeroVideo from "../../../assets/images/landscaping/output.mp4";
import logo2 from "../../../assets/images/Home Page/microsoftlogo.webp";
import logo1 from "../../../assets/images/Home Page/googlepartnerlogo.webp";
import logo3 from "../../../assets/images/Home Page/meta.webp";


import Button from "../../ui/Button";
import ResponsiveSlider from "../../../shared/ImageSlider";

function HeroSection() {

    const logos = [
      { src: logo1, alt: "Microsoft Advertising" },
      { src: logo2, alt: "Google Partner" },
      { src: logo3, alt: "Meta Business Partner" },
    
    ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full Screen Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-60 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col justify-center items-center px-6 md:px-56 h-full text-white text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-[125px] font-bold tracking-tight">
          MAXIMIZE
        </h1>

        <p className="text-5xl  md:text-6xl xl:text-[120px] font-bold mb-6 tracking-tight relative overflow-hidden text-blue-200">
          Your Footprint
        </p>

        {/* Subheading */}
        <p className="text-2xl lg:text-3xl mb-10 py-4 max-w-2xl leading-relaxed">
          Maximize your landscape marketing.
        </p>

        {/* CTA Button */}
        <div className="mb-12 md:mb-16 w-full flex justify-center ">
          <Button text="Get Started" to="/hvac/get-started" />
        </div>

        

        {/* Partner Logos - now using reusable component */}
        <ResponsiveSlider items={logos} slidesPerView={2} />
      </div>
    </div>
  );
}

export default HeroSection;
