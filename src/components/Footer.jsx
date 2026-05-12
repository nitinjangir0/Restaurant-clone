import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-[#D4AF37] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Royal Taste
            </h2>
            <p className="text-sm leading-7 text-gray-300">
              Experience luxury dining with authentic flavors,
              elegant ambiance, and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Home", "Menu", "About", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <p className="text-gray-300">
                  123 Royal Street, Jaipur, Rajasthan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <p className="text-gray-300">
                  +91 98765 43210
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <p className="text-gray-300">
                  info@royaltaste.com
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-sm text-gray-300 mb-5">
              Stay connected with us on social media.
            </p>

            <div className="flex gap-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1F3A] transition duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D4AF37]/30 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>
            © 2026 Royal Taste. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;