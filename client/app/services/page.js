import React from "react";
import Link from "next/link";
import Image from "next/image";

const serviceCards = [
  {
    slug: "residential",
    title: "Residential Gardens",
    image: "/assets/residential.png",
  },
  {
    slug: "garden",
    title: "Garden Construction",
    image: "/assets/garden.png",
  },
  {
    slug: "landscape",
    title: "Landscape Design",
    image: "/assets/landscape.png",
  },
  {
    slug: "commercial",
    title: "Commercial Services",
    image: "/assets/commercial.png",
    useNextImage: true,
  },
];

export default function Services() {
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
          {serviceCards.map((card) => (
            <Link
              key={card.slug}
              href={`/services/${card.slug}`}
              className="flex flex-col items-center hover:scale-105 transition-transform"
            >
              {card.useNextImage ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg shadow"
                  width={200}
                  height={200}
                />
              ) : (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg shadow"
                />
              )}
              <p className="mt-4 text-lg font-medium text-gray-800">
                {card.title}
              </p>
            </Link>
          ))}
        </div>

        {/* Button with custom green color */}
        <button
          className="px-6 py-3 text-white rounded-lg shadow hover:opacity-90"
          style={{ backgroundColor: "#0C7769" }}
        >
          View All Services
        </button>
      </div>
    </section>
  );
}