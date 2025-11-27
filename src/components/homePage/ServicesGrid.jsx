import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Development",
    tags: ["Static Website", "Dynamic Website", "CMS Based Website", "Ecommerce"],
    icon: "./75.png",
  },
  {
    title: "Mobile Application Development",
    tags: ["Android Application", "iOS Application", "Native App", "Cross Platform App", "Enterprise Mobile App", "Progressive Web App"],
    icon: "./76.png",
  },
  {
    title: "Software Development",
    tags: ["Custom Software Development", "Enterprise Software", "Desktop Application Development"],
    icon: "./77.png",
  },
  {
    title: "UI & UX Design",
    tags: ["User Research and Analysis", "Wireframing and Prototyping", "User Interface (UI) Design", "User Experience (UX) Design"],
    icon: "./78.png",
  },
  {
    title: "Artificial Intelligence Development",
    tags: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation", "Custom AI Solutions"],
    icon: "./79.png",
  },
  {
    title: "ERP Development",
    tags: ["Business Process Analysis", "User Training and Support", "Custom ERP Development"],
    icon: "./80.png",
  },
  {
    title: "Digital Marketing",
    tags: ["SEO (Search Engine Optimization)", "Social Media Marketing", "Events & Graphic Design", "Content Strategy", "Analytics & Reporting"],
    icon: "./81.png",
  },
  {
    title: "IT Consulting Services",
    tags: ["IT Strategy and Planning", "System Integration", "Digital Transformation", "Cloud Services", "IT Project Management"],
    icon: "./82.png",
  },
];

const ServicesGrid = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = services.map((_, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.add(idx);
              return newSet;
            });
          }
        },
        { 
          threshold: 0.1,
          rootMargin: "0px 0px -5% 0px"
        }
      );

      if (cardRefs.current[idx]) {
        observer.observe(cardRefs.current[idx]);
      }
      
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="bg-[#232325] min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => {
          const isVisible = visibleCards.has(idx);
          return (
            <ServiceCard
              key={idx}
              service={service}
              index={idx}
              isVisible={isVisible}
              ref={(el) => (cardRefs.current[idx] = el)}
            />
          );
        })}
      </div>
    </div>
  );
};

const ServiceCard = React.forwardRef(({ service, index, isVisible }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon-wrapper">
        <img
          src={service.icon}
          alt={service.title}
          className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>
      <h2 className="text-base sm:text-lg font-bold mb-3 text-white text-center px-2">
        {service.title}
      </h2>
      <div className="flex flex-wrap gap-2 mb-4 items-center justify-center px-2">
        {service.tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <button className="know-more-btn group">
        <span className="flex items-center text-sm">
          Know More
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
        </span>
      </button>

      <style jsx>{`
        .service-card {
          background: linear-gradient(135deg, #2d2d30 0%, #232325 100%);
          padding: 1.5rem 1rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          will-change: transform, opacity;
          transform: translateY(30px) scale(0.95);
          opacity: 0;
          min-height: 320px;
        }

        .service-card.visible {
          transform: translateY(0) scale(1);
          opacity: 1;
          transition-delay: ${index * 0.1}s;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.02), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .icon-wrapper {
          text-align: center;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: #1a1a1c;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card:hover .icon-wrapper {
          background: #2a2a2c;
          border-color: rgba(255, 255, 255, 0.15);
          transform: scale(1.08);
        }

        .tag {
          background: rgba(255, 255, 255, 0.05);
          color: #d0d0d0;
          font-size: 0.75rem;
          padding: 0.4rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          white-space: nowrap;
        }

        .service-card:hover .tag {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .know-more-btn {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #0d84fb;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin-top: auto;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .know-more-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(13, 132, 251, 0.15), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .know-more-btn:hover::before {
          left: 100%;
        }

        .know-more-btn:hover {
          color: #5a9df7;
          background: rgba(13, 132, 251, 0.08);
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .service-card {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .service-card {
            padding: 1.25rem 0.75rem;
            margin: 0.25rem;
            min-height: 280px;
          }

          .icon-wrapper {
            width: 50px;
            height: 50px;
            margin-bottom: 0.75rem;
          }

          .tag {
            font-size: 0.7rem;
            padding: 0.35rem 0.65rem;
          }
        }

        @media (max-width: 480px) {
          .service-card {
            padding: 1rem 0.5rem;
          }

          .tag {
            font-size: 0.65rem;
            padding: 0.3rem 0.55rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .icon-wrapper,
          .know-more-btn,
          .tag {
            transition: none;
            animation: none;
          }

          .service-card::before,
          .know-more-btn::before {
            display: none;
          }

          .service-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServicesGrid;
