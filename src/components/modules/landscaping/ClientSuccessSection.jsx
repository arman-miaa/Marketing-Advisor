

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // only navigation css
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowUpLong } from "react-icons/fa6";

import slideImg1 from "../../../assets/images/landscaping/promier-landscapes.png.2506091256021.webp";
import slideImg2 from "../../../assets/images/landscaping/Coastal-Irrigation-Plumbing.png.webp";
import slideImg3 from "../../../assets/images/landscaping/Purposed-Landscaping.png.2504231441318.webp";

import SharedTitleSection from "../../../shared/SharedTitleSection";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    metric: "7x",
    title: "Return on paid investment",
    description:
      "This established Tennessee landscaping company has gained insight into what marketing efforts drive real results with the help of Scorpion.",
  },
  {
    id: 2,
    logo: slideImg2,
    metric: "7x",
    title: "Return on total investment",
    description:
      "“Most vendors cost you money. With Scorpion, they’ve made us money…If I could go back in time to when they started sending me mailers, I would sign up sooner.”",
  },
  {
    id: 3,
    logo: slideImg3,
    metric: "50%",
    title: "Over monthly lead goal",
    description:
      "With Scorpion's help, we’ve been able to narrow down specific metrics and goals for my business to drive growth, which has been exploding this year. It’s paying off now in a big way",
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
            title="Results that are yards ahead of everyone else"
            highlightText="yards ahead"
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
