import React from "react";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { BsLaptopFill } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b w-full from-blue-50 to-blue-50 text-gray-700">
      <div className="container mx-auto px-4 py-12 max-w-[1115px] mx-auto lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
              <BsLaptopFill className="text-blue-700 mr-2 text-5xl" /> Tutor Hub
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis, nihil
              pariatur iusto accusamus.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="#"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub profile"
                className="p-2 rounded-full bg-blue-50 border text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-2 rounded-full bg-blue-50 border text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="p-2 rounded-full bg-blue-50 border text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
                className="p-2 rounded-full bg-blue-50 border text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </section>

          {/* Important Links */}
          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-6 pb-2 border-b border-blue-100">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/about">About</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </section>

          {/* Company Links */}
          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-6 pb-2 border-b border-blue-100">
              Company Links
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/our-services">Our Services</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/tutor-policy">Privacy Policy</Link>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section>
            <h3 className="text-xl font-bold text-blue-700 mb-6 pb-2 border-b border-blue-100">
              Resources
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/about">About</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer hover:font-medium transition-colors duration-200 flex items-center group">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600 hover:font-medium transition-colors duration-200 flex items-center group cursor-pointer">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center  md:space-y-0">
            <div className="text-center mx-auto md:text-left">
              <p className="text-gray-600">
                &copy; Copyright {currentYear}.{" "}
                <span className="font-bold">tutorhub</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
