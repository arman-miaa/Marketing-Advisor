import img1 from "../../../../assets/images/hvac/Partnerships/AngiDark.png.2505221506422.webp";
import img2 from "../../../../assets/images/hvac/Partnerships/Google-PartnerDark.png.2505221506436.webp";
import img3 from "../../../../assets/images/hvac/Partnerships/Meta-Business-PartnerDark.png.2505221506448.webp";
import img4 from "../../../../assets/images/hvac/Partnerships/Microsoft-Advertising-Stacked-Vector-Dark.png.2505281344557.webp";
import img5 from "../../../../assets/images/hvac/Partnerships/ThumbtackDark.png.2505221506470.webp";

export default function TechnologyPartners() {
  const partners = [
    { name: "Angi", logo: img1 },
    { name: "Google Partner", logo: img2 },
    { name: "Meta Business Partner", logo: img3 },
    { name: "Microsoft Advertising", logo: img4 },
    { name: "Thumbtack", logo: img5 },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Small heading */}
        <p className="uppercase tracking-widest text-blue-600 font-semibold mb-4">
          Technology Partners
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-7xl font-bold mb-6">
          Connected with the right providers to <br />
          maximize your revenue
        </h2>

        {/* Description */}
        <p className="text-lg md:text-3xl w- mx-auto text-gray-900  mb-16">
          Scorpion’s technology and advertising partners enable us to provide
          the best advertising strategies and solutions for plumbing businesses.
          As we learn what drives revenue to your business, we train the AI of
          these partners to bring you more of the right customers,
          automatically.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm p-6 w-full h-34 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
