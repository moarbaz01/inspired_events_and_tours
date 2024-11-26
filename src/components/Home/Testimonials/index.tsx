"use client";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Carter",
    location: "California, USA",
    feedback:
      "An unforgettable experience! The trip was well-organized, and the destinations were breathtaking.",
    rating: 5,
    imagePath: "/images/customer1.jpg",
  },
  {
    name: "Liam Nguyen",
    location: "Sydney, Australia",
    feedback:
      "The travel agency exceeded my expectations. Every detail was thoughtfully planned.",
    rating: 4,
    imagePath: "/images/customer2.jpg",
  },
  {
    name: "Aarav Patel",
    location: "Mumbai, India",
    feedback:
      "Highly recommend this agency! Their service and destination recommendations were top-notch.",
    rating: 5,
    imagePath: "/images/customer3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover how we’ve made travel dreams come true for countless
          adventurers.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 md:px-12 lg:px-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-4 left-4 text-4xl text-blue-200" />

            {/* Customer Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <Image
                src={testimonial.imagePath}
                alt={testimonial.name}
                width={96}
                height={96}
                objectFit="cover"
              />
            </div>

            {/* Content */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic">{`"${testimonial.feedback}"`}</p>
              <h3 className="mt-4 font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
