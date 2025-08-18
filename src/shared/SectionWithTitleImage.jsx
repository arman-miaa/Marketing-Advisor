

export default function SectionWithTitleImage({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  className = "",
}) {
  return (
    <section className={`bg-base-100 md:pt-30 px-4 ${className}`}>
      <div className="mx-auto text-center">
        {/* Title */}
        {title && (
          <p className="text-blue-600  font-semibold uppercase mb-6 tracking-[0.35em]">
            {title}
          </p>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h3 className="container mx-auto md:w-1/2  mt-3 text-4xl md:text-6xl font-semibold md:leading-20">
            {subtitle}
          </h3>
        )}

        {/* Image */}
        {imageSrc && (
          <div className=" mt-12 md:mt-20 rounded-xl bg-blue-50 overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt || "Section Image"}
              className="w-full h-[250px] md:h-auto object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
