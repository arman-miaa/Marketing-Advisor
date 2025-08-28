// src/shared/SharedTitleSection.jsx
import React from "react";

function SharedTitleSection({
  category,
  title,
  highlightText,
  description,
  descriptionSize = "text-lg md:text-xl",
  theme = "light", // default white background
}) {
  // Split title by highlight text
  const titleParts = highlightText ? title.split(highlightText) : [title];

  // Theme based colors
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className="text-left mb-16">
      {/* Category */}
      {category && (
        <p
          className={`${
            theme === "dark" ? "text-blue-400" : "text-blue-700"
          } uppercase text-sm font-medium  tracking-[0.4em] mb-4`}
        >
          {category}
        </p>
      )}

      {/* Title */}
      {title && (
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 whitespace-pre-line ${titleColor}`}
        >
          {titleParts.map((part, index, arr) => (
            <React.Fragment key={index}>
              {part}
              {index < arr.length - 1 && (
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 px-3  rounded-md text-black ">
                  {highlightText}
                </span>
              )}
            </React.Fragment>
          ))}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className={`${descriptionSize} ${descColor}`}>{description}</p>
      )}
    </div>
  );
}

export default SharedTitleSection;
