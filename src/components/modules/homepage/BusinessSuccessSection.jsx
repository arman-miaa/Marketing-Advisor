import { motion } from "framer-motion";
import logo1 from "../../../assets/images/Home Page/big-innovation-2025.png.2503270932005.webp";
import logo2 from "../../../assets/images/Home Page/Leader-winter-2025.png.2503270932004.webp";
import logo3 from "../../../assets/images/Home Page/The-Sammy-2023.png.2503270932003.webp";

export default function BusinessSuccessSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-[#050519] text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-left my-16">
          <p className="text-blue-400 text-sm font-semibold uppercase mb-6 tracking-[0.35em]">
            MAXIMIZE YOUR SUCCESS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Every business we serve exists to help others.
          </h2>
          <p className="text-4xl md:text-6xl font-bold pt-2">
            <span className="bg-white text-black px-4  py- rounded-lg">
              Our job
            </span>{" "}
            is to help them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12   items-center ">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-40 justify-items-center">
            {[
              {
                value: "20k+",
                label: "Businesses ",
                extra: "helped succeed",
              },
              { value: "$100B+", label: "Revenue ", extra: "generated" },
              {
                value: "200M+",
                label: "Leads ",
                extra: "driven for clients",
              },
              {
                value: "Countless",
                label: "Records ",
                extra: "broken",
              },
            ].map((stat, i) => (
              <div key={i} className="text-">
                <h3 className="text-5xl md:text-7xl font-bold mb-2">
                  {stat.value}
                </h3>
                <span className="bg-blue-600  mt-4 text-blue-900 px-3 py-1 rounded-full text-lg  inline-block">
                  {stat.label}{" "}
                  <span className="text-white ml-2">{stat.extra}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="flex flex-col gap-6 mx-12">
            {[
              {
                logo: logo1,
                title: "Transformative Product Winner",
                subtitle: "RevenueMAX",
              },
              {
                logo: logo2,
                title: "Top Choice in Category",
                subtitle: "Digital and Content Marketing",
              },
              {
                logo: logo3,
                title: "Excellence in Sales & Marketing",
                subtitle: "Exceptional Results for SMB Clients",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className={`bg-blue-800 rounded-2xl shadow-lg flex items-center gap-4 md:gap-10 border  p-5 md:p-12 transition-transform duration-300 hover:scale-[1.02] ${
                  i !== 0 ? "-mt-4" : ""
                }`}
              >
                <div className="">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-36 h-50 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg md:text-4xl font-bold leading-snug">
                    {card.title}
                  </h4>
                  <p className=" text-xl mt-1">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
