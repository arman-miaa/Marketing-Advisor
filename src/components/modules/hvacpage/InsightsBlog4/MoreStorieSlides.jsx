import slideImg1 from "../../../../assets/images/hvac/InsightsBlog/HVACSEO.jpg.2507231245121.webp";
import slideImg2 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import slideImg3 from "../../../../assets/images/hvac/InsightsBlog/Rowell-website.jpg.2506091639429.webp";
import slideImg4 from "../../../../assets/images/hvac/InsightsBlog/13WaysHVACBusinessesCanGetMoreLeads1.jpg.2506041256032.webp";
import slideImg5 from "../../../../assets/images/hvac/InsightsBlog/Screenshot-2024-04-25-at-12.25.43-PM.0000000000000.png";
import slideImg6 from "../../../../assets/images/hvac/InsightsBlog/Frame-1171274894.0000000000000.png";
import slideImg7 from "../../../../assets/images/hvac/InsightsBlog/HS_Group-89.jpg.0000000000000.webp";
import slideImg8 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import slideImg9 from "../../../../assets/images/hvac/InsightsBlog/shutterstock_2275711059.2410091324550.jpg";
import slideImg10 from "../../../../assets/images/hvac/InsightsBlog/13WaysHVACBusinessesCanGetMoreLeads1.jpg.2506041256032.webp";
import slideImg11 from "../../../../assets/images/hvac/InsightsBlog/Screenshot-2024-04-25-at-12.25.43-PM.0000000000000.png";
import slideImg12 from "../../../../assets/images/hvac/InsightsBlog/Frame-1171274894.0000000000000.png";
import { useState } from "react";
import slideImg13 from "../../../../assets/images/hvac/InsightsBlog/HS_Group-89.jpg.0000000000000.webp";
import slideImg14 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import slideImg15 from "../../../../assets/images/hvac/InsightsBlog/Rowell-website.jpg.2506091639429.webp";
import slideImg16 from "../../../../assets/images/hvac/InsightsBlog/13WaysHVACBusinessesCanGetMoreLeads1.jpg.2506041256032.webp";
import slideImg17 from "../../../../assets/images/hvac/InsightsBlog/Screenshot-2024-04-25-at-12.25.43-PM.0000000000000.png";
import slideImg18 from "../../../../assets/images/hvac/InsightsBlog/Frame-1171274894.0000000000000.png";
import slideImg19 from "../../../../assets/images/hvac/InsightsBlog/HS_Group-89.jpg.0000000000000.webp";
import slideImg20 from "../../../../assets/images/hvac/InsightsBlog/Homer-Nine-Modern-HVAC-Website.jpg.2506091626299.webp";
import slideImg21 from "../../../../assets/images/hvac/InsightsBlog/Rowell-website.jpg.2506091639429.webp";
import slideImg22 from "../../../../assets/images/hvac/InsightsBlog/13WaysHVACBusinessesCanGetMoreLeads1.jpg.2506041256032.webp";
import slideImg23 from "../../../../assets/images/hvac/InsightsBlog/Screenshot-2024-04-25-at-12.25.43-PM.0000000000000.png";
import slideImg24 from "../../../../assets/images/hvac/InsightsBlog/Frame-1171274894.0000000000000.png";


const clientData = [
  {
    id: 1,
    logo: slideImg1,
    title:
      "How HVAC and Plumbing Businesses Are Winning More Jobs in a Changing Market",
    date: "Jan 20, 2023",
  },
  {
    id: 2,
    logo: slideImg2,
    title: "Your HVAC Website Should Work as Hard as You Do",
    date: "Jun 8, 2023",
  },
  {
    id: 3,
    logo: slideImg3,
    title: "The Ultimate Guide to Growing Your HVAC Business",
    date: "Jun 2, 2023",
  },
  {
    id: 4,
    logo: slideImg4,
    title: "13 Ways HVAC Businesses Can Get More Leads",
    date: "Jun 2, 2023",
  },
  {
    id: 5,
    logo: slideImg5,
    title: "3 Ways to Maximize Your HVAC Advertising Efforts",
    date: "May 11, 2023",
  },
  {
    id: 6,
    logo: slideImg6,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 7,
    logo: slideImg7,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 8,
    logo: slideImg8,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 9,
    logo: slideImg9,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 10,
    logo: slideImg10,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 11,
    logo: slideImg11,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 12,
    logo: slideImg12,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 13,
    logo: slideImg13,
    title:
      "How HVAC and Plumbing Businesses Are Winning More Jobs in a Changing Market",
    date: "Jan 20, 2023",
  },
  {
    id: 14,
    logo: slideImg14,
    title: "Your HVAC Website Should Work as Hard as You Do",
    date: "Jun 8, 2023",
  },
  {
    id: 15,
    logo: slideImg15,
    title: "The Ultimate Guide to Growing Your HVAC Business",
    date: "Jun 2, 2023",
  },
  {
    id: 16,
    logo: slideImg16,
    title: "13 Ways HVAC Businesses Can Get More Leads",
    date: "Jun 2, 2023",
  },
  {
    id: 17,
    logo: slideImg17,
    title: "3 Ways to Maximize Your HVAC Advertising Efforts",
    date: "May 11, 2023",
  },
  {
    id: 18,
    logo: slideImg18,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 19,
    logo: slideImg19,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 20,
    logo: slideImg20,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 21,
    logo: slideImg21,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 22,
    logo: slideImg22,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 23,
    logo: slideImg23,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
  {
    id: 24,
    logo: slideImg24,
    title: "HVAC Email Marketing Tips [Examples & Templates]",
    date: "Apr 6, 2023",
  },
];

export default function MoreStoriesSlides() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const totalPages = Math.ceil(clientData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = clientData.slice(startIndex, startIndex + cardsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="container mx-auto px-4 md:px-0 py-10 md:py-32">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentCards.map((client) => (
          <a
            key={client.id}
            href="#"
            className="group  bg-white rounded-3xl  transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full relative "
          >
            {/* Image */}
            <div className="h-98 w-full relative overflow-hidden">
              <img
                src={client.logo}
                alt="story thumbnail"
                className="w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* HVAC Text on Top */}
              <span className="absolute top-4 left-4 text-white text-xs font-bold z-10 px-2 py-1 rounded">
                HVAC
              </span>

              {/* Overlay Content Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-left p-4 rounded-lg z-10">
                <span className="text-xs font-semibold text-white mb-1 block">
                  {client.date}
                </span>
                <h3 className="text-lg md:text-3xl mt-6 font-bold text-white">
                  {client.title}
                </h3>
              </div>
            </div>

            {/* Read More */}
            <div className="p-6 flex flex-col flex-grow mt-auto">
              <span className="mt-auto font-semibold text-blue-600 group-hover:text-black transition-colors duration-300">
                Read More →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10 text-lg font-semibold">
        <button
          onClick={handlePrev}
          className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
