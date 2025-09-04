import SharedTitleSection from "../../../../shared/SharedTitleSection";
import CardImg1 from "../../../../assets/images/hvac/advisorConnect/response-expectations.png.2506050851346.webp";
import { FiClock } from "react-icons/fi";

export default function FirstChoiceSection() {
  return (
    <div className="bg-white px-4 md:px-0">
      {/* Header */}
      <div className="container mx-auto py-10 md:py-20">
        <SharedTitleSection
          category=""
          title="Make your HVAC business the 
          first and only choice."
          highlightText="only"
          description="Your website visitors have high expectations. Scorpion Connect makes sure you exceed them."
          descriptionSize="text-base md:text-3xl"
        />

        {/* Card Section */}
        <div className="relative mt-10 bg-gradient-to-r from-purple-100 to-blue-200 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-12 overflow-hidden">
          {/* Left Content */}
          <div className="flex flex-col items-start md:w-1/2 space-y-4 z-10">
            <div className="md:flex items-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                <FiClock className="text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Response Expectations
              </h3>
            </div>
          </div>

          {/* Right Content (Image + % text inside) */}
          <div className="relative flex justify-center mt-10 md:mt-0 z-10 w-full md:w-auto">
            {/* Image for md and up */}
            <img
              src={CardImg1}
              alt="Response Expectations"
              className="hidden md:flex w-64 md:w-100"
            />

            {/* Text inside circle */}
            <div className="absolute inset-0 mt-8 md:mt-0 flex flex-col items-center justify-center px-4">
              <h2 className="text-7xl sm:text-6xl md:text-7xl font-extrabold text-black">
                90%
              </h2>
              <p className="mt-2 text-center text-gray-700 sm:text-base md:text-lg max-w-[200px] sm:max-w-[220px] md:max-w-[200px]">
                of people expect a response to their inquiry within 24 hours.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-24 md:mt-0 md:absolute md:bottom-0 md:left-0 p-4 md:p-8 w-full flex flex-col md:flex-row gap-4 z-20">
            <button className="flex-1 py-5 text-left pl-6 text-white font-medium bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
              Response Expectations
            </button>
            <button className="flex-1 py-5 text-left pl-6 text-gray-800 font-medium backdrop-blur-md bg-white/40 hover:bg-blue-100/40 transition-colors rounded-2xl">
              Multiple Contact Methods
            </button>
            <button className="flex-1 py-5 text-left pl-6 text-gray-800 font-medium backdrop-blur-md bg-white/40 hover:bg-blue-100/40 transition-colors rounded-2xl">
              Lead Conversion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
