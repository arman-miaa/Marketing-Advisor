"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HvacSolutionsCarousel = () => {
  const solutions = [
    {
      id: 1,
      title: "First impressions that earn the job",
      description:
        "With Scorpion's award-winning designers and developers, your new website will look great, load fast, and convert visitors into customers.",
      buttonText: "Learn More",
      backgroundImage: "/hvac-website-design.png",
      tag: "Website Design",
    },
    {
      id: 2,
      title: "Get a team that knows HVAC",
      description:
        "We create a marketing team that knows your business. That's why they work seamlessly with HVAC marketing strategies designed for businesses like yours.",
      buttonText: "Learn More",
      backgroundImage: "/hvac-team-working.png",
      tag: "Marketing Team",
    },
    {
      id: 3,
      title: "Get to the top and stay there",
      description:
        "Rank higher in search and dominate your local market. Our SEO experts will help you be the one they find first.",
      buttonText: "Learn More",
      backgroundImage: "/hvac-search-results.png",
      tag: "SEO Services",
    },
    {
      id: 4,
      title: "Create a reputation for results",
      description:
        "Build trust and credibility with potential customers through strategic reputation management and customer reviews.",
      buttonText: "Learn More",
      backgroundImage: "/hvac-reviews-reputation.png",
      tag: "Reputation Management",
    },
    {
      id: 5,
      title: "Never miss an opportunity",
      description:
        "Be there 24/7 with Scorpion Connect: your AI customer service rep that answers questions, books appointments, accepts payments, and gives potential customers everything they need to turn into a booked job.",
      buttonText: "Learn More",
      backgroundImage: "/hvac-service-van.png",
      tag: "Scorpion Connect",
    },
    {
      id: 6,
      title: "Experience advertising that drives revenue",
      description:
        "With Advertising AI, your campaigns continuously improve, using data from Google, Microsoft, and Meta to learn what works and remove what doesn't.",
      buttonText: "Learn More",
      backgroundImage: "/digital-advertising-dashboard.png",
      tag: "Digital Advertising",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            REVENUEMAX SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            HVAC Marketing That Makes You the{" "}
            <span className="bg-white text-slate-900 px-3 py-1 rounded-lg inline-block">
              First Call
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="hvac-solutions-swiper"
          >
            {solutions.map((solution) => (
              <SwiperSlide key={solution.id}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${solution.backgroundImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {solution.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-3 leading-tight line-clamp-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-3">
                      {solution.description}
                    </p>
                    <button className="btn btn-primary btn-sm">
                      {solution.buttonText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .hvac-solutions-swiper .swiper-pagination {
          bottom: -60px !important;
          text-align: center;
        }

        .swiper-pagination-bullet-custom {
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          margin: 0 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-pagination-bullet-active-custom {
          background: #3b82f6;
          width: 40px;
          border-radius: 8px;
          transform: none;
        }

        .hvac-solutions-swiper
          .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default HvacSolutionsCarousel;
