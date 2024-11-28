"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <div className="relative w-full md:h-screen h-[80vh]">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div className="w-full h-full">
          <Image
            src="/images/hero.webp" // Your Hero image
            alt="Travel Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6 md:px-16">
        <motion.h3
          {...fadeUp}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight text-center"
          style={{
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)", // Stroke effect
          }}
        >
          Explore the World Like Never Before
        </motion.h3>

        <motion.p
          {...fadeUp}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 text-center max-w-md sm:max-w-lg"
        >
          Embark on unforgettable journeys, discover hidden gems, and experience
          the adventure of a lifetime with us.
        </motion.p>

        <motion.a
          href="#trips"
          {...fadeUp}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-block bg-primary text-white text-sm sm:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transform hover:scale-105 hover:bg-opacity-90 transition-all duration-300"
        >
          Start Your Adventure
        </motion.a>
      </div>

      {/* Slider Images */}
      <div className="absolute -bottom-16 z-[20] left-0 w-full flex flex-wrap justify-center gap-4 px-4">
        <Image
          src="/images/slider1.jpg"
          alt="Adventure in the mountains"
          height={400}
          width={400}
          className="h-24 sm:h-32 md:h-40 aspect-square w-auto rounded-xl border-white border-4 shadow-md"
        />
        <Image
          src="/images/slider2.jpg"
          alt="Relaxing at the beach"
          height={400}
          width={400}
          className="h-24 sm:h-32 md:h-40 aspect-square w-auto rounded-xl border-white border-4 shadow-md"
        />
        <Image
          src="/images/slider3.jpg"
          alt="City exploration"
          height={400}
          width={400}
          className="h-24 sm:h-32 md:h-40 aspect-square w-auto rounded-xl border-white border-4 shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;
