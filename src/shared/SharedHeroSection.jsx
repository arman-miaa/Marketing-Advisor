import { useState, useEffect } from "react";
import Button from "../components/ui/Button";

function SharedHeroSection({
  videoSrc,
  heading,
  subHeading,
  description,
  buttonText,
  buttonLink,
  logos = [], // ✅ default empty array
}) {
  const [loadedLogos, setLoadedLogos] = useState([]);

  // Lazy load logos with stagger, only if logos array is valid
  useEffect(() => {
    if (Array.isArray(logos) && logos.length > 0) {
      logos.forEach((logo, index) => {
        setTimeout(() => {
          setLoadedLogos((prev) => [...prev, logo]);
        }, index * 300); // staggered load
      });
    }
  }, [logos]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-60 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col justify-center items-center px-6 md:px-56 h-full text-white text-center">
        <h1 className="text-5xl md:text-6xl lg:text-[105px] font-bold tracking-tight">
          {heading}
        </h1>
        <p className="text-5xl md:text-6xl xl:text-[100px] font-bold mb-6 tracking-tight relative overflow-hidden text-blue-200">
          {subHeading}
        </p>
        <p className="text-2xl lg:text-3xl mb-10 py-4 leading-relaxed">
          {description}
        </p>

        <div className="mb-12 md:mb-16 w-full flex justify-center">
          <Button text={buttonText} to={buttonLink} />
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-6 sm:gap-12 lg:gap-16 place-items-center">
          {loadedLogos.length === 0 ? (
            <p className="text-gray-300 text-lg"></p>
          ) : (
            loadedLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="w-40 sm:w-[210px] h-12 sm:h-16 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.replaceWith(
                    document.createTextNode("Logo unavailable")
                  );
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SharedHeroSection;
