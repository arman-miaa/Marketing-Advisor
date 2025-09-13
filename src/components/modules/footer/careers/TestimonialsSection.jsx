import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slideImg1 from "../../../../assets/images/footer/careers/kaelee-lincoln.jpg.2505201316530.webp";
import slideImg2 from "../../../../assets/images/footer/careers/jonathan-salazar.jpg.2505201324123.webp";
import slideImg3 from "../../../../assets/images/footer/careers/samantha-hartwell.jpg.2505201321189.webp";
import slideImg4 from "../../../../assets/images/footer/careers/courtney-jackson.jpg.2505201319179.webp";
import slideImg5 from "../../../../assets/images/footer/careers/brooke-Lucarelli.jpg.2505201326096.webp";
import slideImg6 from "../../../../assets/images/footer/careers/Lilly-Fouts.jpg.2505201329031.webp";




import SharedTitleSection from "../../../../shared/SharedTitleSection";


const testimonials = [
  {
    id: 1,
    name: "K.L.",
    title: "Senior Project Manager",
    quote:
      "As a Senior PM at Scorpion, I create tools to help clients grow and teach others, aligning with my values of care and support.",
    image: slideImg1,
  },
  {
    id: 2,
    name: "J.S.",
    title: "Senior Project Manager",
    quote:
      "Scorpion’s unique culture inspires growth, celebrates success, and fosters a true sense of belonging and purpose.",
    image: slideImg2,
  },
  {
    id: 3,
    name: "S.H.",
    title: "Optimization Specialist",
    quote:
      "My work aligns with my values of intention and integrity, driving both professional success and personal growth.",
    image: slideImg3,
  },
  {
    id: 4,
    name: "C.J.",
    title: "Account Manager",
    quote:
      "Scorpion’s supportive culture helps me grow as a manager and teammate, tackling challenges while seeing clients succeed.",
    image: slideImg4,
  },
  {
    id: 5,
    name: "B.L.",
    title: "Account Manager",
    quote:
      "Helping others daily through strong client relationships is what makes Scorpion shine—and why I love what I do.",
    image: slideImg5,
  },
  {
    id: 6,
    name: "L.F.",
    title: "Marketing Assistant",
    quote:
      "Scorpion’s flexibility supports work-life balance, helping me thrive at work and live a healthier, happier life.",
    image: slideImg6,
  },
];

export default function TestimonialsSection() {




  const paginationRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);


  return (
    <section className="bg-gradient-to-t to-white from-blue-50 py-16 px-4">
      <div>
        {/* Header */}
        <div className="container mx-auto">
          <SharedTitleSection
            category="Real stories, real impact"
            title="What’s it like to work at Scorpion?"
            highlightText="Scorpion?"
            description="Let our team tell you. Don’t just take our word for it—hear firsthand from Scorpions about what it’s like to grow, thrive and belong."
            descriptionSize="text-base md:text-4xl"
          />
        </div>

        {/* Swiper Container */}
        {ready && (
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: false },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
              1280: { slidesPerView: 4, centeredSlides: true },
            }}
            spaceBetween={30}
            grabCursor={true}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            className="mySwiper"
          >
            {testimonials.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="relative w-full h-[460px] rounded-xl overflow-hidden group">
                  {/* Image */}
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Blue Overlay Box */}
                  <div className="absolute bottom-0 left-0 w-full bg-blue-800/70 bg-opacity-95 text-white p-6">
                    {/* Quote */}
                    <p className=" mb-3 line-clamp-3 text-lg ">{client.quote}</p>

                    {/* Name + Title + Play Btn */}
                    <div className="flex items-center justify-between mt-8 mb-4">
                      <div>
                        <h4 className="font-semibold text-2xl">
                          {client.name}
                        </h4>
                        <p className=" opacity-80">{client.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Pagination নিচে */}
        <div className="w-fit mx-auto">
          <div
            ref={paginationRef}
            className="mt-10 bg-white cursor-pointer flex  justify-center gap-2 border-gray-400 border p-4 rounded-full w-fit mx-auto  "
          />
        </div>
      </div>
    </section>
  );
}
