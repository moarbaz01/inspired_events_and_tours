"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-primary/10 md:pt-36 pt-20 pb-20 px-4 md:px-6">
      {/* Team Image & Mission Section */}
      <div className="flex flex-col lg:flex-row  justify-between md:gap-12 gap-6">
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
          <motion.h1
            className="md:text-3xl text-3xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Mission
          </motion.h1>

          {/* Mission Description Section */}
          <motion.p
            className="text-lg text-gray-600 mb-4 lg:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            At Inspired Events and Tours, our mission is to bring people
            together for a truly unforgettable experience. We aim to create epic
            trips That fosters community, creativity, and inspiration, ensuring
            that every participant leaves with lasting memories.
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 lg:mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            After participating in numerous road trips and track days organized
            by larger companies, we often felt that these events lacked a
            personal touch and felt somewhat soulless, with most people
            attending only once. So, we decided to plan and organize our own
            unique adventures, aiming to create a more personalized and social
            experience that people would love and look at attending a different
            destination with us in the following years. We&apos;ve have made many new
            friends along the way, and we hope you will too. Now in our fourth
            year, we&apos;ve successfully run over 100 trips, and with our range of
            destinations becoming more varied each year. We are confident that
            one of our offerings will tempt you to book and join us. And if not
            please keep checking us out as there are always new trips always in
            the planning.
          </motion.p>

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
