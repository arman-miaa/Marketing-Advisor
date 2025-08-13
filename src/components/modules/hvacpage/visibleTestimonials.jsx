"use client"

import { useState } from "react"



const VideoTestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState("")

  const testimonials = [
    {
      id: 1,
      quote:
        "Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 3x.",
      company: "Hembree Heating & Air Conditioning",
      backgroundImage: "/placeholder-7v6w4.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      quote: "If I could give my past self any advice...",
      company: "Hedrick's Service Now",
      backgroundImage: "/hvac-team.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      quote: "Our revenue has increased dramatically since working with Scorpion.",
      company: "Arctic Air Home Services",
      backgroundImage: "/placeholder-ialzs.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      quote: "The results speak for themselves - we're booking more jobs than ever.",
      company: "ServiceOne AC & Plumbing",
      backgroundImage: "/placeholder-aq557.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ]

  const handlePlayVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl)
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setCurrentVideoUrl("")
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const visibleTestimonials = testimonials.slice(currentSlide, currentSlide + 2)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">FEATURED TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="bg-purple-100 px-3 py-1 rounded-lg">Spotlight</span> stories for HVAC companies
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-80"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${testimonial.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handlePlayVideo(testimonial.videoUrl)}
            >
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <blockquote className="text-lg font-medium mb-3 leading-relaxed">"{testimonial.quote}"</blockquote>
                <cite className="text-sm opacity-90 not-italic">{testimonial.company}</cite>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 2)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 2) === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src={currentVideoUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Testimonial Video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoTestimonialsSection
