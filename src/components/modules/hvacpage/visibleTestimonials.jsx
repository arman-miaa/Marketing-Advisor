import img1 from "../../../assets/images/hvac/hembree-vans.jpg";
import img2 from "../../../assets/images/hvac/Hedricks-Group.jpg.2506040928374.webp";
import img3 from "../../../assets/images/hvac/bill-gouty.jpg.2506111016246.webp";
import img4 from "../../../assets/images/hvac/JC-Refrigeration.2006041556273.png";



import video1 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (10) [hvac-10].mp4";
import video2 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (11) [hvac-11].mp4";
import video3 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (12) [hvac-12].mp4";
import video4 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (13) [hvac-13].mp4";




import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VideoTestimonialsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const testimonials = [
    {
      id: 1,
      quote:
        "Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 3x.",
      company: "Hembree Heating & Air Conditioning",
      backgroundImage: img1,
      videoUrl: video1,
    },
    {
      id: 2,
      quote: "If I could give my past self any advice...",
      company: "Hedrick's Service Now",
      backgroundImage: img2,
      videoUrl: video2,
    },
    {
      id: 3,
      quote:
        "Our revenue has increased dramatically since working with Scorpion.",
      company: "Arctic Air Home Services",
      backgroundImage: img3,
      videoUrl: video3,
    },
    {
      id: 4,
      quote:
        "The results speak for themselves - we're booking more jobs than ever.",
      company: "ServiceOne AC & Plumbing",
      backgroundImage: img4,
      videoUrl: video4,
    },
  ];

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            FEATURED TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="bg-purple-100 px-3 py-1 rounded-lg">
              Spotlight
            </span>{" "}
            stories for HVAC companies
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-[80%] md:!w-[60%]">
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-80 flex flex-col"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${testimonial.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handlePlayVideo(testimonial.videoUrl)}
              >
                {/* Play Button (bottom-right) */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => handlePlayVideo(testimonial.videoUrl)}
                    className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <blockquote className="text-lg font-medium mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm opacity-90 not-italic">
                    {testimonial.company}
                  </cite>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="custom-pagination mt-8 bg-white p-3 px-6 border border-gray-300 w-fit rounded-full inline-flex gap-4" />
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src={currentVideoUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Testimonial Video"
              />
            </div>
          </div>
        </div>
        
      )}
    </section>
  );
};

export default VideoTestimonialsSection;
