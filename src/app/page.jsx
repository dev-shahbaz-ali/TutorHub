"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Services from "./components/Services";
import Learning from "./components/Learning";
import Subject from "./components/Subject";
import OnlineSubject from "./components/OnlineSubject";
import BestTutorsPage from "./for-students/page";

const Page = () => {
  const [glowIndex, setGlowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prev) => (prev === 0 ? 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white overflow-hidden">
      <div className="max-w-[1115px] mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Content - Animate from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 mb-2"
            >
              <p className="text-blue-700 text-lg font-bold">
                🎓 Get{" "}
                <span className="hover:underline">
                  2 Days of Free Demo Classes
                </span>{" "}
                - No cost, just learning!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-[380px]"
            >
              <h1 className="text-6xl font-bold mb-6">
                Find Your Perfect <span className="text-blue-700">Tutor</span>
              </h1>
              <p className="font-medium text-md text-gray-600 mb-8">
                We help you find the perfect tutor for 1-on-1 lessons. It is
                completely free and private
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow:
                    glowIndex === 0
                      ? "0 0 20px 0 rgba(249, 115, 22, 0.5)"
                      : "0 0 5px 0 rgba(107, 114, 128, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className={`px-8 py-2 text-lg font-semibold cursor-pointer rounded-full ${
                  glowIndex === 0
                    ? "bg-orange-500 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                Find Tutor
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow:
                    glowIndex === 0
                      ? "0 0 20px 0 rgba(249, 115, 22, 0.5)"
                      : "0 0 5px 0 rgba(107, 114, 128, 0.3)",
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`px-8 py-2 text-lg font-semibold cursor-pointer rounded-full ${
                  glowIndex === 0
                    ? "bg-orange-500 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                Apply Tutor
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image - Animate from right */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              src="https://tutor-hub-eta.vercel.app/assets/tutorhub5-CkUoF72k.png"
              alt="Tutor Hub - Online tutoring platform"
              className="w-full wrap-normal max-w-[800px] mt-2 h-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      <Counting />
      <Services />
      {/* <Learning /> */}
      <BestTutorsPage />
      <Subject />
      <OnlineSubject />
    </main>
  );
};

export default Page;

export const Counting = () => {
  const [counts, setCounts] = useState({
    tutors: 0,
    hours: 0,
    subjects: 0,
    students: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const countingRef = useRef(null);

  const targetValues = {
    tutors: 3029,
    hours: 3025,
    subjects: 4.6,
    students: 798,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate all counts with decimal support for subjects
            Object.keys(targetValues).forEach((key) => {
              const target = targetValues[key];
              let startTime = Date.now();
              const duration = 2000;

              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuad = (t) => t * (2 - t);
                const easedProgress = easeOutQuad(progress);

                let currentValue;
                if (key === "subjects") {
                  // For decimal numbers (like 4.6), animate with one decimal place
                  currentValue = parseFloat(
                    (easedProgress * target).toFixed(1)
                  );
                } else {
                  currentValue = Math.floor(easedProgress * target);
                }

                setCounts((prev) => ({ ...prev, [key]: currentValue }));

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num) => {
    if (typeof num === "number" && num.toString().includes(".")) {
      return num.toFixed(1);
    }
    return num.toLocaleString();
  };

  return (
    <div
      ref={countingRef}
      className="grid grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-blue-50 to-gray-100 py-12 md:py-17 px-4 md:px-12 lg:px-55 gap-6 md:gap-8"
    >
      {[
        {
          label: "Expert tutors",
          value: counts.tutors,
          suffix: "+",
        },
        {
          label: "Student Served",
          value: counts.hours,
          suffix: "",
        },
        {
          label: "Ranked on Google",
          value: counts.subjects,
          suffix: "",
          showStar: true,
        },
        {
          label: "Active students",
          value: counts.students,
          suffix: "+",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="text-center group"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${
              index * 100
            }ms, transform 0.6s ease ${index * 100}ms`,
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">{stat.icon}</span>
            <div className="text-3xl md:text-4xl font-black">
              {formatNumber(stat.value)}
              {stat.suffix}
            </div>
          </div>
          <div className="font-semibold text-gray-700 transition-colors duration-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
