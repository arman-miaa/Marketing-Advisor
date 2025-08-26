import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // ✅ pagination css
import { FaArrowUpLong } from "react-icons/fa6";

import slideImg1 from "../../../../assets/images/hvac/marketing-solutions/josh-hembree.jpg";
import slideImg2 from "../../../../assets/images/hvac/marketing-solutions/frame_1186.jpg.2506101438064.webp";
import slideImg3 from "../../../../assets/images/hvac/marketing-solutions/scott-whitaker.2504071441550.jpg";
import slideImg4 from "../../../../assets/images/hvac/marketing-solutions/bill-gouty.jpg.2506111016246.webp";
import slideImg5 from "../../../../assets/images/hvac/marketing-solutions/img5.webp";
import slideImg6 from "../../../../assets/images/hvac/marketing-solutions/JC-Refrigeration.2006041556273.png";

const testimonials = [
  {
    id: 1,
    name: "Josh Hembree",
    title: "Owner, Hembree Heating & Air Conditioning",
    quote:
      "Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 3x.",
    image: slideImg1,
  },
  {
    id: 2,
    name: "Jake & Conner Hedrick",
    title: "Co-Owners, Hedrick's Service Now",
    quote:
      "If I could give my past self any advice on marketing, I would say look to Scorpion sooner.",
    image: slideImg2,
  },
  {
    id: 3,
    name: "Scott Whitaker",
    title: "CEO, Arctic Air & Home Services",
    quote:
      "As a long-time Scorpion client, Arctic Air Home Services continues to see double-digit revenue growth and strong ROI powered by Scorpion's Revenu...",
    image: slideImg3,
  },
  {
    id: 4,
    name: "Billy Gouty",
    title: "Owner, ServiceOne Air Conditioning",
    quote:
      "Our cost per lead is going down, and our organic search rankings are going up. It's been a really great experience.",
    image: slideImg4,
  },
  {
    id: 5,
    name: "Floyd Realy",
    title: "Owner, Realy Air Mechanical",
    quote: "Scorpion's AI technology drives leads that are laser-focused.",
    image: slideImg5,
  },
  {
    id: 6,
    name: "Manny Sanchez",
    title: "Owner, All Seasons Air Refrigeration",
    quote:
      "Since we've started with Scorpion, it has freed up a lot of time for my family where I used to have to lose of what's in my marketing asking for me.",
    image: slideImg6,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 px-4 ">
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            The people and the results that{" "}
            <span className="bg-white text-slate-900 px-4 py-2 rounded-lg inline-block">
              matter most.
            </span>
          </h2>
        </div>

        {/* Swiper Container */}
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: true },
            1280: { slidesPerView: 4, centeredSlides: true },
          }}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonials.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-[460px] flex flex-col border border-gray-200 group">
                {/* Image */}
                <div className="mb-6 h-40">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>

                {/* Quote */}
                <p className="text-gray-900 text-lg leading-relaxed flex-grow mb-4">
                  "{client.quote}"
                </p>

                {/* Author */}
                <h4 className="font-semibold text-gray-900 text-lg">
                  {client.name}
                </h4>
                <p className="text-gray-600 text-sm">{client.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
