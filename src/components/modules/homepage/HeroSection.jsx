import { useState, useEffect } from "react";
import HeroVideo from "../../../assets/images/Home Page/bannervideo.mp4";
import logo1 from "../../../assets/images/Home Page/microsoftlogo.webp";
import logo2 from "../../../assets/images/Home Page/googlepartnerlogo.webp";
import logo3 from "../../../assets/images/Home Page/meta.webp";

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

  // Change text every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      <div className="absolute inset-0 bg-black/20 bg-opacity-60 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col justify-center px-56 h-full text-white">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight">
          MAXIMIZE
        </h1>

        {/* Animated Slogan */}
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight h-20 relative">
          {slogans.map((text, i) => (
            <span
              key={i}
              className={`absolute transition-all duration-700 ease-in-out ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {text}
            </span>
          ))}
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
          Digital marketing that brings you revenue, not just leads.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
          <img
            src={logo1}
            alt="Microsoft Advertising"
            className="w-30 h-12 object-fit"
          />
          <img
            src={logo2}
            alt="Google Partner"
            className="w-30 h-12 object-cover"
          />
          <img
            src={logo3}
            alt="Meta Business Partner"
            className="w-30 h-12 object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
