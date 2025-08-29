import img1 from "../../../../assets/images/hvac/advertising-ai/cta-v5-img.png.2504011140306.webp"
import SharedContentSection from "../../../../shared/SharedContentSection";

export default function OneSystemSection() {
  return (
    <section className=" relative bg-slate-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        <SharedContentSection  title = "One system."
  subtitle = "Everything you need to win."
  description = "Scorpion's technology feeds everything back to our advertising partners, meaning you get way more of what you want, and way less of what you don't."
  buttonText = "Learn More"
  buttonLink = "/hvac/get-started" />

        {/* Laptop Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <img src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}
