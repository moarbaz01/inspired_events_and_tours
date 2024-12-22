"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { tripsLinks } from "@/data";

// Menu items array with sublinks
const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "Trips",
    sublinks: tripsLinks,
  },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [openSublink, setOpenSublink] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSublinks = (itemName: string) => {
    setOpenSublink((prev) => (prev === itemName ? null : itemName));
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full bg-primary text-white shadow-xl z-[999] w-full sm:w-72 flex flex-col p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Menu</h2>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-white hover:bg-white/20 rounded-full p-2 transition"
        >
          <AiOutlineClose className="text-3xl" />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            {/* Link or Submenu */}
            {item.sublinks ? (
              <div>
                <div
                  onClick={() => toggleSublinks(item.name)}
                  className="cursor-pointer flex justify-between items-center text-xl font-medium  transition"
                >
                  <span>{item.name}</span>
                  <div>
                    {openSublink === item.name ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {openSublink === item.name && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 mt-2 space-y-2 text-lg"
                  >
                    {item.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          aria-label={sublink.name}
                          href={sublink.link}
                          className="block  transition"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ) : (
              <Link
                href={item.path}
                aria-label={item.name}
                className="block text-xl font-medium transition"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center text-sm text-gray-300">
        <p>&copy; 2022 Inspired Events and Tours</p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
