"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Reviews data
const testimonials = [
  {
    name: "Jen Maslin",
    date: "23/09/2024",
    review: "Fabulous trip around the NC500 route. Adam was...",
    image: "/images/reviews/profile1.png",
  },
  {
    name: "Scott Maslin",
    date: "21/09/2024",
    review: "Had an amazing trip with Adam from Inspired Eve...",
    image: "/images/reviews/profile2.png",
  },
  {
    name: "Dee Paterson",
    date: "20/09/2024",
    review: "Great host and lovely trip, definitely recommend",
    image: "/images/reviews/profile3.png",
  },
  {
    name: "Kevin Harding",
    date: "07/09/2024",
    review: "Just got home from Our Trip across France, Germ...",
    image: "/images/reviews/profile4.png",
  },
  {
    name: "Debbie Rittinghouse",
    date: "27/08/2024",
    review: "What an amazing trip! Everything was more th...",
    image: "/images/reviews/profile5.png",
  },
  {
    name: "Craig Holland",
    date: "06/10/2024",
    review: "Hi I chose the trip to France Switzerland Austri...",
    image: "/images/reviews/profile6.png",
  },
  {
    name: "Mike Jenner",
    date: "05/10/2024",
    review: "Right from the point of receiving detailed and s...",
    image: "/images/reviews/profile7.png",
  },
];

const GoogleReviews = () => {
  return (
    <div className="py-12 bg-primary/10 px-4 md:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center pb-4"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
          Google Reviews
        </h2>
        <p className="md:text-lg text-sm text-gray-600 mt-2">
          See what our clients are saying about us!
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="pb-12 py-4" key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full border object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 italic mt-4">{`"${testimonial.review}"`}</p>

              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev text-white absolute top-1/2 left-4 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronLeft className="text-xl" />
        </div>
        <div className="custom-next text-white absolute top-1/2 right-4 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronRight className="text-xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default GoogleReviews;
