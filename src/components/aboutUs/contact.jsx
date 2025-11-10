import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const Contact = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      lineControls.start({ width: "100%" });
    }
  }, [isInView, lineControls]);

  const paragraphText =
    "We're a team of passionate designers and thinkers who love transforming bold ideas into powerful digital experiences...";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Call to Action Section */}
      <div ref={ref} className="bg-[#232325] rounded-3xl mx-6 mb-8">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
            {/* Left Content */}
            <div className="lg:flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-white text-sm font-medium tracking-wider uppercase mb-2"
              >
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  LET'S TALK
                </motion.span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-[#3B82F6]"
              >
                <Typewriter text="Got a project?" speed={50} />
              </motion.h2>
            </div>

            {/* Right CTA Button */}
            <div className="lg:flex lg:items-center lg:ml-auto w-full lg:w-auto">
              <div className="flex items-center w-full lg:w-auto">
                <motion.button
                  className="group bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3"
                  onHoverStart={() => setButtonHovered(true)}
                  onHoverEnd={() => setButtonHovered(false)}
                  onClick={() => setShowPopup(true)}
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  Contact Us
                  <motion.span
                    animate={{ x: buttonHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Horizontal Line - Animated */}
          <motion.div
            initial={{ width: 0 }}
            animate={lineControls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-px bg-gray-600 mb-6"
          />

          {/* Paragraph Section - Typewriter Animation */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              <Typewriter text={paragraphText} speed={20} />
            </p>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div className="bg-[#232325] text-white p-8 rounded-t-2xl relative">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-3xl font-bold mb-2">
                  Let's Find the Right Solution for Your Business
                </h3>
              </div>

              {/* Popup Body */}
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-6">
                  Fill out the form below, and our experts will help you choose the right digital solution to grow your business efficiently.
                </p>

                {/* Benefits List */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="font-semibold text-gray-800 mb-3">We can help you:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2">•</span>
                      <span>Identify the solution that fits your business goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2">•</span>
                      <span>Plan a roadmap for implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3B82F6] mr-2">•</span>
                      <span>Recommend scalable and cost-effective options</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Form */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#3B82F6] text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
