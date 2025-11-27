import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, X } from "lucide-react";

const Blog3 = () => {
  const navigate = useNavigate();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Role of IT Consulting in Driving Business Growth",
          text: "Learn how IT consulting helps businesses align technology with their goals, avoid costly mistakes, and accelerate growth.",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing this article");
    }
  };

  const latestBlogs = [
    {
      id: 1,
      title: "How Custom ERP Solutions Can Streamline Your Business Operations",
      date: "July 11, 2025",
      category: "ERP Solutions",
      image: "/erp.jpeg",
    },
    {
      id: 2,
      title: "Digital Transformation for SMEs: Where to Start and How to Scale",
      date: "January 12, 2025",
      category: "Digital Transformation",
      image: "/sme.jpeg",
    },
    {
      id: 9,
      title: "Low-Code and No-Code Development: Accelerating Innovation for Businesses",
      date: "Jan 7, 2025",
      category: "Development",
      image: "/low.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image and Gradient */}
      <div className="relative h-screen max-h-[600px] bg-white flex items-end overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-20">
          <img
            src="/it consulting.jpeg"
            alt="IT Consulting for Business Growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-40% to-gray-50"></div>
        </div>
        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-6 pb-12 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-white/80 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                IT Consulting
              </span>
              <span className="bg-white/80 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Business Growth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-center max-w-5xl mx-auto">
              The Role of IT Consulting in Driving Business Growth
            </h1>
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-900" />
                <span className="text-gray-900 text-base font-medium">
                  January 12, 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Maria Novak"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-gray-900 font-semibold text-base">
                    Maria Novak
                  </div>
                  <div className="text-gray-700 text-sm">Digital Strategy Lead</div>
                </div>
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
            <div className="bg-slate-900 rounded-xl p-8 text-center shadow-lg border border-blue-600">
              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure which digital solution is right for your business?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Connect with Technoweb today, and our consultants will help you find the best solution to meet your business needs.
              </p>
              <button
                onClick={() => setShowContactPopup(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </article>

          {/* You Might Also Like - Latest 3 Blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-blue-600 text-xs font-semibold">{blog.category}</span>
                    <h4 className="text-gray-900 font-bold mt-2 mb-2 line-clamp-2">{blog.title}</h4>
                    <p className="text-gray-600 text-sm">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Popup Modal */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white rounded-t-2xl p-6 pb-4 border-b border-gray-200">
              <button
                onClick={() => setShowContactPopup(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 pr-8">
                Let’s Find the Right Solution for Your Business
              </h2>
              <p className="text-gray-600">
                Fill out the form below, and our experts will help you choose the right digital solution to grow your business efficiently.
              </p>
            </div>
            {/* Body */}
            <div className="p-6">
              {/* Benefits List */}
              <div className="mb-6 bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">We can help you:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Identify the solution that fits your business goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Plan a roadmap for implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recommend scalable and cost-effective options</span>
                  </li>
                </ul>
              </div>
              {/* Form */}
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                {/* Select Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-500">
                    <option>Select</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Custom ERP Solutions</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Cloud Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Request submitted successfully!');
                    setShowContactPopup(false);
                  }}
                  className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog3;
