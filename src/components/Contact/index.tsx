"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData);
    // You would typically handle form submission here, like calling an API
  };

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Contact Support
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are here to help! Please fill out the form below and our support
            team will get back to you as soon as possible.
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
              <label htmlFor="message" className="block text-lg text-gray-700">
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
          <h3 className="text-2xl font-semibold text-primary">
            Contact Details
          </h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary text-2xl" />
              <p className="text-lg text-gray-700">Phone: +1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary text-2xl" />
              <p className="text-lg text-gray-700">
                Email: support@inspiredevents.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <p className="text-lg text-gray-700">
                Address: 1234 Event St, City, Country
              </p>
            </div>
          </div>

          {/* Map */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
