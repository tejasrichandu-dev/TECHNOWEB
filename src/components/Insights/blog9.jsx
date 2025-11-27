import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, X } from "lucide-react";

const Blog8 = () => {
  const navigate = useNavigate();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Low-Code and No-Code Development: Accelerating Innovation for Businesses",
          text: "Discover how low-code and no-code platforms empower businesses to create applications faster, reduce costs, and drive innovation.",
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
      id: 6,
      title: "Building Scalable Web Applications: Key Factors to Consider",
      date: "January 5, 2025",
      category: "Web Development",
      image: "/web.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image and Gradient */}
      <div className="relative h-screen max-h-[600px] bg-white flex items-end overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-20">
          <img
            src="/low.jpeg"
            alt="Low-Code and No-Code Development"
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
                Development
              </span>
              <span className="bg-white/80 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Innovation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-center max-w-5xl mx-auto">
              Low-Code and No-Code Development: Accelerating Innovation for Businesses
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Joshua Blue</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jan 7, 2025</span>
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
                In the fast-paced digital era, businesses need to develop applications quickly to stay competitive. Traditional software development, with its complex coding and long timelines, often slows down innovation. Enter low-code and no-code development platforms—tools designed to empower businesses to create applications faster, with less dependency on traditional programming skills.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                These platforms are transforming the way organizations approach software development, enabling teams to focus on solving business problems rather than getting bogged down in code.
              </p>
            </div>

            {/* What Are Low-Code and No-Code Platforms? */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Low-Code and No-Code Platforms?</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Low-Code Development:</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Provides visual development tools with pre-built components and drag-and-drop functionality while still allowing custom coding for complex logic.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No-Code Development:</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Enables application creation entirely through visual interfaces without writing any code, making it accessible to non-technical users.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Both approaches reduce development time, streamline workflows, and bridge the gap between business needs and IT capabilities.
              </p>
            </div>

            {/* Why Businesses Are Adopting Low-Code and No-Code */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Businesses Are Adopting Low-Code and No-Code</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Faster Time-to-Market – Applications that once took months or years can now be developed in weeks or even days. This agility allows businesses to respond quickly to market demands and customer needs.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Reduced Development Costs – Fewer coding resources are required, lowering overall development costs and enabling smaller teams to deliver functional applications.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Empowers Citizen Developers – Non-technical employees, or “citizen developers,” can create apps that address their specific operational needs without waiting for IT teams.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Flexibility and Scalability – Low-code platforms allow integration with existing systems and can scale as business requirements grow.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Enhanced Collaboration – By bridging the gap between business users and IT professionals, these platforms encourage collaboration, improving the relevance and usability of applications.</li>
              </ul>
            </div>

            {/* Common Use Cases for Low-Code and No-Code */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Use Cases for Low-Code and No-Code</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Workflow Automation – Streamline repetitive business processes such as approvals, reporting, or notifications.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Customer-Facing Applications – Quickly deploy apps for customer service, order tracking, or feedback collection.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Internal Tools – Build dashboards, CRM extensions, and inventory management systems tailored to specific team needs.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Data Collection and Analysis – Simplify form creation, data gathering, and visualization for better business decisions.</li>
              </ul>
            </div>

            {/* Key Considerations When Choosing a Platform */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Considerations When Choosing a Platform</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Integration Capabilities – Ensure the platform can seamlessly integrate with existing systems, databases, and third-party tools.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Security and Compliance – Verify that the platform meets industry security standards and complies with relevant regulations (e.g., GDPR, HIPAA).</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Scalability – Choose platforms that can handle growing users, data volume, and transaction complexity as your business expands.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">User Experience – Opt for platforms with intuitive interfaces that make it easy for non-technical users to design and deploy applications.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Support and Community – A strong support system and active developer community can help resolve issues faster and provide best practices.</li>
              </ul>
            </div>

            {/* The Business Value of Low-Code and No-Code */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Value of Low-Code and No-Code</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Accelerates Digital Transformation – Businesses can innovate faster without waiting for lengthy IT cycles.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Reduces Dependency on Technical Teams – Non-developers can contribute to digital initiatives.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Improves Agility – Quickly adapt applications to meet changing market or operational needs.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Encourages Experimentation – Rapid prototyping allows teams to test ideas with minimal risk.</li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Low-code and no-code development platforms are reshaping the software landscape. They empower businesses to innovate quickly, reduce development costs, and bridge the gap between technical and business teams. By leveraging these tools, organizations can respond faster to opportunities, streamline operations, and stay ahead of the competition.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses implement low-code and no-code solutions tailored to their unique requirements. From strategy to deployment, we ensure your organization can harness these platforms to accelerate innovation and achieve measurable business outcomes.
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

export default Blog8;
