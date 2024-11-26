"use client";
import Sidebar from "@/components/Home/Sidebar";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <>
      <div className="py-4 md:px-6 px-4 bg-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaFacebook className="text-3xl cursor-pointer text-white" />
            <FaInstagram className="text-3xl cursor-pointer text-white" />
          </div>
          <h1 className="md:text-3xl text-xl text-center px-6 font-bold drop-shadow-lg text-white">
            Inspired Events and Tours
          </h1>
          <div
            onClick={() => setIsSidebar(true)}
            className="bg-white hover:bg-opacity-80 hover:scale-105 transition-all duration-300 cursor-pointer p-4 rounded-full shadow-md transform hover:shadow-2xl"
          >
            <CgMenuRight className="text-3xl text-primary" />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebar} onClose={() => setIsSidebar(false)} />
    </>
  );
};

export default Navbar;
