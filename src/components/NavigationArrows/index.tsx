import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const LeftArrow = () => {
  return (
    <div className="custom-prev select-none text-white absolute top-[40%] left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
      <FaChevronLeft className="text-xl" />
    </div>
  );
};

export const RightArrow = () => {
  return (
    <div className="custom-next select-none text-white absolute top-[40%] right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
      <FaChevronRight className="text-xl" />
    </div>
  );
};
