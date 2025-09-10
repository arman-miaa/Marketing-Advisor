import img1 from "../../../../assets/images/marketing-solutions/landing-page-ai/HS-Landing-Page-AI-1.jpg.2504221304019.webp";
import img2 from "../../../../assets/images/marketing-solutions/landing-page-ai/HVAC-Landing-Page-AI-2.jpg.2505231413263.webp";
import img3 from "../../../../assets/images/marketing-solutions/landing-page-ai/HS-Landing-Page-AI-3.jpg.2504221304015.webp";
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
      title: "Designed for Your Business",
      desc: "Landing pages are customized to your industry, service areas, and audience, ensuring they stay relevant",
    },
    {
      id: 2,
      img: img2,
      alt: "Conversion tracking dashboard",
      title: "Data-Driven and Always Improving",
      desc: "Landing Page AI automatically updates pages based on ad performance and engagement, helping you get the most from every dollar.",
    },
    {
      id: 3,
      img: img3,
      alt: "Customer analytics dashboard",
      title: "Integrated for Maximum Impact",
      desc: "Landing Page AI doesn't operate in a vacuum. It works effortlessly alongside Leads AI and Scorpion Connect with AI Chat, guiding visitors from first click to contact.",
    },
  ];

  return (
    <section className="pb-16 md:pb-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="Stand out. Get hired."
          title="Built to grow with you"
          highlightText="grow"
          description="Landing Page AI doesn’t just create pages. It ensures the pages evolve with your advertising strategy. Unlike static pages, these adjust in real-time based on campaign data, shifting priorities, and changing customer needs."
          descriptionSize="text-black md:text-3xl font-medium "
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
