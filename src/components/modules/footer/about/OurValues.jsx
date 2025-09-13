import {
  FaChartLine,
  FaHandsHelping,
  FaUsers,
  FaBullseye,
  FaFlask,
} from "react-icons/fa";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

const values = [
  {
    id: 1,
    icon: <FaChartLine className="text-4xl text-white" />,
    title: "Constant Improvement",
  },
  {
    id: 2,
    icon: <FaHandsHelping className="text-4xl text-white" />,
    title: "Genuine Care",
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-white" />,
    title: "Unbeatable Teamwork",
  },
  {
    id: 4,
    icon: <FaBullseye className="text-4xl text-white" />,
    title: "Unmatched Results",
  },
  {
    id: 5,
    icon: <FaFlask className="text-4xl text-white" />,
    title: "Winning Mindset",
  },
];

export default function OurValues() {
  return (
    <div className="container mx-auto py-16 text-center">
      {/* Header */}    
      <SharedTitleSection
        category="Our Values"
        title="What Guides Us"
        highlightText="more jobs."
        align="center"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {values.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-md bg-gradient-to-br from-indigo-100 to-blue-100 "
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 mb-4">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg md:text-2xl mt-4 font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
