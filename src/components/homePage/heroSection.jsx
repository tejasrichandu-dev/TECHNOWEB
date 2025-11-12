import React, { useState, useEffect, useRef } from "react";

function HeroSection() {
  const [headingText, setHeadingText] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const fullHeading =
    "We Create Websites, Apps & Software to Power Your Business Forward";
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Optimized typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullHeading.length) {
        setHeadingText(fullHeading.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullHeading]);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollThreshold = 100;
          setIsTransitioning(window.scrollY > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const toggleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isVideoPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsVideoPaused(!isVideoPaused);
    }
  };

  return (
    <>
      {/* Fixed Hero Section with overflow prevention */}
      <div
        ref={heroRef}
        className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-1100 ease-in-out overflow-hidden ${
          isTransitioning ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <section
          id="home"
          className="relative h-full flex flex-col justify-center items-start bg-transparent"
        >
          {/* Video Background */}
          <div
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={toggleVideoPlayPause}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoad}
              className="w-full h-full object-cover"
            >
              <source src="/Landing Video Technoweb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
            )}

            {/* Play/Pause Icon - CENTERED (as requested) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isVideoPaused ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-black/60 rounded-full p-3 sm:p-4 backdrop-blur-sm transform hover:scale-105 transition-transform duration-200">
                {isVideoPaused ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                )}
              </div>
            </div>

            {/* Navigation Bar Icon - MOVED RIGHT */}
            <div className="absolute top-6 right-6 z-30">
              <div className="bg-black/60 rounded-full p-2 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <rect x="3" y="6" width="18" height="2" rx="1"></rect>
                  <rect x="3" y="11" width="18" height="2" rx="1"></rect>
                  <rect x="3" y="16" width="18" height="2" rx="1"></rect>
                </svg>
              </div>
            </div>

            {/* Light overlays for readability */}
            <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 pointer-events-none"></div>
          </div>

          {/* Main Content - Optimized spacing */}
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 md:px-10 mt-16 sm:mt-20 md:mt-24 lg:mt-0">
            <span className="inline-block px-3 py-1.5 mb-3 sm:mb-4 text-blue-600 border border-blue-600 rounded-full text-xs sm:text-sm bg-white/80 backdrop-blur-sm">
              Innovate. Build. Excel.
            </span>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-3 sm:mb-4 font-sans font-normal text-gray-900">
              {headingText.split(" ").map((word, index) => {
                const isBlueWord = ["Websites,", "Apps", "&", "Software"].includes(word);
                const isBoldWord = ["Software", "Business", "Forward"].includes(word);
                return (
                  <span key={index}>
                    <span
                      className={`${isBlueWord ? "text-blue-600 font-semibold" : ""} ${
                        isBoldWord && !isBlueWord ? "font-semibold text-gray-900" : ""
                      }`}
                    >
                      {word}
                    </span>{" "}
                  </span>
                );
              })}
              {headingText.length < fullHeading.length && (
                <span className="animate-pulse text-gray-600">|</span>
              )}
            </h1>
            
            <p className="text-sm sm:text-base text-gray-800 max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed">
              At Technoweb, we transform your ideas into powerful digital solutions. From websites and apps to custom software and automation tools, we help businesses grow smarter and faster.
            </p>
          </div>

          {/* Scroll Down Button */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleScrollDown}
              className="flex items-center justify-center group cursor-pointer"
              aria-label="Scroll down"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-800 uppercase mr-2">
                SCROLL DOWN
              </span>
              <div className="animate-bounce-slow">
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-blue-600 group-hover:border-t-blue-700 transition-colors duration-300"></div>
              </div>
            </button>
          </div>
        </section>
      </div>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default HeroSection;
