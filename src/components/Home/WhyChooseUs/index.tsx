"use client";
import { FaPlane, FaHeart, FaDollarSign, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPlane className="text-4xl text-primary" />,
      title: "Seamless Travel",
      desc: "Enjoy a hassle-free experience with our expert planning.",
    },
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Trusted by Thousands",
      desc: "Over 10,000 happy travelers have trusted us with their trips.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-primary" />,
      title: "Best Price Guarantee",
      desc: "We offer competitive prices without compromising quality.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-primary" />,
      title: "Wide Range of Destinations",
      desc: "Explore our curated selection of breathtaking destinations.",
    },
  ];

  return (
    <div className="py-12  bg-gray-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center px-4 pb-4"
      >
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover what makes us the best travel agency for your adventures.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6 md:px-12 lg:px-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="mb-2">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 leading-normal">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-600 ">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
