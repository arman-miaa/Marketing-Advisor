import img1 from "../../../assets/images/pest-control/frame_414.jpg.2506040922363.webp";
import img2 from "../../../assets/images/pest-control/frame_3650.jpg.2506101433468.webp";
import img3 from "../../../assets/images/pest-control/frame_1952210.jpg.2506040919573.webp";


import video1 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (10) [hvac-10].mp4";
import video2 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (11) [hvac-11].mp4";
import video3 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (12) [hvac-12].mp4";


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
        "What marketing used to mean to me was paying someone money, and they’d throw your logo in places. Now, it means working with a team and they push your brand in a really healthy way with precision.",
      company: "Paragon Pest Control",
      backgroundImage: img1,
      videoUrl: video1,
    },
    {
      id: 2,
      quote:
        "“Most vendors cost you money. With Scorpion, they’ve made us money…If I could go back in time to when they started sending me mailers, I would sign up sooner.”",
      company: "Coastal Lawn and Pest",
      backgroundImage: img2,
      videoUrl: video2,
    },
    {
      id: 3,
      quote:
        "There's nothing better than walking in in the morning, turning the computer on and seeing, I got three, four different leads in. It's taken care of.",
      company: "Gladiator Pest Control",
      backgroundImage: img3,
      videoUrl: video3,
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
            title="Spotlight stories for HVAC companies"
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
