import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ items, onClick }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={12}
      breakpoints={{
        0: { slidesPerView: 2 }, // ছোট device: 2
        640: { slidesPerView: 3 }, // medium device: 3
      }}
      className="px-4 pb-10"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="relative h-40 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => item.href && onClick?.(item.href)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-105 brightness-75 contrast-90"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg font-semibold">{item.name}</h3>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-lg" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
