"use client";

import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dynamically import images
const images = Array.from({ length: 92 }, (_, i) => ({
  src: `/images/trips/trip${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));

// Custom Arrow Components for Main Slider
const RightArrow = () => (
  <div className="custom-next text-white absolute top-1/2 right-4 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2">
    <FaChevronRight className="text-xl" />
  </div>
);

const LeftArrow = () => (
  <div className="custom-prev text-white absolute top-1/2 left-4 z-50 hidden  md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2">
    <FaChevronLeft className="text-xl" />
  </div>
);

function VariableWidthSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.realIndex); 
  };

  return (
    <div className="w-full px-4 mx-auto my-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="px-4 text-center"
      >
        <h1 className="md:text-3xl text-2xl font-bold">
          Images From Previous Trips
        </h1>
        <p className="md:text-lg text-sm mt-2 text-gray-600">
          Explore the excitement of our previous trips through our photo gallery
        </p>
      </motion.div>

      {/* Main Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 relative"
      >
        <Swiper
          onSlideChange={handleSlideChange}
          modules={[Navigation, Thumbs, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{}}
          loop={true}
          className="h-[300px] md:h-[500px] w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "auto" }}
              className="flex items-center justify-center"
            >
              <div className="h-full w-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={500}
                  className="object-cover h-full w-auto rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <LeftArrow />
          <RightArrow />
        </Swiper>
      </motion.div>

      {/* Thumbnail Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 relative hidden sm:block"
      >
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          modules={[Thumbs, Navigation]}
          slidesPerView={6}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          loop={false}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="h-24 md:h-24"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div
                className={`w-full h-full overflow-hidden rounded-md border-2 ${
                  activeSlide === index
                    ? "border-primary"
                    : "border-transparent"
                } hover:border-primary transition`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
          <LeftArrow />
          <RightArrow />
        </Swiper>
      </motion.div>
    </div>
  );
}

export default VariableWidthSwiper;
