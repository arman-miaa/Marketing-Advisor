import { useState, useEffect } from "react";
import HeroVideo from "../../../assets/images/Home Page/bannervideo.mp4";
import logo1 from "../../../assets/images/Home Page/microsoftlogo.webp";
import logo2 from "../../../assets/images/Home Page/googlepartnerlogo.webp";
import logo3 from "../../../assets/images/Home Page/meta.webp";
import Button from "../../ui/Button";
import ResponsiveSlider from "../../../shared/ImageSlider";


const slogans = [
  "Your Time",
  "Your Wins",
  "Your Growth",
  "Your Brand",
  "Your Impact",
  "Your Potential",
  "Your Revenue",
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < slogans.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const logos = [
    { src: logo1, alt: "Microsoft Advertising" },
    { src: logo2, alt: "Google Partner" },
    { src: logo3, alt: "Meta Business Partner" },
  ];

  return (
    <div className="relative w-full h-[calc(100vh-200px)] md:h-screen overflow-hidden">
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
      <div className="relative z-20 flex flex-col md:justify-center px-6 md:px-56 h-full text-white text-center md:text-left">
        {/* Main Heading */}
        <h1 className="text-5xl mt-6 md:mt-0 md:text-6xl lg:text-[125px] font-bold tracking-tight">
          MAXIMIZE
        </h1>

        {/* Animated Slogan */}
        <p
          className="text-blue-200 text-4xl md:text-5xl lg:text-6xl xl:text-[120px] 
          font-bold mb-6 tracking-tight h-16 sm:h-20 md:h-30 relative overflow-hidden 
          flex items-center justify-center md:justify-start"
        >
          {slogans.map((text, i) => (
            <span
              key={i}
              className={`absolute transition-transform duration-700 ease-in-out ${
                i === index
                  ? "translate-y-0 opacity-100"
                  : i < index
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0"
              }`}
            >
              {text}
            </span>
          ))}
        </p>

        {/* Subheading */}
        <p className="text-3xl md:text-xl lg:text-2xl mb-8 py-2 sm:py-4 max-w-xl md:max-w-2xl leading-relaxed mx-auto md:mx-0">
          Digital marketing that brings you revenue, not just leads.
        </p>

        {/* CTA Button */}
        <div className="mb-10 flex justify-center md:justify-start">
          <Button text="Get Started" to="/get-started" />
        </div>

        {/* Partner Logos - now using reusable component */}
        <ResponsiveSlider items={logos} slidesPerView={2} />
      </div>
    </div>
  );
}

export default HeroSection;
