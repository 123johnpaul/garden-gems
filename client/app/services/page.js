import ServiceCards from "@/_components/serviceCards";
//reboot
export default function Services() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* ✅ Updated Title + Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Professional Gardening & Landscaping Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From cozy residential gardens to large commercial landscapes, we
          design, build, and maintain spaces that inspire relaxation and elevate
          property value.
        </p>
        <ServiceCards />
      </div>
    </section>
  );
}
