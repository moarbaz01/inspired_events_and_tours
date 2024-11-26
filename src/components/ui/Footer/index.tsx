import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Footer Left - Logo and Short Description */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Inspired Events and Tours
            </h2>
            <p className="text-lg mb-6">
              Explore unforgettable journeys, hidden gems, and the adventure of
              a lifetime with us. Join us to make your dream vacation come true!
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-white hover:text-primary transition-all"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-white hover:text-primary transition-all"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-white hover:text-primary transition-all"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-white hover:text-primary transition-all"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Middle - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#contact"
                className="text-white hover:text-primary transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-white hover:text-primary transition-all"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white hover:text-primary transition-all"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Right - Trips */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Our Trips</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#morocco2025"
                className="text-white hover:text-primary transition-all"
              >
                2025 Morocco Bike Trip
              </Link>
            </li>
            <li>
              <Link
                href="#cartrips2025"
                className="text-white hover:text-primary transition-all"
              >
                2025 Car Trips
              </Link>
            </li>
            <li>
              <Link
                href="#landrover2025"
                className="text-white hover:text-primary transition-all"
              >
                2025 Land Rover Trips
              </Link>
            </li>
            <li>
              <Link
                href="#europe2025"
                className="text-white hover:text-primary transition-all"
              >
                2025 European Bike Trips
              </Link>
            </li>
            <li>
              <Link
                href="#uk2025"
                className="text-white hover:text-primary transition-all"
              >
                2025 UK Bike Trips
              </Link>
            </li>
            <li>
              <Link
                href="#europe2026"
                className="text-white hover:text-primary transition-all"
              >
                2026 European Bike Trips
              </Link>
            </li>
            <li>
              <Link
                href="#morocco2026"
                className="text-white hover:text-primary transition-all"
              >
                2026 Morocco Bike Trips
              </Link>
            </li>
            <li>
              <Link
                href="#europecar2026"
                className="text-white hover:text-primary transition-all"
              >
                2026 European Car Trips
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Bottom - Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Email: info@inspiredevents.com</p>
          <p className="mb-4">Phone: +123 456 7890</p>
          <p className="mb-4">
            Address: 14 Hints Road, Hopwas, Tamworth, B78 3AA, United Kingdom
          </p>
          <form>
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="w-full max-w-xs py-3 px-6 rounded-full text-black mb-4"
            />
            <button
              type="submit"
              className="w-full max-w-xs bg-primary text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="text-center mt-12 border-t border-white pt-6">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Inspired Events and Tours. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
