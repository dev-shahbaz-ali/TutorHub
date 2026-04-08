"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare, FaClock } from "react-icons/fa";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaWhatsappSquare className="w-6 h-6" />,
      title: "Whatsapp",
      value: "+92 341 4133395",
      color: "text-blue-600",
    },
    {
      icon: <FaPhoneFlip className="w-6 h-6" />,
      title: "Phone",
      value: "+92 341 4133395",
      color: "text-blue-600",
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email",
      value: "tutorhubofficial@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 7:00 PM",
      color: "text-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.01,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
      <div className="w-full max-w-[1125px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-blue-700 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We value every query and message. Feel free to drop a line, and our
            team will get back to you swiftly!
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          {/* Contact Information Section */}
          <motion.div variants={itemVariants} className="lg:w-2/5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl h-full"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-4 py-6 px-4 rounded-xl shadow-xl hover:shadow-2xl mb-6 bg-white"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`${info.color} p-3 rounded-lg flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-600 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={formVariants} className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.005 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Name Input */}
                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="name"
                    className="block text-md font-semibold text-blue-700 mb-2"
                  >
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                    }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-blue-300 outline-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="email"
                    className="block text-md font-semibold text-blue-700 mb-2"
                  >
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                    }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg outline-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div variants={inputVariants}>
                  <label
                    htmlFor="message"
                    className="block text-md font-semibold text-blue-700 mb-2"
                  >
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{
                      scale: 1.01,
                      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                    }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg outline-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-400 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={inputVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center italic text-gray-400 mt-20"
        >
          We typically respond within 24 hours. Thank you for choosing our
          tutoring services.
        </motion.p>
      </div>
    </div>
  );
};

export default ContactPage;
