import img1 from "../../../assets/images/marketing-solutions/budgets-ai/HS-Budgets-AI-1.jpg.2504221302268.webp";
import img2 from "../../../assets/images/marketing-solutions/budgets-ai/HS-Budgets-AI-2.jpg.2504221302273.webp";
import img3 from "../../../assets/images/marketing-solutions/budgets-ai/HS-Budgets-AI-3.jpg.2504221302276.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SharedTitleSection from "../../../shared/SharedTitleSection";

const cards = [
  {
    img: img1,
    title: "Your budget, simplified",
    desc: "We help you set a budget, then we make sure it’s working hard for you.",
  },
  {
    img: img2,
    title: "Your budget, optimized",
    desc: "No more overspend or underspend concerns, your monthly budget is your monthly spend.",
  },
  {
    img: img3,
    title: "Your budget, spent smarter",
    desc: "High-performing channels get more budget. Low performers get less. It’s that simple.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="Maximize Your Budget"
          title="Where should you be spending?"
          highlightText="should"
          description="HVAC companies have so many places they can and should be showing up online. But not every platform pulls its weight. Our spend optimization technology, Budgets AI, automatically shifts your spend toward the channels bringing in real results."
          descriptionSize=" md:text-3xl mt-8 font-medium"
        />

        {/* Mobile Swiper Carousel */}
        <div className="md:hidden mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Pagination]}
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative rounded-2xl overflow-hidden group">
                  {/* Image */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-80 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Text */}
                  <div className="absolute bottom-4 left-4 pr-4 text-left text-white">
                    <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                    <p className="text-sm font-semibold leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination mt-4 text-center border border-gray-300 p-4 rounded-full bg-gray-300 cursor-pointer"></div>
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-100 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Text */}
              <div className="absolute bottom-8 left-8 pr-4 text-left text-white">
                <h3 className="text-xl md:text-3xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="font-semibold leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
