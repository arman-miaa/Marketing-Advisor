/* eslint-disable react-hooks/exhaustive-deps */
import slideImg1 from "../../../../assets/images/hvac/advisorConnect/ai-chat-hs.png.2506061350474.webp";
import slideImg2 from "../../../../assets/images/hvac/advisorConnect/one-inbox-hs.png.2506061352086.webp";
import slideImg3 from "../../../../assets/images/hvac/advisorConnect/online-scheduling-hs.png.2506061352490.webp";
import slideImg4 from "../../../../assets/images/hvac/advisorConnect/payments-hs.png.2506061353388.webp";
import slideImg5 from "../../../../assets/images/hvac/advisorConnect/connections-hs.png.2506111305416.webp";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "../../../ui/Button";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const ConnectCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Never miss an opportunity",
      description:
        "Be there 24/7 with Marketing Advisor Connect: your AI customer service rep that answers questions, books appointments, accepts payments, and gives potential customers everything they need to turn into a booked job.",
      buttonText: "Learn More",
      buttonLink: "/hvac/advisor-connect",
      image: slideImg1,
      tag: "Marketing Advisor Connect",
      icon: <BiSolidMessageRoundedDots />,
    },
    {
      id: 2,
      title: "Experience advertising that drives revenue",
      description:
        "With Advertising AI, your campaigns continuously improve, and even train other providers' AI (like Google, Microsoft, and Meta) to learn what works and remove what doesn’t.",
      buttonText: "Learn More",
      buttonLink: "/digital-advertising",
      image: slideImg2,
      tag: "Digital Advertising",
    },
    {
      id: 3,
      title: "First impressions that earn the job",
      description:
        "With Marketing Advisor’s award-winning designers and developers, your new website will look great, load fast, and make you the easy choice.",
      buttonText: "Learn More",
      buttonLink: "/website",
      image: slideImg3,
      tag: "Website",
    },
    {
      id: 4,
      title: "Get a team that knows HVAC",
      description:
        "You need a marketing team that knows your business. Now you have one, complete with HVAC marketing experts and over two decades of experience maximizing revenue for businesses like yours.",
      buttonText: "Learn More",
      buttonLink: "/marketing-team",
      image: slideImg4,
      tag: "Marketing Team",
    },
    {
      id: 5,
      title: "Get to the top and stay there",
      description:
        "With our search engine optimization technology, Ranking AI, your business will show up for the searches that bring you customers, not empty clicks and traffic.",
      buttonText: "Learn More",
      buttonLink: "/ranking-ai",
      image: slideImg5,
      tag: "Ranking AI",
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // auto slide + progress logic
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
    <section className="bg-gradient-to-b from-gray-900 to-blue-50 py-16 md:pt-30 px-4">
      <div>
        {/* Header */}
        <div className="text-left mb-12 container mx-auto">
          <p className="text-blue-500 uppercase font-semibold tracking-wider mb-4">
            Revenuemax Solutions
          </p>
          <h2 className="text-4xl md:text-6xl mt-12 font-bold text-white">
            HVAC Marketing That Makes You the{" "}
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md text-black">
              First Call
            </span>
          </h2>
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
              <div className="relative rounded-4xl overflow-hidden shadow-lg h-[600px] md:h-[700px] flex flex-col bg-gradient-to-r from-blue-900 to-purple-900">
                {/* Content */}
                <div className="absolute top-0 left-0 right-0 p-8 text-white">
                  <span className="flex items-center gap-2 border border-blue-700 font-medium w-fit px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm">
                    {slide.tag}
                    {slide.icon && (
                      <span className="bg-blue-600 px-2 py-1 rounded-lg flex items-center justify-center">
                        {slide.icon}
                      </span>
                    )}
                  </span>
                </div>

                {/* bottom content with button on right */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90 mb-4">
                      {slide.description}
                    </p>
                  </div>
                  <div className="w-full md:w-auto flex-shrink-0">
                    <Button text={slide.buttonText} to={slide.buttonLink} />
                  </div>
                </div>

                {/* Right image */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end">
                  <img
                    src={slide.image}
                    alt="slide"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots + Play Box */}
        <div className="container mx-auto">
          <div className="mt-8 bg-white p-2 pl-4 pr-4 border border-gray-300 rounded-full inline-flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-6 h-6 cursor-pointer rounded-full bg-blue-600 text-white flex-shrink-0"
            >
              {isPlaying ? (
                <span className="flex gap-[3px]">
                  <span className="w-[3px] h-4 bg-white"></span>
                  <span className="w-[3px] h-4 bg-white"></span>
                </span>
              ) : (
                <span className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent" />
              )}
            </button>

            {/* Dots */}
            {slides.map((_, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  onClick={() => {
                    swiperRef.current?.slideTo(i);
                    setProgress(0);
                    setIsPlaying(false);
                  }}
                  className="relative flex-shrink-0"
                >
                  {!isActive && (
                    <span className="block w-3 h-3 rounded-full bg-gray-300" />
                  )}

                  {isActive && (
                    <div className="relative w-20 h-3 rounded-full bg-gray-300 overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCarousel;
