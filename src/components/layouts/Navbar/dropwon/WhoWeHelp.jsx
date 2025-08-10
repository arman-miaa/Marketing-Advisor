

import { Link } from "react-router";

const whoWeHelpData = {
  homeServices: [
    { name: "Electrical", icon: "⚡" },
    { name: "HVAC", icon: "❄️" },
    { name: "Landscaping", icon: "🌿" },
    { name: "Pest Control", icon: "🐛" },
    { name: "Plumbing", icon: "🔧" },
    { name: "Roofing", icon: "🏠" },
  ],
  legal: [
    { name: "Bankruptcy", icon: "💼" },
    { name: "Criminal Defense", icon: "⚖️" },
    { name: "Employment Law", icon: "👥" },
    { name: "Estate and Probate", icon: "📋" },
    { name: "Family Law", icon: "👨‍👩‍👧‍👦" },
    { name: "General Legal", icon: "📖" },
    { name: "Immigration", icon: "🌍" },
    { name: "Personal Injury", icon: "🏥" },
  ],
  other: [
    { name: "Franchise", icon: "🏪" },
    { name: "Medical", icon: "🏥" },
    { name: "Platforms & Multi-Location", icon: "📍" },
    { name: "Hospital & Healthcare Systems", icon: "🏥" },
  ],
}



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
