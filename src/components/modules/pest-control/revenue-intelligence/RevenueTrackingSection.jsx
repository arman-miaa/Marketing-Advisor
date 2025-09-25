import img1 from "../../../../assets/images/marketing-solutions/revenue-intelligence/HS-Revenue-1.jpg.2504221248070.webp";
import img2 from "../../../../assets/images/marketing-solutions/revenue-intelligence/HVAC-Revenue-2.jpg.2505231426372.webp";
import img3 from "../../../../assets/images/marketing-solutions/revenue-intelligence/HS-Revenue-3.jpg.2504221248098.webp";
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
      alt: "Community by Community",
      title: "Integrated with ServiceTitan",
      desc: "From property values to median income to where a prospect is searching for you, see what’s working and where we may need to make a change.",
    },
    {
      id: 2,
      img: img2,
      alt: "Service by Service",
      title: "The sweet spot: happier customers, happier technicians",
      desc: "From your most valuable to least, clearly understand the return on each of your service areas so we can go after the jobs that are most worth your time.",
    },
    {
      id: 3,
      img: img3,
      alt: "Customer by Customer",
      title: "Hit way more revenue goals",
      desc: "From beginning to end, see how many of your prospects are engaging, booking, and turning into a customer, and ultimately, the revenue they brought you.",
    },
  ];

  return (
    <section className="pb-16 md:pb-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="Maximize Your Revenue"
          title="Key performance indicators? We have one: revenue growth."
          highlightText="revenue growth."
         
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
