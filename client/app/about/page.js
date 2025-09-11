export default function About() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Garden Gems
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Garden Gems, we believe every outdoor space has the potential to
            become a sanctuary of beauty and peace. Our mission is to craft
            landscapes that connect people with nature, elevate property value,
            and inspire daily living.
          </p>
        </div>

        {/* ✅ Story / Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="/assets/PeopleInOffice.png"
            alt="Our team at work"
            className="w-full h-80 object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          />
          <div className="transition duration-300 hover:translate-y-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for green living, Garden Gems has grown
              into a trusted name in gardening and landscaping. From small
              home gardens to large estates, we bring creativity, expertise,
              and care to every project.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team blends artistic vision with sustainable practices,
              ensuring that every space is not just beautiful, but also
              eco-friendly and enduring.
            </p>
          </div>
        </div>

        {/* ✅ Values Section with Hover Effects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            What We Stand For
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Sustainability",
                desc: "We prioritize eco-friendly methods and materials to protect the environment while creating lasting beauty.",
              },
              {
                title: "Craftsmanship",
                desc: "Every project is treated like a work of art, blending precision with creativity to achieve stunning results.",
              },
              {
                title: "Community",
                desc: "We value collaboration and work closely with clients to bring their vision to life while strengthening community ties.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm transition duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:bg-green-100 group"
              >
                <h4 className="text-xl font-semibold text-green-700 mb-2 transition-colors duration-300 group-hover:text-green-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 transition duration-300 group-hover:text-gray-800">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
