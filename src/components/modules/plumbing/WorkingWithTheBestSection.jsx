import sampleImage from "../../../assets/images/hvac/HVAC-Logos.png.webp";
import SectionWithTitleImage from "../../../shared/SectionWithTitleImage";

export default function WorkingWithTheBestSection() {
  return (
    <section className=" ">
      <SectionWithTitleImage
        title="Working with the Best"
        subtitle="Connected with the right providers home service pros count on"
        imageSrc={sampleImage}
        imageAlt="Working with the best providers"
      />
    </section>
  );
}
