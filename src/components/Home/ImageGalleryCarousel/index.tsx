"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import SwiperInstance
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { Navigation, Thumbs } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Swiper as SwiperInstance } from "swiper/types";

const ImageGalleryCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null); // Proper typing
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index

  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider6.jpg",
  ];

  // Sync main swiper to bottom swiper
  useEffect(() => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(activeIndex); // Move the thumbnail swiper to the active index
    }
  }, [activeIndex, thumbsSwiper]);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="px-4 text-center  mb-6">
        <h1 className="md:text-4xl text-3xl font-bold">Image Gallery</h1>
      </div>

      {/* Main Big Carousel */}
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full rounded-lg overflow-hidden"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-video bg-gray-100">
              <Image
                src={image}
                layout="fill"
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="custom-prev select-none text-white absolute top-1/2 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronLeft className="text-xl" />
        </div>
        <div className="custom-next select-none text-white absolute top-1/2 right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronRight className="text-xl" />
        </div>
      </Swiper>

      {/* Lower Thumbnail Carousel */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)} // Set the Swiper instance
        modules={[Thumbs, Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        className="mt-4"
        watchSlidesProgress
        navigation={{
          prevEl: ".thumb-prev",
          nextEl: ".thumb-next",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                activeIndex === index ? "border-blue-500" : "border-transparent"
              }`}
            >
              <Image
                src={image}
                width={100}
                height={100}
                layout="responsive"
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons for Thumbnails */}
        <div className="thumb-prev select-none text-gray-700 absolute top-1/2 left-0 z-40 flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shadow cursor-pointer hover:bg-gray-400 transition">
          <FaChevronLeft className="text-sm" />
        </div>
        <div className="thumb-next select-none text-gray-700 absolute top-1/2 right-0 z-40 flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shadow cursor-pointer hover:bg-gray-400 transition">
          <FaChevronRight className="text-sm" />
        </div>
      </Swiper>
    </div>
  );
};

export default ImageGalleryCarousel;
