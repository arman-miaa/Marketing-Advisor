"use client";

import { useState } from "react";
import { Zap, Wind, Leaf, Bug, Droplets, Home } from "lucide-react";

const services = [
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    image: "/images/electrical-service.png",
    description: "Professional electrical services and installations",
  },
  {
    id: "hvac",
    name: "HVAC",
    icon: Wind,
    image: "/images/hvac-service.png",
    description: "Heating, ventilation, and air conditioning services",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    icon: Leaf,
    image: "/images/landscaping-service.png",
    description: "Complete landscaping and garden maintenance",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: Bug,
    image: "/images/pest-control-service.png",
    description: "Effective pest control and prevention solutions",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Droplets,
    image: "/images/plumbing-service.png",
    description: "Expert plumbing repairs and installations",
  },
  {
    id: "roofing",
    name: "Roofing",
    icon: Home,
    image: "/images/roofing-service.png",
    description: "Professional roofing services and repairs",
  },
];

export default function HomeServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR INDUSTRIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're proud to serve the{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-4">
              home services
            </span>{" "}
            industry
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Service List */}
          <div className="space-y-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isActive = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:shadow-md"
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isActive ? "bg-blue-500" : "bg-blue-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${
                        isActive ? "text-white" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    {isActive && (
                      <p className="text-blue-100 text-sm mt-1 animate-fade-in">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="card bg-white shadow-xl overflow-hidden">
              <figure className="relative h-96">
                <img
                  src={activeService.image || "/placeholder.svg"}
                  alt={`${activeService.name} service`}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  key={activeService.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-2xl text-gray-900">
                  {activeService.name} Services
                </h3>
                <p className="text-gray-600">{activeService.description}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
