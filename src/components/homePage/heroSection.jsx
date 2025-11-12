import React, { useState, useEffect, useRef } from "react";

function HeroSection() {
  const [headingText, setHeadingText] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const fullHeading =
    "We Create Websites, Apps & Software to Power Your Business Forward";
  const heroRef = useRef(null);
  const spacerRef = useRef(null);
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
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsTransitioning(window.scrollY > scrollThreshold);
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
      {/* Fixed Hero Section */}
      <div
        ref={heroRef}
        className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-1100 ease-in-out ${
          isTransitioning ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <section
          id="home"
          className="relative h-full flex flex-col justify-center items-start overflow-hidden bg-transparent"
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
            {/* Play/Pause Icon Overlay - Center, Slightly Down */}
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                )}
              </div>
            </div>
            {/* Light overlay for readability */}
            <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 pointer-events-none"></div>
          </div>

          {/* Main Content - Mobile Optimized with Better Spacing */}
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-20 lg:mt-0 pointer-events-none">
            <span className="inline-block px-2.5 py-1 mb-2 sm:mb-3 md:mb-4 text-blue-600 border border-blue-600 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base bg-white/80 backdrop-blur-sm pointer-events-auto">
              Innovate. Build. Excel.
            </span>
            <h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight mb-2 sm:mb-3 md:mb-4 font-sans font-normal text-gray-900"
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
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-800 max-w-full sm:max-w-xl md:max-w-2xl leading-relaxed">
              At Technoweb, we transform your ideas into powerful digital solutions. From websites and apps to custom software and automation tools, we help businesses grow smarter and faster.
            </p>
          </div>

          {/* Scroll Down Button with Animation */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="flex items-center justify-center cursor-pointer group"
              onClick={handleScrollDown}
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider text-gray-800 uppercase mr-1.5 sm:mr-2">
                SCROLL DOWN
              </span>
              <div className="animate-bounce-slow">
                <div className="w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[5px] sm:border-t-[6px] border-l-transparent border-r-transparent border-t-blue-600 group-hover:border-t-blue-700 transition-colors duration-900"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Margin-based Spacer
      <div ref={spacerRef} className="relative bg-black" style={{ height: "100vh" }} /> */}

      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default HeroSection;
