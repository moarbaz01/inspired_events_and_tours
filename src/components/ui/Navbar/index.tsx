"use client";
import Sidebar from "@/components/Home/Sidebar";
import Image from "next/image";
import {  useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion"; // Optional: If you want to animate the dropdown
import Link from "next/link"; // Import Link component from Next.js
import Announcement from "../Announcement";

const trips = [
  {
    name: "2025 Morocco Bike Trip",
    link: "/trips/morocco_overland_motorcycleTrip_2025",
  },
  { name: "2025 Car Trips", link: "/trips/car-trips-2025" },
  { name: "2025 Land Rover Trips", link: "/trips/land-rover-trips-2025" },
  { name: "2025 European Bike Trips", link: "#europeanBike2025" },
  { name: "2025 UK Bike Trips", link: "#ukBike2025" },
  { name: "2026 European Bike Trips", link: "#europeanBike2026" },
  { name: "2026 Morocco Bike Trips", link: "#moroccoBike2026" },
  { name: "2026 European Car Trips", link: "#europeanCar2026" },
];

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle the dropdown

 

  return (
    <div className="fixed top-0 left-0 w-full z-[999]">
      <Announcement />
      <div className="py-2 md:px-6 px-4 bg-white shadow-lg border-b border-gray-200 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center cursor-pointer gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo Image"
              height={400}
              width={400}
              className="h-20 w-20  transform transition-transform duration-300 hover:scale-110"
            />
            <h1 className="md:text-3xl hidden md:block text-lg font-bold drop-shadow-lg text-primary hover:text-primary/80 transition-all duration-300">
              Inspired Events and Tours
            </h1>
          </Link>
          <h1 className="md:text-3xl text-wrap text-center md:hidden text-xl md:px-0 px-4 font-bold drop-shadow-lg text-primary hover:text-primary/80 transition-all duration-300">
            Inspired Events and Tours
          </h1>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>

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
                  {trips.map((trip, index) => (
                    <Link
                      key={index}
                      href={trip.link}
                      className="block py-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-md"
                    >
                      {trip.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            <Link
              href="#about"
              className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="#about"
              className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </Link>
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
    </div>
  );
};

export default Navbar;
