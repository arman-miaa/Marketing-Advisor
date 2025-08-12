import { useState } from "react";
import bgVideo1 from "../../../assets/images/Home Page/video_7.mp4";

const industries = [
  {
    name: "Home Services",
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
    subcategories: [
      "Corporate Law",
      "Criminal Law",
      "Family Law",
      "Immigration",
    ],
  },
  { name: "Franchise", subcategories: [] },
  { name: "Medical", subcategories: [] },
  { name: "Platform & Multi-Location", subcategories: [] },
  { name: "Hospital & Healthcare Systems", subcategories: [] },
];

export default function IndustrySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16  max-w-6xl mx-auto px-40 ">
      <div className="max-w-6xl mx-auto px-60  text-center mb-8">
        <p className="uppercase tracking-widest text-xs font-bold text-primary">
          The Scorpion Difference
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          The solutions, commitment, and expertise to deliver{" "}
          <span className="bg-primary/20 text-primary px-1 rounded">
            maximum growth
          </span>
        </h2>
        <p className="text-base-content/70 mt-2">
          Choose your <span className="font-semibold">industry</span> and let’s
          get started.
        </p>
      </div>

      {/* Video Background Container */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        {/* Single Background Video */}
        <video
          src={bgVideo1}
          autoPlay
          loop
          muted
          className="w-full h-[400px] md:h-[500px] object-cover"
        ></video>

        {/* Overlay Menu */}
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
          <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
            {/* Left Menu */}
            <div className="flex flex-col space-y-2">
              {industries.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer px-6 py-3 rounded-lg transition-colors text-lg font-medium
                    ${
                      index === activeIndex
                        ? "bg-primary text-white"
                        : "bg-black/50 text-white hover:bg-primary hover:text-white"
                    }`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* Right Submenu */}
            <div>
              {industries[activeIndex].subcategories.length > 0 && (
                <div className="bg-gradient-to-b from-primary to-secondary text-white rounded-lg p-6 space-y-2">
                  {industries[activeIndex].subcategories.map((sub, i) => (
                    <div
                      key={i}
                      className="py-2 border-b border-white/20 last:border-none"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
