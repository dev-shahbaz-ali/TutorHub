"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cards = [
    {
      title: "Our Mission",
      content:
        "To make quality education accessible to every student by bridging the gap between learning and understanding with customized, one-on-one tutoring sessions.",
    },
    {
      title: "Why Choose Us?",
      content:
        "We handpick tutors who not only excel in academics but also inspire, mentor, and motivate students to reach their full potential with consistent support and care.",
    },
    {
      title: "Flexible Scheduling",
      content:
        "Learn at your pace and time. Our tutors adapt to your schedule, making education convenient and stress-free.",
    },
    {
      title: "Subjects We Cover",
      content:
        "From Math and Science to Languages and Arts, we cover a broad range of subjects across multiple education boards and curriculums.",
    },
  ];

  return (
    <div className="w-full max-w-[1125px] mx-auto">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:py-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.005 }}
          className="sm:px-6 shadow-2xl border border-blue-200 rounded-2xl py-15 lg:px-8 bg-white"
        >
          <div className="px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl mb-4 lg:text-5xl font-bold text-blue-700"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              Welcome to TutorHub — your trusted partner in personalized
              education. We connect passionate, experienced tutors with students
              who seek academic growth, confidence, and excellence. Whether it's
              exam prep or conceptual clarity, we tailor our tutoring to every
              student's unique needs.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="">
        {/* Features Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 md:mb-24"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
              className="bg-white border border-blue-200 rounded-xl shadow-lg py-6 px-6 min-w-[250px] max-w-[350px] flex-1"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  className="text-lg font-bold text-blue-600 mb-3"
                >
                  {card.title}
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="text-gray-600 text-md leading-relaxed"
              >
                {card.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.section
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col mb-16 lg:flex-row items-center justify-between gap-8 md:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 lg:mb-0">
              Shaping Futures Through Personalized Learning
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Join thousands of learners who've found confidence and clarity
              through our one-on-one home tutoring experience. Whether it's
              mastering a tough concept or preparing for a crucial exam, we're
              here to guide every step of the way.
            </p>
          </motion.div>
        </motion.section>
      </section>
    </div>
  );
};

export default AboutPage;
