import rightImg from "../../../../assets/images/footer/careers/work-content-1.jpg.2506112102492.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";
export default function JoinOurStory() {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[100%] hidden md:flex">
              <img
                src={rightImg}
                alt="Advertising AI Preview"
                className="w-full h-[750px] object-cover rounded-3xl shadow-2xl"
              />
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>
          {/* right Content */}
          <div className="space-y-8">
            {/* Header */}

            <SharedTitleSection
              category="What you can expect "
              title="Your story, our shared success"
              highlightText="succeed"
            />
            {/* Bullet Points */}
            <div className="space-y-6 -mt-4 ">
              <div className="flex items-start gap-4 mt-2">
                <div className="space-y-6">
                  <h3 className="font-medium text-2xl">
                    Explore opportunities with Scorpion.
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    At Scorpion, we’re not just looking for people to fit
                    in—we're excited about what makes you unique and how you can
                    help us grow as a team. Our process is designed to uncover
                    how your experiences, interests, and goals align with our
                    leadership behaviors and Scorpion values.
                  </p>

                  <p className="text-gray-900 text-lg leading-relaxed">
                    We encourage candidates to come prepared to share their
                    story, ask questions, and explore how they can contribute to
                    our collective success. We're excited to learn about the
                    unique perspective you bring and how it can enhance the
                    innovation, collaboration, and excellence of our team.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button text="Get More Jobs" to="/hvac/get-started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
