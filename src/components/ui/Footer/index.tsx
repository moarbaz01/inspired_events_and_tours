import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
const tripsLinks = [
  {
    name: "2025 Morocco Bike Trip",
    link: "/trips/morocco-bike-trips-2025",
  },
  { name: "2025 Car Trips", link: "/trips/car-trips-2025" },
  { name: "2025 Land Rover Trips", link: "/trips/land-rover-trips-2025" },
  {
    name: "2025 European Bike Trips",
    link: "/trips/european-bike-trips-2025",
  },
  { name: "2025 UK Bike Trips", link: "/trips/uk-bike-trips-2025" },
  {
    name: "2026 European Bike Trips",
    link: "/trips/european-bike-trips-2026",
  },
  {
    name: "2026 Morocco Bike Trips",
    link: "/trips/morocco-bike-trips-2026",
  },
  {
    name: "2026 European Car Trips",
    link: "/trips/european-car-trips-2026",
  },
];

const Footer = () => {
  return (
    <div className="bg-primary text-white py-12 px-4 md:px-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Footer Left - Logo and Short Description */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Inspired Events and Tours
            </h2>
            <p className="text-sm mb-6">
              Explore unforgettable journeys, hidden gems, and the adventure of
              a lifetime with us. Join us to make your dream trip come true!
              making memories one trip at a time
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-white hover:opacity-80 transition-all"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-white hover:opacity-80 transition-all"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-white hover:opacity-80 transition-all"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-white hover:opacity-80 transition-all"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Middle - Quick Links */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/contact"
                className="text-white hover:opacity-80 transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="text-white hover:opacity-80 transition-all"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Right - Trips */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Our Trips</h3>
          <ul className="space-y-2">
            {tripsLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.link}
                  className="text-white hover:opacity-80 transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom - Contact Info */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2  break-words">
            Email: info@inspiredeventsandtours.co.uk
          </p>
          <p className="mb-4">Phone: 07895961091</p>
          <p className="mb-4">
            Address: 14 Hints Road, Hopwas, Tamworth, B78 3AA, United Kingdom
          </p>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="text-center mt-12 border-t border-white pt-6">
        <p className="text-lg">
          &copy; 2022 Inspired Events and Tours. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
