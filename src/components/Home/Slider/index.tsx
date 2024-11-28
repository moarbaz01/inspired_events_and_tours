"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Relax and Unwind",
    desc: "Relaxation",
    imagePath: "/images/slider3.jpg",
  },
  {
    title: "Explore the World",
    desc: "Discover breathtaking destinations across the globe.",
    imagePath: "/images/slider1.jpg",
  },
  {
    title: "Adventure Awaits",
    desc: "Embark on thrilling adventures and create unforgettable memories.",
    imagePath: "/images/slider2.jpg",
  },
  {
    title: "Cultural Wonders",
    desc: "Dive into rich cultural experiences at incredible locations.",
    imagePath: "/images/slider4.jpg",
  },
  {
    title: "Cityscapes",
    desc: "Explore vibrant cities full of life and stories to tell.",
    imagePath: "/images/slider5.jpg",
  },
  {
    title: "Sunset Views",
    desc: "Capture unforgettable moments with stunning sunset views.",
    imagePath: "/images/slider6.jpg",
  },
];

const Slider = () => {
  return (
    <div className="w-full py-12">
      <div className="px-4 text-center">
        <h1 className="text-4xl font-bold">Our Trips</h1>
        <p className="text-xl mt-2">Explore the world with us</p>
      </div>

      <Swiper
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev", // Target custom previous button
          nextEl: ".custom-next", // Target custom next button
        }}
        modules={[Pagination, Navigation]}
        className="relative w-full h-full bg-black/10"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-[9/16] h-full group relative w-full cursor-pointer overflow-hidden">
              <Image
                src={item.imagePath}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                priority={true}
                alt={`slider ${i + 1}`}
              />
              <div className="absolute pb-12 w-full h-full flex text-center flex-col gap-2 justify-end items-center left-0 px-4 z-10">
                <h1 className="text-3xl font-bold text-white">{item.title}</h1>
                <p className="text-xl text-white">{item.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black via-black/60 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev text-white absolute top-1/2 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary/50 rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronLeft className="text-xl" />
        </div>
        <div className="custom-next text-white absolute top-1/2 right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary/50 rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronRight className="text-xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
