import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, X } from "lucide-react";

const Blog7 = () => {
  const navigate = useNavigate();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Business Value of Cybersecurity: Protecting Data in a Digital-First World",
          text: "Learn why cybersecurity is essential for protecting sensitive data, maintaining customer trust, and ensuring business continuity.",
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
            src="/cyber.jpeg"
            alt="Cybersecurity"
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                Cybersecurity
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                Data Protection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight text-center max-w-5xl mx-auto">
              The Business Value of Cybersecurity: Protecting Data in a Digital-First World
            </h1>
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-900" />
                <span className="text-gray-900 text-base font-medium">
                  Jan 8, 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Ritesh Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-gray-900 font-semibold text-base">
                    Ritesh Patil
                  </div>
                  <div className="text-gray-700 text-sm">Co-Founder & CTO</div>
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
                In today's digital-first world, businesses rely heavily on technology for operations, communication, and customer engagement. While this shift has opened new avenues for growth, it has also exposed companies to a rising tide of cyber threats. From data breaches to ransomware attacks, cybersecurity risks are no longer a distant concern—they can directly impact a company's reputation, finances, and long-term viability.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Understanding the business value of cybersecurity is crucial for leaders who want to safeguard their operations and build trust with customers.
              </p>
            </div>

            {/* Why Cybersecurity Matters */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Cybersecurity Matters</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Protects Sensitive Business Data</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Customer information, financial records, intellectual property, and internal communications are valuable assets. A single data breach can compromise this information, resulting in financial losses, legal liabilities, and reputational damage.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Maintains Customer Trust</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Customers expect their data to be handled securely. Companies with strong cybersecurity measures foster confidence, which leads to better customer retention and loyalty.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ensures Regulatory Compliance</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Industries are increasingly regulated to protect data privacy (e.g., GDPR, CCPA, ISO standards). Failure to comply with cybersecurity regulations can result in fines and legal action.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Minimizes Financial Loss</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Cyberattacks are costly. Beyond immediate remediation expenses, breaches can disrupt operations, impact productivity, and damage market reputation. Proactive cybersecurity reduces the likelihood of these losses.
              </p>
            </div>

            {/* Common Cybersecurity Threats */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Cybersecurity Threats</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Phishing Attacks: Fraudulent emails designed to steal credentials or deploy malware.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Ransomware: Malicious software that locks systems until a ransom is paid.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Insider Threats: Unauthorized access or misuse of data by employees or partners.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Malware and Viruses: Programs that damage or hijack systems.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Data Breaches: Unauthorized access to sensitive customer or corporate information.</li>
              </ul>
            </div>

            {/* Strategies to Safeguard Your Business */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategies to Safeguard Your Business</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Implement Strong Access Controls</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Use multi-factor authentication, strong passwords, and role-based access to limit exposure to sensitive data.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regular Software Updates and Patch Management</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Keep operating systems, applications, and security software up to date to close vulnerabilities.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Employee Training and Awareness</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Human error is one of the leading causes of breaches. Regular training on phishing, safe browsing, and secure data handling is essential.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Network Security Measures</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Firewalls, intrusion detection systems, and VPNs protect internal networks from unauthorized access.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Encryption</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Encrypt data at rest and in transit to ensure information remains secure, even if intercepted.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Regular Security Audits and Monitoring</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Continuous monitoring, vulnerability scanning, and periodic audits help detect and mitigate threats proactively.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Backup and Disaster Recovery Plans</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Maintain regular backups and a tested recovery plan to minimize downtime in the event of a cyber incident.
              </p>
            </div>

            {/* The Business Benefits of Investing in Cybersecurity */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Benefits of Investing in Cybersecurity</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Enhanced Operational Resilience – Minimizes downtime and ensures business continuity.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Competitive Advantage – Companies with strong cybersecurity are trusted more by clients and partners.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cost Savings – Proactive security reduces potential financial losses from attacks and regulatory penalties.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Innovation Enablement – Secure digital infrastructure allows businesses to adopt new technologies confidently.</li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Cybersecurity is no longer a purely technical issue—it's a strategic business imperative. Companies that invest in robust cybersecurity frameworks not only protect their data but also strengthen customer trust, maintain regulatory compliance, and ensure long-term growth.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses build secure IT environments with advanced cybersecurity solutions tailored to their needs.
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
                  className="cursor-pointer block"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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

export default Blog7;
