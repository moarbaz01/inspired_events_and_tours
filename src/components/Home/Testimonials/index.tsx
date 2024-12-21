"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "@/components/NavigationArrows";
import { testimonials } from "./data";

// Reviews data

const TextModal = ({
  isOpen,
  onClose,
  text,
}: {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null; // Avoid rendering the modal when it's not open

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[999] flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 max-w-md md:w-full w-[90%]">
        <h2 id="modal-title" className="text-xl font-semibold mb-4">
          Review
        </h2>
        <div className="max-h-[300px] overflow-y-auto">
          <p className="text-gray-700">{text}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const TestimonialItem = ({
  id,
  review,
  name,
  image,
  date,
  openModal,
}: {
  id: number;
  review: string;
  name: string;
  date: string;
  image: string | StaticImageData;
  openModal: (text: string) => void;
}) => {
  const truncatedReview =
    review.length > 100 ? `${review.substring(0, 100)}...` : review;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      key={id}
      className="flex flex-col items-center cursor-pointer justify-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300  rounded-lg mx-4"
    >
      <div className="h-20 w-20 aspect-square rounded-full overflow-hidden">
        <Image
          height={100}
          width={100}
          alt={name}
          src={image}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Testimonial Text */}
      <p className="text-sm italic text-center mt-2 text-gray-700">
        &quot;{truncatedReview}&quot;
      </p>
      {/* Read More Button */}
      <button
        onClick={() => openModal(review)}
        aria-label={
          truncatedReview === review ? "Read Full Review" : "Read Less"
        }
        className="text-primary mt-2 underline"
      >
        Read More
      </button>
      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} className="text-yellow-500 text-2xl" />
        ))}
      </div>
      {/* Client Name */}
      <span className="font-semibold text-primary mt-4">— {name}</span>
      <span className="text-gray-500 text-sm">{date}</span>
    </motion.div>
  );
};

const GoogleReviews = () => {
  const [modalText, setModalText] = useState("");
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);

  const openModal = (text: string) => {
    setModalText(text);
    setIsTextModalOpen(true);
  };
  const closeModal = () => {
    setIsTextModalOpen(false);
    setModalText("");
  };
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
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide className="pb-12 py-4" key={index}>
            <TestimonialItem openModal={openModal} {...testimonial} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <LeftArrow />
        <RightArrow />
      </Swiper>
      <TextModal
        isOpen={isTextModalOpen}
        text={modalText}
        onClose={closeModal}
      />
    </div>
  );
};

export default GoogleReviews;
