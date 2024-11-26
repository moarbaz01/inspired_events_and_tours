"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-primary"
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

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image of Team or Office */}
        <motion.div
          className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] mb-8 lg:mb-0"
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
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 mb-6"
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
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            With a team of dedicated professionals, we aim to bring you closer
            to the world’s most beautiful destinations. From custom tours to
            guided experiences, we&apos;re here to make your travel dreams come true.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
