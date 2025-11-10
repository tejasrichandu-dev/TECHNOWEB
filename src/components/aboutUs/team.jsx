import React from "react";
import { motion } from "framer-motion";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Uda Mahesh",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=400&fit=crop&crop=face",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl font-bold">
            Meet <span className="text-blue-600">Our Team</span>
          </h1>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * teamMembers.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: teamMembers.length * 2,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                variants={cardVariants}
                className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Team Member Card */}
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  {/* Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-base text-gray-600">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
