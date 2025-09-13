import img1 from "../../../../assets/images/footer/about/About-us-conent.jpg.2506101245106.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";

export default function TestimonialSection() {
  return (
    <section className="container mx-auto py-12 md:py-20 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Right Content (always first on mobile, left on md+) */}
        <div className="flex-1 order-1 md:order-2">
 
          <SharedTitleSection
            category=" Your Partner in Growth"
            title="Expert marketing, purpose-built technology, and a team that gets it"
            highlightText="purpose-built"
          />
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            You’ve got a business to run, customers to serve, a team to support,
            and big goals to hit. That’s where we come in.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            Scorpion is built to make marketing simpler, clearer, and more
            effective for local businesses. We bring strategy, technology, and
            expert support together in one place, so you’re not guessing what’s
            working—you know. And with a team that’s invested in your success,
            you’re never navigating it alone.
          </p>
          <Button text="Contact Us" to="/hvac/get-started" />
        </div>

        {/* Image + Testimonial */}
        <div className="order-2 md:order-1 md:flex md:flex-col md:w-1/2 w-full">
          <img
            src={img1}
            alt="Testimonial"
            className="w-full hidden md:flex h-[380px] object-cover rounded-2xl mb-6"
          />

          {/* Testimonial Box */}
          <div className="bg-white p-6 rounded-xl ">
            <p className="text-xl md:text-4xl font-medium text-blue-600 mb-4">
              “There is no doubt that Scorpion is the best internet marketing
              company in the country period full stop.”
            </p>
            <p className="font-bold text-lg text-gray-900">Jason Itkin</p>
            <p className="text-gray-800 text-sm">
              Founding Partner, Arnold &amp; Itkin LLP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
