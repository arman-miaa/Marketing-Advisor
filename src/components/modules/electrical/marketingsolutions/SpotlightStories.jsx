import { Play } from "lucide-react";
import SharedTitleSection from "../../../shared/SharedTitleSection";
import img1 from "../../../assets/images/electrical/Main.2007091654550.jpg";
import { useState } from "react";
import VideoModal from "../../../shared/VideoModel";
import boxVideo from "../../../../public/video.mp4";

export default function SpotlightStories() {
      const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);
    
      const openVideoModal = (videoSrc) => {
        setActiveVideo(videoSrc);
        setIsModalOpen(true);
      };
  return (
    <section className="container mx-auto px-4 py-12 md:py-32">
      {/* Section Header */}
      <div className="container mx-auto mb-8">
        <SharedTitleSection
          category="Featured Testimonials"
          title="Spotlight stories for electricians"
          highlightText="Spotlight"
        />
      </div>

      {/* Testimonial Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[650px]">
        {/* Background Image */}
        <img
          src={img1}
          alt="Spotlight story"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay (Black + Blue) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-blue-900/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 text-white">
          {/* Logo */}
          <img src={img1} alt="West Houston Electric" className="h-12 mb-3" />

          {/* Quote */}
          <p className="text-lg md:text-2xl italic mb-4">
            “Working with Scorpion has been a game changer.”
          </p>

          {/* Company Name */}
          <p className="text-sm md:text-lg font-semibold">
            West Houston Electric, Inc.
          </p>
        </div>

        {/* Play Button */}
        <button
          onClick={() => openVideoModal(boxVideo)}
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-md cursor-pointer z-10"
        >
          <Play className="w-5 h-5" />
        </button>
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
