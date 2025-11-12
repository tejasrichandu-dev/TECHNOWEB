import React, { useState, useEffect, useRef } from 'react';
import Contact from '../../components/aboutUs/contact';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Website');
  const [animatedProjects, setAnimatedProjects] = useState([]);
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

  // Always show all projects, regardless of filter
  const filteredProjects = projects;

  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;

      const projectsSection = projectsRef.current;
      const sectionTop = projectsSection.offsetTop;
      const sectionHeight = projectsSection.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled into the projects section
      const scrollProgress = (scrollY - sectionTop + windowHeight * 0.3) / (sectionHeight * 0.7);
      
      // Determine if we're scrolling up or down
      const isScrollingDown = scrollY > (window.lastScrollY || 0);
      window.lastScrollY = scrollY;

      // Calculate which projects should have animation based on scroll position
      const totalProjects = filteredProjects.length;
      const projectsPerRow = 4;
      const totalRows = Math.ceil(totalProjects / projectsPerRow);
      
      const visibleRow = Math.min(Math.floor(scrollProgress * totalRows), totalRows - 1);
      
      const newAnimatedProjects = [];
      
      filteredProjects.forEach((project, index) => {
        const row = Math.floor(index / projectsPerRow);
        
        if (isScrollingDown) {
          // Grow in animation when scrolling down - animate rows that come into view
          if (row <= visibleRow) {
            newAnimatedProjects.push({
              id: project.id,
              animation: 'grow-in'
            });
          } else {
            newAnimatedProjects.push({
              id: project.id,
              animation: ''
            });
          }
        } else {
          // Grow out animation when scrolling up - animate rows that go out of view
          if (row >= visibleRow) {
            newAnimatedProjects.push({
              id: project.id,
              animation: 'grow-out'
            });
          } else {
            newAnimatedProjects.push({
              id: project.id,
              animation: 'grow-in'
            });
          }
        }
      });

      setAnimatedProjects(newAnimatedProjects);
    };

    // Initialize with all cards visible but no animation
    const initialAnimation = filteredProjects.map(project => ({
      id: project.id,
      animation: ''
    }));
    setAnimatedProjects(initialAnimation);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects]);

  const getAnimationClass = (projectId) => {
    const project = animatedProjects.find(p => p.id === projectId);
    return project ? project.animation : '';
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
          animation: growIn 0.8s ease-out forwards;
          transform-origin: center;
        }
        
        .grow-out {
          animation: growOut 0.8s ease-in forwards;
          transform-origin: center;
        }
        
        @keyframes growIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          70% {
            opacity: 0.7;
            transform: scale(1.02) translateY(5px);
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
          30% {
            opacity: 0.7;
            transform: scale(1.02) translateY(5px);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateY(-30px);
          }
        }
        
        .project-item {
          transition: all 0.8s ease;
          opacity: 1;
          transform: scale(1);
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
        
        {/* Projects Grid - All cards always visible */}
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
