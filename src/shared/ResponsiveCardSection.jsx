import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SharedTitleSection from "./SharedTitleSection";


export default function ResponsiveCardSection({
  cards = [],
  category,
  title,
  highlightText,
  description,
  descriptionSize = "md:text-lg",
}) {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        {title && (
          <SharedTitleSection
            category={category}
            title={title}
            highlightText={highlightText}
            description={description}
            descriptionSize={descriptionSize}
          />
        )}

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
            {/* Pagination Dots */}
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
