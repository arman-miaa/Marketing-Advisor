import img1 from "../../../../assets/images/marketing-solutions/video-advertising/HVAC-Video-Photo-1.jpg.2505231444046.webp";
import img2 from "../../../../assets/images/marketing-solutions/video-advertising/HS-Video-Ad-2.jpg.2504250957476.webp";
import img3 from "../../../../assets/images/marketing-solutions/video-advertising/HVAC-Video-Photo-3.jpg.2505231444150.webp";


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
        title="When they can see you, they can trust you"
        highlightText="trust"
        description="Not only do people love videos, but so do places like Google, Facebook, Instagram, and YouTube. It’s an important signal about how trustworthy your brand is, and video brings needed engagement to keep your HVAC business top of mind."
        descriptionSize="md:text-3xl mt-8 font-medium"
      />
    </section>
  );
}
