import React, { useState, useEffect } from "react";

const Insights = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const blogs = [
    {
      title: "How Custom ERP Solutions Can Streamline Your Business Operations",
      mainHeading: "Managing different departments with scattered tools often leads to inefficiency",
      excerpt: "Custom ERP solutions bring everything together under one system—finance, HR, supply chain, sales, and more—while adapting to the unique requirements of your industry. By automating routine tasks, minimizing errors, and offering real-time visibility into operations, ERP systems help businesses cut costs and boost productivity. Beyond efficiency, they empower decision-makers with accurate insights, enabling faster responses to market changes and smarter long-term planning. For companies aiming to scale sustainably, a tailored ERP solution isn’t just a tool—it’s a competitive advantage.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      date: "July 11, 2025",
      tags: ["Strategy", "Case Study"],
    },
    {
      title: "Digital Transformation for SMEs: Where to Start and How to Scale",
      mainHeading: "Digital transformation is essential for survival and growth",
      excerpt: "This blog explores practical strategies for SMEs to adopt IT solutions that enhance efficiency, improve customer engagement, and optimize resources. From identifying business needs and choosing the right software to implementing scalable technology and training staff, we cover every aspect of the transformation journey. By embracing digital solutions strategically, SMEs can compete effectively in today’s fast-paced market.",
      image: "/digitaltransformation.jpeg",
      date: "Jan 12, 2025",
      tags: ["Digital Transformation", "SMEs"],
    },
    {
      title: "Why Every Business Needs a Strong Digital Marketing Strategy in 2025",
      mainHeading: "A robust digital marketing strategy is crucial for staying visible",
      excerpt: "From search engine optimization (SEO) and content marketing to social media campaigns and paid advertising, businesses must leverage multiple channels to reach their audience effectively. A strong strategy helps build brand authority, attract qualified leads, and improve customer engagement. In this blog, we explore why digital marketing is indispensable for businesses in 2025 and how an integrated approach can deliver maximum value.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      date: "July 11, 2025",
      tags: ["Digital Marketing", "Strategy"],
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Discover Our <span className="text-blue-600">Insights</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with the latest trends, expert opinions, and real-world experiences in technology and business. Explore our articles to gain vital knowledge and find innovative solutions designed to solve complex challenges.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Current Blog */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={blogs[currentBlogIndex].image}
              alt={blogs[currentBlogIndex].title}
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">
                  {blogs[currentBlogIndex].date}
                </span>
                <div className="flex space-x-2">
                  {blogs[currentBlogIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {blogs[currentBlogIndex].title}
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                {blogs[currentBlogIndex].mainHeading}
              </h4>
              <p className="text-gray-700 mb-6">
                {blogs[currentBlogIndex].excerpt}
              </p>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {blogs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBlog(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentBlogIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
