import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import img1 from "../../../../assets/images/hvac/Partnerships/PHCCDark.png.2505221506461.webp"
import img2 from "../../../../assets/images/hvac/Partnerships/Service-Nation-AllianceDark.png.2505221506463.webp"
import img3 from "../../../../assets/images/hvac/Partnerships/NexstarDark.png.2505221506456.webp"
import img4 from "../../../../assets/images/hvac/Partnerships/The-Blue-CollarDark.png.2505221506468.webp"
import img5 from "../../../../assets/images/hvac/Partnerships/ACCADark.png.2505221506419.webp"
import img6 from "../../../../assets/images/hvac/Partnerships/EGIADark.png.2505221506428.webp"

const partners = [
  {
    name: "Plumbing-Heating-Cooling Contractors Association",
    description:
      "As a corporate partner for the Plumbing-Heating–Cooling Contractors Association, Scorpion works alongside PHCC on its mission to advance the industry by providing the best education, advocacy, and connections.",
    logo: img1,
  },
  {
    name: "ServiceNation",
    description:
      "Advisor is a Premier Partner with ServiceNation. We work with ServiceNation on its mission to help contractors improve their sales, marketing, operations, and profitability.",
    logo: img2,
  },
  {
    name: "Nexstar Network",
    description:
      "As a strategic partner of the Nexstar Network, we’re dedicated to its mission of turning the world’s best tradespeople into the world’s best business people.",
    logo: img3,
  },
  {
    name: "Blue Collar Success Group",
    description:
      "Scorpion is a vendor partner with Blue Collar Success Group. We collaborate with Blue Collar Success Group on its mission to accelerate the path of success for home services companies",
    logo: img4,
  },
  {
    name: "Contractor University",
    description:
      "Scorpion supports the Air Conditioning Contractors of America as a Corporate Partner, where we help ACCA as it supports members with networking opportunities, education, and advocacy services that support their business development interests.",
    logo: img5,
  },
  {
    name: "Air Conditioning Contractors of America",
    description:
      "Scorpion is a proud partner of EGIA. We support EGIA’s mission to help HVAC contractors grow stronger businesses through cutting-edge training, financing solutions, and industry-leading resources.",
    logo: img6,
  },
];

export default function IndustryPartnerships() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, partners.length - visibleCount));
  };
  const visibleTabs = partners.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 py-16">
      {/* Section Title */}

      <div className="container mx-auto py-8">
        <SharedTitleSection
          category="Industry Partners"
          title="Working together throughout the HVAC indust"
          highlightText="together"
          align="center"
        />
      </div>

      <div className="bg-white container mx-auto p-12">
        {/* Arrow Buttons (top right) */}
        <div className="max-w-6xl mx-auto flex justify-end mb-4">
          <div className="flex gap-2 bg-white border border-gray-300 rounded-lg  px-3 py-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full  ${
                startIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100 cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-5 h-5 " />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + visibleCount >= partners.length}
              className={`p-2 rounded-full ${
                startIndex + visibleCount >= partners.length
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          {visibleTabs.map((partner, idx) => {
            const globalIndex = startIndex + idx;
            return (
              <button
                key={globalIndex}
                onClick={() => setActiveIndex(globalIndex)}
                className={`px-6 py-4 md:py-14 rounded-xl  font-bold text-lg  transition flex-1 text-black  text-center ${
                  globalIndex === activeIndex
                    ? "bg-gradient-to-t from-blue-100 to-purple-100   shadow"
                    : "bg-white border border-gray-200  hover:bg-gray-50"
                }`}
              >
                {partner.name}
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <div className=" mt-6 grid md:grid-cols-2 gap-8 items-center   rounded-2xl p-8">
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-4">
              {partners[activeIndex].name}
            </h3>
            <p className="text-gray-900 text-lg">{partners[activeIndex].description}</p>
          </div>
          <div className="flex justify-center bg-white rounded-2xl  h-full shadow">
            <img
              src={partners[activeIndex].logo}
              alt={partners[activeIndex].name}
              className="w-30  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
