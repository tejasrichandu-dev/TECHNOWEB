import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const Approach = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Hero Section */}
       <div 
        className="absolute inset-0 bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.postimg.cc/5jWjpzGt/6feb8f69dc6203757d9cd09cb83f7f734d5a4e33.png')"
        }}
      />
      <div className="container px-6 py-16 font-poppins">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-poppins text-[#3B82F6] leading-tight mb-8 max-w-4xl">
            Stand unique on-stream in the tomorrow-world of technologies.
          </h1>
          
          {/* Description Paragraph */}
          <div className="text-[#435479] text-lg">
            <p className="mb-4">
              Since our founding in 2022, TechnoWeb has been on a mission to empower businesses with technology that drives real growth. We believe that true progress is a journey we take together with our clients, because as you grow, Together, We Grow. We are a team of passionate innovators and experts dedicated to simplifying the complexities of the digital world.We provide a full spectrum of professional IT services and build our own innovative products, ensuring our clients have the precise tools and expert guidance they need.
            </p>
          </div>
          
          {/* Our Approach Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#435479] mb-6">Our Approach</h2>
            <div className="text-[#435479] ">
              <p>Your success is our priority. We work closely with you to understand your unique challenges, and then provide tailored solutions that address your specific needs. We specialize in:</p>
              <p><strong>Software Development:</strong> Crafting custom solutions for web, mobile, and ERP platforms.</p>
              <p><strong>AI Development:</strong> Leveraging artificial intelligence to create smarter, more efficient systems.</p>
              <p><strong>Digital Marketing:</strong> Driving growth and expanding your reach with data-driven strategies.</p>
              <p>At TechnoWeb, we are committed to being more than just a service provider—we are your trusted technology partner, dedicated to helping your business thrive.</p>
            </div>
          </div>
        
        
        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {/* Mission Card */}
          <div className="bg-[#323235] text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl mb-4">Mission</h3>
            <p className="text-white">
              To take up and help grow every business that come to us on-stream and off-stream with effectively performing, user friendly and quality output solutions which can sprout productivity at every bit.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-[#323235] text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl mb-4">Vision</h3>
            <p className="text-white">
              We seek to create an environment where everyone can savor the advantages of advanced technologies, ensuring equally satisfying services for all in the team of technology.
            </p>
          </div>
          
          {/* Core Values Card */}
          <div className="bg-[#323235] text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl mb-4">Core Values</h3>
            <p className="text-white">
              We listen and then organise adhering to established ethical procedures and emphasising ethical outcomes that benefit you financially. We are relatable to timely and cost-effective delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
