import SharedContentSection from "../../../../shared/SharedContentSection";

export default function CreativeAdvantage() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}

        <SharedContentSection
          subtitle="Knowledge is Money"
          description="Leads AI tells you everything you need to know about your leads, immediately. RevenueMAX uses that data to make smarter marketing decisions, automatically."
          descriptionSize="text-2xl md:text-5xl "
          buttonText="Get Started"
          buttonLink="/pest-control/get-started"
        />
      </div>
    </section>
  );
}
