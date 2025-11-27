import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";

const Insights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Update current page from location state when component mounts or location changes
  useEffect(() => {
    if (location.state?.currentPage) {
      setCurrentPage(location.state.currentPage);
    } else if (location.state?.fromPage) {
      setCurrentPage(location.state.fromPage);
    }
  }, [location]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`, { state: { fromPage: currentPage } });
  };

  const blogPosts = [
    {
      id: 1,
      title: "How Custom ERP Solutions Can Streamline Your Business Operations",
      heading: "Managing different departments with scattered tools",
      excerpt: "often leads to inefficiency, delays, and higher costs. Custom ERP solutions bring everything together under one system—finance, HR, supply chain, sales, and more—while adapting to the unique requirements of your industry.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      category: "Strategy",
      subcategory: "Case Study",
      date: "July 11, 2025",
    },
    {
      id: 2,
      title: "Digital Transformation for SMEs: Where to Start and How to Scale",
      heading: "Digital transformation is no longer optional for small and medium enterprises",
      excerpt: "it's essential for survival and growth. This blog explores practical steps for SMEs to adopt IT solutions that enhance efficiency, improve customer engagement, and optimize resources.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      category: "Digital Transformation",
      subcategory: "SME Strategy",
      date: "Jan 12, 2025",
    },
    {
      id: 3,
      title: "The Role of IT Consulting in Driving Business Growth",
      heading: "Investing in technology without proper guidance",
      excerpt: "can be risky and costly. IT consulting bridges the gap between business objectives and technology solutions. Professional IT consultants evaluate your current systems, recommend the right tools, and create strategies to optimize processes and reduce risks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      category: "Innovation",
      subcategory: "Technology",
      date: "July 11, 2025",
    },
    {
      id: 4,
      title: "Why Every Business Needs a Strong Digital Marketing Strategy in 2025",
      heading: "A robust digital marketing strategy is crucial",
      excerpt: "to staying visible and competitive in today's online-first marketplace. From search engine optimization (SEO) and content marketing to social media campaigns and paid advertising, businesses must leverage multiple channels to reach their audience effectively.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      category: "Analytics",
      subcategory: "Design Strategy",
      date: "July 11, 2025",
    },
    {
      id: 5,
      title: "Cloud vs On-Premise: Which IT Infrastructure is Right for Your Business?",
      heading: "Choosing the right IT infrastructure is a critical decision",
      excerpt: "that impacts efficiency, scalability, and security. Cloud solutions offer flexibility, remote accessibility, and lower upfront costs, while on-premise systems provide control and customization. This blog breaks down the pros and cons of each approach, helping businesses weigh factors such as cost, security, compliance, and operational requirements.",
      image: "/cloud.jpeg",
      category: "AI",
      subcategory: "User Experience",
      date: "Jan 10, 2025",
    },
    {
      id: 6,
      title: "Building Scalable Web Applications: Key Factors to Consider",
      heading: "Scalability, performance, and security are essential considerations",
      excerpt: "when designing web applications that can grow with your business. This blog provides insights into best practices for creating applications that handle increased user loads without compromising speed or reliability. From architecture and coding practices to database design, cloud deployment, and security measures, we cover the key elements that ensure sustainable growth.",
      image: "/web1.jpeg",
      category: "UX Design",
      subcategory: "Service Design",
      date: "Jan 10, 2025",
    },
    {
      id: 7,
      title: "Future of IT Services: Trends Businesses Should Watch in 2025",
      heading: "The IT services landscape is evolving rapidly",
      excerpt: "with emerging technologies such as artificial intelligence, automation, cybersecurity innovations, and cloud computing. Staying ahead requires understanding these trends and preparing for their impact on operations, strategy, and customer expectations. This blog highlights the key trends shaping IT services in 2025, from AI-driven automation to advanced analytics, and explains how businesses can leverage these technologies to enhance efficiency, competitiveness, and innovation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      category: "Data Visualization",
      subcategory: "Analytics",
      date: "Jan 5, 2025",
    },
    {
      id: 8,
      title: "The Business Value of Cybersecurity: Protecting Data in a Digital-First World",
      heading: "As businesses become increasingly digital",
      excerpt: "cybersecurity is no longer optional—it's essential. From customer data and financial records to intellectual property, sensitive information must be protected against breaches, ransomware, and cyberattacks. This blog explores why cybersecurity is critical for maintaining trust, ensuring regulatory compliance, and avoiding costly disruptions.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
      category: "Cybersecurity",
      subcategory: "Data Protection",
      date: "Jan 8, 2025",
    },
    {
      id: 9,
      title: "Low-Code and No-Code Development: Accelerating Innovation for Businesses",
      heading: "Developing custom applications traditionally requires significant time",
      excerpt: "resources, and technical expertise. Low-code and no-code platforms simplify this process by allowing users to create apps visually, with minimal or no coding. This blog examines how these platforms empower businesses to accelerate innovation, streamline operations, and bring solutions to market faster.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      category: "Development",
      subcategory: "Innovation",
      date: "Jan 7, 2025",
    },
    {
      id: 10,
      title: "The Power of Data Analytics: Turning Information into Actionable Insights",
      heading: "Businesses generate vast amounts of data daily",
      excerpt: "but raw information alone cannot drive decisions. Data analytics turns this information into actionable insights that guide strategy, operations, and customer engagement. This blog explores how analytics improves decision-making, enhances operational efficiency, and uncovers new growth opportunities. We also highlight practical use cases, from marketing optimization and sales forecasting to supply chain management and risk assessment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      category: "Data Analytics",
      subcategory: "Business Intelligence",
      date: "Jan 6, 2025",
    },
    {
      id: 11,
      title: "AI and Machine Learning in Business: Practical Use Cases for 2025",
      heading: "Artificial Intelligence and Machine Learning are transforming industries",
      excerpt: "by enabling automation, prediction, and personalization. This blog examines practical applications of AI and ML in business, such as predictive analytics, customer service automation, marketing personalization, and fraud detection. By leveraging these technologies, organizations can improve efficiency, reduce costs, and create innovative solutions that meet evolving market demands. Understanding these real-world use cases prepares businesses for AI-driven growth in 2025.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      category: "AI & Machine Learning",
      subcategory: "Business Applications",
      date: "Jan 4, 2025",
    },
    {
      id: 12,
      title: "Remote Work Technology: Building a Secure and Productive Digital Workplace",
      heading: "Remote work is no longer temporary",
      excerpt: "it is a permanent aspect of modern business. Technology plays a critical role in ensuring productivity, collaboration, and security for distributed teams. This blog explores tools and strategies for building a secure digital workplace, from communication and project management platforms to cybersecurity and cloud solutions. Businesses can use these insights to create an efficient, collaborative environment that empowers employees to work effectively from anywhere.",
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=500&fit=crop",
      category: "Remote Work",
      subcategory: "Digital Workplace",
      date: "Jan 3, 2025"
    }
  ];

  const handleShare = async (post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.heading + " " + post.excerpt,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      alert('Sharing: ' + post.title);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      {/* Header */}
      <div className="bg-white text-center py-12 px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Discover Our <span className="text-blue-600">Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Stay ahead with the latest trends, expert opinions, and real-world experiences in technology and business. Explore our articles to gain vital knowledge and find innovative solutions designed to solve complex challenges.
        </motion.p>
      </div>
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {currentPage === 1 ? (
          <>
            {/* Featured First Card - Full Width with Side-by-Side Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md relative group cursor-pointer mb-8"
              whileHover={{
                y: -5,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image - Left Side */}
                <div className="md:w-1/2 relative">
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md z-10">
                    {blogPosts[0].date}
                  </div>
                  {/* Main Heading on Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                      {blogPosts[0].heading}
                    </h3>
                  </div>
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                {/* Content - Right Side */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center relative">
                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(blogPosts[0])}
                    className="absolute top-4 right-4 w-9 h-9 rounded bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors z-10"
                  >
                    <Share2 size={18} className="text-white" />
                  </button>
                  {/* Clickable Title */}
                  <button
                    onClick={() => handleReadMore(blogPosts[0].id)}
                    className="text-left w-full"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                  </button>
                  {/* Tags after title */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                      {blogPosts[0].category}
                    </span>
                    <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                      {blogPosts[0].subcategory}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Grid - Cards 2-7 in 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {blogPosts.slice(1, 7).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md relative group cursor-pointer flex flex-col"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(article)}
                    className="absolute top-4 right-4 w-9 h-9 rounded bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors z-10"
                  >
                    <Share2 size={18} className="text-white" />
                  </button>
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10">
                    {article.date}
                  </div>
                  {/* Image with Heading Overlay */}
                  <div className="relative">
                    {/* Heading on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h4 className="text-sm font-semibold text-white leading-relaxed">
                        {article.heading}
                      </h4>
                    </div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Clickable Title */}
                    <button
                      onClick={() => handleReadMore(article.id)}
                      className="text-left w-full mb-2"
                    >
                      <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                    </button>
                    {/* Tags after title */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                        {article.category}
                      </span>
                      <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                        {article.subcategory}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 flex-grow">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Page 2 - Cards 8-12 in 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {blogPosts.slice(7).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md relative group cursor-pointer flex flex-col"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(article)}
                    className="absolute top-4 right-4 w-9 h-9 rounded bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors z-10"
                  >
                    <Share2 size={18} className="text-white" />
                  </button>
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10">
                    {article.date}
                  </div>
                  {/* Image with Heading Overlay */}
                  <div className="relative">
                    {/* Heading on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h4 className="text-sm font-semibold text-white leading-relaxed">
                        {article.heading}
                      </h4>
                    </div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Clickable Title */}
                    <button
                      onClick={() => handleReadMore(article.id)}
                      className="text-left w-full mb-2"
                    >
                      <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                    </button>
                    {/* Tags after title */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                        {article.category}
                      </span>
                      <span className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-xs">
                        {article.subcategory}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 flex-grow">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
        {/* Pagination */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-10 h-10 border rounded flex items-center justify-center font-medium transition-all ${
              currentPage === 1
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`w-10 h-10 border rounded flex items-center justify-center font-medium transition-all ${
              currentPage === 2
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600'
            }`}
          >
            2
          </button>
          <button
            onClick={() => {
              if (currentPage === 1) setCurrentPage(2);
            }}
            className="px-4 h-10 border border-gray-300 rounded bg-white text-gray-700 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 2}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights;