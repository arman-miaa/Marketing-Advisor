import rightImg from "../../../../assets/images/footer/careers/sticker.png.2503270905586.webp";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import img1 from "../../../../assets/images/footer/careers/succeed.jpg.2506130938069.webp"
import img2 from "../../../../assets/images/footer/careers/thrive.jpg.2506130938130.webp"
import img3 from "../../../../assets/images/footer/careers/grow.jpg.2506130938135.webp"
import img4 from "../../../../assets/images/footer/careers/belong.jpg.2506131018495.webp"



export default function OurPeople() {

    const cards = [
      {
        image: img1,
        title: "Succeed",
        description: "Empowering people to achieve their goals",
      },
      {
        image: img2,
        title: "Thrive",
        description: "Creating an environment to grow and prosper",
      },
      {
        image: img3,
        title: "Grow",
        description: "Helping individuals and teams reach new heights",
      },
      {
        image: img4,
        title: "Belong",
        description: "Fostering a culture of inclusion and collaboration",
      },
    ];


  
  return (
    <section className="py-16 md:py-30 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <SharedTitleSection
              category="How it helps"
              title="It starts with the team"
              highlightText="team"
            />
            <div className="space-y-6 -mt-4">
              <p className="text-gray-900 text-lg md:text-2xl leading-relaxed">
                We empower businesses with marketing that moves the needles and
                technology that is purpose-built, but it all starts with our{" "}
                <span className="font-bold">people</span>. Our team is made up
                of bold thinkers,{" "}
                <span className="font-bold">problem-solvers</span>,{" "}
                <span className="font-bold">go-getters</span>, and those driven
                to help businesses thrive. Here, your work makes a{" "}
                <span className="font-bold">difference</span>.
              </p>
            </div>
          </div>

          {/* Right Image with Overlay Text */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:w-[90%] bg-blue-50 rounded-3xl">
              {/* Background Image */}
              <img
                src={rightImg}
                alt="Team Graphic"
                className="w-full object-contain"
              />

              {/* Overlay Texts */}
              <h2 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-lg  bg-gradient-to-r  from-blue-100 to-purple-100 p-2 rounded tracking-[0.2em] md:text-xl font-semibold ">
                Succeed
              </h2>

              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-xl font-semibold bg-gradient-to-r  from-blue-100 to-purple-100 p-2 rounded tracking-[0.2em]">
                Thrive
              </h2>

              <h2 className="absolute bottom-20 left-1/10 text-lgmd:text-xl font-semibold bg-gradient-to-r  from-blue-100 to-purple-100 p-2 rounded tracking-[0.2em]">
                Grow
              </h2>

              <h2 className="absolute bottom-20 right-1/10 t md:text-xl font-semibold bg-gradient-to-r  from-blue-100 to-purple-100 p-2 rounded tracking-[0.2em]">
                Belong
              </h2>
            </div>
          </div>
        </div>
        {/* grid cards */}
        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover md:h-100  "
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Overlay at bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                <h3 className="text-lg md:text-2xl font-bold">{card.title}</h3>
                <p className="text-sm md:text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
