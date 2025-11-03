import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog6 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Future of IT Services: Trends Businesses Should Watch in 2025",
          text: "Discover the key IT trends shaping the future of business in 2025, from AI and automation to cybersecurity and sustainability.",
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
                IT Services
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Technology Trends
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Future of IT Services: Trends Businesses Should Watch in 2025
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Maria Novak</span>
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
                Technology is evolving faster than ever, reshaping the way businesses operate, connect with customers, and secure their data. As we step deeper into 2025, IT services are not just about maintaining systems—they are becoming the backbone of innovation, growth, and resilience. For businesses aiming to stay competitive, keeping an eye on emerging IT trends is crucial.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Here’s a look at the key trends shaping the future of IT services in 2025.
              </p>
            </div>

            {/* AI Becomes Mainstream */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Artificial Intelligence Becomes Mainstream</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                AI is no longer experimental—it’s becoming a core driver of business strategy.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">AI-powered automation is streamlining repetitive tasks, reducing operational costs, and improving efficiency.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Predictive analytics helps companies anticipate customer needs and market shifts.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Generative AI is revolutionizing content creation, product design, and even software development.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Companies that adopt AI-driven IT services in 2025 will gain a significant competitive edge in agility and decision-making.
              </p>
            </div>

            {/* Automation Across All Business Functions */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Automation Across All Business Functions</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                From IT helpdesks to supply chains, automation is expanding beyond routine tasks.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Robotic Process Automation (RPA) reduces manual workload.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Workflow orchestration tools ensure seamless coordination across departments.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Intelligent automation integrates AI and machine learning for smarter processes.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Businesses investing in automation today are preparing themselves for faster, more reliable, and cost-effective operations tomorrow.
              </p>
            </div>

            {/* Cybersecurity as a Business Priority */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Cybersecurity as a Business Priority</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With the rise of remote work, cloud adoption, and digital transactions, cybersecurity is more important than ever.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Expect wider adoption of Zero Trust Architecture—a “never trust, always verify” model.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">AI-driven threat detection will help spot and respond to cyberattacks in real time.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Compliance-driven security will become critical as governments enforce stricter regulations.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Cybersecurity is no longer an IT-only issue—it’s a boardroom concern that can make or break brand reputation.
              </p>
            </div>

            {/* Cloud Evolution: Hybrid and Multi-Cloud Strategies */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Cloud Evolution: Hybrid and Multi-Cloud Strategies</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Cloud adoption continues to rise, but businesses are moving beyond single-provider setups.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Hybrid cloud allows flexibility by combining on-premise systems with cloud solutions.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Multi-cloud strategies spread workloads across multiple providers for resilience and cost savings.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Serverless computing and containerization (Docker, Kubernetes) are driving agile application deployment.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The future of IT infrastructure is about balancing flexibility, cost, and security through cloud diversity.
              </p>
            </div>

            {/* Edge Computing Gains Momentum */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Edge Computing Gains Momentum</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With IoT devices and real-time applications expanding, data needs to be processed closer to where it’s generated.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Edge computing reduces latency, enabling faster decision-making.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Industries like manufacturing, healthcare, and retail will increasingly rely on it.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Combined with AI, edge computing enables smart devices to operate more independently.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                This trend ensures businesses can deliver speed and reliability where milliseconds matter.
              </p>
            </div>

            {/* IT as a Service (ITaaS) */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. IT as a Service (ITaaS)</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The traditional model of IT ownership is shifting toward service-based consumption.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Companies are embracing subscription-based IT services for flexibility and scalability.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Managed services providers (MSPs) are becoming critical partners for SMEs and enterprises alike.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">ITaaS allows businesses to access advanced technologies without large upfront investments.</li>
              </ul>
            </div>

            {/* Focus on Sustainability in IT */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Focus on Sustainability in IT</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                As businesses aim for greener operations, IT plays a big role.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Energy-efficient data centers and cloud infrastructure reduce environmental impact.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Green coding practices ensure software consumes fewer resources.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Circular IT asset management promotes recycling and responsible disposal of hardware.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Sustainability in IT is becoming both a corporate responsibility and a customer expectation.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                The future of IT services in 2025 is dynamic, intelligent, and deeply integrated into every aspect of business strategy. From AI and automation to cybersecurity and sustainability, these trends are shaping how organizations innovate, compete, and grow.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses stay ahead of these changes by delivering IT services designed for the future—scalable, secure, and aligned with your goals.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to future-proof your business?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Partner with Technoweb to embrace the latest IT service innovations and build a smarter, more resilient tomorrow.
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
                Artificial Intelligence
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Cybersecurity
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Cloud Computing
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                ITaaS
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Sustainability
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog6;
