'use client';

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaCrown,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Menu",
    "About",
    "Gallery",
    "Contact",
  ];

  return (
    <header className="bg-[#0B1F3A] text-[#D4AF37] shadow-xl sticky top-0 z-50 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Navbar */}
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group">
            
            {/* Logo Circle */}
            <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#13294B] group-hover:bg-[#D4AF37] transition duration-300">
              <FaCrown className="text-2xl group-hover:text-[#0B1F3A]" />
            </div>

            {/* Brand Name */}
            <div>
              <h1 className="text-3xl font-extrabold tracking-wider leading-none">
                UMRAO
              </h1>
              <p className="text-xs tracking-[4px] text-gray-300 uppercase">
                Luxury Restaurant
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Book Table Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <button className="bg-[#D4AF37] text-[#0B1F3A] px-5 py-2 rounded-full font-semibold hover:bg-white transition duration-300 shadow-lg">
              Book Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-6 border-t border-[#D4AF37]/20">
            <nav className="flex flex-col gap-5 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>

            <button className="mt-6 w-full bg-[#D4AF37] text-[#0B1F3A] py-3 rounded-full font-semibold hover:bg-white transition duration-300">
              Book Table
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;