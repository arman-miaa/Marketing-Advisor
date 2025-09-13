import leaderShipData from "../../../../assets/data/leadership.json";
import SharedTitleSection from "../../../../shared/SharedTitleSection";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router";

// Import all images dynamically
const importAll = (r) => {
  let images = {};
  for (const path in r) {
    const fileName = path.split("/").pop(); // filename extract
    images[fileName] = r[path]; // r[path] is the URL
  }
  return images;
};

// glob with eager:true gives direct URLs
const images = importAll(
  import.meta.glob(
    "../../../../assets/images/footer/about/*.{jpg,jpeg,png,webp}",
    { eager: true, as: "url" }
  )
);

export default function LeadershipTeam() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10 md:py-32">
      <header>
        <SharedTitleSection
          category="Leadership"
          title="Meet the team leading the way"
          highlightText="leading"
          description="Experienced leadership focused on real progress."
          descriptionSize="text-base md:text-2xl"
        />
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaderShipData.map((leader) => (
          <div
            key={leader.id}
            className="relative cursor-pointer group"
            onClick={() => navigate(`/about-us/${leader.id}`)}
          >
            <img
              src={images[leader.image]}
              alt={leader.name}
              className="w-full h-80 object-cover rounded-xl transition-transform duration-300 "
            />

            <div className="absolute bottom-0 left-0 w-full bg-blue-600/40 bg-opacity-70 backdrop-blur-md text-white p-4 rounded-b-xl flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {leader.name}
                </h3>
                <p className="text-sm md:text-lg">{leader.subtitle}</p>
              </div>
              <span className="bg-blue-700 p-2 rounded-xl">
                <FiArrowRight className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
