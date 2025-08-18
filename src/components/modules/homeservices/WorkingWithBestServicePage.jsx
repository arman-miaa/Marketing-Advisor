import SectionWithTitleImage from "../../../shared/SectionWithTitleImage";
import sampleImage from "../../../assets/images/home-services/HS-Logos-2X.png.webp";
import { div } from "framer-motion/client";


export default function WorkingWithBestServicePage() {
  return (
    <div className="py-12 md:py-0">
      <SectionWithTitleImage
        title="Working with the Best"
        subtitle="Connected with the right providers home service pros count on"
        imageSrc={sampleImage}
        imageAlt="Working with the best providers"
      />
    </div>
  );
}
