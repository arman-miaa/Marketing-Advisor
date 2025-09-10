import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeAdvantage() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}

        <SharedContentSection
          subtitle="Before They Need You, They Need to See You"
          description="Social advertising keeps your business in their feed—so you're top of mind when a problem strikes."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/hvac/get-started"
        />
      </div>
    </section>
  );
}
