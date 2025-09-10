import img1 from "../../../../assets/images/marketing-solutions/social-media-content/HS-Social-Content-1.jpg.2504251238434.webp";
import img2 from "../../../../assets/images/marketing-solutions/social-media-content/HS-Social-Content-2.jpg.2504251238449.webp";
import img3 from "../../../../assets/images/marketing-solutions/social-media-content/HS-Landing-Page-AI-3.jpg.2504221304015.webp";


import ResponsiveCardSection from "../../../../shared/ResponsiveCardSection";

const cards = [
  {
    img: img1,
    title: "Stay in front",
    desc: "Social media is one of the main places homeowners discover service pros like you, check reviews, and ask for recommendations.",
  },
  {
    img: img2,
    title: "Become the obvious choice",
    desc: "It’s not enough to just be there. We create the right content that helps customers think of you the moment they need you.",
  },
  {
    img: img3,
    title: "Fill your board",
    desc: "By running ads across Facebook, Instagram, and YouTube, you’ll see the results where it matters: your schedule.",
  },
];

export default function WebImpact() {
  return (
    <section className="py-16 md:py-32 px-4">
      <ResponsiveCardSection
        cards={cards}
        category="Social Media Content"
        title="Be top of mind before it matters"
        highlightText="top"
        description="Every day, people who need your services (whether they know it yet or not) are searching, scrolling, and reading reviews. Our social media and content services make sure your business shows up–and stands out."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
