import img1 from "../../../../assets/images/electrical/website/Electrical-Website-1.jpg.2505231347494.webp";
import img2 from "../../../../assets/images/hvac/website/HS-Website-2.jpg.2505051022371.webp";
import img3 from "../../../../assets/images/hvac/website/HS-Website-3.jpg.2504221331120.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    img: img1,
    title: "Trusted by customers",
    desc: "Your website builds confidence in your business, making it easy for customers to hire you.",
  },
  {
    img: img2,
    title: "Loved by search engines",
    desc: "Great websites are a key factor in driving local customers to your business when they are in need.",
  },
  {
    img: img3,
    title: "Faster than ever",
    desc: "With more people looking for services on their phones, speed matters.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="More Than Just A Pretty Face"
          title="Your website is more important than ever"
          highlightText="website"
          description="Your customers make choices to hire you or not based on your website, and it’s the one piece of marketing that can drive the most business for you."
          descriptionSize="text-base md:text-2xl mt-8 font-semibold"
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
