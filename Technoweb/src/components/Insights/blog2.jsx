import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog2 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Digital Transformation for SMEs: Where to Start and How to Scale",
          text: "Learn how SMEs can adopt digital solutions to enhance efficiency, improve customer engagement, and optimize resources.",
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
                Digital Transformation
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                SME Strategy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Digital Transformation for SMEs: Where to Start and How to Scale
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
                In an era where technology drives business success, small and medium enterprises (SMEs) can no longer afford to delay digital transformation. Customers expect faster service, employees need smarter tools, and markets are moving at lightning speed. While many SMEs recognize the importance of adopting digital solutions, they often struggle with where to begin and how to scale effectively without overextending resources.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                This guide provides a step-by-step roadmap to help SMEs start their digital transformation journey and build a foundation for sustainable growth.
              </p>
            </div>

            {/* Why Digital Transformation Matters */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Digital Transformation Matters for SMEs</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                For SMEs, digital transformation is more than just adopting new tools—it’s about rethinking business processes, culture, and customer experiences to stay competitive. Benefits include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Increased efficiency through automation and streamlined workflows.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Better decision-making powered by data analytics and real-time insights.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Improved customer engagement via personalized digital experiences.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Scalability with cloud and mobile-first technologies that grow with your business.</li>
              </ul>
            </div>

            {/* Step-by-Step Guide */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Digital Transformation</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Assess Your Current Situation</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Before investing in any technology, SMEs need to evaluate where they stand. Ask:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Which processes consume the most time or resources?</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Are customers satisfied with the current experience?</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">What tools are already in place, and how effective are they?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A clear understanding of pain points ensures investments are aligned with real business needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Define Clear Goals</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Digital transformation works best when driven by measurable goals. These may include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Reducing operational costs by a set percentage.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Improving customer response times.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Increasing sales through e-commerce channels.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Enhancing data security and compliance.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Clear objectives make it easier to choose the right solutions and measure success.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Start Small with Quick Wins</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Instead of overhauling everything at once, begin with projects that show immediate results. For example:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Automating invoicing and payroll.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Setting up a customer relationship management (CRM) system.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Using cloud-based file sharing to improve collaboration.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Quick wins build confidence and demonstrate value, encouraging further adoption.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Invest in Scalable IT Solutions</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                As SMEs grow, so do their technology needs. Choosing scalable solutions ensures you don’t outgrow your systems too quickly. Consider:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cloud-based ERP systems for finance, inventory, and operations.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">E-commerce platforms that integrate with logistics and payments.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cybersecurity solutions that protect sensitive business data.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Scalability helps future-proof your investments and supports long-term growth.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 5: Train and Empower Employees</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Technology is only as effective as the people who use it. SMEs should invest in training programs to help employees adapt to new tools and workflows. Encourage a culture of continuous learning so teams embrace change instead of resisting it.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 6: Monitor, Measure, and Optimize</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Digital transformation is an ongoing process. Regularly review the performance of new systems and measure them against your defined goals. Use analytics to gain insights into customer behavior, employee productivity, and overall business performance. Adjust strategies as needed to stay aligned with changing market demands.
              </p>
            </div>

            {/* Scaling Up */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scaling Up: Taking Transformation to the Next Level</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Once the foundation is in place, SMEs can explore advanced technologies such as:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Artificial Intelligence (AI) for customer service and demand forecasting.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Robotic Process Automation (RPA) to eliminate repetitive tasks.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Internet of Things (IoT) for real-time monitoring in manufacturing or logistics.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Blockchain for secure transactions and supply chain transparency.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Scaling is not about adopting every new technology—it’s about choosing the right innovations that align with your business strategy.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Digital transformation is no longer optional—it’s a necessity for SMEs that want to thrive in today’s fast-changing market. By starting small, setting clear goals, and scaling strategically, businesses can harness technology to improve efficiency, strengthen customer relationships, and unlock new growth opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we specialize in guiding SMEs through every step of their digital transformation journey. From consulting and implementation to training and scaling, we provide solutions tailored to your business needs.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to transform your SME with digital solutions?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Get in touch with the Technoweb team today and explore how we can help your business grow smarter, faster, and stronger.
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
                Automation
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Data Analytics
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Growth
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Technology Adoption
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog2;
