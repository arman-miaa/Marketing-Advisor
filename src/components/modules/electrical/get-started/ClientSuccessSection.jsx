

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // only navigation css
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowUpLong } from "react-icons/fa6";

import slideImg1 from "../../../../assets/images/electrical/Mel-Carr.jpg.2506091251581.webp";
import slideImg2 from "../../../../assets/images/electrical/swift.png.2506111332514.webp";
import slideImg3 from "../../../../assets/images/electrical/Knees-Electrical-Logo.2412051033373.png";
import slideImg4 from "../../../../assets/images/electrical/Logo.2203161223481Faith-Electric-Group-dark.2504181627568.png";
import slideImg5 from "../../../../assets/images/electrical/west-houston-electric.2109282315060.png";



import SharedTitleSection from "../../../../shared/SharedTitleSection";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    metric: "18x",
    title: "Return on paid investment",
    description:
      "Mel Carr Electric, an Albany-based electrical company, saw a significant increase in revenue after partnering with Scorpion.",
  },
  {
    id: 2,
    logo: slideImg2,
    metric: "9x",
    title: "Return on total investment",
    description:
      "With Scorpion's help and custom-tailored marketing solutions, Swift Services, a home services company in South Carolina, is experiencing meaningful growth.",
  },
  {
    id: 3,
    logo: slideImg3,
    metric: "12x",
    title: "Return on total investment",
    description:
      "RevenueMAX helped me get the best possible ROI on my marketing. We’re close to hitting $5M in revenue now.",
  },
  {
    id: 4,
    logo: slideImg4,
    metric: "6x",
    title: "Return on total investment",
    description:
      "Scorpion has been a blessing to our business. Scorpion is clearing the gates for us so we get the right leads & has contributed to our growth.",
  },
  {
    id: 5,
    logo: slideImg5,
    metric: "32x",
    title: "More total leads",
    description: "Working with Scorpion has been a game changer.",
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
