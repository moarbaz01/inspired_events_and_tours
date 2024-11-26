"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
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
    title: "Relax and Unwind",
    desc: "Find your perfect escape to relax and recharge.",
    imagePath: "/images/slider3.jpg",
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
    <div className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-center text-center flex-col gap-2 px-4">
        <h1 className="text-4xl font-bold">Our Trips</h1>
        <p className="text-lg text-gray-600">
          Discover the beauty and excitement of our top destinations
        </p>
      </div>

      {/* Swiper */}
      <div className="w-full mt-8">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 images for screens >= 640px
            1024: { slidesPerView: 4 }, // 4 images for screens >= 1024px
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className="w-full h-full bg-black/10"
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
                  alt={`Slide ${i + 1}`}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-8 left-4 right-4 z-10 flex flex-col gap-2 text-white">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
