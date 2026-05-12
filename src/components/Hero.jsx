import React from "react";
import { FaArrowRight, FaUtensils, FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Restaurant Food"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 px-4 py-2 rounded-full mb-6">
            <FaStar className="text-yellow-400" />
            <span className="text-sm font-medium tracking-wide">
              Best Restaurant In Town
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Taste The <span className="text-red-500">Luxury</span> Of
            Authentic Food
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Experience delicious meals crafted with passion and the freshest
            ingredients. From traditional flavors to modern cuisine — every
            bite tells a story.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 px-7 py-4 rounded-xl font-semibold shadow-lg">
              Explore Menu
              <FaArrowRight />
            </button>

            <button className="flex items-center gap-2 border border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-7 py-4 rounded-xl font-semibold">
              <FaUtensils />
              Book A Table
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-red-500">15K+</h2>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">50+</h2>
              <p className="text-gray-300 text-sm">Food Variants</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-500">4.9★</h2>
              <p className="text-gray-300 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}