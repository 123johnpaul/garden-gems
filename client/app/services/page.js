import React from "react";
import Image from "next/image";

export default function Services() {
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
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="/assets/residential.png"
              alt="Residential Gardens"
              className="w-full h-56 object-cover rounded-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-800">
              Residential Gardens
            </p>
            <button className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="/assets/garden.png"
              alt="Garden Construction"
              className="w-full h-56 object-cover rounded-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-800">
              Garden Construction
            </p>
            <button className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <img
              src="/assets/landscape.png"
              alt="Landscape Design"
              className="w-full h-56 object-cover rounded-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-800">
              Landscape Design
            </p>
            <button className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200">
              Learn More
            </button>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <Image
              src="/assets/commercial.png"
              alt="Commercial Services"
              className="w-full h-56 object-cover rounded-md"
              width={300}
              height={200}
            />
            <p className="mt-4 text-lg font-medium text-gray-800">
              Commercial Services
            </p>
            <button className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Main Button */}
        <button
          className="px-8 py-3 text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition duration-300"
          style={{ backgroundColor: "#0C7769" }}
        >
          View All Services
        </button>
      </div>
    </section>
  );
}
