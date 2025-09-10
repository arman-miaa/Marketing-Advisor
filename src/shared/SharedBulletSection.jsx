

import Button from "../components/ui/Button";
import SharedTitleSection from "./SharedTitleSection";

export default function SharedBulletSection({
  category,
  title,
  highlightText,
  points = [],
  buttonText,
  buttonLink,
  rightImg,
}) {
  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <SharedTitleSection
              category={category}
              title={title}
              highlightText={highlightText}
            />

            {/* Bullet Points */}
            <div className="space-y-6 -mt-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 mt-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-900 text-lg leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {buttonText && (
              <div>
                <Button text={buttonText} to={buttonLink} />
              </div>
            )}
          </div>

          {/* Right Image */}
          {rightImg && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full lg:w-[100%] hidden md:flex">
                <img
                  src={rightImg}
                  alt="Preview"
                  className="w-full h-[750px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
