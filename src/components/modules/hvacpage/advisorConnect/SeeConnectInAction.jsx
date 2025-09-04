
import demoImg from "../../../../assets/images/hvac/advisorConnect/scorpion-connect-HVAC.png.2506031322113.webp"; 
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import Button from "../../../ui/Button";

export default function SeeConnectInAction() {
  return (
    <div className="bg-gray-900 px-4 md:px-0">
      <div className="md:pl-60 ml-auto  py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full pr-8 text-white">
            <SharedTitleSection
              category=""
              title="See Connect in action"
              highlightText="action"
              description="Take Scorpion Connect for a spin—chat with your AI assistant and see how it works like a seasoned employee who knows your business inside and out."
              descriptionSize="text-base md:text-xl mt-8 "
              theme="dark"
            />
            <Button text="Learn More" to="/hvac/get-started" />
          </div>

          {/* Right Image */}
          <div className="w-full h-ful hidden md:flex ">
            <img
              src={demoImg}
              alt="Scorpion Connect Demo"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
