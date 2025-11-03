import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = [
  {
    id: "01",
    title: "Business",
    highlight: "Empowering",
    desc: "Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
    shape: "rectangle",
  },
  {
    id: "02",
    title: "Business",
    highlight: "Innovating",
    desc: "Focus on what makes the business unique and how users can benefit from choosing it.",
    shape: "circle",
  },
  {
    id: "03",
    title: "Business",
    highlight: "Sustaining",
    desc: "Highlight long-term values, consistent performance, and reliability that creates lasting trust with your customers.",
    shape: "triangle",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xOffsets = [
    useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [0, -320, -320, -320]),
    useTransform(scrollYProgress, [0.1, 0.4, 0.6, 1], [0, -240, -240, -240]),
    useTransform(scrollYProgress, [0.2, 0.6, 0.8, 1], [0, -160, -160, -160]),
    useTransform(scrollYProgress, [0.3, 0.7, 1, 1], [0, -80, -80, -80]),
    useTransform(scrollYProgress, [0.4, 0.8, 1, 1], [0, 0, 0, 0]),
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-[#323235] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="sticky top-10 z-20 flex justify-between items-center mb-10">
          <h2 className="text-5xl font-regular">
            Our <span className="text-[#0D84FB]">Values</span>
          </h2>

          <div className="hidden sm:flex relative w-[400px] h-[120px] justify-end overflow-visible">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                style={{ x: xOffsets[i] }}
                className="absolute top-0 right-0 w-[70px] h-[120px] border border-[#0D84FB] rounded-md bg-[#323235]"
              />
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="h-[300vh] relative">
          {values.map((v) => (
            <Card key={v.id} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate Card Component
function Card({ v }) {
  const cardRef = useRef(null);
  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start 80%", "end 40%"],
  });

  // Each shape expands across horizontally
  const offsets = [
    useTransform(cardScroll, [0, 1], [0, 0]),
    useTransform(cardScroll, [0, 1], [0, 70]),
    useTransform(cardScroll, [0, 1], [0, 140]),
  ];

  const shapeBase = "absolute top-0 left-0";

  const renderShape = (shape, index) => {
    switch (shape) {
      case "rectangle":
        return (
          <motion.div
            key={index}
            style={{ x: offsets[index] }}
            className={`${shapeBase} w-[40px] h-[80px] border border-[#323235] rounded-md`}
          />
        );
      case "circle":
        return (
          <motion.div
            key={index}
            style={{ x: offsets[index] }}
            className={`${shapeBase} w-[60px] h-[60px] border border-[#323235] rounded-full`}
          />
        );
      case "triangle":
        return (
          <motion.div
            key={index}
            style={{ x: offsets[index] }}
            className={`${shapeBase} w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-[#323235]`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={cardRef} className="sticky top-60 flex justify-end">
      <div className="bg-[#232325] p-8 w-[65vh] h-[60vh] shadow-md relative overflow-hidden">
        <div className="text-gray-400 text-sm mb-4">{v.id}</div>
        <h3 className="text-3xl mb-6">
          {v.title} <span className="text-[#0D84FB]">{v.highlight}</span>
        </h3>
        <p className="text-gray-300 text-md">{v.desc}</p>

        {/* Shapes */}
        <div className="relative mt-10 w-[220px] h-[70px]">
          {[...Array(3)].map((_, i) => renderShape(v.shape, i))}
        </div>
      </div>
    </div>
  );
}
