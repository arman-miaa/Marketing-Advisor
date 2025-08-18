import { useState } from "react";
import { Zap, Wind, Leaf, Bug, Droplets, Home } from "lucide-react";

import img1 from "../../../assets/images/home-services/electrical.jpg.2504071212420.webp";
import img2 from "../../../assets/images/home-services/hvac.jpg.2503270843011.webp";
import img3 from "../../../assets/images/home-services/landscaping.jpg.2504071220002.webp";
import img4 from "../../../assets/images/home-services/pest-control.jpg.2504071212506.webp";
import img5 from "../../../assets/images/home-services/plumbing.jpg.2504071212519.webp";
import img6 from "../../../assets/images/home-services/roofing.jpg.2504071212422.webp";

const services = [
  { id: "electrical", name: "Electrical", icon: Zap, image: img1 },
  { id: "hvac", name: "HVAC", icon: Wind, image: img2 },
  { id: "landscaping", name: "Landscaping", icon: Leaf, image: img3 },
  { id: "pest-control", name: "Pest Control", icon: Bug, image: img4 },
  { id: "plumbing", name: "Plumbing", icon: Droplets, image: img5 },
  { id: "roofing", name: "Roofing", icon: Home, image: img6 },
];

export default function HomeServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="bg-gradient-to-b from-[#fff] to-blue-100 py-10 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase mb-6 tracking-[0.35em]">
            OUR INDUSTRIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're proud to serve the{" "}
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3  rounded-md">
              home services
            </span>{" "}
            industry
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] items-stretch gap-6">
          {/* Left Side - Service List */}
          <div className="flex flex-col gap-3">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isHovered = hoveredService?.id === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`flex items-center gap-3 px-5 py-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isHovered ? "border-blue-500" : "border-transparent"
                  } bg-white`}
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-800 text-xl font-bold">
                    {service.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Image */}
          <div className="overflow-hidden hidden md:flex rounded-2xl shadow-lg h-full">
            <img
              src={hoveredService?.image || services[0].image}
              alt={hoveredService?.name || services[0].name}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
