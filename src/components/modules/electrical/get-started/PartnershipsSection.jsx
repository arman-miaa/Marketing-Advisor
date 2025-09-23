import img1 from "../../../../assets/images/electrical/get-started/Google-PartnerDark.png.2505221506436.webp";
import img2 from "../../../../assets/images/electrical/get-started/Microsoft-Advertising-Stacked-Vector-Dark.png.2505281344557.webp";
import img3 from "../../../../assets/images/electrical/get-started/ThumbtackDark.png.2505221506470.webp";
import img4 from "../../../../assets/images/electrical/get-started/Meta-Business-PartnerDark.png.2505221506448.webp";
import img5 from "../../../../assets/images/electrical/get-started/AngiDark.png.2505221506422.webp";
import img6 from "../../../../assets/images/electrical/get-started/Service-TitanDark.png.2505221506465.webp";
import Button from "../../../ui/Button";

export default function PartnershipsSection() {
  return (
    <section className="py-16 md:py-32 px-6 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-bold mb-10">
          Trust Backed by Credibility
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap md:py-20 justify-center items-center gap-8 md:gap-16 mb-10">
          {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Partner ${idx + 1}`}
              className="h-10 md:h-14 object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button text={`View Our Partnerships`} to="/electrical/get-started" />
        </div>
      </div>
    </section>
  );
}
