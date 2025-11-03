import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [buttonHovered, setButtonHovered] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);

  const filters = ['All', 'Website', 'Mobile Application', 'AI'];

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

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const paragraphText =
    "We're a team of passionate designers and thinkers who love transforming bold ideas into powerful digital experiences...";

  useEffect(() => {
    const timer = setTimeout(() => setLineVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

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

        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-line {
          animation: slideIn 1.5s ease-in-out forwards;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-text {
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-24">
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
              We are positioned to create deeply connected brands, services, and campaigns to 
              create scale and enduring relationships between businesses and customers.
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
              className="project-card group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
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
      <div className="bg-gray-50 py-12">
        <div className="bg-[#232325] rounded-3xl mx-6 mb-8">
          <div className="max-w-6xl mx-auto px-8 py-12">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
              {/* Left Content */}
              <div className="lg:flex-1">
                <div className="text-white text-sm font-medium tracking-wider uppercase mb-2">
                  <span className="animate-pulse-text">
                    LET'S TALK
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#3B82F6]">
                  <Typewriter text="Got a project?" speed={50} />
                </h2>
              </div>

              {/* Right CTA Button */}
              <div className="lg:flex lg:items-center lg:ml-auto w-full lg:w-auto">
                <div className="flex items-center w-full lg:w-auto">
                  <button
                    className="animate-float group bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:scale-105 transition-transform"
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                  >
                    Contact Us
                    <span
                      className="transition-transform duration-300"
                      style={{ transform: buttonHovered ? 'translateX(5px)' : 'translateX(0)' }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Line - Animated */}
            <div
              className={`h-px bg-gray-600 mb-6 ${lineVisible ? 'animate-line' : ''}`}
              style={{ width: lineVisible ? '100%' : '0%' }}
            />

            {/* Paragraph Section - Typewriter Animation */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                <Typewriter text={paragraphText} speed={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
