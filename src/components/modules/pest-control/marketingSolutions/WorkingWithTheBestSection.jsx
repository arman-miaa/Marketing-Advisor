import sampleImage from "../../../../assets/images/hvac/HVAC-Logos.png.webp";
import SectionWithTitleImage from "../../../../shared/SectionWithTitleImage";

export default function WorkingWithTheBestSection() {
  return (
    <section className=" ">
      <SectionWithTitleImage
        title="Working with the Best"
        subtitle="Connected with the providers that matter to maximize your revenue"
        imageSrc={sampleImage}
        imageAlt="Working with the best providers"
      />
    </section>
  );
}
