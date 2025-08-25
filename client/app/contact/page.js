import React from "react";
import Image from "next/image";

import peopleInGarden from "@/public/assets/peopleInGarden.jpg"

export default function Contact() {
  return (
    <section className="bg-[#0C7769] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <Image
            src={peopleInGarden}
            alt="Consultation"
            className="rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        {/* Form */}
        <div>
          <p className="text-sm uppercase tracking-wide">Need Any Consultations</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded bg-transparent border-b border-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail address"
              className="p-3 rounded bg-transparent border-b border-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 rounded bg-transparent border-b border-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded bg-transparent border-b border-white focus:outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="col-span-1 md:col-span-2 p-3 rounded bg-transparent border-b border-white focus:outline-none"
            ></textarea>

            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#0C7769] font-semibold rounded-lg shadow hover:bg-gray-100"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
