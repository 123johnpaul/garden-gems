"use client";
import { useEffect, useState, use } from "react";

const services = {
  residential: {
    title: "Residential Gardens",
    description: "Transform your home garden into a beautiful oasis.",
    image: "/assets/residential.png",
  },
  garden: {
    title: "Garden Construction",
    description: "Expert construction for vibrant, lasting gardens.",
    image: "/assets/garden.png",
  },
  landscape: {
    title: "Landscape Design",
    description: "Creative landscape designs tailored to your space.",
    image: "/assets/landscape.png",
  },
  commercial: {
    title: "Commercial Services",
    description: "Professional landscaping for commercial properties.",
    image: "/assets/commercial.png",
  },
};

export default function ServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const service = services[unwrappedParams.slug];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-4">Please check the service URL.</p>
      </div>
    );
  }

  return (
    <section
      className={`max-w-3xl mx-auto py-16 px-6 text-center transition-opacity duration-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="mx-auto w-full max-w-md h-64 object-cover rounded-lg shadow mb-8 transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
      />
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 text-lg mb-8">{service.description}</p>
      <button
        className="px-6 py-3 text-white rounded-lg shadow hover:opacity-90 hover:scale-105 transition-all duration-300"
        style={{ backgroundColor: "#0C7769" }}
        onClick={() => window.location.href = "/schedule-consultation"}
      >
        Schedule Consultation
      </button>
    </section>
  );
}