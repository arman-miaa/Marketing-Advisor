import img1 from "../../../../assets/images/hvac/ranking-ai/HVAC-Ranking-AI-1.jpg.2505231354592.webp";
import img2 from "../../../../assets/images/hvac/ranking-ai/Ranking-AI-2.jpg.2504221521170.webp";
import img3 from "../../../../assets/images/hvac/ranking-ai/Ranking-AI-3.jpg.2504221446093.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SearchEngineOptimization() {
  const cards = [
    {
      img: img1,
      title: "Identify the gold",
      desc: "We rank for the keywords that will drive real revenue, and you’ll know exactly what’s driving results across Google, Bing, and everywhere else.",
    },
    {
      img: img2,
      title: "Rank for the gold",
      desc: "After identifying the terms that matter, our team of experts puts the strategy in place to take you to the top of the page.",
    },
    {
      img: img3,
      title: "Get more of the gold",
      desc: "Ranking AI is constantly looking at which terms bring value to your business, immediately adjusting based on what’s driving you the right jobs.",
    },
  ];

  return (
    <section className="py-16 md:py-36 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SharedTitleSection
            category="Search Engine Optimization"
            title="Own the top spot. Win the right jobs."
            highlightText="right jobs."
          />
          <p className="text-lg md:text-3xl text-left -mt-10">
            If your <span className="font-bold">HVAC business </span> isn’t
            ranking when someone searches for you, you’re invisible. Our Search
            Engine Optimization technology,{" "}
            <span className="font-bold">Ranking AI,</span> helps you own your
            <span className="font-bold"> local market</span>(and your
            competition).
          </p>
        </div>

        {/* Mobile Swiper Carousel */}
        <div className="md:hidden mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true, el: ".custom-pagination" }}
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
                    <p className="text-sm font-medium leading-relaxed">
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
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16">
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
                <p className="font-medium text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
