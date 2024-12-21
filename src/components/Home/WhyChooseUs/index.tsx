"use client";

import { motion } from "framer-motion";
import { features } from "./data";

const WhyChooseUs = () => {
  return (
    <div className="md:py-32 py-12 bg-gray-50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center px-4 pb-4"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="md:text-lg text-sm text-gray-600 mt-2">
          Discovery what makes us your best choice for your next adventure.
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
            <h2 className="text-lg font-semibold text-gray-800 leading-normal">
              {feature.title}
            </h2>
            <p className="text-sm mt-2 text-gray-600 ">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
