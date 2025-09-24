import video1 from "../../../../assets/images/hvac/box1.mp4";
import video2 from "../../../../assets/images/hvac/output4.mp4";
import video3 from "../../../../assets/images/hvac/HVAC Marketing & Advertising Services (12) [hvac-12].mp4";
import video4 from "../../../../assets/images/hvac/output6.mp4";
import video5 from "../../../../assets/images/hvac/HVAC Marketing & Advertising Services (13) [hvac-13].mp4";
import video6 from "../../../../assets/images/hvac/output2.mp4";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "../../../ui/Button";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

const MarketingSolutionsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      title: "Every lead, fully realized",
      description:
        "With Leads AI, you automatically know the value of every lead, get immediate summaries, and see the quality of every lead and intake.",
      buttonText: "Learn More",
      backgroundVideo: video1,
      tag: "Leads",
      icon: "AI",
    },
    {
      id: 2,
      title: "Grow your revenue",
      description:
        "Get full visibility into revenue attribution, geographic insights, and return on investment so we can invest where it matters most.",
      buttonText: "Learn More",
      backgroundVideo: video2,
      tag: "Revenue Intelligence",
      icon: "",
    },
    {
      id: 3,
      title: "Never miss an opportunity",
      description:
        "Be there 24/7 with Scorpion Connect: your AI customer service rep that answers questions, books appointments, accepts payments, and gives potential customers everything they need to turn into a booked job.",
      buttonText: "Learn More",
      backgroundVideo: video3,
      tag: "Advisor Connect",
      icon: <BiSolidMessageRoundedDots />,
    },
    {
      id: 4,
      title: "Keep your schedule full",
      description:
        "Our capacity planner integrates with your CRM to keep your job board full, no matter the season.",
      buttonText: "Learn More",
      backgroundVideo: video4,
      tag: "Capacity Marketing Engine",
      icon: "",
    },
    {
      id: 5,
      title: "See everything in one place",
      description:
        "One platform to rule them all, from the office to your most valuable neighborhoods. Know exactly how your marketing is driving revenue, all from the palm of your hand.",
      buttonText: "Learn More",
      backgroundVideo: video5,
      tag: "Advisor Platform",
      icon: "AI",
    },
    {
      id: 6,
      title: "Create a reputation for results",
      description:
        "In a competitive industry like HVAC, a strong reputation can be your greatest asset. With Reputation AI, get more 5-star reviews and use them to get more customers.",
      buttonText: "Learn More",
      backgroundVideo: video6,
      tag: "Convert",
      icon: "",
    },
  ];

  //  refs & states
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // play / pause toggle
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
       
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        } else {
         
          video.pause();
        }
      }
    });
  };

  // update progress bar
  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [activeIndex]);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:pt-30 px-4">
      <div>
        <div className="container mx-auto md:px-10">
          <SharedTitleSection
            category="at the forefront"
            title="Marketing and technology for HVAC companies that books more jobs."
            highlightText="more jobs."
          />
        </div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="!w-[80%] md:!w-[60%]">
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-[600px] md:h-[700px] flex flex-col"
                onClick={() => handlePlay(index)}
              >
                {/* Background Video */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={testimonial.backgroundVideo}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

           

                {/* top tag */}

                <div className="absolute top-0 left-0 right-0 p-8 text-white">
                  <span className="flex items-center gap-2 border border-blue-700 font-medium w-fit px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm">
                    {testimonial.tag}

                    {testimonial.icon && (
                      <span className="bg-blue-600 px-2 py-1 rounded-lg flex items-center justify-center">
                        {testimonial.icon}
                      </span>
                    )}
                  </span>
                </div>

                {/* bottom content with button on right */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">
                    {testimonial.title}
                  </h3>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-lg md:text-xl opacity-90 mb-4 flex-1">
                      {testimonial.description}
                    </p>
                    {/* Button */}
                    <div className="  w-full md:w-auto flex-shrink-0">
                      <Button text={testimonial.buttonText} to="/" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}

        <div className="container mx-auto md:px-10 md:pb-8 md:pt-4 ">
          <div className="mt-8 bg-white p-2 pl-4 pr-4 border border-gray-300 rounded-full inline-flex items-center gap-3">
            {/* Play/Pause Button – always left */}
            <button
              onClick={() => handlePlay(activeIndex)}
              className="flex items-center justify-center w-6 h-6 cursor-pointer rounded-full bg-blue-600 text-white flex-shrink-0"
            >
              {videoRefs.current[activeIndex]?.paused ? (
                // Play icon
                <span className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent" />
              ) : (
                // Pause icon
                <span className="flex gap-[3px]">
                  <span className="w-[3px] h-4 bg-white"></span>
                  <span className="w-[3px] h-4 bg-white"></span>
                </span>
              )}
            </button>

            {/* Dots */}
            {testimonials.map((_, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  onClick={() => {
                    swiperRef.current?.slideTo(i);
                    handlePlay(i);
                  }}
                  className="relative flex-shrink-0 cursor-pointer"
                >
                  {/* Inactive dot */}
                  {!isActive && (
                    <span className="block w-3 h-3 rounded-full bg-gray-300" />
                  )}

                  {/* Active dot with progress */}
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

export default MarketingSolutionsCarousel;
