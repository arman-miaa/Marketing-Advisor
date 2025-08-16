"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // only navigation css
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowUpLong } from "react-icons/fa6";

import slideImg1 from "../../../assets/images/hvac/hembree-logo.png";
import slideImg2 from "../../../assets/images/hvac/logo2.webp";
import slideImg3 from "../../../assets/images/hvac/logo1.webp";
import slideImg4 from "../../../assets/images/hvac/arctic-air-home-services.png";
import slideImg5 from "../../../assets/images/hvac/serviceone.2311291526178.png";
import slideImg6 from "../../../assets/images/hvac/logo4.png";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    metric: "$4M",
    title: "Revenue increase",
    description:
      "Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 3x.",
  },
  {
    id: 2,
    logo: slideImg2,
    metric: "25x",
    title: "Return on total investment",
    description:
      "If I could give my past self any advice on marketing, I would say look to Scorpion sooner.",
  },
  {
    id: 3,
    logo: slideImg3,
    metric: "9x",
    title: "Return on paid investment",
    description:
      "With Scorpion's help and custom-tailored marketing solutions, Swift Services, a home services company in South Carolina, is experiencing meaningful growth.",
  },
  {
    id: 4,
    logo: slideImg4,
    metric: "18x",
    title: "Attributed return on total investment",
    description:
      "As a long-time Scorpion client, Arctic Air Home Services continues to see double-digit revenue growth and strong ROI powered by Scorpion's RevenueMAX.",
  },
  {
    id: 5,
    logo: slideImg5,
    metric: "2x",
    title: "Increase in revenue growth",
    description:
      "Our cost per lead is going down, and our organic search rankings are going up. It's been a really great experience.",
  },
  {
    id: 6,
    logo: slideImg6,
    metric: "35%",
    title: "Increase in average ticket value",
    description:
      "Scorpion's AI technology drives in calls that are bookable jobs.",
  },
];

export default function ClientSuccessSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 md:py-38 bg-gradient-to-b from-blue-0 to-blue-50 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="container mx-auto text-left mb-16">
          <p className="text-blue-500 uppercase text-sm font-semibold tracking-wider mb-4">
            CLIENT SUCCESS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Results that make a{" "}
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md">
              difference
            </span>
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            allowTouchMove={false}
            simulateTouch={false}
            className="mySwiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-[460px] flex flex-col border border-gray-100 group">
                  {/* Logo */}
                  <div className="mb-20 h-16 flex items-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.title} client logo`}
                      className="h-18 w-auto object-contain"
                    />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <FaArrowUpLong className="font-bold text-6xl text-green-600" />
                      </div>
                      <h3 className="text-4xl md:text-6xl font-bold text-gray-900">
                        {client.metric}
                      </h3>
                    </div>
                    <p className="font-semibold text-gray-900 text-xl mb-4">
                      {client.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-900 text-lg leading-relaxed flex-grow">
                    "{client.description}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-2 mt-12 bg-white w-fit p-1 border border-gray-200  mx-auto mr-50">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-900 hover:text-gray-600 transition-colors duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-7" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-900 hover:text-gray-600 transition-colors duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
