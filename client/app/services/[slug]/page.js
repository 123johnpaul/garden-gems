import { fetchData } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

import Button from "@/_components/button";
import { formatNaira } from "@/utils/utils";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await fetchData(`/services/${slug}`);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">
          Sorry, We do not offer this service yet
        </h1>
        <p className="mt-4">
          Be sure to contact us so we see how we can include it.
        </p>
        <Link className="mt-4 text-[#0C7769] underline" href="/services">
          View our available services here
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto py-28 px-6 text-center transition-opacity duration-700">
      <Image
        src={service.image_path}
        alt={service.name}
        width={300}
        height={300}
        className="mx-auto w-full max-w-md h-64 object-cover rounded-lg shadow mb-8 transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
      />
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="text-black text-xl mb-4 font-medium">Price: {formatNaira(service.price)}</p>
      <p className="text-gray-700 text-lg mb-8">{service.description}</p>
      <Link href={`/schedule-consultation/${service.id}`}>
        <Button className="px-6 py-3 text-white bg-[#0C7769] rounded-lg shadow hover:opacity-90 hover:scale-105 transition-all duration-300">
          Schedule Consultation
        </Button>
      </Link>
    </section>
  );
}
