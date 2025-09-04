

function SharedHeroSection2({ heading, subHeading, imageSrc, bgGradient }) {
  return (
    <div
      className="w-full h-screen flex justify-center items-center px-6 md:px-24"
      style={{ background: bgGradient }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center  text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl text-left md:text-center  font-bold md:leading-14 tracking-wide">
            {heading}
          </h1>
          <p className="text-3xl text-left md:text-center md:text-xl mt-4">{subHeading}</p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Hero Image"
            className="w-full max-w-lg rounded-4xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default SharedHeroSection2;
