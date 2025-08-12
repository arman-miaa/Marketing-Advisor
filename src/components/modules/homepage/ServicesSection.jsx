import Revenue from "../../../assets/images/Home Page/output2.mp4";
import technologyMobile from "../../../assets/images/Home Page/video_4.mp4";
import advertisingDashboard from "../../../assets/images/Home Page/video_5.mp4";
import marketingReport from "../../../assets/images/Home Page/video_6.mp4";

const ServicesSection = () => {
  const services = [
    {
      title: "Technology",
      description:
        "Cutting-edge tools and platforms specifically designed to maximize your digital presence and streamline your operations.",
      video: technologyMobile,
    },
    {
      title: "Advertising",
      description:
        "Strategic advertising solutions that deliver measurable results and maximize your return on investment across all channels.",
      video: advertisingDashboard,
    },
    {
      title: "Marketing",
      description:
        "Comprehensive marketing strategies tailored to your business goals, ensuring sustainable growth and brand recognition.",
      video: marketingReport,
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="container mx-auto">
        {/* Title + Description */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Revenue<span className="text-blue-500">MAX</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The digital marketing solution that gives you everything you need to{" "}
            <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded">
              succeed
            </span>{" "}
            online.
          </p>
        </div>

        {/* Top main video with stats */}
        <div className="mb-12 rounded-xl overflow-hidden relative shadow-lg">
          <video
            src={Revenue}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[320px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center text-white space-x-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">3.8M</p>
              <span className="text-sm opacity-80">Impressions</span>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">$1.7M</p>
              <span className="text-sm opacity-80">Revenue</span>
            </div>
          </div>
          {/* optional top-right CTA */}
          <div className="absolute right-6 bottom-6">
            <button className="btn btn-sm btn-primary">Watch Video</button>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-500"
            >
              <div className="relative h-64">
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <button className="btn btn-primary btn-sm">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pick Your Solution CTA */}
        <div className="flex justify-center mt-8">
          <button className="btn btn-lg btn-outline btn-primary">
            Pick Your Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
