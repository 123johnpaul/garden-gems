"use client";
import React, { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Residential Gardens",
    image: "/assets/residential.png",
    description:
      "Transform your home into a relaxing green haven. Our residential garden services include personalized plant selection, seasonal care, and design tailored to your lifestyle.",
  },
  {
    id: 2,
    title: "Garden Construction",
    image: "/assets/garden.png",
    description:
      "From concept to completion, we bring your dream garden to life. We handle soil preparation, planting, irrigation systems, and structural features with precision.",
  },
  {
    id: 3,
    title: "Landscape Design",
    image: "/assets/landscape.png",
    description:
      "Our expert designers create stunning, functional landscapes that blend beauty and sustainability, enhancing the overall value of your property.",
  },
  {
    id: 4,
    title: "Commercial Services",
    image: "/assets/commercial.png",
    description:
      "We provide large-scale landscaping and maintenance for offices, estates, and public spaces, ensuring a professional, welcoming environment year-round.",
  },
];

// ✅ Modal Component
const Modal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover rounded-lg"
        />

        {/* Title + Description */}
        <h3 className="mt-4 text-2xl font-semibold text-gray-800">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-600">{service.description}</p>

        {/* Action Button */}
        <button className="mt-4 px-5 py-2 bg-[#0C7769] text-white rounded-lg hover:bg-[#095f54] transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Wide Range Of Garden Gem Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At the core of our purpose and dedication lies the mission to unlock
          your landscape’s utmost potential, while simultaneously elevating your
          property value.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <p className="mt-4 text-lg font-medium text-gray-800">
                {service.title}
              </p>
              <button
                className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200"
                onClick={() => setSelectedService(service)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Main Button */}
        <button
          className="px-8 py-3 text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition duration-300"
          style={{ backgroundColor: "#0C7769" }}
        >
          View All Services
        </button>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
