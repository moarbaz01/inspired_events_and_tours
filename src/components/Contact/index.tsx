"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";
import SuccessModal from "./SuccessModal";

const Loader = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
  </div>
);

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      setIsSuccessModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-gray-50 py-12 px-4 md:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Contact Support
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Request Information on our Events
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-lg text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-lg text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg"
                  placeholder="Your email"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border-2 resize-none border-gray-300 rounded-lg"
                  placeholder="Your message"
                  rows={7}
                  required
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
              >
                {loading ? <Loader /> : "Submit"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details and Map */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-2xl font-semibold text-primary">
              Contact Details
            </h1>
            <p className="text-lg text-gray-700">
              Interested in One Of Our Events?
            </p>
            <p className="text-lg text-gray-700">
              Then simply complete the form opposite and we will get straight
              back to you with full information.
            </p>
            <div
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=447895961091&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
              className="bg-white flex cursor-pointer justify-center md:mx-0 mx-auto items-center gap-4 w-fit py-2 px-4 shadow-sm rounded-full"
            >
              <SocialIcon style={{ height: 30, width: 30 }} url="whatsapp" />
              <p className="font-bold text-lg text-gray-500">
                Message us on WhatsApp
              </p>
            </div>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary text-2xl" />
                <p className="text-lg text-gray-700">Phone: 07895 961091</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary text-2xl" />
                <p className="text-lg text-gray-700">
                  Email: info@inspiredeventsandtours.co.uk
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <p className="text-lg text-gray-700">
                  Address: 14 Hints Road, Hopwas, Tamworth, B78 3AA, United
                  Kingdom
                </p>
              </div>
            </motion.div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.9727892815326!2d-1.7384648236535147!3d52.6424046271603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a9017b428535%3A0x6f71cffa5dbed7cd!2s14%20Hints%20Rd%2C%20Hopwas%2C%20Tamworth%20B78%203AE%2C%20UK!5e0!3m2!1sen!2sin!4v1733570583254!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </motion.div>
  );
};

export default Contact;
