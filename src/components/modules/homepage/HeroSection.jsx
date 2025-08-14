import { useState, useEffect } from "react";
import HeroVideo from "../../../assets/images/Home Page/bannervideo.mp4";
import logo1 from "../../../assets/images/Home Page/microsoftlogo.webp";
import logo2 from "../../../assets/images/Home Page/googlepartnerlogo.webp";
import logo3 from "../../../assets/images/Home Page/meta.webp";
import Button from "../../ui/Button";

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
      <div className="relative z-20 flex flex-col justify-center px-56 h-full text-white">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-[125px] font-bold tracking-tight">
          MAXIMIZE
        </h1>

        {/* Animated Slogan */}
        <p className="text-[#f0f6fba8] text-4xl md:text-5xl lg:text-6xl xl:text-[120px] font-bold mb-6 tracking-tight h-30 relative overflow-hidden">
          {slogans.map((text, i) => (
            <span
              key={i}
              className={`absolute w-full text-left transition-transform duration-700 ease-in-out ${
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
        <p className="text-lg md:text-xl lg:text-2xl mb-10 py-4 max-w-2xl leading-relaxed">
          Digital marketing that brings you revenue, not just leads.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <Button />
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
          <img
            src={logo1}
            alt="Microsoft Advertising"
            className="w-[210px] h-16 object-fit"
          />
          <img
            src={logo2}
            alt="Google Partner"
            className="w-[210px] h-16 object-fit"
          />
          <img
            src={logo3}
            alt="Meta Business Partner"
            className="w-[210px] h-16 object-fit"
          />
        </div>
      </div>

 
    </div>
  );
}

export default HeroSection;
