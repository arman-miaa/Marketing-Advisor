import video from "../../../assets/images/hvac/video2.mp4";
import img1 from "../../../assets/images/hvac/img1.webp";
import img2 from "../../../assets/images/hvac/img2.webp";
import img3 from "../../../assets/images/hvac/img3.webp";

export default function RevenueMaxSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SOLUTION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Your marketing should drive predictable{" "}
            <span className="bg-white text-slate-900 px-2 py-1 rounded">
              revenue.
            </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
            Now it does with RevenueMAX.
          </p>
        </div>

        {/* Full Box Video */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden mb-8 lg:mb-12">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Book the right jobs, faster
            </h3>
            <p className="text-blue-100 text-sm lg:text-base mb-6 leading-relaxed">
              From highly-targeted ads to service emails, convert leads with
              quick responses and easy online scheduling.
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <img
                src={img1}
                alt="Mobile App Interface"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Make every dollar count
            </h3>
            <p className="text-purple-100 text-sm lg:text-base mb-6 leading-relaxed">
              Segment leads, track what's working, cut what's not, and invest in
              the jobs that bring in real revenue.
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <img
                src={img2}
                alt="Analytics Dashboard"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-6 lg:p-8 text-white md:col-span-2 lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Get more profitable calls
            </h3>
            <p className="text-blue-100 text-sm lg:text-base mb-6 leading-relaxed">
              Fill your calendar with high-revenue results, system replacements,
              and service agreements.
            </p>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <img
                src={img3}
                alt="Visualization"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
