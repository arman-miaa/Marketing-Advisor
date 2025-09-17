

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // only navigation css
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowUpLong } from "react-icons/fa6";

import slideImg1 from "../../../assets/images/roofing/QuailtyRoofinglogo-dark.2504181127333.png";
import slideImg2 from "../../../assets/images/roofing/JoeDarkpng.2504181223115.png";
import slideImg3 from "../../../assets/images/roofing/Onit-Roofing-dark.2504181259346.png";

import SharedTitleSection from "../../../shared/SharedTitleSection";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    metric: "28x",
    title: "Return on total Investment",
    description:
      "This Florida-based roofing company knew it needed the right partner to help it achieve its marketing goals. With Scorpion, it's seen a 28x return on total investment.",
  },
  {
    id: 2,
    logo: slideImg2,
    metric: "16x",
    title: "Return on total investment",
    description:
      "This family-owned and operated roofing company partnered with Scorpion to help focus their marketing efforts and goals to drive real results.",
  },
  {
    id: 3,
    logo: slideImg3,
    metric: "113%",
    title: "Increase in leads",
    description:
      "“We’re small. This is our livelihood. We want to know what’s being said in our ads, where our leads are coming from, and what’s working. Scorpion helped us get visibility and control and made our budget work harder.”",
  },
 
];

export default function ClientSuccessSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 md:py-38 bg-gradient-to-b from-blue-0 to-blue-50 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="container mx-auto ">
          <SharedTitleSection
            category="Client Success"
            title="Results that make a difference"
            highlightText="Results"
          />
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1, // small device → 1 card
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2, // tablet → 2 card
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3, // laptop → 3 card
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 4, // desktop → 4 card
                centeredSlides: true,
              },
            }}
            spaceBetween={30}
            grabCursor={false}
            allowTouchMove={false}
            simulateTouch={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-[460px] flex flex-col border border-gray-200 group">
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
          <div className="flex justify-center gap-2 mt-12 bg-white w-fit p-1 border border-gray-200  mx-auto mr-10 md:mr-50">
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
