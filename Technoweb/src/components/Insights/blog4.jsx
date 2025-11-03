import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog4 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Why Every Business Needs a Strong Digital Marketing Strategy in 2025",
          text: "Learn how digital marketing can help businesses connect with customers, stand out in crowded markets, and drive measurable results.",
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
                Digital Marketing
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Business Growth
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Every Business Needs a Strong Digital Marketing Strategy in 2025
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Maria Novak</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Jan 10, 2025</span>
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
                The digital landscape is evolving faster than ever before. With consumers spending more time online and competition growing across every industry, businesses can no longer rely on traditional marketing methods to capture attention. In 2025, a strong digital marketing strategy isn’t just a nice-to-have—it’s essential for survival and growth.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                From search engine optimization (SEO) to paid ads, social media campaigns, and data-driven insights, digital marketing provides the tools businesses need to connect with customers, stand out in crowded markets, and drive measurable results.
              </p>
            </div>

            {/* The Shift Toward a Digital-First Market */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Shift Toward a Digital-First Market</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Consumer behavior has shifted dramatically. Before making a purchase, most customers research online, compare options, and read reviews. Whether it’s a small local shop or a multinational company, having a strong digital presence ensures your business is visible where your customers are looking.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Key statistics show the urgency:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Over 80% of consumers research products online before buying.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Mobile devices now account for more than half of global web traffic.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Businesses with active digital marketing strategies see significantly higher revenue growth compared to those without.</li>
              </ul>
            </div>

            {/* Core Pillars of a Digital Marketing Strategy */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Pillars of a Digital Marketing Strategy</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Search Engine Optimization (SEO)</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                SEO remains the foundation of digital marketing. By optimizing your website’s structure, content, and keywords, you can rank higher on search engines and attract quality traffic. In 2025, SEO goes beyond keywords—it’s about creating valuable content, improving user experience, and meeting search intent.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Content Marketing</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                High-quality blogs, videos, infographics, and case studies not only build trust but also establish your brand as an industry authority. Content marketing drives organic engagement and supports every other digital channel.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Social Media Marketing</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                With billions of users across platforms like Instagram, LinkedIn, and TikTok, social media is where conversations happen. Effective strategies build communities, increase brand awareness, and foster customer loyalty.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Paid Advertising (PPC)</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Google Ads, Facebook Ads, and LinkedIn campaigns allow businesses to target specific audiences with precision. Paid ads provide immediate visibility, making them a critical complement to long-term organic strategies.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Email Marketing & Automation</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Despite being one of the oldest digital channels, email remains highly effective. Personalized campaigns and automation tools help nurture leads and maintain strong customer relationships.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">6. Analytics & Data-Driven Insights</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Digital marketing is measurable. Analytics platforms allow businesses to track performance, identify trends, and make informed decisions to optimize campaigns continuously.
              </p>
            </div>

            {/* Why Businesses Can’t Ignore Digital Marketing in 2025 */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Businesses Can’t Ignore Digital Marketing in 2025</h2>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Competition is Fierce – If your business isn’t online, your competitors are, and they’re capturing your potential customers.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Customer Expectations Are Higher – Customers expect fast responses, personalized experiences, and seamless digital interactions.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Cost-Effectiveness – Compared to traditional marketing, digital strategies offer better ROI, with more control over targeting and spend.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Global Reach with Local Precision – Whether you want to attract customers in your neighborhood or across the globe, digital marketing makes it possible.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Adaptability – Digital campaigns can be adjusted in real time, unlike static print or TV ads.</li>
              </ul>
            </div>

            {/* Building a Strong Digital Marketing Strategy in 2025 */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building a Strong Digital Marketing Strategy in 2025</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                To succeed, businesses should:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Define Clear Goals – Whether it’s brand awareness, lead generation, or sales, set measurable objectives.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Know Your Audience – Use analytics and customer data to understand behaviors and preferences.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Balance Organic and Paid Channels – Combine SEO-driven content with targeted ad campaigns for maximum impact.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Focus on Mobile & Voice Search – With the rise of smartphones and AI assistants, optimizing for mobile and voice queries is critical.</li>
                <li className="text-gray-700 leading-relaxed text-lg mb-2">Continuously Measure and Optimize – Monitor KPIs, refine campaigns, and stay agile in response to changing market trends.</li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                In today’s digital-first world, businesses that fail to embrace digital marketing risk falling behind. A strong, well-executed strategy not only ensures visibility but also drives growth, builds customer trust, and secures long-term success.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we specialize in crafting digital marketing strategies tailored to your industry, combining SEO, content, social media, and paid campaigns to deliver measurable results.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking to strengthen your digital presence in 2025?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Partner with Technoweb and let our experts help your business thrive in the digital age.
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
                SEO
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Content Marketing
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Social Media
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Paid Advertising
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Digital Strategy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog4;
