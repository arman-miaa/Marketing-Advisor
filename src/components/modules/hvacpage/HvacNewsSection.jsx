import img1 from "../../../assets/images/hvac/woman.webp";
import img2 from "../../../assets/images/hvac/group.webp";
import img3 from "../../../assets/images/hvac/news.webp";

const HvacNewsSection = () => {
  const articles = [
    {
      id: 1,
      date: "Jul 23, 2024",
      title: "Why SEO Marketing for HVAC Businesses Matters More Than Ever",
      image: img1,
      size: "large",
    },
    {
      id: 2,
      date: "Jul 10, 2024",
      title:
        "How HVAC and Plumbing Businesses Are Winning More Jobs in a Changing Market",
      image: img2,
      size: "small",
    },
    {
      id: 3,
      date: "Jul 3, 2024",
      title: "Your HVAC Website Should Work as Hard as You Do",
      image: img3,
      size: "small",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
            YOUR COMPETITIVE ADVANTAGE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">HVAC</span> news and insights
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The information you need to maximize your revenue.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Large Left Box */}
          <div className="lg:col-span-2 relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-start p-6 md:p-8">
              <span className="text-white text-sm mb-2">
                {articles[0].date}
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                {articles[0].title}
              </h3>
            </div>
          </div>

          {/* Right Small Boxes */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="relative h-48 md:h-64 overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-start p-4">
                  <span className="text-white text-xs mb-1">
                    {article.date}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Insights Button */}
        <div className="text-center mt-8">
          <button className="btn btn-primary px-8 py-3 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
            More Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default HvacNewsSection;
