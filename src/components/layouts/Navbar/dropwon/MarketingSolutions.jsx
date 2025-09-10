import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const marketingSolutionsData = {
  advertising: [
    {
      name: "Budgets",
      description: "See better returns",
      badge: "AI",
      slug: "budgets-ai",
    },
    {
      name: "Digital Advertising",
      description: "Experience advertising that drives revenue",
      badge: "AI",
      slug: "advertising-ai",
    },
    {
      name: "Landing Page",
      description: "Convert more with the right message",
      badge: "AI",
      slug: "landing-page-ai",
    },
    {
      name: "Social Advertising",
      description: "Hold their attention",
      slug: "social-advertising",
    },
    {
      name: "Video Advertising",
      description: "Make yourself known",
      slug: "video-advertising",
    },
  ],
  marketing: [
    {
      name: "Brand Storytelling",
      description: "Showcase your expertise",
      slug: "brand-storytelling",
    },
    {
      name: "Marketing Team",
      description: "Get a team that knows HVAC",
      slug: "team-of-experts",
    },
    {
      name: "Ranking",
      description: "Get to the top and stay there",
      badge: "AI",
      slug: "ranking-ai",
    },
    {
      name: "Reputation",
      description: "Create a reputation for results",
      badge: "AI",
      slug: "reputation-ai",
    },
    {
      name: "Social Media Content",
      description: "Stay top of mind",
      slug: "social-media-content",
    },
    {
      name: "Website",
      description: "First impressions that earn the job",
      slug: "website",
    },
  ],
  technology: [
    {
      name: "Capacity Marketing Engine",
      description: "Keep your schedule full",
      slug: "capacity-marketing-engine",
    },
    {
      name: "Leads",
      description: "Every lead, fully realized",
      badge: "AI",
      slug: "leads-ai",
    },
    {
      name: "Revenue Intelligence",
      description: "Grow your revenue",
      slug: "revenue-intelligence",
    },
    {
      name: "Scorpion Connect",
      description: "Never miss an opportunity",
      badge: "AI",
      slug: "advisor-connect",
    },
    {
      name: "Scorpion Platform",
      description: "See everything in one place",
      badge: "AI",
      slug: "platform-and-reporting",
    },
  ],
};

export default function MarketingSolutions({
  isMobile = false,
  showCategory,
  setShowCategory,
  onLinkClick,
  onClose
}) {
    const handleClick = () => {
      if (onLinkClick) onLinkClick(); // desktop dropdown close
      if (onClose) onClose(); // mobile menu close
    };
  if (isMobile) {
    return (
      <div className="p-4">
        {/* Category select না করা থাকলে */}
        {!showCategory && (
          <>
            <h3 className="text-xl font-bold mb-6 mt-6 text-white">
              Marketing Solutions
            </h3>

            {/* Categories */}
            <div className="space-y-4 mb-8">
              {Object.keys(marketingSolutionsData).map((category) => (
                <button
                  key={category}
                  onClick={() => setShowCategory(category)}
                  className="flex items-center justify-between w-full text-left p-3 rounded-lg border-b border-gray-500 cursor-pointer transition-all duration-200"
                >
                  <span className="capitalize font-semibold">{category}</span>
                  <ChevronRight size={28} />
                </button>
              ))}
            </div>

            {/* Sidebar নিচে */}
            <div className=" p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-2">
                Revenue<span className="text-blue-400">MAX</span>
              </h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Your marketing should drive revenue. Now it will.
              </p>
              <Link
                onClick={handleClick}
                to="/solutions/learn-more"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Learn More
              </Link>
            </div>
          </>
        )}

        {/* Category select করলে */}
        {showCategory && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold capitalize text-white">
                {showCategory}
              </h3>
              <button
                onClick={() => setShowCategory(null)}
                className="text-sm text-blue-400 hover:underline"
              ></button>
            </div>

            <div className="space-y-3">
              {marketingSolutionsData[showCategory].map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-500 cursor-pointer p-3 rounded-lg transition-all duration-200"
                >
                  <Link
                    onClick={handleClick}
                    to={`/hvac/${item.slug}`}
                    className="block hover:text-blue-400 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h5 className="font-semibold text-white">{item.name}</h5>
                      {item.badge && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // 🔹 Desktop view
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 text-white w-screen max-w-6xl bg-black border border-gray-700 rounded-lg shadow-xl z-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-l-lg w-80 flex flex-col justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              Revenue<span className="text-blue-400">MAX</span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your marketing should drive revenue. Now it will.
            </p>
            <Link
              onClick={onLinkClick}
              to="/solutions/learn-more"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <h3 className="text-2xl font-bold mb-8">Marketing Solutions</h3>
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(marketingSolutionsData).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 capitalize">
                  {category}
                </h4>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="group hover:border hover:border-blue-400 rounded-lg p-3 transition-all duration-200 cursor-pointer"
                    >
                      <Link
                        onClick={onLinkClick}
                        to={`/hvac/${item.slug}`}
                        className="block"
                      >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
