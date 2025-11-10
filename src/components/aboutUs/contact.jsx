import React, { useState, useEffect } from "react";
import { ArrowRight, X, Upload } from "lucide-react";
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
    fullName: "",
    email: "",
    mobile: "",
    location: "",
    position: "UI/UX Designer",
    resume: null,
    notRobot: false,
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files[0],
      }));
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
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
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-start rounded-t-2xl z-10">
                <div className="pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Let's Find the <span className="text-[#3B82F6]">Right Solution</span> for Your Business
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Fill out the form below, and our experts will help you choose the right digital solution to grow your business efficiently.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-6">
                {/* Benefits List */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="font-semibold text-gray-900 mb-2">We can help you:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
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

                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Email and Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Your Email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter Your Number"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Location and Position */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter Your Location"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        placeholder="UI/UX Designer"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Upload Resume */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume
                    </label>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                      <input
                        type="file"
                        id="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-[#3B82F6] mx-auto mb-2" />
                        <p className="text-gray-600 font-medium">
                          {formData.resume ? formData.resume.name : "Upload Resume"}
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Not a Robot Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="notRobot"
                      name="notRobot"
                      checked={formData.notRobot}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-[#3B82F6] border-gray-300 rounded focus:ring-[#3B82F6]"
                    />
                    <label htmlFor="notRobot" className="ml-2 text-sm text-gray-700">
                      I am not a Robot
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#3B82F6] text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
                  >
                    Submit
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
