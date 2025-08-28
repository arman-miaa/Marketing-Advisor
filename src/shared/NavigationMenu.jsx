import { useState } from "react";
import { Link } from "react-router";

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("technology");

  const categories = [
    {
      id: "technology",
      name: "Technology",
      icon: "⚙️",
      items: [
        "Leads AI",
        "Revenue Intelligence",
        "Scorpion Connect",
        "Capacity Marketing Engine",
        "Scorpion Platform",
        "Convert",
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: "📊",
      items: [
        "Brand Storytelling",
        "Marketing Team",
        "Ranking",
        "Reputation",
        "Social Media Content",
        "Website",
      ],
    },
    {
      id: "advertising",
      name: "Advertising",
      icon: "📢",
      items: [
        "Budgets",
        "Digital Advertising",
        "Landing Page",
        "Social Advertising",
        "Video Advertising",
      ],
    },
    {
      id: "integrations",
      name: "Integrations",
      icon: "🔗",
      items: [
        "CRM Integration",
        "Analytics Tools",
        "Third-party APIs",
        "Custom Solutions",
      ],
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative w-full bg-black z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 relative z-10">
        <div className="text-white text-2xl font-bold">
          Revenue<span className="text-blue-400">MAX</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white/70 font-medium text-sm">
            <button className="hover:text-blue-400">
              <Link to="/hvac">HVAC</Link>
            </button>{" "}
            /
            <button className="hover:text-blue-400">
              <Link to="/hvac/marketing-solutions"> Marketing Solutions </Link>
            </button>
            / Scorpion Connect
          </div>
          <button
            onClick={toggleMenu}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors"
          >
            {isMenuOpen ? "Hide Menu" : "Show Menu"}
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-[1000px] py-10" : "max-h-0"
        }`}
      >
        <div className="relative bg-black">
          {/* Middle Blue Shadow */}
          <div className="absolute top-1/2 left-1/3 w-[700px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-8">
              {/* Left Branding */}
              <div className="flex-1">
                <div className="text-white text-5xl font-bold">
                  Revenue<span className="text-blue-400">MAX</span>
                </div>
              </div>

              {/* Center - Categories */}
              <div className="flex-1 flex flex-col items-center gap-8">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    className={`flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                      activeCategory === category.id
                        ? "scale-110"
                        : "hover:scale-105"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <span className="text-white text-lg font-medium">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right - Items */}
              <div className="flex-1 flex justify-end">
                {activeCategory && (
                  <div className="bg-blue-600 backdrop-blur-sm rounded-2xl p-6 w-80 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">
                          {
                            categories.find((cat) => cat.id === activeCategory)
                              ?.icon
                          }
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-semibold">
                        {
                          categories.find((cat) => cat.id === activeCategory)
                            ?.name
                        }
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {categories
                        .find((cat) => cat.id === activeCategory)
                        ?.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-white/10 transition-colors cursor-pointer group"
                          >
                            <span className="text-white font-medium">
                              {item}
                            </span>
                            <div className="text-white/50 group-hover:text-white transition-colors">
                              →
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
