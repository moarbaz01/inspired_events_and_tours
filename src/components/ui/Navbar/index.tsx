"use client";
import Sidebar from "@/components/Home/Sidebar";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <div className="py-6 md:px-6 px-4 bg-transparent fixed top-0 left-0 w-full z-[999]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl italic font-bold drop-shadow-md text-yellow-400">
            {/* Inspired Events and Tours */}
          </h1>
          <div
            onClick={() => setIsSidebar(true)}
            className="bg-blue-400 hover:opacity-80 hover:scale-105 transition cursor-pointer p-6"
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
