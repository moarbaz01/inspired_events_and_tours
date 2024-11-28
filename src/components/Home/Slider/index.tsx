"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "European Motorcycle Trips 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/european_motorcycle.png",
  },
  {
    title: "European Car Trips 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/car_trips.png",
  },
  {
    title: "European Motorcycle Track days 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/morocoo.png",
  },
  {
    title: "European Car Track Days 2025",
    imagePath: "/images/slides/european_car_track.png",
  },
  {
    title: "Morocco Overlanding Trip 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/morocoo.png",
  },
  {
    title: "Morocco Motorcycle Overlanding Trip 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/morocoo.png",
  },
];

const Slider = () => {
  return (
    <div className="w-full py-12 md:px-6 px-4">
      <div className="px-4 text-center">
        <h1 className="text-4xl font-bold">Our Trips</h1>
        <p className="text-xl mt-2">Explore the world with us</p>
      </div>

      <Swiper
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 }, // Medium screens
          1024: { slidesPerView: 4, spaceBetween: 24 }, // Large screens
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Pagination, Navigation]}
        className="relative w-full py-6 "
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg shadow-lg border border-gray-200">
              {/* Image Section */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.imagePath}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  priority={true}
                  alt={`card ${i + 1}`}
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-lg font-bold text-center text-gray-800">
                  {item.title}
                </h1>
              </div>

              {/* Optional Hover Effect */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev text-white absolute top-1/2 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary/50 rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronLeft className="text-xl" />
        </div>
        <div className="custom-next text-white absolute top-1/2 right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary/50 rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronRight className="text-xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
