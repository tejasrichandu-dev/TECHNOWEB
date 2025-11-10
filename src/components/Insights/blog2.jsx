import React from "react";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog2 = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Digital Transformation for SMEs: Where to Start and How to Scale",
          text: "Learn how SMEs can start and scale their digital transformation journey effectively.",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      alert("Sharing this article");
    }
  };

  // Latest 3 blogs data
  const latestBlogs = [
    {
      id: 1,
      title: "How Custom ERP Solutions Can Streamline Your Business Operations",
      date: "July 11, 2025",
      category: "ERP Solutions",
      image: "/erp.jpeg",
    },
    {
      id:8,
      title: "The Business Value of Cybersecurity: Protecting Data in a Digital-First World",
      date: "Jan 8, 2025",
      category: "Cybersecurity",
      image: "/cyber.jpeg",
    },
    {
      id:9,
      title: "Low-Code and No-Code Development: Accelerating Innovation for Businesses",
      date: "Jan 7, 2025",
      category: "Development",
      image: "/low.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen max-h-[600px] bg-white flex items-end overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-20">
          <img
            src="/sme.jpeg"
            alt="Digital Transformation for SMEs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-40% to-gray-50"></div>
        </div>
        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-6 pb-12 z-10 w-full">
          <div className="opacity-100">
            {/* Tags - Centered above title */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                Digital Transformation
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                SME Strategy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight text-center max-w-5xl mx-auto">
              Digital Transformation for SMEs: Where to Start and How to Scale
            </h1>
            {/* Date and Author Info - Side by Side */}
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
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <div>
          {/* Back Button and Share */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => window.history.back()}
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
                For SMEs, digital transformation is more than just adopting new tools—it's about rethinking business processes, culture, and customer experiences to stay competitive. Benefits include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Increased efficiency through automation and streamlined workflows.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Better decision-making powered by data analytics and real-time insights.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Improved customer engagement via personalized digital experiences.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Scalability with cloud and mobile-first technologies that grow with your business.</li>
              </ul>
            </div>

            {/* Step-by-Step Guide */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Digital Transformation</h2>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Assess Your Current Situation</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Before investing in any technology, SMEs need to evaluate where they stand. Ask:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Which processes consume the most time or resources?</li>
                <li className="text-gray-700 leading-relaxed text-lg">Are customers satisfied with the current experience?</li>
                <li className="text-gray-700 leading-relaxed text-lg">What tools are already in place, and how effective are they?</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A clear understanding of pain points ensures investments are aligned with real business needs.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Define Clear Goals</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Digital transformation works best when driven by measurable goals. These may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Reducing operational costs by a set percentage.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Improving customer response times.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Increasing sales through e-commerce channels.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Enhancing data security and compliance.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Clear objectives make it easier to choose the right solutions and measure success.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Start Small with Quick Wins</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Instead of overhauling everything at once, begin with projects that show immediate results. For example:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Automating invoicing and payroll.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Setting up a customer relationship management (CRM) system.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Using cloud-based file sharing to improve collaboration.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Quick wins build confidence and demonstrate value, encouraging further adoption.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Invest in Scalable IT Solutions</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                As SMEs grow, so do their technology needs. Choosing scalable solutions ensures you don't outgrow your systems too quickly. Consider:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Cloud-based ERP systems for finance, inventory, and operations.</li>
                <li className="text-gray-700 leading-relaxed text-lg">E-commerce platforms that integrate with logistics and payments.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Cybersecurity solutions that protect sensitive business data.</li>
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
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Once the foundation is in place, SMEs can explore advanced technologies such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700 leading-relaxed text-lg">Artificial Intelligence (AI) for customer service and demand forecasting.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Robotic Process Automation (RPA) to eliminate repetitive tasks.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Internet of Things (IoT) for real-time monitoring in manufacturing or logistics.</li>
                <li className="text-gray-700 leading-relaxed text-lg">Blockchain for secure transactions and supply chain transparency.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Scaling is not about adopting every new technology—it's about choosing the right innovations that align with your business strategy.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Digital transformation is no longer optional—it's a necessity for SMEs that want to thrive in today's fast-changing market. By starting small, setting clear goals, and scaling strategically, businesses can harness technology to improve efficiency, strengthen customer relationships, and unlock new growth opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we specialize in guiding SMEs through every step of their digital transformation journey. From consulting and implementation to training and scaling, we provide solutions tailored to your business needs.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure which digital solution is right for your business?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Connect with Technoweb today, and our consultants will help you find the best solution to meet your business needs.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </article>

          {/* You Might Also Like - Latest 3 Blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestBlogs.map((blog) => (
                <a
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="block"
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
