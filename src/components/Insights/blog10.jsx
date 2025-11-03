import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog9 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Power of Data Analytics: Turning Information into Actionable Insights",
          text: "Learn how data analytics can help businesses make smarter decisions, optimize operations, and drive growth.",
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
                Data Analytics
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Business Intelligence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to turn your data into a strategic asset?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Partner with Technoweb and unlock actionable insights that accelerate business growth.
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
                Business Intelligence
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Data Visualization
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Predictive Analytics
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Marketing Optimization
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Customer Insights
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog9;
