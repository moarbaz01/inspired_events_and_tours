"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaSmile, FaGlobeAmericas } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-white pb-16 pt-28 px-6 md:px-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-primary leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-xl max-w-2xl mx-auto mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We are a passionate team of travel experts dedicated to curating the
          best travel experiences, whether it’s exploring new destinations or
          simply relaxing in exotic locations.
        </motion.p>
      </div>

      {/* Team Image & Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-6">
        {/* Image Section with Floating Overlay */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] mb-8 lg:mb-0 overflow-hidden rounded-xl shadow-xl transform transition duration-500 hover:scale-105"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/team.jpg" // Replace with your actual image
            alt="Our Team"
            layout="fill"
            priority={true}
            objectFit="cover"
            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-110"
          />
          {/* Second Image positioned differently */}
          <div className="absolute bottom-4 right-4 w-40 h-40 overflow-hidden rounded-xl shadow-lg border-4 border-white">
            <Image
              src="/images/slider2.jpg" // Replace with your second image
              alt="Team Work"
              layout="fill"
              priority={true}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Mission Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Heading Section */}
          <motion.h3
            className="text-4xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Mission
          </motion.h3>

          {/* Mission Description Section */}
          <motion.p
            className="text-lg text-gray-600 mb-4 lg:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Our mission is to provide exceptional travel experiences, tailored
            to your needs and preferences. We strive to offer personalized
            itineraries, expert advice, and seamless bookings, ensuring your
            trip is stress-free and unforgettable.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 lg:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            With a team of dedicated professionals, we aim to bring you closer
            to the world’s most beautiful destinations. From custom tours to
            guided experiences, we&apos;re here to make your travel dreams come
            true.
          </motion.p>

          {/* Icons Section with grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 lg:mb-10">
            <div className="flex flex-col items-center text-gray-600">
              <FaArrowRight className="text-4xl mb-2" />
              <p className="text-lg font-semibold">Tailored Trips</p>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <FaSmile className="text-4xl mb-2" />
              <p className="text-lg font-semibold">Happy Travelers</p>
            </div>
            <div className="flex flex-col items-center text-gray-600">
              <FaGlobeAmericas className="text-4xl mb-2" />
              <p className="text-lg font-semibold">Global Destinations</p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <motion.div
            className="mt-6 text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="/contact"
              className="bg-primary text-white px-6 py-3 text-xl font-semibold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
