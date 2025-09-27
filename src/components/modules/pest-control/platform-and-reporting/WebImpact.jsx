import img1 from "../../../../assets/images/marketing-solutions/platform-and-reporting/HS-Plat-Reporting-1.jpg.2504221259421.webp";
import img2 from "../../../../assets/images/marketing-solutions/platform-and-reporting/HS-Plat-Reporting-2.jpg.2504221259424.webp";
import img3 from "../../../../assets/images/marketing-solutions/platform-and-reporting/HS-Plat-Reporting-3.jpg.2504221259429.webp";

import ResponsiveCardSection from "../../../../shared/ResponsiveCardSection";

const cards = [
  {
    img: img1,
    title: "Know Where Your Money’s Going",
    desc: "Beyond charts and graphs, we show you exactly how your marketing dollars perform.",
  },
  {
    img: img2,
    title: "See More Than Leads",
    desc: "It’s not about clicks—it’s about quality leads that turn into real jobs. Track it all in one place, instantly.",
  },
  {
    img: img3,
    title: "Full Control, Full Confidence",
    desc: "See the impact of changes, respond to leads directly, book more jobs, and see your return on investment–all in the palm of your hand.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <ResponsiveCardSection
        cards={cards}
        category="Know What's Working"
        title="Your marketing. Your results. Everywhereyou are."
        highlightText="Everywhere"
        description="As an HVAC professional, you have enough to juggle. We make marketing simple—one platform, real-time results, anytime."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
