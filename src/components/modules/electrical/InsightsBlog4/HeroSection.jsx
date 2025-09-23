function HeroSection() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center px-6 md:px-24 
                bg-gradient-to-r from-purple-200 to-blue-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-12">
     
        <div className="flex flex-col justify-center  text-center  ">
  
            <h1 className="text-blue-600 text-3xl md:text-8xl font-bold">
              Our Blog
            </h1>
          <p className="text-xl md:text-4xl mt-8">
            Read our latest thoughts about HVAC marketing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
