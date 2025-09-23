import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 

import { FaArrowUpLong } from "react-icons/fa6";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // dots css

import slideImg1 from "../../../../assets/images/electrical/Blogs/shutterstock_1548031529[1].2309081336550.jpg";
import slideImg2 from "../../../../assets/images/electrical/Blogs/shutterstock_1116716507.jpg";
import slideImg3 from "../../../../assets/images/electrical/website/Electrical-Website-1.jpg.2505231347494.webp";
import slideImg4 from "../../../../assets/images/electrical/Blogs/My-project.jpg";
import slideImg5 from "../../../../assets/images/electrical/Blogs/et.jpg.0000000000000.webp";
import slideImg6 from "../../../../assets/images/electrical/Blogs/shutterstock_165329198.2307251301550.jpg";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    title: "6 Ways Scorpion Can Help Electricians Attract More Business",
    date: "Jan 20, 2023",
  },
  {
    id: 2,
    logo: slideImg2,
    title: "How to Recharge Your Electrician's Marketing Efforts",
    date: "Jun 8, 2023",
  },
  {
    id: 3,
    logo: slideImg3,
    title: "How To Design a High-Converting Electrician Website",
    date: "Jun 2, 2023",
  },
  {
    id: 4,
    logo: slideImg4,
    title: "Customer Journey Map for Electricians",
    date: "Jun 2, 2023",
  },
  {
    id: 5,
    logo: slideImg5,
    title:
      "Wired for Success: Best Practices for Designing an Electrical Services Website",
    date: "May 11, 2023",
  },
  {
    id: 6,
    logo: slideImg6,
    title: "4 Video Marketing Examples for Electricians",
    date: "Apr 6, 2023",
  },
];

export default function MoreStorieSlides() {
   const swiperRef = useRef(null);
  return (
    <section className="py-20 md:py-38 bg-gradient-to-b from-blue-0 to-blue-50 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="container mx-auto text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Explore More Stories
          </h2>
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
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} w-4 h-4 bg-gray-400 rounded-full inline-block mx-2 cursor-pointer"></span>`;
              },
            }}
            className="mySwiper"
          >
            {(swiper) => {
              swiperRef.current = swiper;
            }}

            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <a
                  href="#"
                  className="group  bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full relative"
                >
                  {/* Image */}
                  <div className="h-98 w-full relative overflow-hidden">
                    <img
                      src={client.logo}
                      alt="story thumbnail"
                      className="w-full h-full object-cover"
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* HVAC Text on Top */}
                    <span className="absolute top-4 left-4 text-white text-xs font-bold z-10 px-2 py-1 rounded">
                      Electrical
                    </span>

                    {/* Overlay Content Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 text-left p-4 rounded-lg z-10">
                      <span className="text-xs font-semibold text-white mb-1 block">
                        {client.date}
                      </span>
                      <h3 className="text-lg md:text-3xl mt-6 font-bold text-white">
                        {client.title}
                      </h3>
                    </div>
                  </div>

                  {/* Read More link */}
                  <div className="p-6 flex flex-col flex-grow mt-auto">
                    <span className="mt-auto font-semibold text-blue-600 group-hover:text-black transition-colors duration-300">
                      Read More →
                    </span>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots Pagination */}
          <div className="custom-pagination md:ml-42 border-2 border-gray-300  rounded-full bg-white p-4  flex justify-center cursor-pointer mt-10"></div>
        </div>
      </div>
    </section>
  );
}
