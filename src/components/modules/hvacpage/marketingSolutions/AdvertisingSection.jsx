import bgVideo from "../../../../assets/images/hvac/marketing-solutions/video_311a719bf6beb5c0632d1004d6b33ca0.mp4"

export default function AdvertisingSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={bgVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900"></div>
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              ADVERTISING
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Advertising technology for{" "}
              <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-bold">
                HVAC businesses
              </span>{" "}
              that doubles down on what's driving the jobs you want.
            </h2>
          </div>

          {/* Subheading and Description */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Experience advertising that drives revenue
            </h3>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Win Advertising AI, your campaigns continuously improve, and even
              take other providers at like Google, Microsoft, and Meta to learn
              what works and remove what doesn't.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="bg-white text-gray-900 p-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer">
              Experience advertising that drives revenue
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer">
              Convert more with the right message
            </div>
            <div className="bg-blue-700 text-white p-4 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors cursor-pointer">
              See better returns
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer">
              Hold their attention
            </div>
            <div className="bg-blue-700 text-white p-4 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors cursor-pointer">
              Make yourself known
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
