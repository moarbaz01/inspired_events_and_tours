"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgClose } from "react-icons/cg";

const links = [
  { path: "/", label: "HomePage" },
  { path: "/about", label: "About" },
  { path: "/tours", label: "Tours" },
  { path: "/contact", label: "Contact" },
  { path: "/gallery", label: "Gallery" },
  { path: "/blog", label: "Blog" },
];

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Disable body scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="bg-blue-400/80 fixed left-0 top-0 w-full h-full z-[9999]"
          initial={{ y: "-100%" }} // Sidebar starts off-screen
          animate={{ y: 0 }} // Slide into view
          exit={{ x: "-100%" }} // Slide out of view
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Close Button */}
          <motion.div
            onClick={onClose}
            className="right-2 absolute top-4 flex items-center gap-2 cursor-pointer hover:scale-105 transition text-white text-3xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.1 }}
          >
            <span
              className="text-3xl font-bold hover:scale-105 transition
              text-white italic"
            >
              Close
            </span>{" "}
            <CgClose className="text-white text-4xl" />
          </motion.div>

          {/* Links */}
          <motion.ul
            className="flex items-center justify-center flex-col gap-4 h-full w-full"
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
                className="text-3xl font-bold hover:scale-105 transition text-white italic"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link href={link.path}>{link.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
