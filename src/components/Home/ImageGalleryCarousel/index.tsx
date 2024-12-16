"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
// Dynamically import images from the `public/images` folder
const images = Array.from({ length: 92 }, (_, i) => ({
  src: `/images/trips/trip${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));

// Custom Arrow Components
// Custom Arrow Components
const RightArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="custom-next text-white absolute top-1/2 md:right-4 right-2 z-50 flex items-center justify-center md:w-12 md:h-12 h-8 w-8 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2"
  >
    <FaChevronRight className="md:text-xl text-sm" />
  </div>
);

const LeftArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="custom-prev text-white absolute top-1/2 md:left-4 left-2 z-50 flex items-center justify-center md:w-12 md:h-12 w-8 h-8 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2"
  >
    <FaChevronLeft className="md:text-xl text-sm" />
  </div>
);

function VariableWidth() {
  const [activeSlide, setActiveSlide] = useState(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  // Ensure the component is mounted before passing refs to asNavFor
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mainSliderSettings = {
    className: "slider variable-width",
   centerPadding: "20px",
    arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    speed: 500,
    variableWidth: true,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <RightArrow onClick />,
    prevArrow: <LeftArrow onClick />,
    asNavFor:
      isMounted && thumbnailSliderRef.current
        ? thumbnailSliderRef.current
        : undefined,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay : true,
          autoplaySpeed: 2000
        },
      },
    ],
  };

  const thumbnailSliderSettings = {
    slidesToShow: 8,
    focusOnSelect: true,
    infinite: images.length > 12,
    arrows: true,
    nextArrow: <RightArrow onClick />,
    prevArrow: <LeftArrow onClick />,
    swipeToSlide: true,
    asNavFor:
      isMounted && mainSliderRef.current ? mainSliderRef.current : undefined,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 mx-auto my-10">
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
        <p className="text-lg mt-2 text-gray-600">
          Explore the beauty of our previous trips through our image gallery.
        </p>
      </motion.div>

      {/* Main Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" mt-12 slider-container"
      >
        <Slider
          ref={mainSliderRef}
          {...mainSliderSettings}
          className="h-[300px] sm:h-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-[300px] md:h-[500px]   ${
                index === activeSlide ? "opacity-100" : "opacity-70"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Thumbnail Slider */}
      <div className="mt-8 md:block hidden">
        <Slider ref={thumbnailSliderRef} {...thumbnailSliderSettings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-[100px] h-[100px] cursor-pointer overflow-hidden border-2 rounded-md ${
                index === activeSlide
                  ? "border-2 border-blue-500"
                  : "border-2 border-gray-300"
              } m-2`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default VariableWidth;
