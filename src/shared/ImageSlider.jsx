import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";


export default function ResponsiveSlider({ items, slidesPerView = 2 }) {
  const paginationRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {/* 🔹 Small devices: show slider */}
      <div className="block md:hidden w-full">
        {ready && (
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: paginationRef.current, // custom pagination container
            }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            className="pb-4"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={item.src}
                  alt={item.alt || `slide-${i}`}
                  className="w-24 sm:w-32 h-12 sm:h-14 mx-auto object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* 🔹 Custom Pagination Box */}
        <div
          ref={paginationRef}
          className=" border w-fit mx-auto gap-3 mt-8 rounded-full border-gray-400 p-3 flex justify-center cursor-pointer "
        />
      </div>

      {/* 🔹 Medium+ devices: normal flex layout */}
      <div className="hidden md:flex flex-row flex-wrap items-center justify-start gap-8 lg:gap-16">
        {items.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={item.alt || `slide-${i}`}
            className="w-24 sm:w-40 md:w-[210px] h-10 sm:h-12 md:h-16 object-contain"
          />
        ))}
      </div>
    </>
  );
}
