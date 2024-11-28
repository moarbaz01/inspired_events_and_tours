"use client";
import Sidebar from "@/components/Home/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion"; // Optional: If you want to animate the dropdown

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle the dropdown

  return (
    <>
      <div className="py-2 md:px-6 px-4 fixed top-0 left-0 w-full z-[999] bg-white shadow-lg border-b border-gray-200 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo2.png"
              alt="Logo Image"
              height={400}
              width={400}
              className="h-20 w-auto mr-1 transform transition-transform duration-300 hover:scale-110"
            />
            <h3 className="md:text-3xl hidden md:block text-xl font-bold drop-shadow-lg text-primary hover:text-primary/80 transition-all duration-300">
              Inspired Events and Tours
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 flex items-center relative"
              >
                Trips
                <span className="ml-2 transform transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </button>
              {/* Dropdown */}
              {isDropdownOpen && (
                <motion.div
                  className="absolute bg-white shadow-lg rounded-lg p-4 top-full left-0 w-56 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#trip1"
                    className="block py-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-md"
                  >
                    Trip 1
                  </a>
                  <a
                    href="#trip2"
                    className="block py-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-md"
                  >
                    Trip 2
                  </a>
                  <a
                    href="#trip3"
                    className="block py-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-md"
                  >
                    Trip 3
                  </a>
                </motion.div>
              )}
            </div>
            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Sidebar Trigger */}
          <div
            onClick={() => setIsSidebar(true)}
            className="bg-primary hover:bg-opacity-80 md:hidden hover:scale-105 transition-all duration-300 cursor-pointer md:p-4 p-3 rounded-md shadow-lg transform hover:shadow-2xl"
          >
            <CgMenuRight className="md:text-3xl text-xl text-white" />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebar} onClose={() => setIsSidebar(false)} />
    </>
  );
};

export default Navbar;
