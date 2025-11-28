import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

const Card = ({ title, content, children, className = "" }) => {
  return (
    <div className={`bg-[#000000] p-8 rounded-xl shadow-lg h-full ${className}`}>
      <h2 className="text-3xl font-semibold mb-4 text-[#0D84FB] font-poppins">{title}</h2>
      <p className="text-[#FFFFFF] font-regular font-poppins mb-6">{content}</p>
      {children}
    </div>
  );
};

// Popup Icon component for stacks
const PopupIcon = ({ stack, delay, size = "w-12 h-12" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={iconRef}
      className={size}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <img
        src={stack.url}
        alt={stack.name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// Animated Card wrapper for mobile
const AnimatedCard = ({ children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset when card leaves viewport so animation plays again
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      return direction === "left" ? "opacity-0 -translate-x-[100px]" : "opacity-0 translate-x-[100px]";
    }
    return direction === "left" ? "animate-slide-in-left" : "animate-slide-in-right";
  };

  return (
    <div ref={cardRef} className={`transition-none ${getAnimationClass()}`}>
      {children}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const Details = () => {
  const stacks = [
    { name: "Android", url: "/.net.png" },
    { name: "PostgreSQL", url: "/Group 168.png" },
    { name: "Firebase", url: "/Android.png" },
    { name: "AWS", url: "/AWS.png" },
    { name: "React", url: "/Group 169.png" },
    { name: "jQuery", url: "/devicon_firebase-wordmark.png" },
    { name: "VS Code", url: "/VS Studio.png" },
    { name: "Adobe XD", url: "vscode-icons_file-type-sql.png" },
    { name: "PHP", url: "/Group 170.png" },
    { name: "Figma", url: "/Group 182.png" },
    { name: "Jira", url: "/Group 186.png" },
    { name: "GitHub", url: "/React.png" },
    { name: "Python", url: "/XD.png" },
    { name: "Node.js", url: "Tensor flow.png" },
    { name: "npm", url: "/Vector.png" },
    { name: "npm", url: "/vscode-icons_file-type-pgsql.png" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#323235] text-white p-6 md:p-12 font-sans pt-10 md:pt-100 lg:pt-50"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Global Reach and Project Success - Slide from Left */}
        <div className="md:contents">
          <AnimatedCard direction="left">
            <Card
              title="Global Reach and Project Success"
              content="Discover our success: numerous projects in multiple countries, serving a diverse and growing clientele."
            >
              <div className="grid grid-cols-3 gap-4 text-center mt-8">
                <div>
                  <p className="text-[#0D84FB] text-4xl font-bold"><CountUp end={100} suffix="+" /></p>
                  <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
                </div>
                <div>
                  <p className="text-[#0D84FB] text-4xl font-bold"><CountUp end={4} suffix="+" /></p>
                  <p className="text-gray-400 text-sm mt-2">Years Of Experience</p>
                </div>
                <div>
                  <p className="text-[#0D84FB] text-4xl font-bold"><CountUp end={5} suffix="+" /></p>
                  <p className="text-gray-400 text-sm mt-2">Countries Served</p>
                </div>
              </div>
            </Card>
          </AnimatedCard>
        </div>

        {/* Methodologies We Use - Slide from Right */}
        <div className="md:contents">
          <AnimatedCard direction="right">
            <Card
              title="Methodologies We Use"
              content="We employ industry-leading methodologies to ensure optimal results."
            >
              <div className="flex justify-center items-center space-x-12 mt-8">
                <div className="flex items-center space-x-3">
                  <img 
                    src="./Design Thinking.png"
                    alt="Design Thinking"
                    className="w-40 h-40 object-contain"
                  />
                  <p className="text-gray-400 text-sm">Design Thinking</p>
                </div>

                <div className="flex items-center space-x-3">
                  <img 
                    src="https://i.postimg.cc/DJ6PSxwH/Group-178.png"
                    alt="Scrum"
                    className="w-20 h-20 object-contain"
                  />
                  <p className="text-gray-400 text-sm">Scrum</p>
                </div>
              </div>
            </Card>
          </AnimatedCard>
        </div>

        {/* Stacks We Use - Slide from Left */}
        <div className="md:col-span-2 relative overflow-hidden">
          <AnimatedCard direction="left">
            <Card
              title="Stacks We Use"
              content="We leverage a comprehensive and modern technology stack, utilizing cutting-edge tools and platforms to deliver high performance, scalability, and reliability in all our projects."
            >
            {/* Mobile: Pyramid Style Layout with Popup Animation */}
            <div className="md:hidden mt-8 flex flex-col items-center gap-4">
              {/* Row 1 - 1 icon */}
              <div className="flex justify-center gap-6">
                {stacks.slice(0, 1).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={index * 100} />
                ))}
              </div>
              {/* Row 2 - 2 icons */}
              <div className="flex justify-center gap-6">
                {stacks.slice(1, 3).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={(1 + index) * 100} />
                ))}
              </div>
              {/* Row 3 - 3 icons */}
              <div className="flex justify-center gap-6">
                {stacks.slice(3, 6).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={(3 + index) * 100} />
                ))}
              </div>
              {/* Row 4 - 4 icons */}
              <div className="flex justify-center gap-5">
                {stacks.slice(6, 10).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={(6 + index) * 100} size="w-11 h-11" />
                ))}
              </div>
              {/* Row 5 - 5 icons */}
              <div className="flex justify-center gap-4">
                {stacks.slice(10, 15).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={(10 + index) * 100} size="w-10 h-10" />
                ))}
              </div>
              {/* Row 6 - 1 icon */}
              <div className="flex justify-center gap-6">
                {stacks.slice(15, 16).map((stack, index) => (
                  <PopupIcon key={index} stack={stack} delay={(15 + index) * 100} size="w-10 h-10" />
                ))}
              </div>
            </div>

            {/* Desktop: Smooth infinite scroll */}
            <div className="hidden md:block stacks-wrapper mt-8">
              <div className="stacks-track">
                {[...stacks, ...stacks].map((stack, index) => (
                  <div key={index} className="stack-item">
                    <img
                      src={stack.url}
                      alt={stack.name}
                      className="w-14 h-14 object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Card>
          </AnimatedCard>

          {/* Inline CSS */}
          <style>{`
            .stacks-wrapper {
              overflow: hidden;
              position: relative;
              width: 100%;
              white-space: nowrap;
            }

            .stacks-track {
              display: flex;
              align-items: center;
              width: max-content;
              animation: scrollStacks 60s linear infinite;
            }

            .stack-item {
              flex: 0 0 auto;
              margin-right: 2.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            @keyframes scrollStacks {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;

