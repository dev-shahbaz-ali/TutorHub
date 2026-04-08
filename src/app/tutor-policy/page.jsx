"use client";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      x: 8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const guidelines = [
    {
      title: "1. Professional Behavior",
      description:
        "Tutors are expected to act respectfully and professionally at all times, especially when representing the platform. Communication should remain clear, appropriate, and inclusive.",
    },
    {
      title: "2. Privacy & Data Protection",
      description:
        "All student information, including names, academic records, and personal identifiers, must be kept confidential. Tutors may not store, share, or disclose this data outside the session context.",
    },
    {
      title: "3. Session Attendance",
      description:
        "Tutors must attend sessions promptly. If a cancellation is necessary, advance notice (ideally 12 hours) should be provided to minimize disruption for learners.",
    },
    {
      title: "4. Preparedness & Structure",
      description:
        "Tutors should prepare relevant and personalized content for each session. Lessons must be structured, focused, and free from random or unverified materials.",
    },
    {
      title: "5. No Unauthorized Recording",
      description:
        "Recording of sessions, screen captures, or saving chat logs without written permission is prohibited. Tutors are not allowed to store or share such content for personal or public use.",
    },
    {
      title: "6. Student Respect & Safety",
      description:
        "Tutors must foster a safe, non-judgmental environment. Discrimination, bias, or coercion of any kind is not tolerated, and violations may lead to account suspension.",
    },
    {
      title: "7. Academic Integrity",
      description:
        "Tutors should not complete student assignments or tests on their behalf. The goal is to guide students to learn — not to bypass academic effort.",
    },
    {
      title: "8. Communication Boundaries",
      description:
        "All contact with students should occur within platform-approved channels. Personal messaging or off-platform contact without consent is not permitted.",
    },
    {
      title: "9. Use of Learning Resources",
      description:
        "Only appropriate, age-aligned, and verified content should be used. Avoid using uncredited sources, AI-generated answers, or copyrighted material without permission.",
    },
    {
      title: "10. Platform Compliance",
      description:
        "Tutors agree to follow all platform rules and updates, including privacy practices, code of conduct, and content guidelines as updated from time to time.",
    },
  ];

  return (
    <div className="bg-blue-100 py-14 min-h-screen">
      <div className="flex flex-col w-full max-w-[900px] bg-white shadow-md mx-auto gap-6 rounded-2xl overflow-hidden">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="bg-blue-600 py-6 px-6 flex flex-col gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white font-bold text-4xl"
          >
            Tutor Guidelines & Privacy
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200 text-sm"
          >
            Our tutors play a vital role in maintaining a safe, private, and
            supportive learning environment.
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="p-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex px-1 mb-8"
          >
            <div className="border-l-4 border-blue-600 mr-4"></div>
            <p className="text-gray-700">
              These responsibilities ensure student privacy, platform integrity,
              and quality education for all learners.
            </p>
          </motion.div>

          {/* Guidelines List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="px-4 py-4 hover:bg-blue-50 rounded-lg border-l-4 border-transparent hover:border-blue-500 transition-colors duration-300"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <motion.h2
                  className="text-blue-700 font-bold text-xl mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {guideline.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  className="text-gray-600"
                >
                  {guideline.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
