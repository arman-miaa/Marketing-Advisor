import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeAdvantage() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}

        <SharedContentSection
          subtitle="No More Questions"
          description="No confusion. No wasted spend. Budgets AI puts your dollars where they get results—and gives you visibility every step along the way."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
