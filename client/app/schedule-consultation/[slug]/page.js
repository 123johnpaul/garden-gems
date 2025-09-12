import React from "react";
import Image from "next/image";

import peopleInOffice from "@/public/assets/peopleInOffice.png";
import ConsultationForm from "@/_components/consultation/consultationForm";

export default async function ScheduleConsultation({ params }) {
  const { slug } = await params;
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src={peopleInOffice}
            alt="People discussing in an office"
            className="rounded-lg shadow-lg"
            width="auto"
            height="auto"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide">
            Ready to work with us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Schedule a Consultation
          </h2>
          <ConsultationForm selectedServiceId={slug} />
        </div>
      </div>
    </section>
  );
}
