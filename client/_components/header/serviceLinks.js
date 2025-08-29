import Link from "next/link";
import { fetchData } from "@/utils/api";

export default async function ServiceLinks() {
  const services = await fetchData("services");
  return (
    <div className="absolute left-0 opacity-0 invisible w-40 mt-2 bg-white text-black shadow-md rounded transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible">
     {services.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.id}`}
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}
