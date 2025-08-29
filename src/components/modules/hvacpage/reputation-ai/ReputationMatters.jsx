import img1 from "../../../../assets/images/hvac/reputation-ai/HS-Reputation-AI-1.jpg.2504221332541.webp";
import img2 from "../../../../assets/images/hvac/reputation-ai/HS-Reputation-AI-2.jpg.2504221332546.webp";
import img3 from "../../../../assets/images/hvac/reputation-ai/HVAC-Reputation-AI-3.jpg.2505231436434.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function ReputationMatters() {
  const cards = [
    {
      img: img1,
      title: "Well-Timed Requests",
      desc: "Reputation AI knows exactly when to ask for a review–after a job well done.",
    },
    {
      img: img2,
      title: "Automatic Replies",
      desc: "Responds quickly and easily to 5-star reviews with personalized, SEO-friendly replies.",
    },
    {
      img: img3,
      title: "Reputation to Results",
      desc: "What do you see with a better online reputation? More reviews, better rankings, better ad performance",
    },
  ];
  return (
    <section className="py-16 md:py-36 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SharedTitleSection
            category="Build Trust. Maximize Revenue."
            title="Your reputation is their reality"
            highlightText="reputation"
          />
          <p className="text-lg md:text-3xl text-left -mt-10 ">
            What’s one of the first things someone does when looking for an{" "}
            <span className="font-bold">HVAC provider? </span> They look at your
            <span className="font-bold">ratings.</span> All your hard work
            deserves to be backed by a
            <span className="font-bold"> reputation</span>that reflects it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
                <p className=" font-medium text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
