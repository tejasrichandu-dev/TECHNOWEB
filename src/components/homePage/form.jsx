import React, { useEffect, useRef, useState } from 'react';

const Form = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States', flag: '🇺🇸' });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const countries = [
    { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', name: 'Albania', flag: '🇦🇱' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+376', name: 'Andorra', flag: '🇦🇩' },
    { code: '+244', name: 'Angola', flag: '🇦🇴' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+32', name: 'Belgium', flag: '🇧🇪' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+45', name: 'Denmark', flag: '🇩🇰' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+358', name: 'Finland', flag: '🇫🇮' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+30', name: 'Greece', flag: '🇬🇷' },
    { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', name: 'Iran', flag: '🇮🇷' },
    { code: '+964', name: 'Iraq', flag: '🇮🇶' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+972', name: 'Israel', flag: '🇮🇱' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+962', name: 'Jordan', flag: '🇯🇴' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+52', name: 'Mexico', flag: '🇲🇽' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+63', name: 'Philippines', flag: '🇵🇭' },
    { code: '+48', name: 'Poland', flag: '🇵🇱' },
    { code: '+351', name: 'Portugal', flag: '🇵🇹' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+40', name: 'Romania', flag: '🇷🇴' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+971', name: 'UAE', flag: '🇦🇪' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = sectionRef.current.offsetHeight;
        
        // Much wider scroll range for very slow animation
        // Start animation way before section enters viewport
        const triggerPoint = windowHeight * 2;
        // End animation way after section has scrolled past
        const endPoint = -windowHeight * 1;
        
        let progress = 0;
        
        if (rect.top <= triggerPoint && rect.top >= endPoint) {
          // Map the scroll range to 0-1
          progress = (triggerPoint - rect.top) / (triggerPoint - endPoint);
        } else if (rect.top < endPoint) {
          progress = 1;
        }
        
        // Apply easing function for smoother animation
        const easedProgress = progress * progress * (3 - 2 * progress); // Smoothstep easing
        setScrollProgress(easedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-[#323235] text-white min-h-screen flex items-center py-16 px-4"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            Ready to Elevate Your Digital Journey?
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-blue-400">
            Contact form
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Animated Circles */}
          <div className="w-full lg:w-1/2 flex justify-center items-start pt-16 relative h-80">
            {[0, 1, 2].map((_, i) => {
              const maxSpread = 200;
              let offset;
              // Start split, merge on scroll down
              // scrollProgress 0 = split, scrollProgress 1 = merged
              
              if (i === 0) {
                // Left circle: starts at -200, moves to 0
                offset = -maxSpread * (1 - scrollProgress);
              } else if (i === 1) {
                // Center circle: stays at 0
                offset = 0;
              } else {
                // Right circle: starts at 200, moves to 0
                offset = maxSpread * (1 - scrollProgress);
              }
              
              // Only middle circle is highlighted (full opacity), others are dim
              const opacity = i === 1 ? 1 : 0.3;
              
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{ 
                    transform: `translateX(${offset}px)`,
                    opacity: opacity,
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                  }}
                >
                  <div 
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-blue-400 flex items-center justify-center"
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Full Name*</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-300 text-sm mb-2">Email*</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone with Country Code Dropdown */}
              <div className="relative">
                <label className="block text-gray-300 text-sm mb-2">Phone</label>
                <div className="relative">
                  {/* Country Code Selector Button */}
                  <button
                    type="button"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="absolute left-0 bottom-3 flex items-center gap-1 text-blue-400 focus:outline-none z-10"
                  >
                    {selectedCountry.code === '+1' && selectedCountry.name === 'United States' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <span className="text-white bg-gray-700 px-2 py-1 rounded text-xs font-semibold min-w-[40px] text-center">
                        {selectedCountry.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Phone Input with left padding for flag */}
                  <input
                    type="tel"
                    placeholder=""
                    className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 pl-16 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  />

                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-[#3a3a3e] rounded border border-blue-500 shadow-xl z-50 max-h-96 overflow-hidden">
                      {/* Search */}
                      <div className="p-4 border-b border-blue-500">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="flex-1 bg-transparent text-blue-500 placeholder-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      
                      {/* Country List */}
                      <div className="overflow-y-auto max-h-80">
                        {filteredCountries.map((country, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                              setCountrySearch('');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-600 transition-colors text-left border-b border-gray-600"
                          >
                            <span className="text-white bg-gray-700 px-2 py-1 rounded text-sm font-semibold min-w-[48px] text-center">{country.name.substring(0, 2).toUpperCase()}</span>
                            <span className="flex-1 text-blue-500">{country.name}</span>
                            <span className="text-blue-500">{country.code}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Select Service */}
              <div className="relative">
                <label className="block text-gray-300 text-sm mb-2">Select Service *</label>
                <select className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer">
                  <option value="" className="bg-gray-300 text-gray-900">Choose a service</option>
                  <option value="web-development" className="bg-gray-300 text-gray-900">Web Development</option>
                  <option value="mobile-app" className="bg-gray-300 text-gray-900">Mobile App Development</option>
                  <option value="software-development" className="bg-gray-300 text-gray-900">Software Development</option>
                  <option value="ui-ux" className="bg-gray-300 text-gray-900">UI/UX Design</option>
                  <option value="digital-marketing" className="bg-gray-300 text-gray-900">Digital Marketing</option>
                  <option value="other" className="bg-gray-300 text-gray-900">Other / Custom Requirement</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-0 border-b-2 border-blue-400 text-white pb-3 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-transparent border-2 border-blue-400 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
