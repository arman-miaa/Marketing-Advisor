import img1 from "../../../../assets/images/marketing-solutions/leads-ai/HS-Leads-AI-1.jpg.2504220702435.webp";
import img2 from "../../../../assets/images/marketing-solutions/leads-ai/HVAC-Leads-AI-2.jpg.2505231419107.webp";
import img3 from "../../../../assets/images/marketing-solutions/leads-ai/HS-Leads-AI-3.jpg.2506111052578.webp";

import ResponsiveCardSection from "../../../../shared/ResponsiveCardSection";

const cards = [
  {
    img: img1,
    title: "How good is the lead?",
    desc: "Know which leads are worth your time. Immediately.",
  },
  {
    img: img2,
    title: "Is the lead qualified?",
    desc: "Know which customers are ready to book. Immediately.",
  },
  {
    img: img3,
    title: "How was it handled?",
    desc: "Know how well your team is turning calls into bookings. Immediately",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <ResponsiveCardSection
        cards={cards}
        category="know what's working"
        title="Which leads are turning into treatments?"
        highlightText="treatments?"
        description="Every pest control business wants to know, “Are the leads worth my time?” “Are they ready to book?” and “How are we closing them?” Leads AI gives you the answer. Every time."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
