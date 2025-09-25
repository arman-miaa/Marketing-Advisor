import img1 from "../../../../assets/images/hvac/advertising-ai/cta-v5-img.png.2504011140306.webp"
import SharedContentSection from "../../../../shared/SharedContentSection";

export default function OneSystemSection() {
  return (
    <section className=" relative bg-slate-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SharedContentSection
          title="Revenue Intelligence"
          subtitle="at Your Fingertips"
          description="Revenue Intelligence tells you everything you need to know about where your money is made."
          buttonText="Learn More"
          buttonLink="/pest-control/get-started"
        />

        {/* Laptop Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}
