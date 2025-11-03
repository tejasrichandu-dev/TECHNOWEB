import React from 'react';

const FeaturedWorks = () => {
  const projects = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', title: 'Project 1' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', title: 'Project 2' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop', title: 'Project 3' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop', title: 'Project 4' },
    { id: 5, imageUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop', title: 'Project 5' },
    { id: 6, imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', title: 'Project 6' },
    { id: 7, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', title: 'Project 7' },
    { id: 8, imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop', title: 'Project 8' },
    { id: 9, imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop', title: 'Project 9' },
  ];

  return (
    <div className="min-h-screen bg-[#323235] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
            Our <span className="text-blue-400">Featured</span> Works
          </h1>
        </div>

        {/* Grid Container */}
        <div className="relative">
          {/* First Row - 5 images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            {projects.slice(0, 5).map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-lg"
              >
                <div className="bg-white overflow-hidden shadow-lg h-64 relative">
                  <div className="image-container">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover min-h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 images + All Works button */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {projects.slice(5, 8).map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden rounded-lg"
              >
                <div className="bg-white overflow-hidden shadow-lg h-64 relative">
                  <div className="image-container">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover min-h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* All Works Button in place of last image */}
            <div className="flex items-center justify-center bg-transparent rounded-lg h-64">
              <button className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 group">
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

      {/* Keyframes for smooth looping scroll */}
      <style jsx>{`
        .image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .image-container img {
          transition: transform 0.3s ease;
        }

        .group:hover .image-container img {
          animation: none;
          transform: translateY(calc(-100% + 16rem));
          transition: transform 3s ease-in-out;
        }

        .group .image-container img {
          transform: translateY(0);
          transition: transform 3s ease-in-out;
        }

        @media (max-width: 640px) {
          .grid.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-5 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .grid.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .grid.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-5 {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .grid.grid-cols-2.sm\\:grid-cols-3.lg\\:grid-cols-4 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedWorks;
