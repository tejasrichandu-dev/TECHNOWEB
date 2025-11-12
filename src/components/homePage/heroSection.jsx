import React, { useState, useEffect, useRef } from "react";

function HeroSection() {
  const [headingText, setHeadingText] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fullHeading =
    "We Create Websites, Apps & Software to Power Your Business Forward";
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Typewriter effect - faster on mobile
  useEffect(() => {
    let index = 0;
    const typingSpeed = isMobile ? 30 : 50;
    
    const timer = setInterval(() => {
      if (index < fullHeading.length) {
        setHeadingText(fullHeading.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);
    
    return () => clearInterval(timer);
  }, [isMobile]);

  // Scroll handling - disable transition on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      const scrollThreshold = 100;
      setIsTransitioning(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

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
      {/* Hero Section - Fixed layout with overflow hidden */}
      <div
        ref={heroRef}
        className={`${
          isMobile ? "relative" : "fixed top-0 left-0"
        } w-full h-screen z-40 overflow-x-hidden ${
          !isMobile && "transition-transform duration-1100 ease-in-out"
        } ${
          !isMobile && (isTransitioning ? "-translate-y-full" : "translate-y-0")
        }`}
      >
        <section
          id="home"
          className="relative h-full flex flex-col justify-center items-start overflow-hidden bg-transparent"
        >
          {/* Video Background - Full width with no overflow */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden cursor-pointer"
            onClick={toggleVideoPlayPause}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={handleVideoLoad}
              className="w-full h-full object-cover min-w-full min-h-full"
              poster="/video-poster.jpg"
            >
              <source src="/Landing Video Technoweb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!videoLoaded && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}

            {/* Play/Pause Icon - Moved to left side */}
            <div
              className={`absolute top-6 left-6 flex items-center justify-center transition-opacity duration-200 z-30 ${
                isVideoPaused ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`bg-black/60 rounded-full backdrop-blur-sm ${
                isMobile ? "p-1.5" : "p-2 sm:p-2.5 md:p-3"
              }`}>
                {isVideoPaused ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? "20" : "24"}
                    height={isMobile ? "20" : "24"}
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile ? "20" : "24"}
                    height={isMobile ? "20" : "24"}
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                )}
              </div>
            </div>

            {/* Enhanced overlays */}
            <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/10 pointer-events-none"></div>
          </div>

          {/* Main Content */}
          <div className={`relative z-10 w-full ${
            isMobile 
              ? "px-4 mt-16 mb-20" 
              : "max-w-3xl px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-20 lg:mt-0"
          } pointer-events-none`}>
            {/* Badge */}
            <span className={`inline-block px-3 py-1.5 mb-3 sm:mb-4 text-blue-600 border border-blue-600 rounded-full bg-white/80 backdrop-blur-sm pointer-events-auto ${
              isMobile ? "text-xs font-medium" : "text-xs sm:text-sm md:text-base"
            }`}>
              Innovate. Build. Excel.
            </span>

            {/* Heading */}
            <h1
              className={`font-sans font-normal text-gray-900 leading-tight mb-3 sm:mb-4 ${
                isMobile
                  ? "text-2xl leading-8"
                  : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              }`}
            >
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

            {/* Description */}
            <p className={`text-gray-800 leading-relaxed ${
              isMobile
                ? "text-sm leading-6 max-w-full"
                : "text-xs sm:text-sm md:text-base max-w-full sm:max-w-xl md:max-w-2xl"
            }`}>
              At Technoweb, we transform your ideas into powerful digital solutions. From websites and apps to custom software and automation tools, we help businesses grow smarter and faster.
            </p>

            {/* CTA Button for mobile */}
            {isMobile && (
              <div className="mt-6 pointer-events-auto">
                <button
                  onClick={handleScrollDown}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 shadow-lg"
                >
                  Explore Our Work
                </button>
              </div>
            )}
          </div>

          {/* Scroll Down Button - Desktop */}
          {!isMobile && (
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div
                className="flex items-center justify-center cursor-pointer group"
                onClick={handleScrollDown}
              >
                <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-800 uppercase mr-2">
                  SCROLL DOWN
                </span>
                <div className="animate-bounce-slow">
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-blue-600 group-hover:border-t-blue-700 transition-colors duration-900"></div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile-only scroll indicator */}
          {isMobile && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
              <div
                className="flex flex-col items-center justify-center cursor-pointer text-gray-700"
                onClick={handleScrollDown}
              >
                <span className="text-xs font-medium mb-1">Scroll Down</span>
                <div className="animate-bounce-slow">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Global styles to prevent white space on right side */}
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
        }
        
        #__next {
          overflow-x: hidden;
        }
        
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
