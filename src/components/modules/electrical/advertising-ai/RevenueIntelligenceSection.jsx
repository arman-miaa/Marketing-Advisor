import img1 from "../../../../assets/images/hvac/advertising-ai/callout-v5-img.png.2504011038311.webp"


export default function RevenueIntelligenceSection() {
  return (
    <section className="pt-16 md:pt-32 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3  rounded-md text-black ">
              Know what's working.
            </span>
            <span className=" px-4 py-2 rounded-2xl">Ditch what's not.</span>
          </h2>
          <p className="text-lg md:text-3xl text-gray-900 font-medium mx-auto leading-relaxed">
            With Scorpion's Revenue Intelligence, track which ads lead to booked
            calls, completed service calls, and repeat customers. The result?{" "}
            <span className="font-bold text-gray-900">More profitable</span>{" "}
            work and{" "}
            <span className="font-bold text-gray-900">
              smarter decisions, every day
            </span>
            .
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
