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

          {/* Fixed Right Side Layout */}
          <div className="fixed right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              {/* Vertical Text */}
              <div className="text-gray-800 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase transform -rotate-90 whitespace-nowrap origin-center">
                Technoweb Studios
              </div>
              
              {/* Vertical Line */}
              <div className="w-px h-16 sm:h-20 bg-gray-600/60"></div>
              
              {/* Social Icons */}
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform duration-200 pointer-events-auto">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 hover:text-blue-600">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform duration-200 pointer-events-auto">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 hover:text-blue-600">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform duration-200 pointer-events-auto">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 hover:text-blue-600">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Moved Slightly Left */}
          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 md:px-10 mt-12 sm:mt-16 md:mt-20 lg:mt-0 pointer-events-none ml-4 sm:ml-6 md:ml-8 lg:ml-12">
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
