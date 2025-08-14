

import { Link } from "react-router";

const whoWeHelpData = {
  homeServices: [
    { name: "Electrical", icon: "⚡", path: "/services/electrical" },
    { name: "HVAC", icon: "❄️", path: "/hvac" },
    { name: "Landscaping", icon: "🌿", path: "/services/landscaping" },
    { name: "Pest Control", icon: "🐛", path: "/services/pest-control" },
    { name: "Plumbing", icon: "🔧", path: "/services/plumbing" },
    { name: "Roofing", icon: "🏠", path: "/services/roofing" },
  ],
  legal: [
    { name: "Bankruptcy", icon: "💼", path: "/legal/bankruptcy" },
    { name: "Criminal Defense", icon: "⚖️", path: "/legal/criminal-defense" },
    { name: "Employment Law", icon: "👥", path: "/legal/employment-law" },
    { name: "Estate and Probate", icon: "📋", path: "/legal/estate-probate" },
    { name: "Family Law", icon: "👨‍👩‍👧‍👦", path: "/legal/family-law" },
    { name: "General Legal", icon: "📖", path: "/legal/general" },
    { name: "Immigration", icon: "🌍", path: "/legal/immigration" },
    { name: "Personal Injury", icon: "🏥", path: "/legal/personal-injury" },
  ],
  other: [
    { name: "Franchise", icon: "🏪", path: "/other/franchise" },
    { name: "Medical", icon: "🏥", path: "/other/medical" },
    {
      name: "Platforms & Multi-Location",
      icon: "📍",
      path: "/other/platforms",
    },
    {
      name: "Hospital & Healthcare Systems",
      icon: "🏥",
      path: "/other/hospital-healthcare",
    },
  ],
};




export default function WhoWeHelp({ isMobile = false, onBack }) {
  if (isMobile) {
    return (
      <div className="p-4">
        {onBack && (
          <button onClick={onBack} className="flex items-center space-x-2 mb-6 hover:text-blue-400 transition-colors">
            <span>←</span>
            <span>Back</span>
          </button>
        )}
        <h3 className="text-xl font-bold mb-6">Who We Help</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Home Services</h4>
            <ul className="space-y-3">
              {whoWeHelpData.homeServices.map((item) => (
                <li key={item.name}>
                  <Link href="#" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Legal</h4>
            <ul className="space-y-3">
              {whoWeHelpData.legal.map((item) => (
                <li key={item.name}>
                  <Link href="#" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            {whoWeHelpData.other.map((item) => (
              <div key={item.name} className="bg-blue-900 p-4 rounded-lg">
                <Link href="#" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

return (
  <div className="absolute top-full left-1/2 -translate-x-1/2  text-white w-screen max-w-4xl bg-black border border-gray-700 rounded-lg p-6 shadow-xl">
    <h3 className="text-xl font-bold mb-6">Who We Help</h3>
    <div className="grid grid-cols-4 gap-6">
      <div>
        <h4 className="font-semibold mb-4 text-blue-400">Home Services</h4>
        <ul className="space-y-2">
          {whoWeHelpData.homeServices.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-blue-400">Legal</h4>
        <ul className="space-y-2">
          {whoWeHelpData.legal.map((item) => (
            <li key={item.name}>
              <Link
                href="#"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-4">
          {whoWeHelpData.other.map((item) => (
            <div key={item.name} className="bg-blue-900 p-4 rounded-lg">
              <Link
                href="#"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

}
