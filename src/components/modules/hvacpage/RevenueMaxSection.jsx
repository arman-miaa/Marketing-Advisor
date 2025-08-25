import video from "../../../assets/images/hvac/video2.mp4";
import img1 from "../../../assets/images/hvac/img1.webp";
import img2 from "../../../assets/images/hvac/img2.webp";
import img3 from "../../../assets/images/hvac/img3.webp";
import boxVideo from "../../../assets/images/hvac/box1.mp4";
import { useState } from "react";
import VideoModal from "../../../shared/VideoModel";

// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

export default function RevenueMaxSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideoModal = (videoSrc) => {
    setActiveVideo(videoSrc);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white py-12 lg:py-30">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        <div className="text-left mb-8 lg:mb-12">
          <p className="text-blue-600 font-semibold uppercase mb-6 tracking-[0.35em]">
            OUR SOLUTION
          </p>
          <h1 className=" container mx-auto mt-3 text-4xl md:text-6xl font-semibold md:leading-18">
            Your marketing should drive predictable <br />
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md text-black ">
              Revenue
            </span>{" "}
          </h1>
          <p className=" container mx-auto mt-3 text-4xl md:text-6xl font-semibold md:leading-18">
            Now it does with RevenueMAX.
          </p>
        </div>

        {/* Full Box Video */}
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden mb-8 lg:mb-12 h-[500px] md:h-auto ">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Revenue<span className="">MAX</span>
            </h1>
            <p className="text-lg md:hidden text-blue-100 mb-6">
              The digital marketing and technology solution that drives calls,
              jobs, and revenue for your HVAC business.
            </p>

            {/* sm device এ btn নিচে full-width stack হবে */}
            <div className="hidden md:flex justify-between items-center">
              <p className="text-lg text-blue-100 mb-6">
                The digital marketing and technology solution that drives calls,
                jobs, and revenue for your HVAC business.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="marketing-solutions">
                  <button className="px-6 py-3 rounded-full border cursor-pointer text-lg border-blue-600 text-blue-600 font-semibold shadow-md transition">
                    Learn More
                  </button>
                </Link>
                <button
                  onClick={() => openVideoModal(boxVideo)}
                  className="bg-blue-600 px-6 py-3 cursor-pointer rounded-full text-lg text-white font-semibold shadow-md transition"
                >
                  Watch Video
                </button>
              </div>
            </div>
            {/* sm এ আলাদা নিচে btn গুলো */}
            <div className="md:hidden flex flex-col gap-4 mb-10">
              <button className="w-full px-6 py-3 rounded-full border cursor-pointer text-lg border-blue-600 text-blue-600 font-semibold shadow-md transition">
                Learn More
              </button>

              <button
                onClick={() => openVideoModal(boxVideo)}
                className="w-full bg-blue-600 px-6 py-3 cursor-pointer rounded-full text-lg text-white font-semibold shadow-md transition"
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        {/* md+ এ Grid / sm এ Swiper */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <Card
            title="Book the right jobs, faster"
            desc="From highly-targeted ads to service emails, convert leads with quick responses and easy online scheduling."
            img={img1}
          />
          {/* Card 2 */}
          <Card
            title="Make every dollar count"
            desc="Marketing Advisorn tracks what’s working, cuts what’s not, and puts your budget toward the jobs that bring in real revenue."
            img={img2}
          />
          {/* Card 3 */}
          <Card
            title="Get more profitable calls"
            desc="Fill your calendar with high-margin installs, system replacements,  and service  agreements."
            img={img3}
          />
        </div>

        {/* sm এ Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Card
                title="Book the right jobs, faster"
                desc="From highly-targeted ads to service emails, convert leads with quick responses and easy online scheduling."
                img={img1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Make every dollar count"
                desc="Marketing Advisorn tracks what’s working, cuts what’s not, and puts your budget toward the jobs that bring in real revenue."
                img={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Get more profitable calls"
                desc="Fill your calendar with high-margin installs, system replacements, and service system agreements."
                img={img3}
              />
            </SwiperSlide>
          </Swiper>
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

// Card Component
function Card({ title, desc, img }) {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl p-8 md:p-10 text-white">
      <h3 className="text-xl md:text-4xl font-bold mb-3">{title}</h3>
      <p className="text-blue-100 text-sm md:text-xl mb-6 leading-relaxed">
        {desc}
      </p>
      <div className="rounded-lg p-4 backdrop-blur-sm">
        <img
          src={img}
          alt="Mobile App Interface"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
}
