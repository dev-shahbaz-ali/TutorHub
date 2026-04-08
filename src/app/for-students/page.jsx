"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Tutor data in JSON format - easily add more tutors here
const tutorsData = [
  {
    id: 1,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6027.jpg",
    name: "Ali",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: physics, math, chemistry",
    bookDemo: "Book Demo",
  },
  {
    id: 2,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6022.jpg",
    name: "Fatima",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: physics, math",
    bookDemo: "Book Demo",
  },
  {
    id: 3,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6006.jpg",
    name: "Kashif",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: biology, physics",
    bookDemo: "Book Demo",
  },
  {
    id: 4,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6025.jpg",
    name: "Hafiz",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: physics",
    bookDemo: "Book Demo",
  },
  {
    id: 5,
    image: "https://foriedu.com/uploads/profile-images/user_dp_4807.jpg",
    name: "Malik",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: physics, math",
    bookDemo: "Book Demo",
  },
  {
    id: 6,
    image: "https://foriedu.com/uploads/profile-images/user_dp_5635.jpg",
    name: "Zainab ",
    education: "Mphil Education Leadership and management",
    subjects: "Subjects expertise: physics, urdu",
    bookDemo: "Book Demo",
  },
  {
    id: 7,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6027.jpg",
    name: "Usman ",
    education: "PhD in Physics",
    subjects: "Subjects expertise: physics, calculus",
    bookDemo: "Book Demo",
  },
  {
    id: 8,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6022.jpg",
    name: "Sara ",
    education: "MSc Mathematics",
    subjects: "Subjects expertise: algebra, geometry",
    bookDemo: "Book Demo",
  },
  {
    id: 9,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6006.jpg",
    name: "Bilal",
    education: "MPhil Chemistry",
    subjects: "Subjects expertise: chemistry, organic chemistry",
    bookDemo: "Book Demo",
  },
  {
    id: 10,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6027.jpg",
    name: "Tariq",
    education: "PhD in Physics",
    subjects: "Subjects expertise: physics, calculus",
    bookDemo: "Book Demo",
  },
  {
    id: 11,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6022.jpg",
    name: "Ahmed",
    education: "MSc Mathematics",
    subjects: "Subjects expertise: algebra, geometry",
    bookDemo: "Book Demo",
  },
  {
    id: 12,
    image: "https://foriedu.com/uploads/profile-images/user_dp_6006.jpg",
    name: "Hussain",
    education: "MPhil Chemistry",
    subjects: "Subjects expertise: chemistry, organic chemistry",
    bookDemo: "Book Demo",
  },
];

const BestTutorsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate number of slides based on 3 tutors per slide
  const slidesCount = Math.ceil(tutorsData.length / 3);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  // Get tutors for current slide (3 tutors per slide)
  const getTutorsForSlide = (slideIndex) => {
    const startIndex = slideIndex * 3;
    const endIndex = startIndex + 3;
    return tutorsData.slice(startIndex, endIndex);
  };

  return (
    <div className="w-full max-w-[1125px] mx-auto px-4">
      {/* Animated Header Section */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="text-4xl md:text-5xl font-black text-blue-700 mt-10 md:mt-20"
        >
          Our Best Tutors
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.6,
          }}
          className="text-gray-500 mt-4 mb-10 md:mb-16 text-base md:text-lg w-full max-w-[600px] mx-auto"
        >
          Discover dedicated, expert tutors ready to guide students with
          personalized academic support and mentorship.
        </motion.div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        {slidesCount > 1 && (
          <>
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -left-4 md:-left-8 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors z-10"
              aria-label="Previous tutors"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -right-4 cursor-pointer md:-right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors z-10"
              aria-label="Next tutors"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </motion.button>
          </>
        )}

        {/* Slider Content */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {getTutorsForSlide(currentSlide).map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <motion.img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                />
                <div className="flex-1 min-w-0">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="text-lg font-bold text-blue-700 block mb-1 truncate"
                  >
                    {tutor.name}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="text-gray-500 text-sm block mb-2 line-clamp-2"
                  >
                    {tutor.education}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="text-gray-500 text-sm block mb-3"
                  >
                    {tutor.subjects}
                  </motion.span>

                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium underline cursor-pointer text-left"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tutor.bookDemo}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators */}
        {slidesCount > 1 && (
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestTutorsPage;
