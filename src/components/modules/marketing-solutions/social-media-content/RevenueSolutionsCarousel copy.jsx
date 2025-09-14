/* eslint-disable react-hooks/exhaustive-deps */
import slideImg1 from "../../../../assets/images/marketing-solutions/social-media-content/HS-Grow-Your-Revenue.jpg.2504301330408.webp";
import slideImg2 from "../../../../assets/images/marketing-solutions/social-advertising/HS-See-Everything-in-One-Place.2505301013550.png";
import slideImg3 from "../../../../assets/images/marketing-solutions/social-media-content/HVAC-Video-Advertising.png.2506031210489.webp";
import slideImg4 from "../../../../assets/images/marketing-solutions/social-media-content/HVAC-Have-More-People-Choose-You.png.2506031145308.webp";


import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "../../../ui/Button";

import SharedTitleSection from "../../../../shared/SharedTitleSection";
import CarouselControls from "../../../../shared/CarouselControls";

const RevenueSolutionsCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Grow your revenue",
      description:
        "Get full visibility into revenue attribution, geographic insights, and return on investment so we can invest where it matters most.",
      buttonText: "Learn More",
      buttonLink: "/hvac/revenue-intelligence",
      image: slideImg1,
      tag: "Revenue Intelligence",
      icon: "",
    },
    {
      id: 2,
      title: "Hold their attention",
      description:
        "Stand out with social media ads that make you the first thought when someone is faced with an HVAC problem.",
      buttonText: "Learn More",
      buttonLink: "/hvac/social-advertising",
      image: slideImg4,
      tag: "Social Advertising",
    },
    {
      id: 3,
      title: "Make yourself known",
      description:
        "With high-quality video ads that showcase your brand and what you offer to the customers you want.",
      buttonText: "Learn More",
      buttonLink: "/hvac/video-advertising",
      image: slideImg3,
      tag: "Video Advertising",
      icon: "",
    },
    {
      id: 4,
      title: "First impressions that earn the job",
      description:
        "With Scorpion’s award-winning designers and developers, your new website will look great, load fast, and make you the easy choice.",
      buttonText: "Learn More",
      buttonLink: "/hvac/website",
      image: slideImg2,
      tag: "Website",
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
            category="RevenueMAX"
            title="The right solutions. The right results."
            highlightText="results."
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
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 opacity-50">
                  <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-66 w-1/2 mx-auto blur-3xl bg-gradient-to-r from-[#3b83f67c] via-[#3b83f6c0] to-[#3b83f648] animate-pulse-slow"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between p-6 md:p-16 text-white order-1">
                  <div>
                    {/* Top Tag */}
                    <span className="flex items-center gap-2 border border-blue-700 font-medium w-fit px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm mb-4 md:mb-6">
                      {slide.tag}
                      {slide.icon && (
                        <span className="bg-blue-600 px-2 py-1 rounded-lg flex items-center justify-center">
                          {slide.icon}
                        </span>
                      )}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-6xl font-bold mb-2 md:mb-3">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-xl opacity-90 mb-4 md:mb-12">
                      {slide.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Button text={slide.buttonText} to={slide.buttonLink} />
                </div>

                {/* Image */}
                <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0 order-2">
                  <img
                    src={slide.image}
                    alt="slide"
                    className="w-full h-full object-contain"
                  />
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

export default RevenueSolutionsCarousel;
