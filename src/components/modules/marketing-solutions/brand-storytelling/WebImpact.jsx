import img1 from "../../../../assets/images/marketing-solutions/brand-storytelling/HVAC-Video-Photo-1.jpg.2505231449112.webp";
import img2 from "../../../../assets/images/marketing-solutions/brand-storytelling/HS-Video-Photo-2.jpg.2504221328494.webp";
import img3 from "../../../../assets/images/marketing-solutions/brand-storytelling/HVAC-Video-Photo-3.jpg.2505231449259.webp";


import ResponsiveCardSection from "../../../../shared/ResponsiveCardSection";

const cards = [
  {
    img: img1,
    title: "Show up where people are watching",
    desc: "Connect with new and existing customers where they already are: YouTube, Facebook, Instagram, and more.",
  },
  {
    img: img2,
    title: "Show up for the people that need you",
    desc: "People in your service area won’t know they need you until an emergency. Video advertising keeps you in front of them, no matter when that time comes.",
  },
  {
    img: img3,
    title: "Show up everywhere with authority",
    desc: "With video designed to be mobile-first, load fast, and grab attention, you’ll be seen no matter where they are or how they’re browsing.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <ResponsiveCardSection
        cards={cards}
        category="Tell Your Story"
        title="Videos worth a gazillion words."
        highlightText="gazillion"
        description="First impressions matter, and high-quality visuals on your website help homeowners feel confident choosing you. Show them who you are, what you do, and why they should call you first."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
