import Button from "../components/ui/Button";



export default function SharedContentSection({
  title,
  subtitle,
  category,
  description,
  buttonText ,
  buttonLink ,
  descriptionSize = "text-lg md:text-2xl ",
}) {
  return (
    <section className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute -inset-x-20 top-2/8 -translate-y-1/2 h-36 w-3/5 mx-auto blur-3xl bg-gradient-to-r from-[#3b83f648] via-[#3b83f677] to-[#3b83f648] animate-pulse-slow"></div>
        </div>

        {/* Header Content */}
        <div className="text-center relative z-10">
          {/* Category */}
          {category && (
            <p
              className={` uppercase text-sm text-blue-700 font-semibold  tracking-[0.4em] mb-8`}
            >
              {category}
            </p>
          )}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h2>
          <h3
            className="text-3xl md:text-6xl font-bold text-white mb-8"
            style={{ textShadow: "4px 4px 8px #3b82f6" }}
          >
            {subtitle}
          </h3>
          <p
            className={`${descriptionSize} text-white container mx-auto mb-8 leading-relaxed`}
          >
            {description}
          </p>
          {buttonText && (
            <div className="flex justify-center">
              <Button text={buttonText} to={buttonLink} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
