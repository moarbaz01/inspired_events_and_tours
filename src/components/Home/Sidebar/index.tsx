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
          className=" bg-primary/80 fixed left-0 top-0 w-full h-full z-[9999] shadow-2xl"
          initial={{
            y: "-100%",
            // borderBottomLeftRadius: "100%",
            // borderBottomRightRadius: "100%",
          }} // Starts from the top
          animate={{
            y: 0,
            // borderBottomLeftRadius: 0,
            // borderBottomRightRadius: 0,
          }} // Animates to visible
          exit={{ y: "-100%" }} // Exits back to top
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* Close Button */}
          <motion.div
            onClick={onClose}
            initial={{opacity : 0,scale : 0, }}
            animate={{opacity : 1,scale : 1}}
            transition={{duration : 0.5,delay : 0.5,
              ease: "easeInOut",
            }}
            className="md:right-6 right-4 absolute top-6 bg-white  hover:bg-opacity-80 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-full shadow-lg transform hover:shadow-2xl   text-3xl hover:text-gray-300"
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
                className="text-3xl font-bold text-white hover:scale-110 hover:text-yellow-400 transition-all duration-300"
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
