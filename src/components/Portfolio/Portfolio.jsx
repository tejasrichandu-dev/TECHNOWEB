import React, { useState, useEffect, useRef } from 'react';

const Contact = () => (
  <div className="bg-gray-50 py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-8">Let's discuss your next project</p>
      <button className="bg-[#006FFD] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Contact Us
      </button>
    </div>
  </div>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Website');
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);
  
  const filters = ['Website']; 
  const projects = [
    { id: 1, image: 'https://picsum.photos/400/800?random=1', category: 'Website' },
    { id: 2, image: 'https://picsum.photos/400/800?random=2', category: 'Website' },
    { id: 3, image: 'https://picsum.photos/400/800?random=3', category: 'Mobile Application' },
    { id: 4, image: 'https://picsum.photos/400/800?random=4', category: 'Website' },
    { id: 5, image: 'https://picsum.photos/400/800?random=5', category: 'AI' },
    { id: 6, image: 'https://picsum.photos/400/800?random=6', category: 'Website' },
    { id: 7, image: 'https://picsum.photos/400/800?random=7', category: 'Mobile Application' },
    { id: 8, image: 'https://picsum.photos/400/800?random=8', category: 'Website' },
    { id: 9, image: 'https://picsum.photos/400/800?random=9', category: 'AI' },
    { id: 10, image: 'https://picsum.photos/400/800?random=10', category: 'Website' },
    { id: 11, image: 'https://picsum.photos/400/800?random=11', category: 'Mobile Application' },
    { id: 12, image: 'https://picsum.photos/400/800?random=12', category: 'Website' },
    { id: 13, image: 'https://picsum.photos/400/800?random=13', category: 'AI' },
    { id: 14, image: 'https://picsum.photos/400/800?random=14', category: 'Website' },
    { id: 15, image: 'https://picsum.photos/400/800?random=15', category: 'Mobile Application' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = projects;

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .scroll-image {
          transition: transform 3s ease-in-out;
          transform: translateY(0);
        }
        .project-card:hover .scroll-image {
          transform: translateY(calc(-100% + 320px));
        }
        
        .grow-card {
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
          transform-origin: top center;
        }
        
        .grow-card.scroll-down {
          animation: growDown 0.6s ease-out forwards;
        }
        
        .grow-card.scroll-up {
          animation: growUp 0.6s ease-out forwards;
        }
        
        @keyframes growDown {
          from {
            transform: scaleY(0.8) translateY(-20px);
            opacity: 0.5;
          }
          to {
            transform: scaleY(1) translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes growUp {
          from {
            transform: scaleY(0.8) translateY(20px);
            opacity: 0.5;
          }
          to {
            transform: scaleY(1) translateY(0);
            opacity: 1;
          }
        }
        
        .project-card {
          will-change: transform;
        }
      `}</style>
      
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/3 md:pl-8">
            <h1 className="text-4xl mb-4 md:mb-0">
              <span className="text-[#006FFD]">Projects</span>
              <br />
              <span className="text-gray-900">Delivered</span>
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600">
              We are positioned to create deeply connected brands, services, and
              campaigns to create scale and enduring relationships between
              businesses and customers.
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#006FFD] text-white'
                  : 'bg-white text-[#006FFD] border border-[#006FFD]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card grow-card scroll-${scrollDirection} group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative overflow-hidden bg-gray-100 h-80">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="scroll-image w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Contact />
    </div>
  );
}
