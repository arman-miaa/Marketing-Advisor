import img1 from "../../../assets/images/landscaping/frame_3650.jpg.2506101433468.webp";
import img2 from "../../../assets/images/landscaping/frame_1960304.jpg.2506042303443.webp";


import video1 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (10) [hvac-10].mp4";
import video2 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (11) [hvac-11].mp4";


import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import VideoModal from "../../../shared/VideoModel";
import SharedTitleSection from "../../../shared/SharedTitleSection";

const VideoTestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const testimonials = [
    {
      id: 1,
      quote:
        "“Most vendors cost you money. With Scorpion, they’ve made us money…If I could go back in time to when they started sending me mailers, I would sign up sooner.”",
      company: "Coastal Lawn and Pest",
      backgroundImage: img1,
      videoUrl: video1,
    },
    {
      id: 2,
      quote:
        "With Scorpion's help, we’ve been able to narrow down specific metrics and goals for my business to drive growth, which has been exploding this year. It’s paying off now in a big way.",
      company: "Purposed Landscaping",
      backgroundImage: img2,
      videoUrl: video2,
    },
  ];

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-30 px-4 ">
      <div className="">
        {/* Header */}
        <div className=" container mx-auto ">
          <SharedTitleSection
            category="Featured Testimonials"
            title="Spotlight stories for landscape companies"
            highlightText="Spotlight"
          />
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
          allowTouchMove={true}
          simulateTouch={true}
          className="mySwiper pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-[90%] md:!w-[60%]">
              <div
                className="relative rounded-4xl overflow-hidden shadow-lg group cursor-pointer h-[500px] md:h-[700px] flex flex-col"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${testimonial.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handlePlayVideo(testimonial.videoUrl)}
              >
                {/* Play Button (bottom-right) */}
                <div className="absolute bottom-8 right-8">
                  <button
                    onClick={() => handlePlayVideo(testimonial.videoUrl)}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300"
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
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <blockquote className="text-2xl md:text-4xl font-medium mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-xl  not-italic">
                    {testimonial.company}
                  </cite>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="container mx-auto">
          <div className="custom-pagination  mt-8 bg-white p-5 px-8 border border-gray-300 w-fit rounded-full inline-flex gap-4" />
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal
          videoSrc={currentVideoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default VideoTestimonialsSection;
