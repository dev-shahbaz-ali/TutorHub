"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const InternationalClientPage = () => {
  const [activeCountry, setActiveCountry] = useState("Pakistan");
  const [isVisible, setIsVisible] = useState(false);

  const rateCards = {
    Pakistan: [
      {
        id: 1,
        title: "IGCSE",
        price: "Rs 20,000",
        period: "Month",
      },
      {
        id: 2,
        title: "A Level",
        price: "Rs 25,000",
        period: "Month",
      },
    ],
    Saudi: [
      {
        id: 1,
        title: "IGCSE",
        price: "SAR 300",
        period: "Month",
      },
      {
        id: 2,
        title: "A Level",
        price: "SAR 340",
        period: "Month",
      },
    ],
    UAE: [
      {
        id: 1,
        title: "IGCSE",
        price: "AED 300",
        period: "Month",
      },
      {
        id: 2,
        title: "A Level",
        price: "AED 340",
        period: "Month",
      },
    ],
    Europe: [
      {
        id: 1,
        title: "IGCSE",
        price: "€ 90",
        period: "Month",
      },
      {
        id: 2,
        title: "A Level",
        price: "€ 110",
        period: "Month",
      },
    ],
  };

  const countries = [
    { name: "Pakistan" },
    { name: "Saudi" },
    { name: "UAE" },
    { name: "Europe" },
  ];

  // Course Details Data - Easily update course information here
  const courseDetails = [
    {
      id: 1,
      title: "A Level",
      tag: "h3",
      content: [
        "1. Premium Offer 20% on 3 or more subjects",
        "2. Sibling Offer 10% off on up to 2 Sibling",
      ],
      listType: "ol",
    },
    {
      id: 2,
      title: "IGCSE",
      tag: "h3",
      content: [
        "1. Premium Offer 20% on 3 or more subjects",
        "2. Sibling Offer 10% off on up to 2 Sibling",
      ],
      listType: "ol",
    },
    {
      id: 3,
      title: "Junior",
      tag: "h3",
      content: [
        "1. Premium Offer 20% on 3 or more subjects",
        "2. Sibling Offer 10% off on up to 2 Sibling",
      ],
      listType: "ol",
    },
  ];

  // Footer Notes - Easily update or add more notes
  const footerNotes = [
    "**All Prices mentioned are per subject/month",
    "**Each SAT course lasts for two months",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper function to render lists based on type
  const renderList = (items, type = "ul") => {
    const ListComponent = type === "ol" ? "ol" : "ul";

    return (
      <ListComponent className="text-left pl-4 sm:pl-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="mb-4 sm:mb-6 text-sm sm:text-base last:mb-0"
          >
            {item}
          </li>
        ))}
      </ListComponent>
    );
  };

  // Helper function to render heading tags
  const renderHeading = (title, tag = "h3") => {
    const HeadingTag = tag;
    return (
      <HeadingTag className="text-blue-600 sm:text-blue-500 font-bold text-xl sm:text-2xl mb-2 sm:mb-3">
        {title}
      </HeadingTag>
    );
  };

  return (
    <main className="min-h-screen py-8 md:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            International Rate Card
          </h1>
          <p className="sr-only">
            Compare pricing for IGCSE and A Level tutoring across different
            countries
          </p>
        </header>

        {/* Country Tabs */}
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 lg:mb-16"
          aria-label="Country selection"
        >
          {countries.map((country, index) => (
            <button
              key={country.name}
              onClick={() => setActiveCountry(country.name)}
              aria-label={`View rates for ${country.name}`}
              aria-pressed={activeCountry === country.name}
              className={`flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 ${
                activeCountry === country.name
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transition: "all 0.5s ease-out",
              }}
            >
              <div className="text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg cursor-pointer">
                  {country.name}
                </div>
              </div>
              {activeCountry === country.name && (
                <CheckCircle
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Rate Cards Section */}
        <section
          className={`flex flex-col md:flex-row justify-center border-2 py-8 sm:py-12 md:py-16 border-blue-900 gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          aria-label="Pricing cards"
        >
          {rateCards[activeCountry]?.map((card, index) => (
            <article
              key={card.id}
              className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] max-w-sm sm:max-w-md mx-auto md:mx-0 transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2`}
              >
                <div className="">
                  {/* Card Header */}
                  <header className="flex bg-blue-700 py-3 items-start mb-4 sm:mb-6">
                    <div className="text-center mx-auto">
                      <h2 className="text-xl text-white sm:text-2xl font-bold mb-1">
                        {card.title}
                      </h2>
                    </div>
                  </header>

                  {/* Price Section */}
                  <div className="p-5 sm:p-6 md:p-8 mb-4 sm:mb-6 flex items-baseline text-center justify-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
                      {card.price}
                    </div>
                    <div className="ml-2 font-medium">
                      <span className="font-bold text-blue-500">
                        /{card.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          className="mt-8 md:mt-10 lg:mt-12 "
          aria-label="Course details"
        >
          <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-5 mb-20">
            {courseDetails.slice(0, 2).map((course) => (
              <div
                key={course.id}
                className="border-b-4 border-blue-800 rounded-xl sm:rounded-2xl my-2 sm:my-4 px-4 py-4 sm:px-6 sm:py-6 w-full max-w-full sm:max-w-[500px] shadow-md sm:shadow-lg text-center"
              >
                {renderHeading(course.title, course.tag)}
                <p className="mb-2 sm:mb-3 text-sm sm:text-base">Details</p>
                {renderList(course.content, course.listType)}
              </div>
            ))}
          </div>

          {/* Second Row - Junior (Centered) */}
          {courseDetails.slice(2).map((course) => (
            <div
              key={course.id}
              className="border-b-4 border-blue-800 rounded-xl sm:rounded-2xl my-4 sm:my-6 px-4 py-4 sm:px-6 sm:py-6 w-full max-w-full sm:max-w-[500px] shadow-md sm:shadow-lg text-center mx-auto"
            >
              {renderHeading(course.title, course.tag)}
              <p className="mb-2 sm:mb-3 text-sm sm:text-base">Details</p>
              {renderList(course.content, course.listType)}
            </div>
          ))}
        </section>

        {/* Footer Notes */}
        <div className="text-center text-sm sm:text-base text-gray-600">
          {footerNotes.map((note, index) => (
            <p key={index} className={`${index === 0 ? "mt-8" : "mt-4"}`}>
              {note}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InternationalClientPage;
