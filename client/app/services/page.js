"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Residential Gardens",
      img: "/assets/residential.png",
      desc: "Transform your home’s outdoor space into a lush, vibrant garden with our tailored residential garden services.",
    },
    {
      title: "Garden Construction",
      img: "/assets/garden.png",
      desc: "From planning to planting, we build sustainable and beautiful gardens designed to thrive year-round.",
    },
    {
      title: "Landscape Design",
      img: "/assets/landscape.png",
      desc: "Custom landscape solutions that combine creativity, functionality, and nature’s beauty.",
    },
    {
      title: "Commercial Services",
      img: "/assets/commercial.png",
      desc: "Enhance your business exterior with professional landscaping and maintenance services.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Wide Range Of Garden Gem Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At the core of our purpose and dedication lies the mission to unlock
          your landscape’s utmost potential, while simultaneously elevating your
          property value.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 p-4"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-4 text-lg font-medium text-gray-800">
                {service.title}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="mt-3 px-4 py-2 rounded-md text-white text-sm transition hover:opacity-90"
                style={{ backgroundColor: "#0C7769" }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <button
          className="px-6 py-3 text-white rounded-lg shadow hover:opacity-90"
          style={{ backgroundColor: "#0C7769" }}
        >
          View All Services
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-4 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 mb-6">{selectedService.desc}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 rounded-md text-white"
                style={{ backgroundColor: "#0C7769" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
