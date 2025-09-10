import img1 from "../../../../assets/images/hvac/advertising-ai/callout-v5-img.png.2504011038311.webp"


export default function RevenueIntelligenceSection() {
  return (
    <section className="pt-16 md:pt-32 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            <span className=" px-4 py-2 rounded-2xl">Tied to your</span>
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3  rounded-md text-black ">
              revenue
            </span>
          </h2>
          <p className="text-lg md:text-3xl text-gray-900 font-medium mx-auto leading-relaxed">
            See exactly how your advertising spend increases and decreases to
            correspond with your job board, so you're getting
            <span className="font-bold text-gray-900">maximized revenue.</span>.
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
