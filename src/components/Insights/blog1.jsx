import React from "react";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

const Blog1 = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "How Custom ERP Solutions Can Streamline Your Business Operations",
          text: "Learn how custom ERP solutions bring efficiency and competitive advantage to your business",
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
      id: 2,
      title: "Digital Transformation for SMEs: Where to Start and How to Scale",
      date: "January 12, 2025",
      category: "Digital Transformation",
      image: "/sme.jpeg",
    },
    {
      id:6,
      title: "Building Scalable Web Applications: Key Factors to Consider",
      date: "January 5, 2025",
      category: "Web Development",
      image: "/web.jpeg",
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen max-h-[600px] bg-white flex items-end overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-20">
          <img
            src="/erp.jpeg"
            alt="Custom ERP Solutions Dashboard"
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
                ERP Solutions
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                Business Operations
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight text-center max-w-5xl mx-auto">
              How Custom ERP Solutions Can Streamline Your Business Operations
            </h1>
            {/* Date and Author Info - Side by Side */}
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-900" />
                <span className="text-gray-900 text-base font-medium">
                  July 11, 2025
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
                Managing different departments with scattered tools often leads to inefficiency, delays, and higher costs. Custom ERP solutions bring everything together under one system—finance, HR, supply chain, sales, and more—while adapting to the unique requirements of your industry.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                By automating routine tasks, minimizing errors, and offering real-time visibility into operations, ERP systems help businesses cut costs and boost productivity. Beyond efficiency, they empower decision-makers with accurate insights, enabling faster responses to market changes and smarter long-term planning.
              </p>
            </div>

            {/* The Competitive Advantage Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Competitive Advantage
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Adopting a custom ERP system is no longer just about operational efficiency—it's about gaining a competitive edge. Businesses equipped with ERP are more agile, more resilient, and better positioned to scale sustainably.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                They can predict customer needs, optimize resources, and adapt faster than competitors still relying on outdated systems. In today's fast-paced business environment, the ability to make data-driven decisions quickly can be the difference between leading the market and falling behind.
              </p>
            </div>

            {/* Final Thoughts Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Final Thoughts
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Every business is unique, and so are its challenges. A custom ERP solution ensures your operations run smoothly, your teams work more efficiently, and your decisions are backed by accurate, real-time insights.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                For companies seeking sustainable growth, ERP isn't just a software investment—it's a business transformation tool. At Technoweb, we design and implement ERP solutions that are tailored to your industry needs, ensuring you get the flexibility, control, and insights necessary to drive long-term success.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                For companies aiming to scale sustainably, a tailored ERP solution is not just a tool—it's a competitive advantage.
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

export default Blog1;


