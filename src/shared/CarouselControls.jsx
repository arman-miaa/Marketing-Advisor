
export default function CarouselControls({
  slides = [],
  activeIndex = 0,
  isPlaying = false,
  progress = 0,
  onDotClick = () => {},
  onPlayToggle = () => {},
}) {
  return (
    <div className="container mx-auto">
      <div className="mt-8 bg-white p-2 pl-4 pr-4 border border-gray-300 rounded-full inline-flex items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={onPlayToggle}
          className="flex items-center justify-center w-6 h-6 cursor-pointer rounded-full bg-blue-600 text-white flex-shrink-0"
        >
          {isPlaying ? (
            <span className="flex gap-[3px]">
              <span className="w-[3px] h-4 bg-white"></span>
              <span className="w-[3px] h-4 bg-white"></span>
            </span>
          ) : (
            <span className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent" />
          )}
        </button>

        {/* Dots */}
        {slides.map((_, i) => {
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              onClick={() => onDotClick(i)}
              className="relative flex-shrink-0 cursor-pointer"
            >
              {!isActive && (
                <span className="block w-3 h-3 rounded-full bg-gray-300" />
              )}

              {isActive && (
                <div className="relative w-20 h-3 rounded-full bg-gray-300 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
