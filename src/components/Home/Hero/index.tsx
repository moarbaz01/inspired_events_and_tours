"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full md:h-screen h-[80vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div className="w-full h-full">
          <Image
            src="/images/hero.webp" // Your Hero image
            alt="Travel Hero"
            layout="fill"
            priority={true}
            objectFit="cover"
            className=""
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 md:px-16">
        <motion.h3
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight text-center"
          style={{
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)", // Stroke effect
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Explore the World Like Never Before
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-white mb-8 text-center max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Embark on unforgettable journeys, discover hidden gems, and experience
          the adventure of a lifetime with us.
        </motion.p>

        <motion.a
          href="#trips"
          className="inline-block bg-primary text-white text-lg py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:bg-opacity-90 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Start Your Adventure
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
