"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-6">
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Contact Support
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Request Information on our Events
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
              </div>
              <div>
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
              </div>
              <div>
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
                  className="w-full p-4 border-2 border-gray-300 rounded-lg"
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="space-y-8">
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
              <div className="text-sm">
                <SocialIcon style={{ height: 30, width: 30 }} url="whatsapp" />
              </div>
              <p className="font-bold text-lg text-gray-500">
                Message us on whatsapp
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div>
                  <FaPhoneAlt className="text-primary text-2xl" />
                </div>
                <p className="text-lg text-gray-700">Phone: 07895 961091</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary text-2xl" />
                <p className="text-lg text-gray-700">
                  Email: info@inspiredeventsandtours.co.uk
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <FaMapMarkerAlt className="text-primary text-2xl" />
                </div>
                <p className="text-lg text-gray-700">
                  Address: 14 Hints Road, Hopwas, Tamworth, B78 3AA, United Kingdom
                </p>
              </div>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d77388.02974800543!2d-1.880175254381018!3d52.68930643474204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x487a0801df178f9f%3A0x79d841dd6bf4ba61!2s35%20Burton%20Rd%2C%20Streethay%2C%20Lichfield%20WS13%208LR%2C%20UK!3m2!1d52.689335!2d-1.7977751!5e0!3m2!1sen!2sin!4v1732972009347!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
