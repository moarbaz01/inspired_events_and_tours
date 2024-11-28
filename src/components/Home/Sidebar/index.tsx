"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

const links = [
  { path: "/", label: "HomePage" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/gallery", label: "Gallery" },
];

const trips = [
  { path: "/tours/beach", label: "Beach Adventures" },
  { path: "/tours/mountains", label: "Mountain Escapes" },
  { path: "/tours/cultural", label: "Cultural Tours" },
  { path: "/tours/urban", label: "Urban Getaways" },
];

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isTripsOpen, setIsTripsOpen] = useState(false);

  // Disable body scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-primary fixed left-0 top-0 w-full h-full z-[9999] shadow-2xl"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* Close Button */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="md:right-6 right-4 absolute top-6 bg-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-full shadow-lg transform hover:shadow-2xl text-3xl hover:text-gray-300"
          >
            <CgClose className="text-3xl text-primary" />
          </motion.div>

          {/* Links */}
          <motion.ul
            className="flex items-center justify-center flex-col gap-6 h-full w-full text-center py-16"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {links.map((link, i) => (
              <motion.li
                key={i}
                className="text-3xl border-b py-4 border-white md:w-1/3 w-full px-4 font-bold text-white hover:scale-110 hover:text-yellow-400 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  className="flex items-center w-full justify-between"
                  href={link.path}
                >
                  <span>{link.label}</span>
                  <FaArrowRight />
                </Link>
              </motion.li>
            ))}

            {/* Trips Accordion */}
            <motion.li
              className="text-3xl border-b py-4 border-white md:w-1/3 w-full px-4 font-bold text-white hover:scale-110 hover:text-yellow-400 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsTripsOpen(!isTripsOpen)}
              >
                <span>Trips</span>
                {isTripsOpen ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>

              {/* Accordion Links */}
              {isTripsOpen && (
                <motion.ul
                  className="pl-6 pt-4 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {trips.map((trip, index) => (
                    <motion.li
                      key={index}
                      className="text-xl font-medium text-white hover:text-yellow-400 transition-all duration-300"
                    >
                      <Link
                        href={trip.path}
                        className="flex items-center gap-3"
                      >
                        <FaArrowRight />
                        {trip.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
