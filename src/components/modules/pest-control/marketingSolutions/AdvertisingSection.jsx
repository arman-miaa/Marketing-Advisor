import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgVideo1 from "../../../../assets/images/hvac/marketing-solutions/video_311a719bf6beb5c0632d1004d6b33ca0.mp4";
import bgVideo2 from "../../../../assets/images/hvac/marketing-solutions/video_eed0a8c6867e68edaec093bb8af79c34.mp4";
import bgVideo3 from "../../../../assets/images/hvac/marketing-solutions/video_f28a19742a10403aaf7873557a725376.mp4";
import bgVideo4 from "../../../../assets/images/hvac/marketing-solutions/video_e7219fc798c0fcd160e57adcd719a254.mp4";
import bgVideo5 from "../../../../assets/images/hvac/marketing-solutions/video_266fa8a97fff2723f6ba56b293e476c8.mp4";

import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";

export default function AdvertisingSection() {
  const testimonials = [
    {
      id: 1,
      title: "Experience advertising that drives revenue",
      description:
        "With Advertising AI, your campaigns continuously improve, and even train other providers' AI (like Google, Microsoft, and Meta) to learn what works and remove what doesn’t.",
      buttonText: "Learn More",
      buttonLink: "/hvac/advisor-connect",
      backgroundVideo: bgVideo2,
      tag: " Digital Advertising",
      tab: "Experience advertising that drives revenue",
    },
    {
      id: 2,
      title: "Convert more with the right message",
      description:
        "Quickly turn visitors into leads with automated landing pages that give everything a potential customer needs to make you the obvious choice.",
      buttonText: "Learn More",
      buttonLink: "/hvac/advertising-ai",
      backgroundVideo: bgVideo3,
      tag: "Landing Page",
      tab: "Convert more with the right message",
    },
    {
      id: 3,
      title: "See better returns",
      description:
        "With ads that run across the most important channels to your HVAC business, we’ll continue to invest in the ones that bring you the most jobs and revenue.",
      buttonText: "Learn More",
      buttonLink: "/hvac/website",
      backgroundVideo: bgVideo4,
      tag: "Budgets",
      tab: "See better returns",
    },
    {
      id: 4,
      title: "Hold their attention",
      description:
        "Stand out with social media ads that make you the first thought when someone is faced with an HVAC problem.",
      buttonText: "Learn More",
      buttonLink: "/hvac/team-of-experts",
      backgroundVideo: bgVideo5,
      tag: "Social Advertising",
      tab: "Hold their attention",
    },
    {
      id: 5,
      title: "Make yourself known",
      description:
        "With high-quality video ads that showcase your brand and what you offer to the customers you want.",
      buttonText: "Learn More",
      buttonLink: "/hvac/ranking-ai",
      backgroundVideo: bgVideo5,
      tag: "Video Advertising",
      tab: "Make yourself known",
    },
  ];

  const [activeId, setActiveId] = useState(testimonials[0].id);
  const activeTestimonial = testimonials.find((t) => t.id === activeId);
  const paginationRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-black/40 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={activeTestimonial.id}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={activeTestimonial.backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header (STATIC) */}
        <SharedTitleSection
          category="Advertising"
          title="Advertising technology for HVAC businesses that doubles down on what's driving the jobs you want."
          highlightText="HVAC businesses"
          theme="dark"
        />

        {/* Dynamic Content */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-left flex flex-col gap-4">
            <span className="flex items-center gap-2 border border-blue-600 text-white font-medium px-3 py-1 rounded-md w-fit">
              {activeTestimonial.tag}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              {activeTestimonial.title}
            </h3>
          </div>
        </div>
        <div className="md:flex justify-between">
          <p className="text-white opacity-90 md:text-lg mb-4 md:w-1/2 ">
            {activeTestimonial.description}
          </p>

          <div>
            {/* Learn More  */}
            <Button
              text={activeTestimonial.buttonText}
              to={activeTestimonial.buttonLink}
            />
          </div>
        </div>

        {/* 🔹 Small Device Tabs Slider */}
        <div className="block md:hidden mt-8">
          {ready && (
            <Swiper
              modules={[Pagination]}
              spaceBetween={12}
              slidesPerView={2}
              pagination={{
                clickable: true,
                el: paginationRef.current,
              }}
              className="pb-4"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div
                    onClick={() => setActiveId(t.id)}
                    className={`cursor-pointer text-center transition-colors rounded-2xl font-semibold text-sm p-4 h-24 flex items-center justify-center break-words ${
                      t.id === activeId
                        ? "bg-white text-black shadow-lg"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {t.tab}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Custom Pagination */}
          <div
            ref={paginationRef}
            className="mt-8 border border-gray-400 rounded-full w-fit mx-auto p-2 flex gap-2 justify-center"
          />
        </div>

        {/* MD+ Tabs remain unchanged */}
        <div className="hidden md:flex flex-wrap gap-4 mt-8 justify-center">
          {testimonials.map((t) => {
            const isActive = t.id === activeId;
            return (
              <div
                key={t.id}
                onClick={() => setActiveId(t.id)}
                className={`cursor-pointer text-center transition-colors rounded-2xl font-semibold text-xl md:text-2xl p-6 w-70 h-28 flex items-center justify-center break-words ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {t.tab}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
