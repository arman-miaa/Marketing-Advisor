"use client";

import { Link } from "react-router";

const marketingSolutionsData = {
  advertising: [
    { name: "Budgets", description: "See better returns", badge: "AI" },
    {
      name: "Digital Advertising",
      description: "Experience advertising that drives revenue",
      badge: "AI",
    },
    {
      name: "Landing Page",
      description: "Convert more with the right message",
      badge: "AI",
    },
    { name: "Social Advertising", description: "Hold their attention" },
    { name: "Video Advertising", description: "Make yourself known" },
  ],
  marketing: [
    { name: "Brand Storytelling", description: "Showcase your expertise" },
    { name: "Marketing Team", description: "Get a team that knows HVAC" },
    {
      name: "Ranking",
      description: "Get to the top and stay there",
      badge: "AI",
    },
    {
      name: "Reputation",
      description: "Create a reputation for results",
      badge: "AI",
    },
    { name: "Social Media Content", description: "Stay top of mind" },
    { name: "Website", description: "First impressions that earn the job" },
  ],
  technology: [
    {
      name: "Capacity Marketing Engine",
      description: "Keep your schedule full",
    },
    { name: "Leads", description: "Every lead, fully realized", badge: "AI" },
    { name: "Revenue Intelligence", description: "Grow your revenue" },
    {
      name: "Scorpion Connect",
      description: "Never miss an opportunity",
      badge: "AI",
    },
    {
      name: "Scorpion Platform",
      description: "See everything in one place",
      badge: "AI",
    },
  ],
};

export default function MarketingSolutions({ isMobile = false, onBack }) {
  if (isMobile) {
    return (
      <div className="p-4">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 mb-6 hover:text-blue-400 transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </button>
        )}
        <h3 className="text-xl font-bold mb-6 text-white">
          Marketing Solutions
        </h3>
        <div className="space-y-6">
          {Object.entries(marketingSolutionsData).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-3 text-white capitalize">
                {category}
              </h4>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-800 p-3 rounded-lg hover:border hover:border-blue-400 transition-all duration-200"
                  >
                    <Link
                      href="#"
                      className="block hover:text-blue-400 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-white">
                          {item.name}
                        </h5>
                        {item.badge && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 text-white w-screen max-w-6xl bg-black border border-gray-700 rounded-lg shadow-xl z-50">
      {/* Left sidebar with RevenueMAX branding */}
      <div className="flex">
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-l-lg w-80 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              Revenue<span className="text-blue-400">MAX</span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your marketing should drive revenue. Now it will.
            </p>
            <Link
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-8">
          <h3 className="text-2xl font-bold mb-8">Marketing Solutions</h3>

          <div className="grid grid-cols-3 gap-8">
            {/* Advertising Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
                Advertising
              </h4>
              <div className="space-y-4">
                {marketingSolutionsData.advertising.map((item) => (
                  <div
                    key={item.name}
                    className="group hover:border hover:border-blue-400 rounded-lg p-3 transition-all duration-200 cursor-pointer"
                  >
                    <Link href="#" className="block">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h5>
                        {item.badge && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
                Marketing
              </h4>
              <div className="space-y-4">
                {marketingSolutionsData.marketing.map((item) => (
                  <div
                    key={item.name}
                    className="group hover:border hover:border-blue-400 rounded-lg p-3 transition-all duration-200 cursor-pointer"
                  >
                    <Link href="#" className="block">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h5>
                        {item.badge && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">
                Technology
              </h4>
              <div className="space-y-4">
                {marketingSolutionsData.technology.map((item) => (
                  <div
                    key={item.name}
                    className="group hover:border hover:border-blue-400 rounded-lg p-3 transition-all duration-200 cursor-pointer"
                  >
                    <Link href="#" className="block">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h5>
                        {item.badge && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
