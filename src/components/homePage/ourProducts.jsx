import React, { useState, useEffect, useRef, useCallback } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const start = viewportHeight * 0.9;
        const end = -rect.height * 0.2;
        const total = start - end;
        const scrolled = start - rect.top;

        let p = Math.min(Math.max(scrolled / total, 0), 1);

        // smooth easing
        const eased = p * (2 - p);
        setProgress(eased);
      }
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  // Rectangle setup
  const totalRects = 5;
  const rectWidth = 80;
  const rectHeight = 220;
  const maxOffset = 120;

  return (
    <section
      ref={sectionRef}
      className="bg-white text-gray-800 h-[60vh] relative overflow-hidden flex justify-center items-center"
    >
      <div className="relative flex justify-center items-center w-full h-full">
        {Array.from({ length: totalRects }).map((_, index) => {
          const offsetIndex = index - Math.floor(totalRects / 2);

          // ✨ New: delay before splitting so they start overlapped
          const startThreshold = 0.1;
          const effectiveProgress = Math.max(
            0,
            (progress - startThreshold) / (1 - startThreshold)
          );

          // compute horizontal offset
          const offset = offsetIndex * effectiveProgress * maxOffset;

          return (
            <div
              key={index}
              className="absolute border-2 border-gray-300 bg-transparent rounded-md transition-transform duration-300 ease-out"
              style={{
                width: `${rectWidth}px`,
                height: `${rectHeight}px`,
                transform: `translateX(${offset}px)`,
                zIndex: totalRects - Math.abs(offsetIndex),
              }}
            ></div>
          );
        })}
      </div>

      <h2 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl lg:text-6xl font-medium text-center whitespace-nowrap z-10">
        Software <span className="text-[#0D84FB]">Features</span>
      </h2>
    </section>
  );
};

export default FeaturesSection;
