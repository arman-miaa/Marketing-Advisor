import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Play } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import slideImg1 from "../../../../assets/images/electrical/MarketingSolutions/Testimonial-Headshot-Template.6).jpg.2505070839413.webp";
import slideImg2 from "../../../../assets/images/electrical/MarketingSolutions/frame_45852.jpg.2506040926423.webp";
import slideImg3 from "../../../../assets/images/electrical/MarketingSolutions/Testimonial-Headshot-Template.7).jpg.2505070843472.webp";


import video1 from "../../../../assets/images/hvac/marketing-solutions/video_266fa8a97fff2723f6ba56b293e476c8.mp4"
import video2 from "../../../../assets/images/hvac/marketing-solutions/video_410e94f1494bbe7d5f4214a1e50970fe.mp4"
import video3 from "../../../../assets/images/hvac/marketing-solutions/video_b26bec0b334f3241f5387a9755505ab0.mp4"



import SharedTitleSection from "../../../../shared/SharedTitleSection";
import VideoModal from "../../../../shared/VideoModel";
import { BiPlay } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    name: "Levi Biggs",
    title: "Owner, Knee’s Electrical Services",
    quote:
      "RevenueMAX helped me get the best possible ROI on my marketing. We’re close to hitting $5M in revenue now.",
    image: slideImg1,
    videoUrl: video1,
  },
  {
    id: 2,
    name: "Walter Herrera",
    title: "Owner, Faith Electric Group",
    quote:
      "Scorpion has been a blessing to our business. Scorpion is clearing the gates for us so we get the right leads & has contributed to our growth.",
    image: slideImg2,
    videoUrl: video2,
  },
  {
    id: 3,
    name: "Steven Dayo",
    title: "Vice President, West Houston Electric, Inc.",
    quote: "“Working with Scorpion has been a game changer.”",
    image: slideImg3,
    videoUrl: video3,
  },
];

export default function TestimonialsSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");


  const paginationRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

    const handlePlayVideo = (videoUrl) => {
      setCurrentVideoUrl(videoUrl);
      setIsModalOpen(true);
    };

  return (
    <section className="bg-slate-900 py-16 px-4">
      <div>
        {/* Header */}
        <div className="container mx-auto">
          <SharedTitleSection
            category="Client Testimonials"
            title="The reason we exist. To celebrate the success of people like you."
            highlightText="success"
            theme="dark"
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
                  <div className="absolute bottom-0 left-0 w-full bg-blue-800/60 bg-opacity-95 text-white p-4">
                    {/* Quote */}
                    <p className=" mb-3 line-clamp-3">"{client.quote}"</p>

                    {/* Name + Title + Play Btn */}
                    <div className="flex items-center justify-between mt-12 mb-8">
                      <div>
                        <h4 className="font-semibold text-2xl">
                          {client.name}
                        </h4>
                        <p className=" opacity-80">{client.title}</p>
                      </div>
                      <button
                        onClick={() => handlePlayVideo(client.videoUrl)}
                        className="bg-blue-700 cursor-pointer rounded-lg p-2 hover:scale-110 transition"
                      >
                        <BiPlay className="w-5 h-5" />
                      </button>
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
            className="mt-10 bg-blue-800 cursor-pointer flex  justify-center gap-2 border-gray-400 border p-4 rounded-full w-fit mx-auto  "
          />
        </div>
      </div>
      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal
          videoSrc={currentVideoUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
