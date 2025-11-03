import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog1 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "How Custom ERP Solutions Can Streamline Your Business Operations",
          text: "Learn how custom ERP solutions bring efficiency and competitive advantage to your business",
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      alert('Sharing this article');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                ERP Solutions
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Business Operations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How Custom ERP Solutions Can Streamline Your Business Operations
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Ritesh Patil</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>July 11, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Back Button and Share */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate("/insights")}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Insights
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Managing different departments with scattered tools often leads to inefficiency, delays, and higher costs. Custom ERP solutions bring everything together under one system—finance, HR, supply chain, sales, and more—while adapting to the unique requirements of your industry.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                By automating routine tasks, minimizing errors, and offering real-time visibility into operations, ERP systems help businesses cut costs and boost productivity. Beyond efficiency, they empower decision-makers with accurate insights, enabling faster responses to market changes and smarter long-term planning.
              </p>
            </div>

            {/* The Competitive Advantage Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Competitive Advantage</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Adopting a custom ERP system is no longer just about operational efficiency—it's about gaining a competitive edge. Businesses equipped with ERP are more agile, more resilient, and better positioned to scale sustainably.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                They can predict customer needs, optimize resources, and adapt faster than competitors still relying on outdated systems. In today's fast-paced business environment, the ability to make data-driven decisions quickly can be the difference between leading the market and falling behind.
              </p>
            </div>

            {/* Final Thoughts Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Every business is unique, and so are its challenges. A custom ERP solution ensures your operations run smoothly, your teams work more efficiently, and your decisions are backed by accurate, real-time insights.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                For companies seeking sustainable growth, ERP isn't just a software investment—it's a business transformation tool. At Technoweb, we design and implement ERP solutions that are tailored to your industry needs, ensuring you get the flexibility, control, and insights necessary to drive long-term success.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                For companies aiming to scale sustainably, a tailored ERP solution is not just a tool—it's a competitive advantage.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to streamline your business with a custom ERP solution?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Get in touch with the Technoweb team today and explore how we can transform your operations.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us Today
              </button>
            </div>
          </article>

          {/* Related Topics */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Automation
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Digital Transformation
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Enterprise Software
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Supply Chain Management
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Intelligence
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog1;
