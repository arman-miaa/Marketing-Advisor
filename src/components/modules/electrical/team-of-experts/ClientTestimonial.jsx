import SharedContentSection from "../../../../shared/SharedContentSection";
import Button from "../../../ui/Button";

export default function ClientTestimonial() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center">
          <SharedContentSection
            category="Client Testimonial"
            description="“Since working with Scorpion, we've had nothing but record-breaking revenue months.
            Erika Schneider
            ”
"
            descriptionSize="text-2xl md:text-6xl "
          />

         
          <h3 className="text-white text-2xl md:text-3xl font-semibold -mt- ">Co-Owner of A-TEMP Heating, Cooling, & Electrical</h3>
          <div className="flex justify-center mt-10">
            <Button text={`Get Started`} to={`/hvac/get-started`} />
          </div>
        </div>
      </div>
    </section>
  );
}
