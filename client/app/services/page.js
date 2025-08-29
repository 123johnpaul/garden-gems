"use client";
import React from "react";

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

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* ✅ Updated Title + Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Professional Gardening & Landscaping Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From cozy residential gardens to large commercial landscapes, we design,
          build, and maintain spaces that inspire relaxation and elevate property
          value.
        </p>

        {/* ✅ Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <p className="mt-4 text-lg font-medium text-gray-800">
                {service.title}
              </p>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}