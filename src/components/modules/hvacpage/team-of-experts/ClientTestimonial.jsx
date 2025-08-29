import SharedContentSection from "../../../../shared/SharedContentSection";

export default function ClientTestimonial() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center">
          <SharedContentSection
            category="Client Testimonial"
            description="“Just in the past few years since our partnership with Scorpion began, Hembree Heating & Air has grown by over 300%.”"
            descriptionSize="text-2xl md:text-6xl "
          />

          <div className="">
            <p className="text-md md:text-xl text-gray-400 font-semibold mb-4">
              Josh Hembree
            </p>
            <p className="text-sm md:text-lg text-blue-500">
              Owner of Hembree Heating & Air Conditioning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
