import img1 from "../../../../assets/images/marketing-solutions/social-advertising/HVAC-Social-Ad-1.jpg.2505231431466.webp";
import img2 from "../../../../assets/images/marketing-solutions/social-advertising/HS-Social-Ad-2.jpg.2504221305562.webp";
import img3 from "../../../../assets/images/marketing-solutions/social-advertising/HS-Social-Ad-3.jpg.2504221305565.webp";


import ResponsiveCardSection from "../../../../shared/ResponsiveCardSection";

const cards = [
  {
    img: img1,
    title: "Your Audience",
    desc: "Our job? Target homeowners in your service area that are likely to need your business, now and later.",
  },
  {
    img: img2,
    title: "Your Services",
    desc: "From emergency services to recurring maintenance to high-ticket installs, we’ll promote what’s most important to you.",
  },
  {
    img: img3,
    title: "Your Job Board",
    desc: "By running ads across Facebook, Instagram, and YouTube, you’ll see the results where it matters: your schedule.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
    
      <ResponsiveCardSection
        cards={cards}
        category="Stay top of mind"
        title="We run the social ads. You run the calls."
        highlightText="social ads."
        description="HVAC problems don’t come with warning signs—people need help fast. Our targeted social ads keep your business top-of-mind, so when an emergency hits, you're the only name they think of."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
