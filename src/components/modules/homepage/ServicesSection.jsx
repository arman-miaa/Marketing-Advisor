import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Revenue from "../../../assets/images/Home Page/output2.mp4";
import technologyMobile from "../../../assets/images/Home Page/video_4.mp4";
import advertisingDashboard from "../../../assets/images/Home Page/video_5.mp4";
import marketingReport from "../../../assets/images/Home Page/video_6.mp4";
import Button from "../../ui/Button";
import VideoModal from "../../../shared/VideoModel";
import boxVideo from "../../../assets/images/Home Page/videoBox.mp4";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const services = [
    {
      title: "Technology",
      description: "Revenue-driven technology specifically built for you..",
      video: technologyMobile,
    },
    {
      title: "Advertising",
      description:
        "Advertising that spends and targets intelligently to grow your business.",
      video: advertisingDashboard,
    },
    {
      title: "Marketing",
      description:
        "Marketing that brings you the right clients at the right time.",
      video: marketingReport,
    },
  ];

  const openVideoModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-black pb-16 md:py-16 px-6 md:pb-36">
      <div className="container mx-auto">
        {/* Title + Description */}
        <div className="text-center md:mb-8">
          <h2 className="text-6xl md:text-9xl font-extrabold text-white tracking-tight">
            Revenue<span className="text-blue-500"> MAX</span>
          </h2>
          <p className="mt-4 md:py-8 text-4xl md:text-6xl text-white max-w-7xl mx-auto md:leading-18">
            The digital marketing solution that gives you everything you need to{" "}
            <span className="inline-block bg-[#e4e7edeb] text-black px-2 rounded-2xl">
              succeed
            </span>{" "}
            online.
          </p>
        </div>

        {/* Top main video with stats */}
        <div className="mb-12 mt-12 md:mt-0 rounded-xl overflow-hidden relative shadow-2xl">
          <video
            src={Revenue}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[400px] md:h-[720px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center text-white space-x-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">3.8M</p>
              <span className="text-sm opacity-80">Impressions</span>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">$1.7M</p>
              <span className="text-sm opacity-80">Revenue</span>
            </div>
          </div>
          {/* Watch Video CTA */}
          <div className="absolute md:right-6 bottom-6 w-full md:w-auto px-4 md:px-0">
            <button
              onClick={() => openVideoModal(boxVideo)}
              className="bg-blue-500 text-white cursor-pointer hover:bg-blue-600 w-full md:w-auto px-4 py-3 rounded-full transition-colors"
            >
              Watch Video
            </button>
          </div>
        </div>

        {/* Service cards */}
        {/* Mobile (< md) → Swiper with overlay text */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                  onClick={() => openVideoModal(service.video)}
                >
                  <video
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Overlay text */}
                  <div className="absolute bottom-6 left-4 right-4 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base leading-snug">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* pagination container outside */}
          <div className="mt-4 flex justify-center">
            <div className="swiper-pagination"></div>
          </div>
        </div>

        {/* Desktop (>= md) → Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transition-all duration-500"
            >
              <div
                className="relative h-[460px] cursor-pointer"
                onClick={() => openVideoModal(service.video)}
              >
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="p-5 md:px-12">
                <h3 className="text-lg md:text-3xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white text-lg md:text-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pick Your Solution CTA */}
        <div className="flex justify-start mt-14">
          <Button text={`Pick Your Industry`} to="/" />
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
};

export default ServicesSection;
