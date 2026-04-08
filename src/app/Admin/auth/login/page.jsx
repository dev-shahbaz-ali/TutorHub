"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login form submitted:", formData);
      setIsLoading(false);
      // Add your actual login logic here
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center px-4 py-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div
          variants={formVariants}
          className="bg-white rounded-2xl shadow-2xl px-6 py-10 sm:px-8 sm:py-12"
        >
          {/* SEO-friendly heading */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-3">
              Admin Login
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div variants={inputVariants}>
              <label
                htmlFor="email"
                className="sr-only"
                aria-label="Email address"
              >
                Email Address
              </label>
              <motion.input
                whileFocus="focus"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500"
                required
                aria-required="true"
                aria-describedby="email-description"
              />
              <p id="email-description" className="sr-only">
                Enter your registered email address
              </p>
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="password"
                className="sr-only"
                aria-label="Password"
              >
                Password
              </label>
              <motion.input
                whileFocus="focus"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500"
                required
                aria-required="true"
                aria-describedby="password-description"
              />
              <p id="password-description" className="sr-only">
                Enter your secure password
              </p>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <motion.button
                type="submit"
                whileHover={!isLoading ? "hover" : {}}
                whileTap={!isLoading ? "tap" : {}}
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isLoading
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-blue-800"
                }`}
                aria-label={
                  isLoading ? "Signing in..." : "Sign in to your account"
                }
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
