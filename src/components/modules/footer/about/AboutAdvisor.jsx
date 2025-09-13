import SharedTitleSection from "../../../../shared/SharedTitleSection";
import img1 from "../../../../assets/images/footer/about/best-business.jpg.2503270847217.webp";
import img2 from "../../../../assets/images/footer/about/business-growth.jpg.2503270847218.webp";

const aboutCards = [
  {
    id: 1,
    img: img1,
    title: "Marketing that actually grows your revenue",
    description:
      "You work hard. Your marketing should, too. With the right technology, the right team, and a focus on what actually brings in revenue, we help you make smart moves that grow your revenue, plain and simple.",
  },
  {
    id: 2,
    img: img2,
    title: "Over 20 years of showing up for local businesses",
    description:
      "We’ve been in it with local business owners since the beginning. Still here. Still showing up. Still committed to doing the work that actually makes a difference.",
  },
];

export default function AboutAdvisor() {
  return (
    <div className="container mx-auto py-10 md:py-32">
      {/* 🔹 Title Section */}
      <SharedTitleSection
        category="About Marketing Advisor"
        title="We’re here to help you grow the business you’ve worked hard to build"
        highlightText="grow the business"
        description="With Advisor, you get a clear path to real revenue, better clients, and smarter decisions. Backed by AI and two decades of experience, we take the guesswork out of marketing so you can focus on what matters most: serving your community."
        descriptionSize="text-base md:text-3xl"
      />

      {/* 🔹 Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {aboutCards.map((card) => (
          <div key={card.id} className="relative group">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[300px] md:h-[600px] object-cover rounded-xl"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent rounded-xl"></div>
            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">{card.title}</h3>
              <p className="text-sm md:text-lg mt-4 pr-18 ">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
