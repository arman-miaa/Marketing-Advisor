import { useState } from "react";
import img1 from "../../../../assets/images/hvac/advisorConnect/Hedricks-Group.jpg.2506040928374.webp";
import img2 from "../../../../assets/images/hvac/advisorConnect/hedrick-s.jpg.2506050933091.webp";

import boxVideo from "/video.mp4"
import VideoModal from "../../../../shared/VideoModel";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function SuccessStoriesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideoModal = (videoSrc) => {
      setActiveVideo(videoSrc);
      setIsModalOpen(true);
    };
  
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div>
          <SharedTitleSection
            category="Testimonials"
            title="Success with Connec"
            highlightText="Success"
            description="Hear from HVAC professionals who grew their business by connecting with customers."
            descriptionSize="text-base md:text-lg"
          />
        </div>

        {/* Case Study Card */}
        <div className=" rounded-2xl  overflow-hidden  p-6 grid md:grid-cols-2 gap-8 md:gap-18 items-center">
          {/* Left Side - Image with overlay */}
          <div className="relative">
            <img
              src={img1}
              alt="Hedrick's Service Now team"
              className="w-full rounded-xl object-cover h-[400px] md:h-[950px] "
            />

            {/* Logo / overlay image */}
            <div className="absolute bottom-0 right-15">
              <img
                src={img2}
                alt="Hedrick's Service Now Logo"
                className="w-full p-6 rounded-lg shadow-lg"
              />
            </div>

            {/* Play button bottom right */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => openVideoModal(boxVideo)}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-lg p-2 shadow-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hedrick&apos;s Service Now
            </h3>
            <hr className="border-t border-gray-400 mt-10 mb-10" />

            {/* Statistics row */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-b bg-purple-200 to-blue-200 rounded-lg p-8 ">
                <div className="text-2xl md:text-4xl font-bold  mb-1">25x</div>
                <div className="text-lg mt-2">Return on total investment</div>
              </div>

              <div className="bg-gradient-to-b bg-purple-200 to-blue-200 rounded-lg p-8 ">
                <div className="text-2xl md:text-4xl font-bold  mb-1">6x</div>
                <div className="text-lg mt-2">
                  Return on advertising investment
                </div>
              </div>
              <div className="bg-gradient-to-b bg-purple-200 to-blue-200 rounded-lg p-8 ">
                <div className="text-2xl md:text-4xl font-bold  mb-1">31%</div>
                <div className="text-lg mt-2">Over monthly lead goal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dynamic Video Modal */}
      {isModalOpen && (
        <VideoModal
          videoSrc={activeVideo}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
