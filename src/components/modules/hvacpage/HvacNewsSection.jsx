import img1 from "../../../assets/images/hvac/woman.webp";
import img2 from "../../../assets/images/hvac/group.webp";
import img3 from "../../../assets/images/hvac/news.webp";
import Button from "../../ui/Button";

const HvacNewsSection = () => {
  const articles = [
    {
      id: 1,
      date: "Jul 23, 2024",
      title: "Why SEO Marketing for HVAC Businesses Matters More Than Ever",
      image: img1,
    },
    {
      id: 2,
      date: "Jul 10, 2024",
      title:
        "How HVAC and Plumbing Businesses Are Winning More Jobs in a Changing Market",
      image: img2,
    },
    {
      id: 3,
      date: "Jul 3, 2024",
      title: "Your HVAC Website Should Work as Hard as You Do",
      image: img3,
    },
  ];

  return (
    <section className="py-20 md:py-30 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-18">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-[0.35em] mb-14">
            your competitive advantage
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3 rounded-md">
              HVAC
            </span>
            news and insights
          </h2>
          <h2 className="text-4xl  mt-10 text-gray-900">
            The information you need to maximize your revenue.
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Large Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group  ">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stronger & smoother gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-10 flex flex-col justify-end transition duration-500">
              <span className="text-white text-xl mb-4">
                {articles[0].date}
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-semibold leading-snug">
                {articles[0].title}
              </h3>

              {/* HR before Learn More */}
              <hr className="border-white/30 my-4" />

              <button className="mt-1 cursor-pointer text-white flex items-center gap-1 hover:text-blue-100">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="grid gap-6">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-10 flex flex-col justify-end transition duration-500">
                  <span className="text-white text-xl mb-4">
                    {article.date}
                  </span>
                  <h3 className="text-white text-lg md:text-3xl font-semibold leading-snug">
                    {article.title}
                  </h3>

                  <hr className="border-white/30 my-4" />

                  <button className="mt-1 cursor-pointer text-white flex items-center gap-1 hover:text-blue-100">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Insights Button */}
        <div className="text-left mt-16">
          <Button text="More Insights" />
        </div>
      </div>
    </section>
  );
};

export default HvacNewsSection;
