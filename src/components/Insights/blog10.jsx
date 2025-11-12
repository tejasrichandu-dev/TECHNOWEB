import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, X } from "lucide-react";

const Blog9 = () => {
  const navigate = useNavigate();
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Power of Data Analytics: Turning Information into Actionable Insights",
          text: "Learn how data analytics can help businesses make smarter decisions, optimize operations, and drive growth.",
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
      id: 11,
      title: "AI and Machine Learning in Business: Practical Use Cases for 2025",
      date: "Jan 4, 2025",
      category: "AI & Machine Learning",
      image: "/ai.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image and Gradient */}
      <div className="relative h-screen max-h-[600px] bg-white flex items-end overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-20">
          <img
            src="/data.jpeg"
            alt="Data Analytics"
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
                Data Analytics
              </span>
              <span className="bg-white/80 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                Business Intelligence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-center max-w-5xl mx-auto">
              The Power of Data Analytics: Turning Information into Actionable Insights
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Priya Banerjee</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jan 6, 2025</span>
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
                In today’s digital era, businesses generate massive amounts of data daily—from customer interactions and sales transactions to social media engagement and website activity. But raw data alone holds limited value. The real power lies in transforming this information into actionable insights that drive smarter, more strategic decisions. This is where data analytics comes into play.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Leveraging big data and advanced analytics allows organizations to uncover trends, predict outcomes, and make informed decisions that enhance efficiency, customer satisfaction, and overall growth.
              </p>
            </div>

            {/* Why Data Analytics Matters */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Data Analytics Matters</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Improved Decision-Making – Data analytics enables businesses to base decisions on evidence rather than intuition. By analyzing patterns and trends, organizations can identify opportunities, mitigate risks, and allocate resources more effectively.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Enhanced Customer Experience – Understanding customer behavior, preferences, and feedback helps tailor products, services, and marketing campaigns. Personalization improves engagement, loyalty, and satisfaction.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Operational Efficiency – Analytics can reveal inefficiencies in workflows, supply chains, and resource allocation. By acting on these insights, companies can reduce costs, streamline processes, and improve productivity.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Competitive Advantage – Companies that leverage data effectively can anticipate market trends, respond faster to customer needs, and outperform competitors who rely on outdated or limited information.</li>
              </ul>
            </div>

            {/* Key Types of Data Analytics */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Types of Data Analytics</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Descriptive Analytics – Summarizes historical data to understand what happened.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Diagnostic Analytics – Examines data to identify the reasons behind past outcomes.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Predictive Analytics – Uses historical data and machine learning to forecast future trends.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Prescriptive Analytics – Recommends actions based on predictive models to optimize results.</li>
              </ul>
            </div>

            {/* Real-World Use Cases */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Use Cases</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Marketing Optimization – Analyze customer engagement and campaign performance to improve targeting and ROI.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Sales Forecasting – Predict future sales trends based on historical data, seasonality, and market conditions.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Inventory Management – Optimize stock levels by analyzing purchasing patterns and supply chain data.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Risk Management – Detect fraud, cybersecurity threats, and operational risks through advanced analytics.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Product Development – Use customer feedback and usage data to inform design, features, and enhancements.</li>
              </ul>
            </div>

            {/* Tools and Technologies for Data Analytics */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools and Technologies for Data Analytics</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Business Intelligence (BI) Tools: Power BI, Tableau, Looker</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Big Data Platforms: Hadoop, Spark</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Data Warehousing: Snowflake, Amazon Redshift</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">AI and Machine Learning: Python, R, TensorFlow for predictive analytics</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Data Visualization Tools: Charts, dashboards, and interactive reports to simplify insights</li>
              </ul>
            </div>

            {/* Best Practices for Leveraging Data Analytics */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Leveraging Data Analytics</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Define Clear Objectives – Identify the business goals your analytics efforts aim to support.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Collect Clean, Reliable Data – Ensure data quality and consistency to produce accurate insights.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Integrate Data Sources – Combine data from multiple systems for a holistic view.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Invest in the Right Tools – Choose analytics platforms that align with your business size, complexity, and goals.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Foster a Data-Driven Culture – Encourage teams to rely on data insights in everyday decision-making.</li>
              </ul>
            </div>

            {/* The Business Value of Data Analytics */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Business Value of Data Analytics</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Smarter Decisions – Reduce guesswork and make evidence-based choices.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Faster Response Times – Identify trends and respond proactively to market changes.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Increased Revenue – Optimize marketing, sales, and operations using data insights.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Innovation – Discover new opportunities and create products that meet evolving customer needs.</li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Data analytics is no longer optional—it is a strategic necessity for businesses aiming to thrive in a competitive digital landscape. By turning raw data into actionable insights, organizations can make informed decisions, optimize operations, and deliver exceptional value to their customers.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses harness the power of data analytics—from data collection and integration to visualization and predictive modeling. Our expert team ensures that your organization can transform information into insights that drive measurable results.
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

export default Blog9;
