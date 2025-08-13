import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Image imports
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
      "With Scorpion's help and custom-tailored marketing solutions, Swift Services is experiencing meaningful growth.",
  },
  {
    id: 4,
    logo: slideImg4,
    metric: "18x",
    title: "Attributed return on total investment",
    description:
      "Arctic Air Home Services continues to see double-digit revenue growth powered by Scorpion’s RevenueMAX.",
  },
  {
    id: 5,
    logo: slideImg5,
    metric: "2x",
    title: "Increase in revenue growth",
    description:
      "Our cost per lead is going down, and our organic search rankings are going up.",
  },
  {
    id: 6,
    logo: slideImg6,
    metric: "35%",
    title: "Increase in average ticket value",
    description:
      "Scorpion’s AI technology drives in calls that are bookable jobs.",
  },
];

export default function ClientSuccessSection() {
  const swiperRef = useRef(null);

  return (
    <section className="py-16 bg-gray-50 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase text-sm font-semibold tracking-wider mb-2">
            CLIENT SUCCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Results that make a{" "}
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              difference
            </span>
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={3.5} // মাঝের ৩টা ফুল, দুই পাশে হাফ
          centeredSlides={true} // সেন্টারে রাখার জন্য
          breakpoints={{
            320: { slidesPerView: 1.2, centeredSlides: true },
            640: { slidesPerView: 2.2, centeredSlides: true },
            1024: { slidesPerView: 3.5, centeredSlides: true },
          }}
          loop={true}
          modules={[Navigation]}
          className="pb-12 relative"
        >
          {clientData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow h-full flex flex-col">
                <img
                  src={client.logo}
                  alt={client.title}
                  className="h-12 w-auto mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">
                  <span className="text-green-600">↑</span> {client.metric}
                </h3>
                <p className="font-semibold mb-2">{client.title}</p>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Arrow Right */}
   
        </Swiper>

        {/* Arrows */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white border border-gray-300 w-10 h-10 rounded-full shadow hover:bg-gray-100 flex items-center justify-center text-xl"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white border border-gray-300 w-10 h-10 rounded-full shadow hover:bg-gray-100 flex items-center justify-center text-xl"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
