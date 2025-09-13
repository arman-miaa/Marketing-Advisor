import SharedContentSection from "../../../../shared/SharedContentSection";


export default function FinalCtaSection() {
  return (
    <div className="">
      <SharedContentSection
        category={`Contact Us`}
        title="Let’s Get Started"
        description="We build marketing strategies around your goals: no one-size-fits-all, no fluff. So the right people find you, hire you, and keep coming back. And you get more of what matters: growth, clarity, and time to focus on what you do best."
        descriptionSize="text-2xl md:text-5xl "
        buttonText="Let's Talk"
        buttonLink="/hvac/get-started"
      />
    </div>
  );
}
