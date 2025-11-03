import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog3 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Role of IT Consulting in Driving Business Growth",
          text: "Learn how IT consulting helps businesses align technology with their goals, avoid costly mistakes, and accelerate growth.",
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
                IT Consulting
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Business Growth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Role of IT Consulting in Driving Business Growth
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Maria Novak</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jan 12, 2025</span>
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
                Technology has become the backbone of modern business, shaping everything from customer experiences to operational efficiency. However, with countless solutions on the market and rapidly evolving trends, many businesses struggle to choose the right technologies for their needs. Making the wrong decisions can result in wasted investments, security risks, and missed opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                This is where IT consulting proves invaluable. By leveraging the expertise of technology professionals, companies can align their IT strategies with business objectives, avoid costly mistakes, and accelerate growth.
              </p>
            </div>

            {/* Why Businesses Need IT Consulting */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Businesses Need IT Consulting</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Every business faces unique challenges. What works for a multinational enterprise may not be practical for a growing startup or SME. Professional IT consultants provide:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Objective insights based on industry knowledge and technical expertise.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Customized solutions tailored to the company’s specific requirements.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Risk management to ensure technology decisions don’t compromise security or compliance.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Strategic alignment so IT investments directly support long-term business goals.</li>
              </ul>
            </div>

            {/* How IT Consulting Drives Growth */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How IT Consulting Drives Growth</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Identifying the Right Technologies</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With so many options available—ERP systems, cloud platforms, cybersecurity tools—choosing the right fit can be overwhelming. IT consultants help businesses evaluate technologies based on performance, scalability, and ROI, ensuring resources are invested wisely.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Improving Operational Efficiency</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Consultants analyze existing workflows to identify bottlenecks and redundancies. They then recommend digital tools and process automation to streamline operations, reduce costs, and increase productivity.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Enhancing Customer Experience</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                From CRM platforms to AI-powered chatbots, IT consultants design solutions that improve customer interactions and satisfaction. Better experiences translate to higher retention and stronger brand loyalty.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Ensuring Robust Cybersecurity</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                As businesses grow digitally, so do cyber threats. IT consulting helps organizations implement security best practices, conduct vulnerability assessments, and establish disaster recovery strategies to safeguard critical data.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Supporting Scalability</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Growth often requires scaling operations, systems, and infrastructure. IT consultants ensure that solutions are designed to expand seamlessly, preventing disruptions as the business evolves.
              </p>
            </div>

            {/* Common Mistakes IT Consulting Helps Avoid */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes IT Consulting Helps Avoid</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Investing in technology without clear business objectives.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Over-customizing software, leading to high maintenance costs.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Ignoring integration needs with existing systems.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Underestimating the importance of cybersecurity.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Choosing short-term fixes instead of long-term strategies.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                By avoiding these pitfalls, businesses save both time and money while positioning themselves for sustainable success.
              </p>
            </div>

            {/* The Strategic Value of IT Consulting */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Strategic Value of IT Consulting</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Beyond technology implementation, IT consulting plays a strategic role in shaping the future of a business. Consultants act as partners, providing guidance on:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Digital transformation roadmaps.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cloud migration strategies.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Compliance with industry regulations.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Emerging trends such as AI, IoT, and blockchain.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                This forward-looking perspective helps companies remain competitive in an ever-changing digital landscape.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Technology is no longer just a support function—it’s a driver of growth and innovation. However, navigating the complex world of IT requires more than intuition; it requires expertise, planning, and foresight. IT consulting empowers businesses to make smarter technology decisions, improve efficiency, and stay ahead of competitors.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we provide IT consulting services designed to align technology with your business vision. From strategy development to implementation and ongoing support, our team ensures you get the most value from your IT investments.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking to unlock growth with the right technology strategy?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Reach out to Technoweb and let our IT consulting experts guide your business toward success.
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
                Digital Transformation
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Cloud Computing
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Cybersecurity
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Strategy
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Technology Trends
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog3;
