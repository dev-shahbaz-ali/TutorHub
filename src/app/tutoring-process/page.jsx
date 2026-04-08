"use client";
import { AiFillFilePdf } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";

const FlowPage = () => {
  const steps = [
    {
      number: "1",
      title: "1. Application Submission",
      description:
        "Complete our online application form with your details, qualifications, and teaching preferences.",
      position: "right",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      iconColor: "text-blue-500",
      dotColor: "bg-blue-600",
      icon: <AiFillFilePdf size={24} />,
    },
    {
      number: "2",
      title: "2. Initial Contact",
      description:
        "Our team will reach out via email or WhatsApp within 48 hours to acknowledge your application.",
      position: "left",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      iconColor: "text-green-500",
      dotColor: "bg-blue-600",
      icon: <MdEmail size={24} />,
    },
    {
      number: "3",
      title: "3. Screening Call",
      description:
        "A short phone interview to discuss your experience, availability, and teaching approach.",
      position: "right",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      iconColor: "text-purple-500",
      dotColor: "bg-blue-600",
      icon: <FaPhoneAlt size={24} />,
    },
    {
      number: "4",
      title: "4. Demo Session",
      description:
        "Conduct a 15-20 minute demo lesson on a topic of your choice to showcase your teaching style.",
      position: "left",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      iconColor: "text-orange-500",
      dotColor: "bg-blue-600",
      icon: <MdOndemandVideo size={24} />,
    },
    {
      number: "5",
      title: "5. Assessment Test",
      description:
        "Complete a subject-specific test to verify your expertise in your chosen teaching area.",
      position: "right",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-100",
      iconColor: "text-pink-500",
      dotColor: "bg-blue-600",
      icon: <BsBookmarkCheckFill size={24} />,
    },
    {
      number: "6",
      title: "6. Final Approval",
      description:
        "Successful candidates receive onboarding materials and can start accepting tutoring sessions.",
      position: "left",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-100",
      iconColor: "text-cyan-500",
      dotColor: "bg-blue-600",
      icon: <FcBusinessman size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const leftStepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.2,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-10 mb-3"
          >
            Tutor Onboarding Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Our 6-step selection ensures quality education standards
          </motion.p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 h-full"
          />

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 md:mb-20">
              {/* Step Dot on Timeline */}
              <motion.div
                variants={dotVariants}
                whileHover="hover"
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${step.dotColor} rounded-full z-10`}
                style={{ top: "50px" }}
              />

              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${step.dotColor} text-white rounded-full flex items-center justify-center font-bold text-lg z-10`}
                style={{ top: "50px" }}
              >
                {step.number}
              </motion.div>

              {/* Step Card with increased gap from timeline */}
              <div
                className={`flex ${
                  step.position === "right"
                    ? "md:justify-end"
                    : "md:justify-start"
                } justify-center`}
              >
                <motion.div
                  variants={
                    step.position === "right" ? stepVariants : leftStepVariants
                  }
                  whileHover="hover"
                  custom={index}
                  className={`w-full md:w-[400px] ${step.bgColor} border ${
                    step.borderColor
                  } px-5 py-8 rounded-xl shadow-md ${
                    step.position === "right"
                      ? "md:mr-16 md:ml-0" // Increased gap for right cards
                      : "md:ml-16 md:mr-0" // Increased gap for left cards
                  }`}
                >
                  <div className="flex items-start">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center mr-4 shadow-sm"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        className={step.iconColor}
                      >
                        {step.icon}
                      </motion.div>
                    </motion.div>
                    <div>
                      <motion.h3
                        initial={{
                          opacity: 0,
                          x: step.position === "right" ? -10 : 10,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="font-bold text-gray-900 text-lg mb-2"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="text-gray-600"
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-20 mb-10"
        >
          <div className="bg-blue-50 rounded-2xl shadow-xl mx-auto w-full max-w-[900px] px-6 py-10 md:px-10 md:py-12 text-center ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Ready to Begin Your Teaching Journey?
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Join our network of passionate educators and make a lasting impact
              on students worldwide.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-7000 transition-all duration-300 shadow-lg hover:shadow-xl text-lg cursor-pointer">
                Start Your Application &nbsp; &#8594;
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-sm md:text-base opacity-80"
            >
              Application takes less than 5 minutes to complete
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlowPage;
