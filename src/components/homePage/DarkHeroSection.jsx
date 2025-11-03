// DarkHeroSection.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const NUM_RECTANGLES = 50;
const ROTATABLE_CHANCE = 0.5;
const SCROLL_SPEED_FACTOR = 0.6;

const DarkHeroSection = () => {
  const rectanglesInnerRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const rafId = useRef(null);

  const blueIndicesRef = useRef(
    Array.from({ length: NUM_RECTANGLES }).map(() => Math.random() < ROTATABLE_CHANCE)
  );

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (rectanglesInnerRef.current) {
        const scrollY = window.scrollY;
        const innerWidth = rectanglesInnerRef.current.scrollWidth / 2;
        let newTranslateX = -(scrollY * SCROLL_SPEED_FACTOR);
        newTranslateX = newTranslateX % innerWidth;
        setTranslateX(newTranslateX);
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

  const renderRectangles = () => {
    const scrollY = window.scrollY;
    return Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
      const isRotatable = blueIndicesRef.current[index];
      const rotationProgress = (scrollY % 1000) / 1000;
      const rotation = isRotatable ? Math.sin(rotationProgress * Math.PI) * 90 : 0;

      return (
        <div
          key={index}
          className={`rectangle ${isRotatable ? "rotatableRectangle" : ""}`}
          style={{
            transform: isRotatable ? `rotateY(${rotation}deg)` : undefined,
          }}
        ></div>
      );
    });
  };

  return (
    <div className="heroContainer">
      {/* Background Rectangles */}
      <div className="rectanglesContainer">
        <div
          ref={rectanglesInnerRef}
          className="rectanglesInner"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {renderRectangles()}
          {renderRectangles()}
        </div>
      </div>

      {/* Hero Content */}
      <main className="heroMainContent">
        <h1 className="heroMainHeading">
          <span className="heroLine heroLine1">Build Stronger Customer Relationships</span>
          <span className="heroLine heroLine2">Simplify Interactions & Gain Valuable Insights</span>
          <span className="heroLine heroLine3">
            with Keenect Customer Relations Management Software
          </span>
        </h1>
        <button className="heroTryItOutButton">
          BECOME A CLIENT <ArrowRight size={16} />
        </button>
      </main>

      {/* Styles in same file */}
      <style>{`
        .heroContainer {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: white;
          background-color: #222222;
          overflow-x: hidden;
        }

        .heroMainContent {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          line-height: 1.2;
          position: relative;
          z-index: 1;
          overflow-x:hidden;
        }

        .heroMainHeading {
          font-weight: 400;
          letter-spacing: 0.025em;
          margin-bottom: 0.5rem;
        }

        .heroLine {
          display: block;
          margin-bottom: 0.5rem;
        }

        .heroLine1 {
          font-size: 60px;
          color: white;
        }
        .heroLine2, .heroLine3 {
          font-size: 2.25rem;
          color: rgb(66, 133, 244);
        }

        .heroTryItOutButton {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          width: fit-content;
          background-color: transparent;
          border: 1px solid white;
          color: white;
          border-radius: 0.25rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
          margin-top: 2rem;
        }

        .heroTryItOutButton:hover {
          background-color: white;
          color: #222222;
          border-color: rgb(66, 133, 244);
        }

        /* Rectangles background */
        .rectanglesContainer {
          position: absolute;
          bottom: 40px;
          left: 0;
          width: 100%;
          height: 30%;
          overflow: hidden;
          z-index: 0;
        }

       .rectanglesInner {
  display: flex;
  height: 100%;
  will-change: transform;
}

        .rectangle {
          width: 80px;
          height: 100%;
          margin: 0 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: transform 0.3s ease-out;
        }

        .rotatableRectangle {
          border: 2px solid  #0D84FB;
        }

        @media (max-width: 767px) {
          .heroLine1, .heroLine2, .heroLine3 {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 480px) and (max-width: 639px) {
          .heroLine1, .heroLine2, .heroLine3 {
            font-size: 1.8rem;
          }
        }

        @media (min-width: 640px) {
          .heroLine1, .heroLine2, .heroLine3 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DarkHeroSection;
