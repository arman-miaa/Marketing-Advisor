import { useParams, useNavigate } from "react-router";
import leaderShipData from "../../../../assets/data/leadership.json";
import LeadershipTeam from "./LeadershipTeam";
import { section } from "framer-motion/client";

// Import all images dynamically
const images = import.meta.glob(
  "../../../../assets/images/footer/about/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

export default function LeadershipDetail() {
  const { id } = useParams();

  // Find the leader by id
  const leader = leaderShipData.find((l) => l.id === Number(id));

  if (!leader) {
    return <p>Leader not found</p>;
  }

  // Get image URL from imported images
  const imageUrl =
    images[`../../../../assets/images/footer/about/${leader.image}`];

  return (
    <section className="bg-blue-0">
      <div className="container mx-auto py-10 md:py-20 mt-24 ">
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <img
            src={imageUrl}
            alt={leader.name}
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />

          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-7xl text-blue-600 font-bold mb-2">
              {leader.name}
            </h1>
            <h2 className="text-xl md:text-2xl mt-4 font-semibold text-gray-900 mb-4">
              {leader.subtitle}
            </h2>

            <div className="text-base md:text-lg leading-relaxed">
              {leader.description.split("\n\n").map((para, index) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
        <LeadershipTeam />
      </div>
    </section>
  );
}
