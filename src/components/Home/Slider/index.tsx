"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const slides = [
  // {
  //   title: "European Motorcycle Trips 2025",
  //   desc: "Discover breathtaking destinations across the globe.",
  //   imagePath: "/images/slides/european_motorcycle.png",
  //   link: "/trips/european-bike-trips-2025",
  // },
  {
    title: "European Car Road Trips 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/car_trips.png",
    link: "/trips/european-car-road-trips-2025",
  },
  {
    title: "European Motorcycle Track days 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/european_bike_track.png",
    link: "/trips/european-motorcycle-track-days-2025",
  },
  {
    title: "European Car Track Days 2025",
    imagePath: "/images/slides/european_car_track.png",
    link: "/trips/european-car-track-days-2025",
  },
  {
    title: "Morocco Motorcycle Overlanding Trip 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/morocco_motorcycle_overlanding_trip.png",
    link: "/trips/morocco-bike-trips-2025",
  },
  {
    title: "NC500 Motorcycle Road Trip 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/nc500.png",
    link: "/trips/uk-bike-trips-2025",
  },
  {
    title: "European Motorcycle Road Trips 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/european_motorcycle_road_trips.png",
    link: "/trips/european-motorcycle-road-trips-2025",
  },
  {
    title: "Morocco Land Rover Trip 2025",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slides/morroco_land_rover.png",
    link: "/trips/land-rover-trips-2025",
  },
];

const Slider = () => {
  const router = useRouter();

  return (
    <div id="trips" className="w-full py-12 md:px-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-4 text-center pb-4 md:mt-12"
      >
        <h1 className="md:text-3xl text-2xl font-bold">Our Trips</h1>
        <p className="md:text-lg text-sm text-gray-600 mt-2">
          These are trips that we provides
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Swiper
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 }, // Medium screens
            1024: { slidesPerView: 3, spaceBetween: 24 }, // Large screens
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center pb-6">
              <div
                onClick={() => router.push(item.link)}
                className="group  cursor-pointer overflow-hidden rounded-lg border border-gray-200"
              >
                {/* Image Section */}
                <div className="relative md:h-[350px] h-[300px] w-full">
                  {" "}
                  {/* Fixed aspect ratio */}
                  <Image
                    src={item.imagePath}
                    fill={true}
                    className="transition-transform w-full h-full  duration-500 group-hover:scale-105"
                    priority={true}
                    alt={`card ${i + 1}`}
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col gap-2 ">
                  <h1 className="text-md font-bold text-center text-gray-800">
                    {item.title}
                  </h1>
                </div>

                {/* Optional Hover Effect */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="custom-prev text-white absolute top-[40%] left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
            <FaChevronLeft className="text-xl" />
          </div>
          <div className="custom-next text-white absolute top-[40%] right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
            <FaChevronRight className="text-xl" />
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Slider;
