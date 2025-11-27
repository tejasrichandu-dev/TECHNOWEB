import React from "react";

const Partners = () => {
  const partners = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
    "Partner 6",
    "Partner 7",
    "Partner 8",
    "Partner 9",
    "Partner 10",
  ];

  return (
    <div className="bg-gray-100 py-20 overflow-hidden">
      {/* Background Section */}
      <div className="relative bg-[#EBEBEB] py-16">
        {/* Smooth infinite scroll container */}
        <div className="flex w-max animate-scroll-seamless">
          {/* Single large track of partners repeated twice for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center mx-10 whitespace-nowrap"
            >
              {/* Replace below with any Lucide icon later */}
              <div className="w-4 h-4 border-2 border-gray-800 mr-4 flex-shrink-0 rounded"></div>
              <span className="text-gray-800 text-lg font-medium">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-seamless {
          display: flex;
          animation: scroll-seamless 40s linear infinite;
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;
