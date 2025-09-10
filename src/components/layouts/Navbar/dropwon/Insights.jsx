import { CgNotes } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";

const aboutUsData = [
  {
    name: "Blogs",
    logo: <CgNotes className="text-2xl" />,
    link: "/hvac/insights/blog4",
  },
  {
    name: "FAQ",
    logo: <FaQuestionCircle className="text-2xl" />,
    link: "/hvac/insights/faq",
  },
];

export default function Insights({ isMobile = false, onLinkClick, onClose }) {
  const handleClick = () => {
    if (onLinkClick) onLinkClick(); // desktop dropdown close
    if (onClose) onClose(); // mobile menu close
  };

  if (isMobile) {
    return (
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold mt-6 mb-6">Insights</h3>
        <div className="space-y-4">
          {aboutUsData.map((item) => (
            <Link
              key={item.name}
              to={item.link}
             
              onClick={handleClick}
              className="flex items-center gap-3 p-3 rounded-lg border-b border-gray-700"
            >
              <span>{item.logo}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Desktop
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 text-white w-screen max-w-4xl bg-black border border-gray-700 rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold mb-6">Insights</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {aboutUsData.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={onLinkClick} // ✅ dropdown close
            className="flex items-center gap-3 bg-blue-900 p-4 rounded-lg hover:bg-blue-800 hover:text-blue-300 transition"
          >
            <span>{item.logo}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
