import { useState } from "react";
import { Link } from "react-router";
import bgImg from "../../public/blue.png"

export default function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("technology");

  const categories = [
    {
      id: "technology",
      name: "Technology",
      icon: "⚙️",
      items: [
        { label: "Leads AI", path: "/hvac/leads-ai" },
        {
          label: "Revenue Intelligence",
          path: "/hvac/revenue-intelligence",
        },
        { label: "Scorpion Connect", path: "/hvac/advisor-connect" },
        {
          label: "Capacity Marketing Engine",
          path: "/hvac/capacity-marketing-engine",
        },
        { label: "Scorpion Platform", path: "/hvac/platform-and-reporting" },
        { label: "Convert", path: "/hvac/website" },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: "📊",
      items: [
        { label: "Website", path: "/hvac/website" },
        { label: "Marketing Team", path: "/hvac/team-of-experts" },
        { label: "Ranking", path: "/hvac/ranking-ai" },
        { label: "Reputation", path: "/hvac/reputation-ai" },
        { label: "Brand Storytelling", path: "/hvac/brand-storytelling" },
        { label: "Social Media Content", path: "/hvac/social-media-content" },
      ],
    },
    {
      id: "advertising",
      name: "Advertising",
      icon: "📢",
      items: [
        { label: "Digital Advertising", path: "/hvac/advertising-ai" },
        { label: "Video Advertising", path: "/hvac/video-advertising" },
        { label: "Social Advertising", path: "/hvac/social-advertising" },
        { label: "Budgets", path: "/hvac/budgets-ai" },
        { label: "Landing Page", path: "/hvac/landing-page-ai" },
      ],
    },
    {
      id: "integrations",
      name: "Integrations",
      icon: "",
      items: [
        { label: "CRM Integration", path: "/integrations/crm" },
        { label: "Analytics Tools", path: "/integrations/analytics" },
        { label: "Third-party APIs", path: "/integrations/apis" },
        { label: "Custom Solutions", path: "/integrations/custom" },
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
          <div className="hidden md:block text-white/70 font-medium text-sm">
            <Link to="/hvac" className="hover:text-blue-400">
              HVAC
            </Link>{" "}
            /
            <Link
              to="/hvac/marketing-solutions"
              className="hover:text-blue-400"
            >
              {" "}
              Marketing Solutions{" "}
            </Link>
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
          isMenuOpen ? "max-h-[2000px] py-6" : "max-h-0"
        }`}
      >
        <div className="relative bg-black px-4">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Categories */}
            <div className="flex flex-col gap-4">
              {categories.map((category) => (
                <div key={category.id}>
                  {/* Category button */}
                  <div
                    className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/40">
                      <span>{category.icon}</span>
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>

                  {/* Items in blue box */}
                  {activeCategory === category.id && (
                    <div className="mt-4 bg-blue-600 rounded-xl p-4 border border-white/10 space-y-3">
                      {category.items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-white/10 cursor-pointer transition"
                        >
                          <span className="text-white">{item.label}</span>
                          <span className="text-white/50">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div
      
            className="hidden md:flex items-center justify-center h-full"
          >

            <div  className="flex items-center justify-center w-full max-w-6xl mx-auto px-8">
              
              {/* Left Branding */}
              <div className="flex-1">
                <div className="text-white text-5xl font-bold">
                  Revenue<span className="text-blue-400">MAX</span>
                </div>
              </div>

              {/* Center - Categories */}
              <div className="flex-1 flex flex-col items-center gap-8">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                      activeCategory === category.id
                        ? "scale-110"
                        : "hover:scale-105"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
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
                  <div className="bg-blue-600 backdrop-blur-sm rounded-2xl p-6 w-80 border border-white/10 flex flex-col items-center justify-center text-center">
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

                    {/* শর্ত চেক */}
                    {activeCategory === "integrations" ? (
                      <div className="text-white text-lg py-30 font-medium">
                        Partnered with top providers to maximize your revenue
                        and impact.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {categories
                          .find((cat) => cat.id === activeCategory)
                          ?.items.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                              <span className="text-white font-medium">
                                {item.label}
                              </span>
                              <div className="text-white/50 group-hover:text-white transition-colors">
                                →
                              </div>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* End Desktop */}
        </div>
      </div>
    </div>
  );
}
