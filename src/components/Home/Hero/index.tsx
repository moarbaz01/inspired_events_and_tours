"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // Reduced animation complexity
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full md:h-screen h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp" // Ensure the image is optimized
          alt="Travel Hero"
          fill={true}
          priority={true}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6 md:px-16">
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight text-center"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Subtle shadow for better readability
          }}
        >
          Are You Looking For An Amazing Adventure?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 text-center md:w-2/3"
        >
          Embark on a road trip of a lifetime and join us on an unforgettable
          journey. At <b>Inspired Events</b>, we believe in{" "}
          <b>Making Memories One Trip At A Time</b>.
        </motion.p>

        {/* Call-to-Action */}
        <motion.a
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          aria-label="Start Your Adventure"
          className="inline-block bg-primary text-white text-sm py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
          href="#trips"
        >
          Start Your Adventure
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 flex flex-col z-[10] items-center w-full">
        <span className="text-white text-sm md:text-base mb-2">
          Scroll to view trips
        </span>
        <div className="w-6 h-6 border-2 border-white rounded-full flex justify-center items-center animate-bounce">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
