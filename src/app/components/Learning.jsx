"use client";
import React, { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

const Learning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const learningRef = useRef(null);
  const [firstImageVisible, setFirstImageVisible] = useState(false);
  const [secondImageVisible, setSecondImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // First image animates from bottom
            setTimeout(() => setFirstImageVisible(true), 300);
            // Second image animates from top
            setTimeout(() => setSecondImageVisible(true), 600);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (learningRef.current) {
      observer.observe(learningRef.current);
    }

    return () => {
      if (learningRef.current) {
        observer.unobserve(learningRef.current);
      }
    };
  }, []);

  return (
    <div ref={learningRef} className="md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 md:mb-24">
          {/* Left Image */}
          <div
            className={`lg:w-1/2 transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                className="w-[400px] h-[300px] rounded-lg shadow-2xl border-4 border-orange-500 mx-auto lg:mx-0 transition-all duration-1000"
                src="https://tutor-hub-eta.vercel.app/assets/tutorhub.png-Dyqg5YqJ.png"
                alt="Student learning online with flexible schedule"
                style={{
                  transform: firstImageVisible
                    ? "translateY(0)"
                    : "translateY(100px)",
                  opacity: firstImageVisible ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`lg:w-1/2 transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-2 text-blue-700 rounded-full">
                <span className="font-semibold text-sm uppercase">
                  CUSTOMIZE WITH YOUR SCHEDULE
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                Personalized Professional Online Tutor on Your Schedule
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our scheduling system allows you to select based on your free
                time. Lorem ipsum demo text for template. Keep track of your
                students class and tutoring schedules, and never miss your
                lectures. The best online class scheduling system with easy
                accessibility. Lorem ipsum is a placeholder text commonly used
                to demonstrate the visual form.
              </p>

              {/* Get Started Button */}
              <button className="px-11 py-3 bg-[#D3D3D3] cursor-pointer hover:bg-orange-500 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group">
                <span className="text-lg">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quote Section */}

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 order-2 lg:order-1 transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 py-2 text-blue-700 rounded-full">
                <span className="font-semibold text-sm uppercase">
                  CUSTOMIZE WITH YOUR SCHEDULE
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                Talented and Qualified Tutors to Serve You for Help
              </h2>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Our scheduling system allows you to select based on your free
                time. Lorem ipsum demo text for template. Keep track of your
                students class and tutoring schedules, and never miss your
                lectures. The best online class scheduling system with easy
                accessibility. Lorem ipsum is a placeholder text commonly used.
              </p>

              {/* Get Started Button */}
              <button className="px-8 py-3.5 bg-[#D3D3D3] cursor-pointer hover:bg-orange-500 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group">
                <span className="text-lg">Get Started</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`lg:w-1/2 order-1 lg:order-2 transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative ml-25">
              <img
                className="w-[400px] h-[300px] rounded-lg shadow-2xl border-4 border-orange-500 mx-auto lg:mx-0 transition-all duration-1000"
                src="https://tutor-hub-eta.vercel.app/assets/tutorhub3-C_U7SwqM.png"
                alt="Qualified tutors providing help and support"
                style={{
                  transform: secondImageVisible
                    ? "translateY(0)"
                    : "translateY(-100px)",
                  opacity: secondImageVisible ? 1 : 0,
                }}
              />
              {/* Floating Badge */}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS for better mobile experience */}
      <style jsx>{`
        @media (max-width: 768px) {
          .ml-25 {
            margin-left: 0 !important;
          }

          .max-w-xl {
            max-width: 100% !important;
          }

          .h-[300px] {
            height: 250px !important;
          }

          .max-w-[400px] {
            max-width: 350px !important;
          }
        }

        @media (max-width: 640px) {
          .h-[300px] {
            height: 200px !important;
          }

          .max-w-[400px] {
            max-width: 300px !important;
          }

          .text-3xl {
            font-size: 1.75rem !important;
          }

          .text-2xl {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Learning;
