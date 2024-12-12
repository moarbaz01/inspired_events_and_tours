"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = [
  { src: "/images/slider1.jpg", alt: "slider1" },
  { src: "/images/slider2.jpg", alt: "slider2" },
  { src: "/images/slider3.jpg", alt: "slider3" },
  { src: "/images/slider4.jpg", alt: "slider4" },
  { src: "/images/slider5.jpg", alt: "slider5" },
  { src: "/images/slider6.jpg", alt: "slider6" },
  {
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "slider7",
  },
];

// Custom Arrow Components
const RightArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="custom-next text-white absolute top-1/2 right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2"
  >
    <FaChevronRight className="text-xl" />
  </div>
);

const LeftArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="custom-prev text-white absolute top-1/2 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition transform -translate-y-1/2"
  >
    <FaChevronLeft className="text-xl" />
  </div>
);

function VariableWidth() {
  const [activeSlide, setActiveSlide] = useState(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef(null);

  const mainSliderSettings = {
    className: "slider variable-width",
    centerPadding: "60px",
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <RightArrow onClick />,
    prevArrow: <LeftArrow onClick />,
  };

  const thumbnailSliderSettings = {
    slidesToShow: Math.min(images.length, 6),
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: images.length > 6,
    arrows: true,
  };

  const handleSlideClick = (index) => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index); // Navigate the main slider
    }
    setActiveSlide(index); // Update the active slide state
  };

  return (
    <div className="w-full px-4 mx-auto my-10">
      <div className="px-4 text-center pb-4 md:mt-12">
        <h1 className="md:text-4xl text-3xl font-bold">Image Gallery</h1>
        <p className="text-xl mt-2">Our Tour Images</p>
      </div>
      <Slider ref={mainSliderRef} {...mainSliderSettings}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-full h-[300px] lg:h-[600px] cursor-pointer ${
              index === activeSlide ? "opacity-100" : "opacity-70"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              layout="responsive"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <div className="mt-8">
        <Slider ref={thumbnailSliderRef} {...thumbnailSliderSettings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-[100px] w-[100px] cursor-pointer overflow-hidden border-2 rounded-md ${
                index === activeSlide
                  ? "border-4 border-blue-500"
                  : "border-2 border-gray-300"
              } m-2`}
              onClick={() => handleSlideClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                layout="responsive"
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
