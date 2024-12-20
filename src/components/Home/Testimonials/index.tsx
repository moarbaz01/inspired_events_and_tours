"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

// Reviews data
const testimonials = [
  {
    id: 1,
    name: "Jen Maslin",
    date: "23/09/2024",
    review: `Fabulous trip around the NC500 route. Adam was a great host. Wouldn't hesitate booking another trip. Thanks Adam, we had a blast!`,
    image: "/images/reviews/profile1.png",
  },
  {
    id: 2,
    name: "Scott Maslin",
    date: "21/09/2024",
    review:
      "Had an amazing trip with Adam from Inspired Events and Tours, can’t wait for the next trip in 2025.",
    image: "/images/reviews/profile2.png",
  },
  {
    id: 3,
    name: "Dee Paterson",
    date: "20/09/2024",
    review: "Great host and lovely trip, definitely recommend",
    image: "/images/reviews/profile3.png",
  },
  {
    id: 4,
    name: "kyle mx5",
    date: "20/09/2024",
    review:
      "Just Completed the NC500 and it was an amazing event and adam the host was so kind and welcoming, cannot say anything bad and will be doing another trip in the future.",
    image: "/images/reviews/profile4.png",
  },
  {
    id: 5,
    name: "Kevin Harding",
    date: "07/09/2024",
    review: `Just got home from Our Trip across France, Germany ,Austria and Switzerland with Inspired events and we are hooked !Fantastic trip ! A proper bucket list tick !
From The Battle fields of Northern France, to the beautiful scenery of Austria and Germany to the incredible Swiss Alps including Furka pass (which if your a Bond fan is a must) everyday is a wow ! Cant recommend this trip highly enough !
With So many highlights the list would go on and with the freedom to find your own way from hotel to hotel it’s certainly an adventure you have full control of ! You can blast the Autobahns or take the scenic routes , and in Adam you have a font of knowledge and advice to help you plan day to day !
A very worthwhile trip and will be going again !`,
    image: "/images/reviews/profile5.png",
  },
  {
    id: 6,
    name: "Debbie Rittinghouse",
    date: "27/08/2024",
    review: `What an amazing trip! Everything was more than expected!  The campsites had everything anyone could need, Adam had a tent for tea and coffee, a kettle and charging points… no ine can go trol the weather, but we certainly made the best if it!  Can’t wait for the next one!  Bring on July for the reunion trip!`,
    image: "/images/reviews/profile6.png",
  },
  {
    id: 7,
    name: "Gillian Smyth",
    date: "15/10/2024",
    review:
      "What a great trip, beautiful scenery, a great route - would definitely recommend",
    image: "/images/reviews/profile7.png",
  },
  {
    id: 8,
    name: "Craig Holland",
    date: "06/10/2024",
    review: `Hi i chose the trip to france switzerland austria at the end of september beggining of october so my guess the weather wouldnt be that great, firstly Adam he is a character easy to get on with guy, i enjoyed everyday of the trip apart from the weather not being to my liking, i had the pleasure of meeting some nice people along the way and visited some landmarks some of which was not accessible by motorcycle or closed until a certain date. This  was my first experience of doing something like this  i would certainly do it again earlier in the year. This trip is not for the faint hearted 8 hrs in the saddle, my opinion adam maybe the trip extended and a couple of hotels closer , zell am see is a must in the trip a beautiful place thats all folks and enjoy your trip. Thanks adam for everything you did A++++++++`,
    image: "/images/reviews/profile8.png",
  },
  {
    id: 9,
    name: "Mike Jenner",
    date: "05/10/2024",
    review: `
      Right from the point of receiving detailed and specific information about the campsites and the routes through to leaving the campsite at Inverness at the end Adam was excellent with a very friendly, approachable and friendly nature. He made sure everyone was happy and settled with the tents and campbeds. Adam took a personal interest in making sure everyone had the best trip and experience possible. Adam planned and provided everything perfect, he even supplied perfect weather and made sure the midges stayed away. What more can you ask for. Superb job Adam well done and thank you. Even the cost was ridiculously reasonable.We would recommend Adam without hesitation and we would go an another trip organised by him anytime.
    `,
    image: "/images/reviews/profile9.png",
  },
];

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
        <div className="custom-prev text-white absolute top-1/2 left-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronLeft className="text-xl" />
        </div>
        <div className="custom-next text-white absolute top-1/2 right-4 z-50 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg cursor-pointer hover:bg-black/70 transition">
          <FaChevronRight className="text-xl" />
        </div>
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
