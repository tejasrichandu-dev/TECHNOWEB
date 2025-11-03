import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog5 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cloud vs On-Premise: Which IT Infrastructure is Right for Your Business?",
          text: "Learn the pros and cons of cloud and on-premise IT infrastructure to make the right choice for your business.",
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
                IT Infrastructure
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Cloud Computing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Cloud vs On-Premise: Which IT Infrastructure is Right for Your Business?
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Daniel Novak</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jan 8, 2025</span>
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure which IT infrastructure is right for your business?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Connect with Technoweb today and let our consultants guide you to the solution that fits your needs.
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
                Cloud Computing
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                IT Infrastructure
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Data Security
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Growth
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Hybrid Cloud
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog5;
