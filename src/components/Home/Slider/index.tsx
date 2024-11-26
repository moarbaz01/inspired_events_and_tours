"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "Explore the World",
    desc: "Travel",
    imagePath: "/images/slider1.jpg",
  },
  {
    title: "Adventure Awaits",
    desc: "Adventure",
    imagePath: "/images/slider2.jpg",
  },
  {
    title: "Relax and Unwind",
    desc: "Relaxation",
    imagePath: "/images/slider3.jpg",
  },
  {
    title: "Cultural Wonders",
    desc: "Culture",
    imagePath: "/images/slider4.jpg",
  },
  {
    title: "Cityscapes",
    desc: "Urban",
    imagePath: "/images/slider5.jpg",
  },
  {
    title: "Sunset Views",
    desc: "Sunset",
    imagePath: "/images/slider6.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-full md:h-screen md:static fixed top-0 left-0 h-full">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 images for screens >= 640px
          1024: { slidesPerView: 4 }, // 3 images for screens >= 1024px
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={{ forceToAxis: false }} // Enable vertical scroll to slide horizontally
        modules={[Pagination, Mousewheel]}
        className="w-full h-full"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[9/16] h-full group relative w-full cursor-pointer overflow-hidden">
              {/* Image */}
              <Image
                src={item.imagePath}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                priority={true}
                alt={`slider ${i + 1}`}
              />
              {/* Content */}
              <div className="absolute pb-12 w-full h-full flex flex-col gap-2 justify-end items-center left-0 px-4 z-10">
                <h1 className="text-3xl font-bold text-white italic">
                  {item.title}
                </h1>
                <p className="text-xl text-white">{item.desc}</p>
              </div>
              {/* Overlay only for background */}
              <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black via-black/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
