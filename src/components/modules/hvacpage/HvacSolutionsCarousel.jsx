import video1 from "../../../assets/images/hvac/box1.mp4";
import video2 from "../../../assets/images/hvac/output4.mp4";
import video3 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (12) [hvac-12].mp4";
import video4 from "../../../assets/images/hvac/output6.mp4";
import video5 from "../../../assets/images/hvac/HVAC Marketing & Advertising Services (13) [hvac-13].mp4";
import video6 from "../../../assets/images/hvac/output2.mp4";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "../../ui/Button";

const HvacSolutionsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      title: "First impressions that earn the job",
      description:
        "With Scorpion's award-winning designers and developers, your new website will look great, load fast, and convert visitors into customers.",
      buttonText: "Learn More",
      backgroundVideo: video1,
      tag: "Website Design",
    },
    {
      id: 2,
      title: "Get a team that knows HVAC",
      description:
        "We create a marketing team that knows your business. That's why they work seamlessly with HVAC marketing strategies designed for businesses like yours.",
      buttonText: "Learn More",
      backgroundVideo: video2,
      tag: "Marketing Team",
    },
    {
      id: 3,
      title: "Get to the top and stay there",
      description:
        "Rank higher in search and dominate your local market. Our SEO experts will help you be the one they find first.",
      buttonText: "Learn More",
      backgroundVideo: video3,
      tag: "SEO Services",
    },
    {
      id: 4,
      title: "Create a reputation for results",
      description:
        "Build trust and credibility with potential customers through strategic reputation management and customer reviews.",
      buttonText: "Learn More",
      backgroundVideo: video4,
      tag: "Reputation Management",
    },
    {
      id: 5,
      title: "Never miss an opportunity",
      description:
        "Be there 24/7 with Scorpion Connect: your AI customer service rep that answers questions, books appointments, accepts payments, and gives potential customers everything they need to turn into a booked job.",
      buttonText: "Learn More",
      backgroundVideo: video5,
      tag: "Scorpion Connect",
    },
    {
      id: 6,
      title: "Experience advertising that drives revenue",
      description:
        "With Advertising AI, your campaigns continuously improve, using data from Google, Microsoft, and Meta to learn what works and remove what doesn't.",
      buttonText: "Learn More",
      backgroundVideo: video6,
      tag: "Digital Advertising",
    },
  ];

  // ✅ একবারে সব ভিডিওর জন্য refs বানানো
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <section className="py-16 md:py-30 px-4 ">
      <div>
        {/* Header */}
        <div className="text-left mb-12 container mx-auto ">
          <p className="text-blue-500 uppercase font-semibold tracking-wider mb-4">
            FEATURED TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-6xl mt-12 font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md">
              Spotlight
            </span>{" "}
            stories for HVAC companies
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination-first",
          }}
          modules={[Pagination]}
          className="mySwiper pb-14"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="!w-[80%] md:!w-[60%]">
              <div
                className="relative rounded-4xl overflow-hidden shadow-lg group cursor-pointer h-[700px] flex flex-col"
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

                {/* Button */}
                <div className="absolute bottom-8 right-8">
                  <Button text={testimonial.buttonText} to="/" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-3">
                    {testimonial.title}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 mb-4">
                    {testimonial.description}
                  </p>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-md">
                    {testimonial.tag}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container */}
        <div className="container mx-auto">
          <div className="custom-pagination-first mt-8 bg-white p-5 px-8 border border-gray-300 w-fit rounded-full inline-flex gap-4" />
        </div>
        
      </div>
    </section>
  );
};

export default HvacSolutionsCarousel;
