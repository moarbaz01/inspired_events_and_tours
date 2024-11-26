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
    <div className="w-full h-screen">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 images for screens >= 640px
          1024: { slidesPerView: 3 }, // 3 images for screens >= 1024px
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
            <div className="aspect-[9/16] h-full w-full relative">
              <Image
                src={item.imagePath}
                layout="fill"
                objectFit="cover"
                className=" contrast-more:"
                alt={`slider ${i + 1}`}
              />
              <div className="absolute pb-12 w-full h-full bg-black/0 left-0 flex flex-col gap-2 justify-end items-center px-4 ">
                <h1 className="text-3xl font-bold text-white italic">
                  {item.title}
                </h1>
                <p className="text-xl text-white">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
