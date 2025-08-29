import img1 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-1.jpg.2506092133408.webp"
import img2 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-2.jpg.2506092148275.webp"
import img3 from "../../../../assets/images/hvac/team-of-experts/Team-of-Experts-3.jpg.2506092151515.webp"
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function MarketingTeam() {
  const cards = [
    {
      img: img1,
      title: "We know the trades",
      desc: "We’ve helped thousands of owners grow their business. We know what works, what doesn’t, and how to get you more of the jobs you want.",
    },
    {
      img: img2,
      title: "We know marketing",
      desc: "Your business moves fast. So do we. Real help, real results, real expertise, right when you need it.",
    },
    {
      img: img3,
      title: "We know how to win",
      desc: "We run your website, your ads, your SEO, and your reputation like it’s our business–because it is. Everything works together to keep your schedule full.",
    },
  ];
  return (
    <section className="py-16 md:py-36 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SharedTitleSection
            category="Your Marketing Team"
            title="You deliver comfort. We deliver the jobs."
            highlightText="jobs."
          />
          <p className="text-lg md:text-3xl text-left -mt-10 ">
            A great HVAC business starts with a{" "}
            <span className="font-bold">great team.</span> The same goes for
            your marketing. That’s why we’ve built a team that{" "}
            <span className="font-bold">understands HVAC</span> just as well as
            it knows <span className="font-bold">digital marketing.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-100 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60  " />

              {/* Text */}
              <div className="absolute bottom-8 left-8 pr-4 text-left text-white">
                <h3 className="text-xl md:text-3xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className=" font-medium text-lg leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
