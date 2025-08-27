import { Link } from "react-router";

const marketingSolutionsData = [
  {
    name: "Website",
    description:
      "Websites that build trust, drive revenue, and make you the clear choice—designed for success built to grow.",
  },
  {
    name: "SEO",
    description:
      "Rank higher on search engines, reach the customers you want most, and turn online searches into new revenue.",
  },
  {
    name: "Digital Advertising",
    description:
      "AI-powered ads that get you everywhere customers search—driving performance and just leads.",
  },
  {
    name: "Local Services Ads",
    description:
      "Get seen first on Google, drive calls, build, and customers from day one with LSA.",
  },
  {
    name: "Lead Generation",
    description:
      "Know which leads matter—AI-powered scoring shows you what drives real value.",
  },
  {
    name: "AI Chat & Online Scheduling",
    description:
      "Never miss a lead—24/7 AI chat that books, answers, and converts clicks to customers.",
  },
  {
    name: "Video & Photography",
    description:
      "Stand out and tell your story from our award-winning creative team.",
  },
  {
    name: "Marketing Advisorn Convert",
    description:
      "AI Voice and Messaging Assistants built to instantly respond to all leads and convert them to revenue.",
  },
];

export default function MarketingSolutionsHome({ isMobile = false, onBack }) {
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
        <h3 className="text-xl font-bold mb-6">Marketing Solutions</h3>
        <div className="space-y-4">
          {marketingSolutionsData.map((item) => (
            <div key={item.name} className="bg-blue-900 p-4 rounded-lg">
              <Link
                href="#"
                className="block hover:text-blue-400 transition-colors"
              >
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 text-white w-screen max-w-4xl bg-black border border-gray-700 rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold mb-6">Marketing Solutions</h3>
      <div className="grid grid-cols-3 gap-4">
        {marketingSolutionsData.map((item) => (
          <div key={item.name} className="bg-blue-900 p-4 rounded-lg">
            <Link
              href="#"
              className="block hover:text-blue-400 transition-colors"
            >
              <h4 className="font-semibold mb-2">{item.name}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
