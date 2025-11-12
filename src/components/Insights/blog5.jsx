import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, X } from "lucide-react";

const Blog5 = () => {
  const navigate = useNavigate();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cloud vs On-Premise: Which IT Infrastructure is Right for Your Business?",
          text: "Learn the pros and cons of cloud and on-premise IT infrastructure to make the right choice for your business.",
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
            src="/On premise vs Cloud.jpeg"
            alt="Digital Marketing Strategy"
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
                IT Infrastructure
              </span>
              <span className="bg-white/80 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Cloud Computing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-center max-w-5xl mx-auto">
              Cloud vs On-Premise: Which IT Infrastructure is Right for Your Business?
            </h1>
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-900" />
                <span className="text-gray-900 text-base font-medium">
                  January 8, 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Daniel Novak"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-gray-900 font-semibold text-base">
                    Daniel Novak
                  </div>
                  <div className="text-gray-700 text-sm">IT Infrastructure Lead</div>
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
                Every business, whether a growing startup or a large enterprise, relies on IT infrastructure to power daily operations. From managing customer data to running business applications, the choice of infrastructure plays a crucial role in efficiency, security, and long-term growth.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Traditionally, companies have relied on on-premise infrastructure—servers and hardware physically hosted within their offices or data centers. However, with the rapid evolution of technology, cloud computing has emerged as a powerful alternative, offering flexibility, scalability, and cost savings.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                But which one is right for your business? Let’s explore the pros and cons of each approach to help you make a smarter decision.
              </p>
            </div>

            {/* What is On-Premise Infrastructure? */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is On-Premise Infrastructure?</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                On-premise infrastructure refers to physical servers, storage, and networking hardware hosted at a company’s location or private data center. Businesses own, manage, and maintain all the hardware and software.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advantages of On-Premise:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Full Control – Businesses maintain complete authority over their data and systems.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Security & Compliance – Suitable for industries with strict regulatory requirements.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Customization – Infrastructure can be tailored to meet highly specific needs.</li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Challenges of On-Premise:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">High Upfront Costs – Requires significant investment in hardware, software licenses, and maintenance.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Limited Scalability – Expanding capacity means purchasing and installing new equipment.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Maintenance Burden – IT teams must handle updates, troubleshooting, and hardware failures.</li>
              </ul>
            </div>

            {/* What is Cloud Infrastructure? */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cloud Infrastructure?</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Cloud infrastructure delivers computing resources—servers, storage, databases, networking, and software—over the internet on a pay-as-you-go model. Instead of owning physical hardware, businesses rent services from cloud providers like AWS, Microsoft Azure, or Google Cloud.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advantages of Cloud:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Scalability & Flexibility – Instantly scale up or down based on business needs.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cost Efficiency – Lower upfront investment; pay only for what you use.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Accessibility – Teams can access applications and data from anywhere.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Automatic Updates – Cloud providers manage software and security updates.</li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Challenges of Cloud:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Data Security Concerns – Sensitive data stored on third-party servers may raise security and compliance challenges.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Ongoing Costs – While upfront costs are lower, monthly fees can add up over time.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Dependency on Internet – Reliable connectivity is essential for uninterrupted access.</li>
              </ul>
            </div>

            {/* Cloud vs On-Premise: A Side-by-Side Comparison */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud vs On-Premise: A Side-by-Side Comparison</h2>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left text-gray-700 font-bold">Factor</th>
                    <th className="p-3 text-left text-gray-700 font-bold">Cloud Infrastructure</th>
                    <th className="p-3 text-left text-gray-700 font-bold">On-Premise Infrastructure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Cost</td>
                    <td className="p-3 text-gray-700">Lower upfront, subscription-based</td>
                    <td className="p-3 text-gray-700">High upfront, long-term investment</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Scalability</td>
                    <td className="p-3 text-gray-700">Instant and flexible</td>
                    <td className="p-3 text-gray-700">Limited, requires new hardware</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Security</td>
                    <td className="p-3 text-gray-700">Provider-managed, but shared responsibility</td>
                    <td className="p-3 text-gray-700">Full control, higher responsibility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Accessibility</td>
                    <td className="p-3 text-gray-700">Global access, remote-friendly</td>
                    <td className="p-3 text-gray-700">Limited to office/data center</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Maintenance</td>
                    <td className="p-3 text-gray-700">Managed by provider</td>
                    <td className="p-3 text-gray-700">Requires in-house IT team</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">Compliance</td>
                    <td className="p-3 text-gray-700">May be challenging for highly regulated sectors</td>
                    <td className="p-3 text-gray-700">Easier to meet strict compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Which One Should You Choose? */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Which One Should You Choose?</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The decision between cloud and on-premise depends on your business priorities:
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Cloud If:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">You want cost flexibility and quick scalability.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Your teams work remotely or across multiple locations.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">You prefer outsourcing infrastructure maintenance and updates.</li>
              </ul>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose On-Premise If:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">You operate in a highly regulated industry with strict data security requirements.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">You need full control over your IT environment.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">You can invest in long-term infrastructure costs and in-house IT expertise.</li>
              </ul>
            </div>

            {/* Hybrid Approach: The Best of Both Worlds */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hybrid Approach: The Best of Both Worlds</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Many businesses are now adopting a hybrid model, combining the control of on-premise systems with the flexibility of the cloud. For example, sensitive data may remain on-premise, while applications and collaboration tools run on the cloud. This approach allows companies to balance security, cost, and scalability.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                There’s no one-size-fits-all answer when it comes to IT infrastructure. Both cloud and on-premise solutions have unique advantages and challenges. The key is to evaluate your business goals, budget, compliance needs, and growth plans before making a decision.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses assess their IT requirements and design infrastructure strategies that align with their vision. Whether it’s cloud, on-premise, or hybrid, our experts ensure you make the right choice for long-term success.
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

export default Blog5;
