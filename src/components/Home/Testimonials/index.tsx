"use client";

import { useEffect } from "react";
// import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { LeftArrow, RightArrow } from "@/components/NavigationArrows";

declare global {
  interface Window {
    ElfsightPlatform:
      | {
          load: () => void;
        }
      | undefined;
  }
}
const GoogleReviews = () => {
  // Dynamically load the Elfsight Google Reviews widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      // Initialize the Elfsight widget after the script loads
      if (window.ElfsightPlatform) {
        window.ElfsightPlatform.load();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-12  px-4 md:px-6">
      {/* Section Header */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center pb-4"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
          Google Reviews
        </h2>
        <p className="md:text-lg text-sm text-gray-600 mt-2">
          See what our clients are saying about us!
        </p>
      </motion.div> */}

      {/* Embed Elfsight widget */}
      <div
        className="elfsight-app-80691bc4-d86f-40ea-a48b-b3a6d0f1fabb"
        data-elfsight-app-lazy
      ></div>

      {/* Swiper Slider - Optional if you want to display other testimonials */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {/* Add custom testimonial slides here if needed */}
        <SwiperSlide className="pb-12 py-4">
          {/* Add your custom testimonial component */}
        </SwiperSlide>
        <LeftArrow />
        <RightArrow />
      </Swiper>
    </div>
  );
};

export default GoogleReviews;
