import rightImg from "../../../../assets/images/pest-control/HS_Solo-87.2505122129550.jpg";
import SharedBulletSection from "../../../../shared/SharedBulletSection";

export default function BuiltToDoMore() {
  const points = [
    {
      title: "Increase your call-to-appointment ",
      desc: "How was the call handled? How can you improve? Our intake technology gives you the information you need to ensure future leads turn into reduced windshield time and a full schedule. ",
    },
    {
      title: "Focus on the gold ",
      desc: "When it comes to HVAC service, getting to the lead first and fast matters. Know exactly which leads are most important. ",
    },
    {
      title: "See better returns ",
      desc: "When you get better leads and close more calls, you see it where it matters most—your bottom line. ",
    },
  ];

  return (
    <SharedBulletSection
      category="Turn Leads Into Revenue "
      title="Leads that turn into services"
      highlightText="Leads"
      points={points}
      buttonText="Get More Leads"
      buttonLink="/hvac/get-started"
      rightImg={rightImg}
    />
  );
}
