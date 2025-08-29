import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // dots css

import slideImg1 from "../../../../assets/images/hvac/InsightsBlog/HS_Group-89.jpg.0000000000000.webp";
import slideImg2 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import slideImg3 from "../../../../assets/images/hvac/InsightsBlog/Rowell-website.jpg.2506091639429.webp";
import slideImg4 from "../../../../assets/images/hvac/InsightsBlog/13WaysHVACBusinessesCanGetMoreLeads1.jpg.2506041256032.webp";
import slideImg5 from "../../../../assets/images/hvac/InsightsBlog/Screenshot-2024-04-25-at-12.25.43-PM.0000000000000.png";
import slideImg6 from "../../../../assets/images/hvac/InsightsBlog/Frame-1171274894.0000000000000.png";

const clientData = [
  {
    id: 1,
    logo: slideImg1,
    title:
      "How HVAC and Plumbing Businesses Are Winning More Jobs in a Changing Market",
    date: "Jan 20, 2023",
  },
  {
    id: 2,
    logo: slideImg2,
    title: "Your HVAC Website Should Work as Hard as You Do",
    date: "Jun 8, 2023",
  },
  {
    id: 3,
    logo: slideImg3,
    title: "The Ultimate Guide to Growing Your HVAC Business",
    date: "Jun 2, 2023",
  },
  {
    id: 4,
    logo: slideImg4,
    title: "13 Ways HVAC Businesses Can Get More Leads",
    date: "Jun 2, 2023",
  },
  {
    id: 5,
    logo: slideImg5,
    title: "3 Ways to Maximize Your HVAC Advertising Efforts",
    date: "May 11, 2023",
  },
  {
    id: 6,
    logo: slideImg6,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
];

export default function MoreStorieSlides() {
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
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => {
                return `<span class="${className} w-5 h-5 bg-gray-400 rounded-full inline-block mx-3 cursor-pointer"></span>`;
              },
            }}
            className="mySwiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full relative">
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
                    <span className="absolute top-4 left-4 text-white text-xs font-bold z-10  px-2 py-1 rounded">
                      HVAC
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
                    <a
                      href="#"
                      className="mt-auto  font-semibold text-blue-600 hover:text-black"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
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
