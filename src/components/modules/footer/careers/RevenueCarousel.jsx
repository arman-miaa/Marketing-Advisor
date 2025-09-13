/* eslint-disable react-hooks/exhaustive-deps */
import slideImg1 from "../../../../assets/images/footer/careers/benefits.jpg.2504022152006.webp";
import slideImg2 from "../../../../assets/images/footer/careers/well-being.jpg.2504022151453.webp";
import slideImg3 from "../../../../assets/images/footer/careers/employee-equity.jpg.2504022153036.webp";
import slideImg4 from "../../../../assets/images/footer/careers/career-development.jpg.2504022151465.webp";
import slideImg5 from "../../../../assets/images/footer/careers/flexible-work.jpg.2504022152015.webp";
import slideImg6 from "../../../../assets/images/footer/careers/paid-phone.jpg.2504022152011.webp";


import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import SharedTitleSection from "../../../../shared/SharedTitleSection";
import CarouselControls from "../../../../shared/CarouselControls";

const RevenueCarousel = () => {
const slides = [
  {
    title: "Benefits",
    description:
      "Coverage that puts you first—medical, dental, and vision at no cost plus flexible options for your needs.",
    image: slideImg1,
  },
  {
    title: "Well-being Resources",
    description:
      "Feel your best with mental, physical, and financial wellness resources, including a paid Calm subscription.",
    image: slideImg2,
  },
  {
    title: "Employee Equity",
    description:
      "Scorpion offers options grants to all employees when they are hired! These grants are a right to acquire units at 'strike price' and can be exercised, sold, and converted to a cash payout in the event of acquisition or an initial public offering (IPO) - making you a true partner of Scorpion and our success!",
    image: slideImg3,
  },
  {
    title: "Career Development",
    description:
      "Career development at Scorpion is supported by feedback, aligned with performance goals, and guided by role-specific career paths empowering our employees to have impactful career conversations with their leader.",
    image: slideImg4,
  },
  {
    title: "Flexible Work & Time Off",
    description:
      "We believe your time is valuable—whether you're dedicating it to your work or yourself. That’s why we offer a flexible time off policy, free from accruals or limits. You decide when and how much time you need to recharge, so you can bring your best self to everything you do.",
    image: slideImg5,
  },
  {
    title: "Paid Cell Phone",
    description:
      "New Scorpions are immediately eligible to join our fully covered cell phone plan. By covering the cost of the device and the plan, we’re making it easier for employees to focus on their work and stay in touch with their teams without the added expense.",
    image: slideImg6,
  },
];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // auto slide + progress logic
  useEffect(() => {
    let interval = null;
    if (isPlaying && swiperRef.current) {
      const step = 100 / (7000 / 100);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // slide next, loop back if last
            const nextIndex =
              activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
            swiperRef.current.slideTo(nextIndex);
            setActiveIndex(nextIndex);
            return 0;
          }
          return prev + step;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section className="bg-gradient-to-b from-white-900 to-blue-50 py-16 md:py-30 px-4">
      <div>
        {/* Header */}
        <div className="container mx-auto">
          <SharedTitleSection
            category="Work Benefits"
            title="We invest in you"
            highlightText="invest"
            description="Your work should support your way of life. Your well-being, growth, and success matter. That’s why we offer top-tier benefits to support every aspect of your life."
            descriptionSize="text-base md:text-3xl"
          />
        </div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination-first",
          }}
          modules={[Pagination]}
          allowTouchMove={true}
          simulateTouch={true}
          className="mySwiper pb-14"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="!w-[80%] md:!w-[60%]">
              <div className="relative rounded-4xl overflow-hidden shadow-lg h-[600px] md:h-[700px] flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-gray-900">
                {/* Full-slide Image as Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white text-left z-10">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-base md:text-xl opacity-90 mb-4 md:mb-12">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots + Play Box */}

        <CarouselControls
          slides={slides}
          activeIndex={activeIndex}
          isPlaying={isPlaying}
          progress={progress}
          onPlayToggle={() => setIsPlaying(!isPlaying)}
          onDotClick={(i) => {
            swiperRef.current?.slideTo(i);
            setProgress(0);
            setIsPlaying(false);
          }}
        />
      </div>
    </section>
  );
};
export default RevenueCarousel;
