import img1 from "../../../assets/images/pest-control/1.jpg.2506021147162.webp";
import img2 from "../../../assets/images/pest-control/PestControlSEO.jpg.2507231251543.webp";
import img3 from "../../../assets/images/pest-control/Pest-Control-32.jpg.0000000000000.webp";
import Button from "../../ui/Button";
import { Link } from "react-router";
import SharedTitleSection from "../../../shared/SharedTitleSection";

const HvacNewsSection = () => {
  const articles = [
    {
      id: 1,
      date: "Jul 23, 2024",
      title: "What’s Eating Your Margins? (It’s Not Termites.)",
      image: img1,
      link: "/hvac/Insights/blog",
    },
    {
      id: 2,
      date: "Jul 10, 2024",
      title:
        "What Today’s Homeowners Expect From Pest Control and How to Deliver",
      image: img2,
      link: "/hvac/Insights/blog2",
    },
    {
      id: 3,
      date: "Jul 3, 2024",
      title: "How AI Is Changing Pest Control SEO and What to Do About It",
      image: img3,
      link: "/hvac/Insights/blog3",
    },
  ];

  return (
    <section className="py-20 md:py-30 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-18">
          <SharedTitleSection
            category="Resources"
            title="Pest control news and insights"
            highlightText="news"
            align="center"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Large Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group h-96 md:h-auto ">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Stronger & smoother gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-10 flex flex-col justify-end transition duration-500">
              <span className="text-white text-xl mb-4 ">
                {articles[0].date}
              </span>
              <h3 className="text-white text-2xl md:text-4xl font-semibold leading-snug">
                {articles[0].title}
              </h3>

              {/* HR before Learn More */}
              <hr className="border-white/30 my-4" />

              <Link to="/hvac/insights/blog">
                <button className="mt-1 cursor-pointer text-white flex items-center gap-1 hover:text-blue-100">
                  Learn More →
                </button>
              </Link>
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="md:grid gap-6 hidden">
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

                  <Link to={article.link}>
                    <button className="mt-1 cursor-pointer text-white flex items-center gap-1 hover:text-blue-100">
                      Learn More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Insights Button */}
        <div className="text-left mt-16">
          <Button text="More Insights" to="/hvac/insights/blog4" />
        </div>
      </div>
    </section>
  );
};

export default HvacNewsSection;
