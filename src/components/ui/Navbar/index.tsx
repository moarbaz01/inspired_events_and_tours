"use client";
import Sidebar from "@/components/Home/Sidebar";
import { useState } from "react";
import { CgMenuBoxed, CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <div className="py-6 md:px-6 px-4 fixed top-0 left-0 w-full z-[999] ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold drop-shadow-lg text-white">
            Inspired Events and Tours
          </h1>
          <div
            onClick={() => setIsSidebar(true)}
            className="bg-primary hover:bg-opacity-80 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-full shadow-lg transform hover:shadow-2xl"
          >
            <CgMenuRight className="text-3xl text-white" />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebar} onClose={() => setIsSidebar(false)} />
    </>
  );
};

export default Navbar;
