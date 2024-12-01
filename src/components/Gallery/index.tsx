"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

// Images for the gallery
const images = [
  { src: "/images/slider1.jpg", alt: "Mountain View" },
  { src: "/images/slider2.jpg", alt: "Beach Sunset" },
  { src: "/images/slider3.jpg", alt: "City Lights" },
  { src: "/images/slider4.jpg", alt: "Forest Trail" },
  { src: "/images/slider5.jpg", alt: "Desert Dunes" },
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  const handleCloseLightbox = () => {
    setCurrentImage(null);
  };

  return (
    <div className="py-12 px-4 md:px-6">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Travel Gallery
        </h1>

        {/* Tailwind grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden relative"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative pt-[75%] bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  layout="responsive"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox for viewing images */}
        {currentImage !== null && (
          <Lightbox
            slides={images.map(({ src, alt }) => ({ src, title: alt }))}
            open={currentImage !== null}
            index={currentImage}
            close={handleCloseLightbox}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
