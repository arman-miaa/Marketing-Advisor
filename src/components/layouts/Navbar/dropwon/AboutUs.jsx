import { Link } from "react-router";

const aboutUsData = [
  {
    name: "About Us",
    description: "Our mission is to help local businesses succeed.",
  },
  {
    name: "Careers",
    description:
      "Join a team that's driving real growth—for businesses and for your career.",
  },
  {
    name: "Marketing Advisorn Cares",
    description:
      "At Marketing Advisorn, we're dedicated to making a positive impact in the communities where we live and work.",
  },
  {
    name: "Partnerships",
    description:
      "Strong partnerships with top providers to maximize your marketing revenue and impact.",
  },
  {
    name: "Marketing Advisorn News",
    description:
      "Get the latest news on marketing and technology to keep your business ahead of the game.",
  },
  {
    name: "Marketing Advisorn Blog",
    description: "Marketing tips and tricks just for you.",
  },
];

export default function About({ isMobile = false, onBack }) {
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
        <h3 className="text-xl font-bold mb-6">About Us</h3>
        <div className="space-y-4">
          {aboutUsData.map((item) => (
            <div key={item.name} className="border-b border-gray-700 pb-4">
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
      <h3 className="text-xl font-bold mb-6">About Us</h3>
      <div className="grid grid-cols-3 gap-4">
        {aboutUsData.map((item) => (
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
