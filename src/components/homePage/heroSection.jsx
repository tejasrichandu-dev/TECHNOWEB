import React, { useState, useEffect, useRef } from "react";

function HeroSection() {
  const [headingText, setHeadingText] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const fullHeading = "We Create Websites, Apps & Software to Power Your Business Forward";
  const heroRef = useRef(null);
  const spacerRef = useRef(null);
  const videoRef = useRef(null);

  // Typewriter effect for heading
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

  // Scroll-based transition effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      const shouldSlideUp = window.scrollY > scrollThreshold;
      setIsTransitioning(shouldSlideUp);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pause video on scroll for mobile
  useEffect(() => {
    const handleScrollForVideo = () => {
      if (window.scrollY > 50 && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsVideoPaused(true);
      }
    };
    window.addEventListener("scroll", handleScrollForVideo);
    return () => window.removeEventListener("scroll", handleScrollForVideo);
  }, []);

  // Scroll down handler
  const handleScrollDown = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };

  // Video load handler
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Toggle video play/pause
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
        className={`fixed top-0 left-0 w-full h-screen z-40 ${
          isTransitioning ? "animate-slide-up-out" : "animate-slide-down-in"
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
              poster="/video-poster.jpg" // Add a poster for mobile
            >
              <source src="/Landing Video Technoweb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!videoLoaded && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
            {/* Center Play/Pause Icon Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                isVideoPaused ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-black/60 rounded-full p-3 backdrop-blur-sm">
                {isVideoPaused ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                    width="32"
                    height="32"
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
            {/* Light overlay for readability */}
            <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 pointer-events-none"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-3xl px-4 md:px-10 pt-16 md:pt-28 pointer-events-none">
            <span className="inline-block px-3 md:px-4 py-1 mb-4 text-blue-600 border border-blue-600 rounded-full text-sm md:text-base lg:text-lg bg-transparent pointer-events-auto">
              Innovate. Build. Excel.
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug md:leading-tight mb-4 font-sans font-normal text-gray-900">
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
            <p className="text-sm sm:text-base text-gray-800 max-w-xl md:max-w-2xl">
              At Technoweb, we transform your ideas into powerful digital solutions. From websites and apps to custom software and automation tools, we help businesses grow smarter and faster.
            </p>
          </div>

          {/* Scroll Down Button with Animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div
              className="flex items-center justify-center cursor-pointer group"
              onClick={handleScrollDown}
            >
              <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-800 uppercase mr-2">
                SCROLL DOWN
              </span>
              <div className="animate-bounce-slow">
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-blue-600 group-hover:border-t-blue-700 transition-colors duration-200"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Margin-based Spacer */}
      <div ref={spacerRef} className="relative bg-black" style={{ height: "100vh" }} />

      {/* CSS Animations */}
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
        @keyframes slide-up-out {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        @keyframes slide-down-in {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-slide-up-out {
          animation: slide-up-out 0.5s ease-in-out forwards;
        }
        .animate-slide-down-in {
          animation: slide-down-in 0.5s ease-in-out forwards;
        }
        /* Mobile-specific adjustments */
        @media (max-width: 768px) {
          .animate-slide-up-out,
          .animate-slide-down-in {
            animation-duration: 0.3s;
          }
          h1 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }
          .max-w-3xl {
            max-width: 100% !important;
          }
          .pt-16 {
            padding-top: 4rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
