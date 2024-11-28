"use client";
import Sidebar from "@/components/Home/Sidebar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled down
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`py-2 md:px-6 px-4 fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg" // Background color when scrolled
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo2.png"
              alt="Logo Image"
              height={400}
              width={400}
              className="h-20 w-auto mr-1"
            />
            <h3
              className={`md:text-3xl hidden md:block text-xl font-bold drop-shadow-lg ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Inspired Events and Tours
            </h3>
          </div>
          <div
            onClick={() => setIsSidebar(true)}
            className={`${
              isScrolled ? "bg-primary" : "bg-white"
            } hover:bg-opacity-80 hover:scale-105 transition-all duration-300 cursor-pointer md:p-4 p-3 rounded-md shadow-lg transform hover:shadow-2xl`}
          >
            <CgMenuRight
              className={`md:text-3xl text-xl ${
                isScrolled ? "text-white" : "text-primary"
              }`}
            />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebar} onClose={() => setIsSidebar(false)} />
    </>
  );
};

export default Navbar;
