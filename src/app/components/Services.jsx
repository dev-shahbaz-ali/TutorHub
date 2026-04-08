"use client";
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
  const [buttonStates, setButtonStates] = useState(Array(6).fill(false));

  const services = [
    "Home Tutor in Lahore",
    "Home Tutor in Karachi",
    "Home Tutor in Islamabad",
    "Online Quran Tutor",
    "Online Tutor in Pakistan",
    "Other Tutors",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            services.forEach((_, index) => {
              setTimeout(() => {
                setButtonStates((prev) => {
                  const newStates = [...prev];
                  newStates[index] = true;
                  return newStates;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div ref={servicesRef} className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:mb-16">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            Select The Tutor Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Truly Suits You
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              className="cursor-pointer py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 text-blue-600 font-semibold group"
              style={{
                transform: buttonStates[index]
                  ? "translateX(0)"
                  : "translateX(100px)",
                opacity: buttonStates[index] ? 1 : 0,
                transition:
                  "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out, all 0.3s ease",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
