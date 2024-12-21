"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const images = Array.from({ length: 92 }, (_, i) => ({
  src: `/images/trips/trip${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));

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
        <h1 className="md:text-3xl text-2xl  font-bold text-center text-primary mb-8">
          Images From Previous Trips
        </h1>

        {/* Tailwind grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden h-[400px] "
              onClick={() => handleImageClick(index)}
            >
              <div className="bg-gray-200 relative h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  loading={index < 10 ? "eager" : "lazy"}
                  width={400}
                  height={300}
                  className=" w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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
