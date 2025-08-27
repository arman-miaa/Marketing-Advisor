import img1 from "../../../../assets/images/hvac/advertising-ai/cta-v5-img.png.2504011140306.webp"
export default function OneSystemSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            One system.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-8">
            Everything you need to win.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Scorpion's technology feeds everything back to our advertising
            partners, meaning you get way more of what you want, and way less of
            what you don't.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            Learn More
          </button>
        </div>

        {/* Laptop Mockup */}
        <div className="relative max-w-5xl mx-auto">
       <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}
