import img1 from "../../../../assets/images/hvac/website/HS-Website-1.jpg.2504221331114.webp";
import img2 from "../../../../assets/images/hvac/website/HS-Website-2.jpg.2505051022371.webp";
import img3 from "../../../../assets/images/hvac/website/HS-Website-3.jpg.2504221331120.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

const cards = [
  {
    img: img1,
    title: "Channel by Channel",
    desc: "Scorpion's AI shifts your budget to the channels that are driving results, away from the ones that aren't. So you show up where it matters, exactly when it matters.",
  },
  {
    img: img2,
    title: "Conversion by Conversion",
    desc: "Not every call is a good one. We track which leads turn into real jobs. We fine-tune everything from your ads to landing pages to 24/7 AI chat to get more of what actually fills your schedule.",
  },
  {
    img: img3,
    title: "Customer by Customer",
    desc: "By integrating with your CRM, we see exactly what's turning into closed business, then shift your budget toward the channels bringing in the most revenue. No guesswork, just better results.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="Stand Out"
          title="Your website is more important than ever"
          highlightText="website"
          description="Your customers make choices to hire you or not based on your website, and it’s the one piece of marketing that can drive the most business for you."
          descriptionSize="text-base md:text-2xl mt-8 font-semibold"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
                <h3 className="text-xl md:text-3xl font-bold mb-2">{card.title}</h3>
                <p className=" font-semibold leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
