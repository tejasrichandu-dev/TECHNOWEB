import React from 'react';

const FeaturedWorks = () => {
  const projects = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
      title: 'Project 1'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
      title: 'Project 2'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop',
      title: 'Project 3'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop',
      title: 'Project 4'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop',
      title: 'Project 5'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
      title: 'Project 6'
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
      title: 'Project 7'
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop',
      title: 'Project 8'
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop',
      title: 'Project 9'
    }
  ];

  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 9);

  return (
    <div className="min-h-screen bg-[#323235] py-16 px-4">
      <style>{`
        @keyframes scrollImage {
          0%, 100% {
            object-position: center top;
          }
          50% {
            object-position: center bottom;
          }
        }
        
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }
        
        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(20%);
          }
        }
        
        .animate-scroll-image {
          animation: scrollImage 3s ease-in-out infinite;
        }
        
        .row-slide-left {
          animation: slideLeft 20s linear infinite;
        }
        
        .row-slide-right {
          animation: slideRight 20s linear infinite;
        }
        
        .project-card {
          width: 280px;
          height: 220px;
          flex-shrink: 0;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
            Our <span className="text-blue-400">Featured</span> Works
          </h1>
        </div>

        {/* Grid Container */}
        <div className="relative overflow-hidden">
          {/* First Row - Slides Left to Right */}
          <div className="flex gap-4 mb-4 row-slide-left">
            {[...firstRow, ...firstRow].map((project, idx) => (
              <div
                key={`row1-${idx}`}
                className="group cursor-pointer project-card"
              >
                <div className="bg-white overflow-hidden shadow-lg w-full h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:animate-scroll-image transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Slides Right to Left */}
          <div className="flex gap-4 mb-8 row-slide-right">
            {[...secondRow, ...secondRow].map((project, idx) => (
              <div
                key={`row2-${idx}`}
                className="group cursor-pointer project-card"
              >
                <div className="bg-white overflow-hidden shadow-lg w-full h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:animate-scroll-image transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* All Works Button */}
          <div className="flex justify-end">
            <button className="bg-transparent border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 group">
              All Works
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
