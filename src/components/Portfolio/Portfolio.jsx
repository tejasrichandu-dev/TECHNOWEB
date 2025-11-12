import React, { useState, useEffect, useRef } from 'react';
import Contact from '../../components/aboutUs/contact';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Website');
  const [animatedRows, setAnimatedRows] = useState(new Set());
  const projectsRef = useRef(null);
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

  const filteredProjects = projects;
  const projectsPerRow = 4;
  const totalRows = Math.ceil(filteredProjects.length / projectsPerRow);

  useEffect(() => {
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    let isScrolling = false;

    const handleScroll = () => {
      if (!projectsRef.current || isScrolling) return;

      isScrolling = true;

      const projectsSection = projectsRef.current;
      const sectionTop = projectsSection.offsetTop;
      const sectionHeight = projectsSection.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate current visible row based on scroll position
      const scrollProgress = (scrollY - sectionTop + windowHeight * 0.3) / sectionHeight;
      const currentRow = Math.floor(scrollProgress * totalRows);
      const clampedRow = Math.max(0, Math.min(currentRow, totalRows - 1));

      const isScrollingDown = scrollY > lastScrollY;
      lastScrollY = scrollY;

      setAnimatedRows(prev => {
        const newAnimatedRows = new Set(prev);

        if (isScrollingDown) {
          // Scrolling down - grow in rows from top to bottom
          for (let row = 0; row <= clampedRow; row++) {
            newAnimatedRows.add(row);
          }
          // Remove grow-out classes when scrolling down
          for (let row = clampedRow + 1; row < totalRows; row++) {
            newAnimatedRows.delete(`out-${row}`);
          }
        } else {
          // Scrolling up - grow out rows from bottom to top
          for (let row = totalRows - 1; row > clampedRow; row--) {
            newAnimatedRows.add(`out-${row}`);
            newAnimatedRows.delete(row);
          }
          // Ensure rows above current row have grow-in
          for (let row = 0; row <= clampedRow; row++) {
            newAnimatedRows.add(row);
            newAnimatedRows.delete(`out-${row}`);
          }
        }

        return newAnimatedRows;
      });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 50);
    };

    // Initialize with first row animated
    setAnimatedRows(new Set([0]));

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [filteredProjects.length, totalRows]);

  const getAnimationClass = (projectId) => {
    const projectIndex = filteredProjects.findIndex(p => p.id === projectId);
    const row = Math.floor(projectIndex / projectsPerRow);
    
    if (animatedRows.has(row)) {
      return 'grow-in';
    } else if (animatedRows.has(`out-${row}`)) {
      return 'grow-out';
    }
    return '';
  };

  const isRowVisible = (projectId) => {
    const projectIndex = filteredProjects.findIndex(p => p.id === projectId);
    const row = Math.floor(projectIndex / projectsPerRow);
    
    // Always show all cards, but control visibility through opacity
    return true;
  };

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
        
        .grow-in {
          animation: growIn 0.6s ease-out forwards;
          transform-origin: center;
        }
        
        .grow-out {
          animation: growOut 0.6s ease-in forwards;
          transform-origin: center;
        }
        
        @keyframes growIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes growOut {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
          }
        }
        
        .project-item {
          transition: all 0.6s ease;
        }

        /* Ensure all cards are always in layout but animated ones are visible */
        .project-item:not(.grow-in):not(.grow-out) {
          opacity: 0;
          transform: scale(0.8);
        }
      `}</style>
      
      {/* Main Content */}
      <main ref={projectsRef} className="max-w-7xl mx-auto px-4 py-24">
        {/* Title Section - Split Layout */}
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
        
        {/* Filter Buttons */}
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-item project-card group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ${getAnimationClass(project.id)}`}
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
     
      {/* Contact Section */}
      <Contact />
    </div>
  );
}
