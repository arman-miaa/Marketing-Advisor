import { useState } from "react";
import img1 from "../../../assets/images/home-services/electrical-alt.jpg.2503270842590.webp";
import img2 from "../../../assets/images/home-services/hvac-alt.jpg.2503270842570.webp";
import img3 from "../../../assets/images/home-services/pest-control-alt.jpg.2503270842581.webp";
import img4 from "../../../assets/images/home-services/plumbing-alt.jpg.2503270842581.webp";
import img5 from "../../../assets/images/home-services/landscaping-alt.jpg.2503270842581.webp";
import img6 from "../../../assets/images/home-services/roofing-alt.jpg.2503270842571.webp";
import { useNavigate } from "react-router";

const services = [
  {
    id: "electrical",
    name: "Electrical",
    image: img1,
    href: "/services/electrical",
  },
  { id: "hvac", name: "HVAC", image: img2, href: "/services/hvac" },
  {
    id: "pest-control",
    name: "Pest Control",
    image: img3,
    href: "/services/pest-control",
  },
  { id: "plumbing", name: "Plumbing", image: img4, href: "/services/plumbing" },
  {
    id: "landscaping",
    name: "Landscaping",
    image: img5,
    href: "/services/landscaping",
  },
  { id: "roofing", name: "Roofing", image: img6, href: "/services/roofing" },
];

export default function HomeServicesBanner() {
  const [hoveredService, setHoveredService] = useState(null);

  const navigate = useNavigate(); 

  const handleServiceClick = (href) => {
   navigate(href)
  };

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative h-full w-full rounded-2xl ">
        <div className="absolute inset-0 flex gap-[8px] pb-10 bg-black rounded-2xl overflow-hidden">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex-1 cursor-pointer group transition-all duration-500 ease-in-out rounded-2xl overflow-hidden bg-black"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.href)}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  hoveredService === service.id
                    ? "brightness-110 contrast-105"
                    : "brightness-75 contrast-90"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bottom-0 transition-all duration-500 pointer-events-none
          ${hoveredService === service.id ? "opacity-60" : "opacity-100"}`}
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Text */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Center Heading */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-[120px] text-[#dfe6f0] font-bold mb-2">
              Home Services
            </h1>
            <p className="text-xl md:text-4xl opacity-90">
              Choose your industry.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden bg-gray-900 py-12">
        <div className="text-center text-white mb-8 px-4">
          <h1 className="text-4xl font-bold mb-2">Home Services</h1>
          <p className="text-lg opacity-90">Choose your industry.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 max-w-2xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleServiceClick(service.href)}
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-105 brightness-75 contrast-90"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white text-lg font-semibold">
                  {service.name}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
