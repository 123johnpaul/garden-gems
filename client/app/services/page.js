import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
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
          {/* Card 1 */}
          <div className="group flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src="/assets/residential.png"
              alt="Residential Gardens"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-[#0C7769] transition-colors duration-300">
              Residential Gardens
            </p>
            <button className="mt-3 mb-5 px-4 py-2 text-sm rounded-lg text-white bg-[#0C7769] hover:bg-[#095d52] transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src="/assets/garden.png"
              alt="Garden Construction"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-[#0C7769] transition-colors duration-300">
              Garden Construction
            </p>
            <button className="mt-3 mb-5 px-4 py-2 text-sm rounded-lg text-white bg-[#0C7769] hover:bg-[#095d52] transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src="/assets/landscape.png"
              alt="Landscape Design"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-[#0C7769] transition-colors duration-300">
              Landscape Design
            </p>
            <button className="mt-3 mb-5 px-4 py-2 text-sm rounded-lg text-white bg-[#0C7769] hover:bg-[#095d52] transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <Image
              src="/assets/commercial.png"
              alt="Commercial Services"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
            <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-[#0C7769] transition-colors duration-300">
              Commercial Services
            </p>
            <button className="mt-3 mb-5 px-4 py-2 text-sm rounded-lg text-white bg-[#0C7769] hover:bg-[#095d52] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-8 py-4 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[#0C7769] hover:bg-[#095d52]">
          View All Services
        </button>
      </div>
    </section>
  );
}
