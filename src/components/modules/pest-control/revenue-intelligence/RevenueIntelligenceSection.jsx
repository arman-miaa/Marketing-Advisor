import img1 from "../../../../assets/images/hvac/advertising-ai/callout-v5-img.png.2504011038311.webp"


export default function RevenueIntelligenceSection() {
  return (
    <section className="pt-16 md:pt-32 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3  rounded-md text-black ">
              Lifetime
            </span>
            <span className=" px-4 py-2 rounded-2xl">vs. One-Time</span>
          </h2>
          <p className="text-lg md:text-3xl text-gray-900 font-medium mx-auto leading-relaxed">
            Know what’s turned into a booked job, what turned into a completed
            job, and who turns into your most valuable customer over time.
          </p>
          <p className="text-lg md:text-4xl mt-2 text-gray-900 font-medium mx-auto leading-relaxed">
            $1,200 is good, $4,500 is
            <span className="font-bold text-gray-900">better.</span>.
          </p>
        </div>

        {/* Laptop Mockup */}
        <div className="flex justify-center">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}
