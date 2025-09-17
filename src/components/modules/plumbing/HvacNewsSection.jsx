import img1 from "../../../assets/images/plumbing/PlumbingSEO.jpg.2507231250371.webp";
import img2 from "../../../assets/images/plumbing/plumbermarketingideas3.jpg.2506041520599.webp";
import img3 from "../../../assets/images/plumbing/shutterstock_1741950797.2309111330550.jpg";
import Button from "../../ui/Button";
import { Link } from "react-router";
import SharedTitleSection from "../../../shared/SharedTitleSection";

const HvacNewsSection = () => {
  const articles = [
    {
      id: 1,
      date: "Jul 23, 2024",
      title:
        "Is Your Plumbing Business Ready for AI Search? Here’s What SEO Success Looks Like Now",
      image: img1,
      link: "/hvac/Insights/blog",
    },
    {
      id: 2,
      date: "Jul 10, 2024",
      title: "15 of the Best Plumbing Marketing Strategies for Your Business",
      image: img2,
      link: "/hvac/Insights/blog2",
    },
    {
      id: 3,
      date: "Jul 3, 2024",
      title:
        "10 Creative Video Marketing Examples to Improve Your Plumbing Business",
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
            category="your competitive advantage"
            title="News and insights for plumbers"
            highlightText="plumbers"
            description="The information you need to maximize your revenue."
            descriptionSize="text-base md:text-4xl"
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
