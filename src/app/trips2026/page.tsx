"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { tripSlides } from "./data";
import { LeftArrow, RightArrow } from "@/components/NavigationArrows";

const Page = () => {
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
        <h1 className="md:text-3xl text-2xl font-bold">Our 2026 Trips</h1>
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
          {tripSlides.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center mb-8">
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
                    loading="lazy"
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
          <LeftArrow />
          <RightArrow />
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Page;
