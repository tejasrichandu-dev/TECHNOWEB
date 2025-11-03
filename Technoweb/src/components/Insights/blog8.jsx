import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const Blog7 = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "The Business Value of Cybersecurity: Protecting Data in a Digital-First World",
          text: "Learn why cybersecurity is essential for protecting sensitive data, maintaining customer trust, and ensuring business continuity.",
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
                Cybersecurity
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Data Protection
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The Business Value of Cybersecurity: Protecting Data in a Digital-First World
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Ritesh Patil</span>
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
                In today’s digital-first world, businesses rely heavily on technology for operations, communication, and customer engagement. While this shift has opened new avenues for growth, it has also exposed companies to a rising tide of cyber threats. From data breaches to ransomware attacks, cybersecurity risks are no longer a distant concern—they can directly impact a company’s reputation, finances, and long-term viability.
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
                Cybersecurity is no longer a purely technical issue—it’s a strategic business imperative. Companies that invest in robust cybersecurity frameworks not only protect their data but also strengthen customer trust, maintain regulatory compliance, and ensure long-term growth.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                At Technoweb, we help businesses build secure IT environments with advanced cybersecurity solutions tailored to their needs.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to safeguard your business with advanced cybersecurity?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Partner with Technoweb to implement robust security measures that protect your data and reputation.
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
                Data Protection
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Cybersecurity
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Risk Management
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Compliance
              </span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                Business Continuity
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog7;
