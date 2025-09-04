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

import { BiSolidMessageRoundedDots } from "react-icons/bi";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import CarouselControls from "../../../../shared/CarouselControls";
import { FiClock } from "react-icons/fi";
import { FaInbox } from "react-icons/fa";
import { RiBarcodeBoxFill } from "react-icons/ri";
import { AiFillDingtalkSquare } from "react-icons/ai";
import { icons } from "lucide-react";
import { CgStopwatch } from "react-icons/cg";

const ConnectCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "24/7 AI Chat",
      description:
        "Your AI chat assistant never sleeps. Whether it’s lunchtime or midnight, your website visitors get the answers and help they need—encouraging them take action so you never miss a lead.",

      icon: <FiClock />,
      image: slideImg1,
    },
    {
      id: 2,
      title: "One Inbox for Everything",
      description:
        "Save time and improve engagement with an inbox that has it all: texts, calls, emails, and internal notes—and is even integrated with social media.",
      icon: <FaInbox />,
      image: slideImg2,
    },
    {
      id: 3,
      title: "Online Scheduling",
      description:
        "Get more of the right jobs with an online scheduling system that turns leads into real appointments, no matter the time of day (or night).",
      icon: <RiBarcodeBoxFill />,
      image: slideImg3,
    },
    {
      id: 4,
      title: "Easy & Secure Payments",
      description:
        "Get paid faster with an easy-to-use system that allows you to create invoices, send payment requests, and securely accept payments, wherever you are.",
      image: slideImg4,
      icon: <AiFillDingtalkSquare />,
    },
    {
      id: 5,
      title: "Make Better Connections",
      description:
        "Connect learns your services, story, and unique selling points to make every conversation personal.",

      image: slideImg5,
      icon: <CgStopwatch />,
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
    <section className=" py-16 md:pt-30 px-4">
      <div className="">
        {/* Header */}
        <div className="container mx-auto">
          <SharedTitleSection
            category=""
            title="Why Scorpion Connect"
            description="Built to engage customers and capture every opportunity."
            descriptionSize="text-base md:text-4xl  "
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
              <div className="relative rounded-4xl overflow-hidden shadow-lg  md:h-[700px] flex flex-col md:flex-row bg-gradient-to-r from-purple-200 to-blue-200">
                {/* Left Side */}
                <div className="w-full md:pl-20 md:w-1/2 p-8 flex flex-col justify-end">
                  <p className="text-2xl md:text-4xl text-white bg-blue-700 w-fit p-1 rounded-full pt-2 px-2 font-bold mb-5">
                    {slide.icon}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold mb-5">
                    {slide.title}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 mb-4">
                    {slide.description}
                  </p>
                </div>

                {/* Right Side */}
                <div className="w-full  md:w-1/2 pr-8 hidden md:flex ">
                  <img
                    src={slide.image}
                    alt="slide"
                    className="h-full w-full object-cover"
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

export default ConnectCarousel;
