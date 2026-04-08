"use client";
import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { BsLaptopFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isTutorDropdownOpen, setIsTutorDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      hasDropdown: true,
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/our-team" },
      ],
    },
    { label: "Contact", href: "/contact" },
    {
      label: "Become a Tutor",
      hasDropdown: true,
      items: [
        { label: "How it works", href: "/tutoring-process" },
        { label: "Register as Tutor", href: "/auth/register" },
        { label: "Privacy Policy", href: "/tutor-policy" },
      ],
    },
    { label: "Services", href: "/services" },
  ];

  const handleDropdownMouseEnter = (type) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (type === "about") setIsAboutDropdownOpen(true);
    if (type === "tutor") setIsTutorDropdownOpen(true);
  };

  const handleDropdownMouseLeave = (type) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      if (type === "about") setIsAboutDropdownOpen(false);
      if (type === "tutor") setIsTutorDropdownOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when mobile menu opens
    setIsAboutDropdownOpen(false);
    setIsTutorDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center gap-2 no-underline"
                aria-label="Tutor Hub - Go to homepage"
              >
                <BsLaptopFill className="text-blue-700 text-5xl sm:text-5xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800">
                  Tutor Hub
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isOpen =
                    item.label === "About"
                      ? isAboutDropdownOpen
                      : isTutorDropdownOpen;
                  const dropdownType =
                    item.label === "About" ? "about" : "tutor";

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() =>
                        handleDropdownMouseEnter(dropdownType)
                      }
                      onMouseLeave={() =>
                        handleDropdownMouseLeave(dropdownType)
                      }
                    >
                      <button
                        aria-expanded={isOpen}
                        className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium rounded-lg flex items-center gap-1"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.items.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-700 font-medium rounded-lg whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* International Client Buttons - Desktop */}
              <div className="flex items-center gap-2 ml-4">
                <Link
                  href="/international-client"
                  className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-shadow whitespace-nowrap"
                >
                  <Globe className="w-4 h-4" />
                  International Client
                </Link>
                <Link
                  href="/international-client"
                  className="px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  Studies Abord
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BsLaptopFill className="text-blue-700 text-5xl" />
                    <span className="text-lg font-bold text-blue-800">
                      Tutor Hub
                    </span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 cursor-pointer" />
                  </button>
                </div>
              </div>

              <nav className="p-4 overflow-y-auto h-[calc(100%-80px)]">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    if (item.hasDropdown) {
                      const isOpen =
                        item.label === "About"
                          ? isAboutDropdownOpen
                          : isTutorDropdownOpen;
                      const dropdownType =
                        item.label === "About" ? "about" : "tutor";

                      return (
                        <li key={item.label} className="space-y-1">
                          <button
                            onClick={() => {
                              if (dropdownType === "about") {
                                setIsAboutDropdownOpen(!isAboutDropdownOpen);
                                setIsTutorDropdownOpen(false);
                              } else {
                                setIsTutorDropdownOpen(!isTutorDropdownOpen);
                                setIsAboutDropdownOpen(false);
                              }
                            }}
                            className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 hover:text-blue-700 rounded-lg"
                          >
                            <span className="font-medium">{item.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <ul className="pl-4 space-y-1">
                              {item.items.map((dropdownItem) => (
                                <li key={dropdownItem.label}>
                                  <Link
                                    href={dropdownItem.href}
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-2 text-gray-600 hover:text-blue-700 rounded-lg"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }

                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2.5 text-gray-700 hover:text-blue-700 rounded-lg font-medium"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}

                  {/* Mobile International Client Buttons */}
                  <li className="pt-4 space-y-2">
                    <Link
                      href="/international-client"
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center gap-1 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg"
                    >
                      <Globe className="w-4 h-4" />
                      International Client
                    </Link>
                    <Link
                      href="/international-client"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg text-center hover:bg-blue-50"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </header>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center py-2 gap-2">
            <p className="text-xs sm:text-sm font-medium text-center sm:text-left">
              Struggling with studies? The Right Tutor can change everything!
            </p>
            <Link
              href="/contact"
              className="px-3 py-1 bg-white/20 hover:bg-white/30 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
