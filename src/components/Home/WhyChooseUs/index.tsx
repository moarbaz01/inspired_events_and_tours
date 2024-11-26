"use client";
import { FaPlane, FaHeart, FaDollarSign, FaMapMarkedAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaPlane className="text-4xl text-primary" />,
      title: "Seamless Travel",
      desc: "Enjoy a hassle-free experience with our expert planning.",
    },
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Trusted by Thousands",
      desc: "Over 10,000 happy travelers have trusted us with their trips.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-primary" />,
      title: "Best Price Guarantee",
      desc: "We offer competitive prices without compromising quality.",
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-primary" />,
      title: "Wide Range of Destinations",
      desc: "Explore our curated selection of breathtaking destinations.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      {/* Section Header */}
      <div className="text-center px-4 pb-4">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover what makes us the best travel agency for your adventures.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6 md:px-12 lg:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
