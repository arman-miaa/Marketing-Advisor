"use client";

import { useState } from "react";

const services = [
  {
    id: "electrical",
    name: "Electrical",
    image: "/placeholder-zu79p.png",
    href: "/services/electrical",
  },
  {
    id: "hvac",
    name: "HVAC",
    image: "/hvac-technician-ac-unit.png",
    href: "/services/hvac",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    image: "/pest-control-spraying.png",
    href: "/services/pest-control",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    image: "/plumber-under-sink.png",
    href: "/services/plumbing",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    image: "/placeholder-il5a5.png",
    href: "/services/landscaping",
  },
  {
    id: "roofing",
    name: "Roofing",
    image: "/roofer-residential-roof.png",
    href: "/services/roofing",
  },
];

export default function HomeServicesBanner() {
const [hoveredService, setHoveredService] = useState(null);


  const handleServiceClick = (href) => {
    // For demo purposes, we'll just log the navigation
    // In a real app, you'd use Next.js router or window.location
    console.log(`Navigating to: ${href}`);
    // router.push(href) // if using Next.js router
  };

  return (
    <section className="relative w-full bg-gray-900 overflow-hidden">
      {/* Desktop Banner Layout */}
      <div className="hidden lg:block relative h-[500px]">
        <div className="absolute inset-0 flex">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex-1 cursor-pointer group transition-all duration-500 ease-in-out"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.href)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter:
                    hoveredService === service.id
                      ? "brightness(1.2) contrast(1.1)"
                      : "brightness(0.7) contrast(0.9)",
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredService === service.id ? "bg-black/20" : "bg-black/50"
                }`}
              />

              {/* Service Label */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {service.name}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 border-2 transition-all duration-300 ${
                  hoveredService === service.id
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Home Services</h1>
            <p className="text-xl opacity-90">Choose your industry.</p>
          </div>
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="lg:hidden bg-gray-900 py-12">
        {/* Header */}
        <div className="text-center text-white mb-8 px-4">
          <h1 className="text-4xl font-bold mb-2">Home Services</h1>
          <p className="text-lg opacity-90">Choose your industry.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 max-w-2xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleServiceClick(service.href)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: "brightness(0.8) contrast(0.9)",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

              {/* Service Label */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white text-lg font-semibold">
                  {service.name}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
