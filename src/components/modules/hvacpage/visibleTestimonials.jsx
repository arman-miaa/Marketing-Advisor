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
import VideoModal from "../../../shared/VideoModel";

const VideoTestimonialsSection = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };



  return (
    <section className="py-16 md:py-30 px-4 ">
      <div className="">
        {/* Header */}
        <div className="text-left mb-12 container mx-auto ">
          <p className="text-blue-500 uppercase  font-semibold tracking-wider mb-4">
            FEATURED TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-6xl mt-12 font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md">
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
          allowTouchMove={false}
          simulateTouch={false}
          className="mySwiper pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-[80%] md:!w-[60%]">
              <div
                className="relative rounded-4xl overflow-hidden shadow-lg group cursor-pointer h-[700px] flex flex-col"
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
                  <blockquote className="text-lg md:text-4xl font-medium mb-3 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-xl opacity-90 not-italic">
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
