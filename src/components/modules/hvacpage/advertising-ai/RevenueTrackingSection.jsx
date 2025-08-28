import img1 from "../../../../assets/images/hvac/advertising-ai/HS-Ad-AI-1.jpg.2504221318340.webp";
import img2 from "../../../../assets/images/hvac/advertising-ai/HS-Ad-AI-2.jpg.2504221318344.webp";
import img3 from "../../../../assets/images/hvac/advertising-ai/HS-Ad-AI-3.jpg.2504221318347.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function RevenueTrackingSection() {
  const cards = [
    {
      id: 1,
      img: img1,
      alt: "Channel analytics dashboard",
      title: "Channel by Channel",
      desc: "Scorpion's AI shifts your budget to the channels that are driving results, away from the ones that aren't. So you show up where it matters, exactly when it matters.",
    },
    {
      id: 2,
      img: img2,
      alt: "Conversion tracking dashboard",
      title: "Conversion by Conversion",
      desc: "Not every call is a good one. We track which leads turn into real jobs. We fine-tune everything from your ads to landing pages to 24/7 AI chat to get more of what actually fills your schedule.",
    },
    {
      id: 3,
      img: img3,
      alt: "Customer analytics dashboard",
      title: "Customer by Customer",
      desc: "By integrating with your CRM, we see exactly what's turning into closed business, then shift your budget toward the channels bringing in the most revenue. No guesswork, just better results.",
    },
  ];

  return (
    <section className="py-16 md:pb-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <SharedTitleSection
          category="Maximize Your Revenue"
          title="Know every dollar earned for every dollar spent"
          highlightText="earned"
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-12 "
            >
              <div className="mb-6">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-88 object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-900 font-medium mt-8 text-xl leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
