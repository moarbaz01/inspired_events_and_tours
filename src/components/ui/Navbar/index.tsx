"use client";

import Sidebar from "@/components/Home/Sidebar";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link"; // Import Link component from Next.js
import { usePathname } from "next/navigation"; // Import useRouter
import Announcement from "../Announcement";
import { motion } from "framer-motion";

const trips = [
  {
    name: "2025 Morocco Bike Trip",
    link: "/trips/morocco-bike-trips-2025",
  },
  { name: "2025 Car Road Trips", link: "/trips/european-car-road-trips-2025" },
  {
    name: "2025 Car Track Days Trips",
    link: "/trips/european-car-track-days-2025",
  },
  { name: "2025 Land Rover Trips", link: "/trips/land-rover-trips-2025" },
  {
    name: "2025 European Motorcycle Track Days Trips",
    link: "/trips/european-motorcycle-track-days-2025",
  },
  {
    name: "2025 European Motorcycle Road Trips",
    link: "/trips/european-motorcycle-road-trips-2025",
  },
  { name: "2025 UK Bike Trips", link: "/trips/uk-bike-trips-2025" },
  { name: "2026 European Bike Trips", link: "/trips/european-bike-trips-2026" },
  { name: "2026 Morocco Bike Trips", link: "/trips/morocco-bike-trips-2026" },
  { name: "2026 European Car Trips", link: "/trips/european-car-trips-2026" },
];

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = useCallback(() => {
    setIsSidebar(false);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-[999]">
      <Announcement />
      <div className="py-2 md:px-6 px-4 bg-white shadow-sm border-b border-gray-200 transition-all duration-300">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer gap-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-20 w-20 aspect-square "
            >
              <Image
                src="/images/logo.png"
                alt="Logo Image"
                height={100}
                width={100}
                className="h-full w-full transform transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
            <motion.h1
              className="md:text-3xl hidden md:block text-lg font-bold drop-shadow-lg text-primary hover:text-primary/80 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Inspired Events and Tours
            </motion.h1>
          </Link>

          {/* Mobile Title */}
          <motion.h1
            className="md:text-3xl px-8 text-center md:hidden text-xl  font-bold drop-shadow-lg text-primary hover:text-primary/80 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Inspired Events and Tours
          </motion.h1>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </motion.div>

            <div className="relative">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Toggle Trips Dropdown"
                className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 flex items-center relative"
              >
                Trips
                <span className="ml-2 transform transition-transform duration-300 group-hover:rotate-180">
                  ▼
                </span>
              </motion.button>
              {/* Animated Dropdown */}
              {isDropdownOpen && (
                <motion.div
                  className="absolute bg-white shadow-lg rounded-lg p-4 top-full left-0 w-56 z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {trips.map((trip, index) => (
                      <Link href={trip.link} key={index}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="block py-2 text-primary hover:bg-primary/10 transition-all duration-300 rounded-md"
                        >
                          {trip.name}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link
                href="/gallery"
                className="text-base font-semibold text-primary hover:text-primary/80 transition-all duration-300 relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Gallery
              </Link>
            </motion.div>
          </div>

          {/* Mobile Sidebar Trigger */}
          <motion.div
            onClick={() => setIsSidebar(true)}
            className="bg-primary hover:bg-opacity-80 md:hidden hover:scale-105 transition-all duration-300 cursor-pointer md:p-4 p-3 rounded-md shadow-lg transform hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <CgMenuRight className="md:text-3xl text-xl text-white" />
          </motion.div>
        </div>
      </div>
      <Sidebar isOpen={isSidebar} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
