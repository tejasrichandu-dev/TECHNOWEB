import React, { useState, useEffect, useRef, useCallback } from "react";

const products = [
  { 
    id: "01", 
    name: "Laundry Aggregator Platform", 
    desc: "A centralized platform connecting users with multiple laundry services, offering easy scheduling, doorstep pickup, and real-time tracking—all in one place.",
    img: "https://i.postimg.cc/KYxqvK1K/Card-1.png",
    icon: "/link-icon.png"
  },
  { 
    id: "02", 
    name: "E-Commerce Solution", 
    desc: "A comprehensive e-commerce platform designed to help businesses sell online with seamless payment integration and inventory management.",
    img: "https://i.postimg.cc/kgxYmNg3/Card-2.png",
    icon: "/robot-icon.png"
  },
  { 
    id: "03", 
    name: "Business Management Suite", 
    desc: "An all-in-one business management tool that streamlines operations, enhances productivity, and provides real-time analytics.",
    img: "https://i.postimg.cc/rw6Z3ZcN/Card-3.png",
    icon: "/box-icon.png"
  },
];

// Mobile Product Card - simple sticky stack
function MobileProductCard({ product, index }) {
  return (
    <div 
      className="sticky top-20 flex justify-center"
      style={{ zIndex: index + 10 }}
    >
      <div 
        className="bg-white p-6 w-[100vw] min-h-[60vh] shadow-[0_-10px_30px_rgba(0,0,0,0.2)] rounded-none relative flex flex-col"
      >
        {/* Product Number */}
        <h2 className="text-[#1e3a5f] text-2xl font-semibold text-center mb-8">
          Product {product.id}
        </h2>
        
        {/* Product Name */}
        <h3 className="text-[#1e3a5f] text-xl font-bold italic mb-4">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-[#1e3a5f]/80 text-sm leading-relaxed mb-6">
          {product.desc}
        </p>
        
        {/* Icon at bottom */}
        <div className={`mt-auto flex justify-center ${product.id === "02" ? "pb-0 -mt-4" : "pb-4"}`}>
          <img 
            src={product.icon} 
            alt={`${product.name} icon`}
            className={`object-contain ${product.id === "02" ? "w-44 h-70" : "w-36 h-70"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  const [exitProgress, setExitProgress] = useState(0);
  const wrapperRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (wrapperRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Exit progress - smoother transition with wider range
        const wrapperBottom = wrapperRect.bottom;
        const exitStart = viewportHeight * 0.9; // Start earlier
        const exitEnd = viewportHeight * 0.2; // End later for smoother transition
        
        let ep = 0;
        if (wrapperBottom < exitStart) {
          ep = Math.min(Math.max((exitStart - wrapperBottom) / (exitStart - exitEnd), 0), 1);
          // Apply easing for smoother animation
          ep = ep * ep * (3 - 2 * ep); // smoothstep easing
        }
        setExitProgress(ep);
      }
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  // Calculate exit animation - scale down in place with smoother values
  const exitScale = 1 - (exitProgress * 0.25); // scales down to 0.75
  const exitOpacity = 1 - (exitProgress * 0.4); // fades to 0.6

  return (
    <div ref={wrapperRef} className="relative w-full z-10">
      {/* Mobile: Sticky stacking cards like values section */}
      {isMobile ? (
        <section 
          className="sticky top-20 w-full bg-[#f5f5f5] text-white pt-0 pb-12 transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${exitScale})`,
            opacity: exitOpacity,
            transformOrigin: 'center top',
          }}
        >
          <div className="w-full px-0">
            {/* Cards Section */}
            <div className="h-[300vh] relative">
              {products.map((p, index) => (
                <MobileProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Desktop: Original sticky cards */
        <div className="h-[300vh] relative">
          {products.map((p) => (
            <div
              key={p.id}
              className="sticky top-20 flex justify-center items-center h-screen"
            >
              <div className="w-full text-center overflow-hidden px-0">
                <img
                  src={p.img}
                  alt={`Product ${p.id}`}
                  className="mx-auto max-h-[80vh] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
