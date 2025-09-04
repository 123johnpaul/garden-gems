import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/utils/api";

export default async function ServiceCards() {
const services = await fetchData("/services");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300"
        >
          <Image
            src={service.image_path}
            alt={service.name}
            height={200}
            width={200}
            className="w-full h-56 object-cover rounded-md"
          />
          <p className="mt-4 text-lg font-medium text-gray-800">
            {service.name}
          </p>
          <Link href={`/services/${service.id}`}>
            <button className="mt-3 px-4 py-2 bg-[#0C7769] text-white text-sm rounded-lg hover:bg-[#095f54] transition duration-200">
              Learn more
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
