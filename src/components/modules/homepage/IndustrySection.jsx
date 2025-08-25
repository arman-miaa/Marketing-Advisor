"use client";

import { useState } from "react";
import {
  Home,
  Scale,
  Briefcase,
  Stethoscope,
  MapPin,
  Hospital,
  ChevronRight,
} from "lucide-react";

// Media imports
import bgVideo1 from "../../../assets/images/Home Page/video_7.mp4";

import bgImg1 from "../../../assets/images/Home Page/home-services.jpg.2505081145521.webp";
import bgImg2 from "../../../assets/images/Home Page/legal.jpg.2505081145518.webp";
import bgImg3 from "../../../assets/images/Home Page/franchise.jpg.2505081145522.webp";
import bgImg4 from "../../../assets/images/Home Page/medical.jpg.2505081145522.webp";
import bgImg5 from "../../../assets/images/Home Page/multi-location.jpg.2505081145505.webp";
import bgImg6 from "../../../assets/images/Home Page/healthcare.jpg.2505081145506.webp";

const industries = [
  {
    name: "Home Services",
    icon: <Home size={40} />,
    backgroundImage: bgImg1,
    subcategories: [
      "Electrical",
      "HVAC",
      "Landscaping",
      "Pest Control",
      "Plumbing",
      "Roofing",
    ],
  },
  {
    name: "Legal",
    icon: <Scale size={40} />,
    backgroundImage: bgImg2,
    subcategories: [
      "Bankruptcy",
      "Criminal Defense",
      "Employment Law",
      "Estate and Probate",
      "Family Law",
      "General Legal",
      "Immigration",
      "Personal Injury",
    ],
  },
  {
    name: "Franchise",
    icon: <Briefcase size={40} />,
    backgroundImage: bgImg3,
    subcategories: [],
  },
  {
    name: "Medical",
    icon: <Stethoscope size={40} />,
    backgroundImage: bgImg4,
    subcategories: [],
  },
  {
    name: "Platforms & Multi-Location",
    icon: <MapPin size={40} />,
    backgroundImage: bgImg5,
    subcategories: [],
  },
  {
    name: "Hospital & Healthcare Systems",
    icon: <Hospital size={40} />,
    backgroundImage: bgImg6,
    subcategories: [],
  },
];

export default function IndustrySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // mobile click-open

  const [isHoveringRight, setIsHoveringRight] = useState(false);

  return (
    <section className=" py-16 md:py-30 px-4 bg-blue-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <p className="text-blue-600 text-sm font-semibold uppercase mb-6 tracking-[0.35em]">
            The Marketing Advisorn Difference
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:leading-20">
            The solutions, commitment, and expertise to deliver{" "}
            <span className="bg-[#d1d5e0] px-2 rounded-2xl">
              maximum growth
            </span>
          </h2>
          <p className="text-2xl md:text-3xl font-medium pb-10 md:py-6">
            Choose your <span className="font-semibold">industry</span> and
            let’s get started.
          </p>
        </div>

        {/* Main Box */}
        <div className="relative p-6 md:p-12 py-20 rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hoveredIndex !== null ? "opacity-0" : "opacity-100"
            }`}
          >
            <source src={bgVideo1} type="video/mp4" />
          </video>

          {/* Background Image on Hover */}
          {hoveredIndex !== null && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform scale-105"
              style={{
                backgroundImage: `url('${industries[hoveredIndex].backgroundImage}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          )}
          {hoveredIndex === null && (
            <div className="absolute inset-0 bg-black/50"></div>
          )}

          {/* Content */}
          <div className="relative z-10 flex items-center h-full md:px-12">
            <p className="absolute -top-8 text-white/80 font-semibold uppercase mb-4 tracking-[0.2em] text-sm">
              WHO WE HELP
            </p>

            <div className="flex flex-col md:flex-row gap-2 w-full max-w-6xl">
              {/* Left Sidebar */}
              <div
                className="flex flex-col space-y-3 md:min-w-[380px]"
                onMouseLeave={() => !isHoveringRight && setHoveredIndex(null)}
              >
                {industries.map((item, index) => (
                  <div key={index} className="w-full">
                    <div
                      onMouseEnter={() =>
                        window.innerWidth >= 768 && setHoveredIndex(index)
                      }
                      onClick={() =>
                        window.innerWidth < 768 &&
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className={`cursor-pointer flex items-center justify-between px-5 py-6 md:py-10 rounded-xl transition-all duration-300 text-base font-medium backdrop-blur-sm border
                        ${
                          hoveredIndex === index || openIndex === index
                            ? "bg-blue-600/50 text-white border-blue-400/60 shadow-lg"
                            : "bg-black/60 text-white/90 border-white/20 hover:bg-blue-600/60 hover:border-blue-400/40"
                        }`}
                    >
                      <div className="flex items-center gap-3 text-lg md:text-2xl font-medium">
                        <div
                          className={` ${
                            hoveredIndex === index || openIndex === index
                              ? ""
                              : "text-blue-400"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight
                        size={18}
                        className={`transition-all duration-300 ${
                          hoveredIndex === index || openIndex === index
                            ? "text-white rotate-90 md:rotate-0"
                            : "text-white/70"
                        }`}
                      />
                    </div>

                    {/* Mobile Subcategories (open below) */}
                    {openIndex === index &&
                      window.innerWidth < 768 &&
                      item.subcategories.length > 0 && (
                        <div className="bg-blue-600/40 backdrop-blur-md text-white rounded-xl p-4 mt-2 border border-blue-400/50 shadow-xl">
                          <div className="space-y-3">
                            {item.subcategories.map((sub, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-500/60 group"
                              >
                                <span className="font-medium">{sub}</span>
                                <ChevronRight
                                  size={16}
                                  className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>

              {/* Desktop Right Panel */}
              {hoveredIndex !== null &&
                industries[hoveredIndex].subcategories.length > 0 && (
                  <div
                    className="hidden md:block bg-blue-600/40 backdrop-blur-md text-white rounded-xl p-6 border border-blue-400/50 min-w-[300px] shadow-xl"
                    onMouseEnter={() => setIsHoveringRight(true)}
                    onMouseLeave={() => {
                      setIsHoveringRight(false);
                      setHoveredIndex(null);
                    }}
                  >
                    <div className="space-y-3">
                      {industries[hoveredIndex].subcategories.map((sub, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-500/60 group"
                        >
                          <span className="font-medium">{sub}</span>
                          <ChevronRight
                            size={16}
                            className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
