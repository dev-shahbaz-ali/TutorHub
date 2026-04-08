"use client";
import React, { useEffect, useRef, useState } from "react";

const Subject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const subjectRef = useRef(null);
  const [cardStates, setCardStates] = useState(Array(8).fill(false));

  const subjects = [
    {
      name: "Engineering",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </span>
      ),
      color: "bg-blue-500 text-white",
    },
    {
      name: "English",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-green-500 text-white",
    },
    {
      name: "Programming",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </span>
      ),
      color: "bg-purple-600 text-white",
    },
    {
      name: "Science",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-orange-400 text-white",
    },
    {
      name: "History",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-green-900 text-white",
    },
    {
      name: "Psychology",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-[#986d1d] text-white",
    },
    {
      name: "Web design",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-red-800 text-white",
    },
    {
      name: "See all",
      icon: (
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
        </span>
      ),
      color: "bg-gray-700 text-white",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards from left one by one
            subjects.forEach((_, index) => {
              setTimeout(() => {
                setCardStates((prev) => {
                  const newStates = [...prev];
                  newStates[index] = true;
                  return newStates;
                });
              }, index * 150); // 150ms delay between each card
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subjectRef.current) {
      observer.observe(subjectRef.current);
    }

    return () => {
      if (subjectRef.current) {
        observer.unobserve(subjectRef.current);
      }
    };
  }, []);

  return (
    <div ref={subjectRef} className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container max-w-[1125px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block mb-2">
            <span className="text-orange-400 font-bold text-base sm:text-lg md:text-xl">
              Our Tutor Subjects
            </span>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
            Find Online Tutor in Any Subject
          </h2>
        </div>

        {/* Subjects - Responsive Grid */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* First Row - 4 subjects */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {subjects.slice(0, 4).map((subject, index) => (
              <div
                key={subject.name}
                className="flex items-center w-[calc(50%-6px)] xs:w-[calc(50%-8px)] sm:w-[calc(25%-15px)] md:w-[calc(25%-20px)] lg:w-[calc(25%-24px)] bg-white rounded-lg border px-3 py-3 sm:px-4 sm:py-4 border-orange-100 text-center hover:shadow-lg transition-all duration-300 group"
                style={{
                  transform: cardStates[index]
                    ? "translateX(0)"
                    : "translateX(-100px)",
                  opacity: cardStates[index] ? 1 : 0,
                  transition:
                    "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out, box-shadow 0.3s ease",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${subject.color} rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0`}
                >
                  <div className="text-sm sm:text-base md:text-lg">
                    {subject.icon}
                  </div>
                </div>

                {/* Subject Name */}
                <div className="text-sm sm:text-base md:text-lg font-medium truncate">
                  {subject.name}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 4 subjects */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
            {subjects.slice(4, 8).map((subject, index) => (
              <div
                key={subject.name}
                className="flex items-center w-[calc(50%-6px)] xs:w-[calc(50%-8px)] sm:w-[calc(25%-15px)] md:w-[calc(25%-20px)] lg:w-[calc(25%-24px)] bg-white rounded-lg border px-3 py-3 sm:px-4 sm:py-4 border-orange-100 text-center hover:shadow-lg transition-all duration-300 group"
                style={{
                  transform: cardStates[index + 4]
                    ? "translateX(0)"
                    : "translateX(-100px)",
                  opacity: cardStates[index + 4] ? 1 : 0,
                  transition:
                    "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-out, box-shadow 0.3s ease",
                  transitionDelay: `${(index + 4) * 150}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${subject.color} rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0`}
                >
                  <div className="text-sm sm:text-base md:text-lg">
                    {subject.icon}
                  </div>
                </div>

                {/* Subject Name */}
                <div className="text-sm sm:text-base md:text-lg font-medium truncate">
                  {subject.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
