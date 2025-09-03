import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Play } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

import slideImg1 from "../../../../assets/images/hvac/marketing-solutions/josh-hembree.jpg";
import slideImg2 from "../../../../assets/images/hvac/marketing-solutions/frame_1186.jpg.2506101438064.webp";
import slideImg3 from "../../../../assets/images/hvac/marketing-solutions/scott-whitaker.2504071441550.jpg";
import slideImg4 from "../../../../assets/images/hvac/marketing-solutions/bill-gouty.jpg.2506111016246.webp";
import slideImg5 from "../../../../assets/images/hvac/marketing-solutions/img5.webp";
import slideImg6 from "../../../../assets/images/hvac/marketing-solutions/JC-Refrigeration.2006041556273.png";

import video1 from "../../../../assets/images/hvac/marketing-solutions/video_266fa8a97fff2723f6ba56b293e476c8.mp4"
import video2 from "../../../../assets/images/hvac/marketing-solutions/video_410e94f1494bbe7d5f4214a1e50970fe.mp4"
import video3 from "../../../../assets/images/hvac/marketing-solutions/video_b26bec0b334f3241f5387a9755505ab0.mp4"
import video4 from "../../../../assets/images/hvac/marketing-solutions/video_1e21d1e53ac2030c4308eb86f9075acf.mp4"
import video5 from "../../../../assets/images/hvac/marketing-solutions/video_442d604c88619249773fbc8170b62e8f.mp4"
import video6 from "../../../../../public/video.mp4"


import SharedTitleSection from "../../../../shared/SharedTitleSection";
import VideoModal from "../../../../shared/VideoModel";
import { BiPlay } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    name: "Josh Hembree",
    title: "Owner, Hembree Heating & Air Conditioning",
    quote:
      "Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 3x.",
    image: slideImg1,
    videoUrl: video1,
  },
  {
    id: 2,
    name: "Jake & Conner Hedrick",
    title: "Co-Owners, Hedrick's Service Now",
    quote:
      "If I could give my past self any advice on marketing, I would say look to Scorpion sooner.",
    image: slideImg2,
    videoUrl: video2,
  },
  {
    id: 3,
    name: "Scott Whitaker",
    title: "CEO, Arctic Air & Home Services",
    quote:
      "As a long-time Scorpion client, Arctic Air Home Services continues to see double-digit revenue growth and strong ROI powered by Scorpion's Revenu...",
    image: slideImg3,
    videoUrl: video3,
  },
  {
    id: 4,
    name: "Billy Gouty",
    title: "Owner, ServiceOne Air Conditioning",
    quote:
      "Our cost per lead is going down, and our organic search rankings are going up. It's been a really great experience.",
    image: slideImg4,
    videoUrl: video4,
  },
  {
    id: 5,
    name: "Floyd Realy",
    title: "Owner, Realy Air Mechanical",
    quote: "Scorpion's AI technology drives leads that are laser-focused.",
    image: slideImg5,
    videoUrl: video5,
  },
  {
    id: 6,
    name: "Manny Sanchez",
    title: "Owner, All Seasons Air Refrigeration",
    quote:
      "Since we've started with Scorpion, it has freed up a lot of time for my family where I used to have to lose of what's in my marketing asking for me.",
    image: slideImg6,
    videoUrl: video6,
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
            title="The people and the results that matter most."
            highlightText="matter most."
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
                    <p className=" mb-3 line-clamp-3">
                      "{client.quote}"
                    </p>

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
