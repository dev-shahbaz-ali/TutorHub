"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OnlineSubject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const tutors = [
    {
      name: "John Doe",
      role: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
    {
      name: "Steve Smith",
      role: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
    {
      name: "Kristen",
      role: "IOS Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
    {
      name: "Ariana",
      role: "Android Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
    {
      name: "Steve Smith",
      role: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste roitone ex alias quis magni at oprio",
    },
  ];

  // Calculate visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.ceil(tutors.length / visibleCards) - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    const maxIndex = Math.ceil(tutors.length / visibleCards) - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalSlides = Math.ceil(tutors.length / visibleCards);
  const startIndex = currentIndex * visibleCards;
  const visibleTutors = tutors.slice(startIndex, startIndex + visibleCards);

  const cardVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const starsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#f97316",
      color: "white",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const indicatorVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-2"
          >
            <span className="text-orange-400 font-bold text-xl">
              Our Tutor Subjects
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-3xl font-bold text-gray-900 mb-4"
          >
            Find Online Tutor in Any Subject
          </motion.h2>
        </motion.div>

        {/* Cards Slider Container */}
        <div className="relative">
          {/* Cards Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center space-x-0 md:space-x-6 lg:space-x-8 overflow-hidden"
            >
              {visibleTutors.map((tutor, index) => (
                <motion.div
                  key={`${startIndex + index}-${currentIndex}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  custom={index}
                  className="flex-shrink-0 bg-white border border-orange-200 rounded-lg shadow-lg overflow-hidden"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${
                      visibleCards > 1 ? (visibleCards - 1) * 1.5 : 0
                    }rem)`,
                    maxWidth: "350px",
                    minWidth: "280px",
                    margin: "0 0.75rem",
                  }}
                >
                  {/* Card Content */}
                  <div className="py-10 px-6 flex flex-col">
                    {/* Profile Section */}
                    <div className="mb-4 flex items-center">
                      <motion.div
                        variants={avatarVariants}
                        whileHover="hover"
                        className="w-18 h-18 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-white text-2xl font-bold"
                        >
                          {tutor.name.charAt(0)}
                        </motion.span>
                      </motion.div>
                      <motion.div variants={textVariants} className="ml-5">
                        <h3 className="text-xl font-bold text-gray-900">
                          {tutor.name}
                        </h3>
                        <p className="font-medium">{tutor.role}</p>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <div className="flex-grow flex flex-col">
                      <motion.p
                        variants={textVariants}
                        className="text-gray-600 text-md pr-10 leading-relaxed"
                      >
                        {tutor.description}
                      </motion.p>
                      <motion.div
                        variants={starsVariants}
                        whileHover="hover"
                        className="mt-3"
                      >
                        <motion.p
                          animate={{
                            rotate: [0, 2, -2, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-gray-600"
                        >
                          ⭐⭐⭐⭐⭐
                        </motion.p>
                      </motion.div>
                    </div>

                    {/* Floating effects */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.8, 1.2, 0.8],
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className="absolute w-32 h-32 bg-orange-200 rounded-full -bottom-10 -right-10 blur-xl -z-10"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-8 space-x-2"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                variants={indicatorVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-400"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                style={{
                  width: index === currentIndex ? "32px" : "12px",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OnlineSubject;
