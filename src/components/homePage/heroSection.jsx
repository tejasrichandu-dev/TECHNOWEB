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
  }, []);

  useEffect(() => {
    // Disable scroll transition on mobile
    const isMobile = window.innerWidth < 768;
    
    const handleScroll = () => {
      if (!isMobile) {
        const scrollThreshold = 100;
        setIsTransitioning(window.scrollY > scrollThreshold);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Fixed Hero Section - No transition on mobile */}
      <div
        ref={heroRef}
        className={`fixed top-0 left-0 w-full h-screen z-40 lg:transition-transform lg:duration-1100 lg:ease-in-out ${
          isTransitioning ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <section
          id="home"
          className="relative h-full flex flex-col justify-center items-center lg:items-start overflow-hidden bg-transparent"
        >
          {/* Video Background */}
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
              className="w-full h-full object-cover"
            >
              <source src="/Landing Video Technoweb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!videoLoaded && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
            {/* Play/Pause Icon Overlay - Optimized for mobile */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                isVideoPaused ? "opacity-100" : "opacity-0"
              }`}
              style={{ marginTop: "5%" }}
            >
              <div className="bg-black/60 rounded-full p-2 sm:p-2.5 md:p-3 backdrop-blur-sm">
                {isVideoPaused ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                )}
              </div>
            </div>
            {/* Light overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-white/40 lg:bg-white/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 lg:bg-gradient-to-r lg:from-white/20 lg:via-transparent lg:to-white/10 pointer-events-none"></div>
          </div>

          {/* Main Content - Centered on mobile, left-aligned on desktop */}
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pointer-events-none text-center lg:text-left">
            <span className="inline-block px-3 py-1.5 mb-3 sm:mb-4 md:mb-5 text-blue-600 border border-blue-600 rounded-full text-xs sm:text-sm md:text-base bg-white/90 backdrop-blur-sm pointer-events-auto">
              Innovate. Build. Excel.
            </span>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-snug sm:leading-tight mb-3 sm:mb-4 md:mb-5 font-sans font-normal text-gray-900 px-2 sm:px-0"
              style={{ lineHeight: "1.3" }}
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
            <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-800 max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
              At Technoweb, we transform your ideas into powerful digital solutions. From websites and apps to custom software and automation tools, we help businesses grow smarter and faster.
            </p>
          </div>

          {/* Scroll Down Button - Better mobile positioning */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={handleScrollDown}
            >
              <span className="text-xs sm:text-sm md:text-base font-medium tracking-wider text-gray-800 uppercase mb-2">
                SCROLL
              </span>
              <div className="animate-bounce-slow">
                <div className="w-0 h-0 border-l-[4px] sm:border-l-[5px] border-r-[4px] sm:border-r-[5px] border-t-[6px] sm:border-t-[7px] border-l-transparent border-r-transparent border-t-blue-600 group-hover:border-t-blue-700 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Spacer for content below */}
      <div className="relative" style={{ height: "100vh" }} />

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Better touch targets for mobile */
        @media (max-width: 640px) {
          .cursor-pointer {
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
