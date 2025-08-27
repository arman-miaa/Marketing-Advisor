import { useState } from "react";
import img1 from "../../../../assets/images/hvac/advisorConnect/Hedricks-Group.jpg.2506040928374.webp";
import img2 from "../../../../assets/images/hvac/advisorConnect/hedrick-s.jpg.2506050933091.webp";

import boxVideo from "/video.mp4"
import VideoModal from "../../../../shared/VideoModel";

export default function SuccessStoriesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideoModal = (videoSrc) => {
      setActiveVideo(videoSrc);
      setIsModalOpen(true);
    };
  
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg">
              Success
            </span>{" "}
            with Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from HVAC professionals who grew their business by connecting
            with customers.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image with overlay */}
          <div className="relative">
            <img
              src={img1}
              alt="Hedrick's Service Now team"
              className="w-full rounded-xl object-cover h-[600px] "
            />

            {/* Logo / overlay image */}
            <div className="absolute bottom-0 right-10">
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

            {/* Statistics row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  25x
                </div>
                <div className="text-sm text-gray-600">
                  Return on total investment
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  6x
                </div>
                <div className="text-sm text-gray-600">
                  Return on advertising investment
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  31%
                </div>
                <div className="text-sm text-gray-600">
                  Over monthly lead goal
                </div>
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
