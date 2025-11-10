import React, { useState, useEffect } from "react";
import { Share2, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // or import { useRouter } from "next/navigation"; for Next.js

const Insights = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const navigate = useNavigate(); // or const router = useRouter(); for Next.js

  const blogs = [
    {
      title: "Build Trust, Attract Customers",
      mainHeading: "Grow Your Business: The Power of Social Media, Local SEO, and Fresh Website Content",
      excerpt: "In today's digital-first world, small and medium businesses cannot rely only on traditional marketing to bring in customers. People search online, check social media, and read reviews before making purchase decisions. That's why integrating social media marketing, leveraging local SEO strategies, and regularly updating your website content is no longer optional—it's a must. Together, these three strategies can help you build credibility, appear in front of the right local audience, and keep your brand relevant.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "2025-09-29",
      author: "Noufal Riyas",
      role: "Co-Founder & CFO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      title: "Digital Excellence",
      mainHeading: "How Custom ERP Solutions Can Streamline Your Business Operations",
      excerpt: "Managing different departments with scattered tools often leads to inefficiency. Custom ERP solutions bring everything together under one system—finance, HR, supply chain, sales, and more—while adapting to the unique requirements of your industry. By automating routine tasks, minimizing errors, and offering real-time visibility into operations, ERP systems help businesses cut costs and boost productivity. Beyond efficiency, they empower decision-makers with accurate insights, enabling faster responses to market changes and smarter long-term planning.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      date: "2025-07-11",
      author: "Noufal Riyas",
      role: "Co-Founder & CFO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      title: "Transform Your Business",
      mainHeading: "Digital Transformation for SMEs: Where to Start and How to Scale",
      excerpt: "Digital transformation is essential for survival and growth. This blog explores practical strategies for SMEs to adopt IT solutions that enhance efficiency, improve customer engagement, and optimize resources. From identifying business needs and choosing the right software to implementing scalable technology and training staff, we cover every aspect of the transformation journey. By embracing digital solutions strategically, SMEs can compete effectively in today's fast-paced market.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      date: "2025-01-12",
      author: "Noufal Riyas",
      role: "Co-Founder & CFO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ];

  // Auto-rotate blogs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) =>
        prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToBlog = (index) => {
    setCurrentBlogIndex(index);
  };

  // Navigate to insights page
  const handleViewAllInsights = () => {
    navigate('/insights'); // or router.push('/insights'); for Next.js
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-serif text-gray-900">
            Discover Our Insights
          </h2>
          <button 
            onClick={handleViewAllInsights}
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition-colors text-sm"
          >
            All Insights
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={blogs[currentBlogIndex].image}
              alt={blogs[currentBlogIndex].title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blogs[currentBlogIndex].title}
                </h3>
                <button className="p-2.5 bg-[#8B1538] text-white rounded-lg hover:bg-[#6B0F2B] transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {blogs[currentBlogIndex].mainHeading}
              </h4>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {blogs[currentBlogIndex].excerpt}
              </p>
            </div>

            {/* Author & Date */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="text-gray-600 text-xs">
                  {blogs[currentBlogIndex].date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={blogs[currentBlogIndex].avatar}
                  alt={blogs[currentBlogIndex].author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {blogs[currentBlogIndex].author}
                  </p>
                  <p className="text-xs text-gray-600">
                    {blogs[currentBlogIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBlog(index)}
              className={`w-8 h-8 rounded-md transition-colors ${
                index === currentBlogIndex
                  ? "bg-[#8B1538]"
                  : "border-2 border-gray-300 hover:border-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
