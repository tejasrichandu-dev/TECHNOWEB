import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const lineControls = useAnimation();

  // Quote Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    notRobot: false,
    agreeTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isInView) {
      lineControls.start({ width: "100%" });
    }
  }, [isInView, lineControls]);

  const paragraphText =
    "We're a team of passionate designers and thinkers who love transforming bold ideas into powerful digital experiences...";

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (isSubmitted) setIsSubmitted(false); // Reset submission state
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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
                  onClick={togglePopup}
                  className="group bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3"
                  onHoverStart={() => setButtonHovered(true)}
                  onHoverEnd={() => setButtonHovered(false)}
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

      {/* Popup Quote Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl mx-auto relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Quote Form Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Contact Info (Optional) */}
              <div className="p-8 bg-blue-50 hidden lg:block">
                <h2 className="text-2xl font-bold mb-4">
                  Don't <span className="text-blue-500">Hesitate</span> To{" "}
                  <span className="text-blue-500">Contact Us</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  We’re here to help you with your digital needs.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-blue-600 font-bold mb-2">India Headquarters</h3>
                    <p className="text-sm text-gray-700">[Your India Office Address]</p>
                    <p className="text-sm text-gray-700">india@yourcompany.com</p>
                    <p className="text-sm text-gray-700">+91 [mobile number]</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-bold mb-2">UAE Office</h3>
                    <p className="text-sm text-gray-700">[Your UAE Office Address]</p>
                    <p className="text-sm text-gray-700">uae@yourcompany.com</p>
                    <p className="text-sm text-gray-700">+971 [mobile number]</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Quote Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Request a <span className="text-blue-500">Quote</span>
                </h2>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We’ve received your request and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    {/* Select Service */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Select Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white transition-all"
                        required
                      >
                        <option value="">Select</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Your Message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                        required
                      />
                    </div>
                    {/* Checkboxes */}
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="notRobot"
                          checked={formData.notRobot}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4"
                          required
                        />
                        <span className="text-sm">I'm not a robot</span>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4 mt-0.5"
                          required
                        />
                        <span className="text-sm">
                          I agree to the{" "}
                          <span className="text-blue-600">Privacy Policy</span> and{" "}
                          <span className="text-blue-600">Terms & Conditions</span>
                        </span>
                      </label>
                    </div>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                      Submit Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
