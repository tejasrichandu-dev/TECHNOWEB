import React, { useState, useEffect, useRef, useCallback } from "react";

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (sectionRef.current && wrapperRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Progress for rectangle animation
        const start = viewportHeight * 0.9;
        const end = -rect.height * 0.2;
        const total = start - end;
        const scrolled = start - rect.top;

        let p = Math.min(Math.max(scrolled / total, 0), 1);
        const eased = p * (2 - p);
        setProgress(eased);

        // Exit progress - based on how far we've scrolled past the sticky point
        // When wrapper bottom approaches viewport top, section should scale down
        const wrapperBottom = wrapperRect.bottom;
        const stickyTop = 80; // top-20 = 5rem = 80px
        const exitStart = viewportHeight * 0.6;
        const exitEnd = stickyTop;
        
        let ep = 0;
        if (wrapperBottom < exitStart) {
          ep = Math.min(Math.max((exitStart - wrapperBottom) / (exitStart - exitEnd), 0), 1);
        }
        setExitProgress(ep);
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
  const rectWidth = 90;
  const rectHeight = 220;
  const maxOffset = rectWidth; // Same as width so rectangles stay attached edge-to-edge

  // Calculate exit animation - scale and opacity based on exitProgress
  const exitScale = 1 - (exitProgress * 0.2); // scales down to 0.8
  const exitOpacity = 1 - (exitProgress * 0.4); // fades to 0.6

  return (
    <div ref={wrapperRef} className="h-[120vh] relative">
      <section
        ref={sectionRef}
        className="bg-white text-gray-800 h-[60vh] sticky top-20 overflow-hidden flex justify-center items-center z-10"
        style={{
          transform: `scale(${exitScale})`,
          opacity: exitOpacity,
          transformOrigin: 'center center',
        }}
      >
      <div className="relative flex justify-center items-center w-full h-full">
        {Array.from({ length: totalRects }).map((_, index) => {
          const offsetIndex = index - Math.floor(totalRects / 2);

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

      <h2 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl lg:text-6xl font-medium text-center whitespace-nowrap z-10">
        Software <span className="text-[#0D84FB]">Features</span>
      </h2>
    </section>
    </div>
  );
};

export default FeaturesSection;
