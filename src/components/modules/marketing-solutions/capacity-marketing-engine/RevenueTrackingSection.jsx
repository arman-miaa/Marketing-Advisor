import img1 from "../../../../assets/images/marketing-solutions/capacity-marketing-engine/HS-Capacity-Optimizer-1.jpg.2505050953453.webp";
import img2 from "../../../../assets/images/marketing-solutions/capacity-marketing-engine/Electrical-Capacity-Optimizer-2.jpg.2506101138497.webp";
import img3 from "../../../../assets/images/marketing-solutions/capacity-marketing-engine/Electrical-Capacity-Optimizer-3.jpg.2506101139213.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function RevenueTrackingSection() {
  const cards = [
    {
      id: 1,
      img: img1,
      alt: "Channel analytics dashboard",
      title: "Integrated with ServiceTitan",
      desc: "Advisor is the only company integrated with ServiceTitan’s exclusive capacity optimizer system, enabling us to spend your dollars smarter.",
    },
    {
      id: 2,
      img: img2,
      alt: "Conversion tracking dashboard",
      title: "The sweet spot: happier customers, happier technicians",
      desc: "When you’re too busy, customers get frustrated due to a lack of availability. When you’re not busy enough, you or your team are not making money. We put your business in the sweet spot.",
    },
    {
      id: 3,
      img: img3,
      alt: "Customer analytics dashboard",
      title: "Hit way more revenue goals",
      desc: "A full calendar means hitting revenue goals, retaining technicians, and hiring even more.",
    },
  ];

  return (
    <section className="pb-16 md:pb-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="no wasted budget"
          title="Stay busy with the right jobsat the right times"
          highlightText="the right jobs"
          description="Your techs stay working, your customers stay happy, and your business keeps growing. "
        />

        {/* Mobile: Swiper Carousel */}
        <div className="md:hidden mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Pagination]}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                  <div className="mb-4">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-72 object-cover rounded-3xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-900 font-medium text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination mt-4 text-center bg-gray-300 rounded-full cursor-pointer p-4"></div>
          </Swiper>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-12 "
            >
              <div className="mb-6">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-88 object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-900 font-medium mt-8 text-xl leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
