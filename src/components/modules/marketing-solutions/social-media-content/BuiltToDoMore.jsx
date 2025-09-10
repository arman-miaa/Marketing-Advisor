import rightImg from "../../../../assets/images/marketing-solutions/social-media-content/Leads-Ai-HS-3.jpg.2505091048384.webp";
import SharedBulletSection from "../../../../shared/SharedBulletSection";


export default function BuiltToDoMore() {
  const points = [
    {
      title: "We write it, then promote it ",
      desc: "What good is content if it’s never seen? We make sure your ideal customers see it and remember your name when it counts.",
    },
    {
      title: "You’re the expert. We just show everyone. ",
      desc: "When it comes to HVAC, no one knows your business better than you. We show that expertise through engaging content that promotes, engages, and sells your services (and yes, teaches a bit). ",
    },
    {
      title: "See it in the returns, with interest ",
      desc: "The ultimate goal of great content and a social strategy is more business. Capture the interest of new and existing customers so the next time they need you, they choose you.",
    },
  ];

  return (
    <SharedBulletSection
      category="Show up and show off"
      title="It starts with content. It ends with customers."
      highlightText="customers."
      points={points}
      buttonText="Maximize Your Social Media"
      buttonLink="/hvac/get-started"
      rightImg={rightImg}
    />
  );
}
