import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <div className="max-h-[100px] bg-[#0C7769] text-white">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Garden Gems" width={58} height={58} />
          <span className="text-xl font-bold">Garden Gems</span>
        </div>
        <div className="flex items-center space-x-8 text-sm">
          <Link href="/" className="hover:underline">
            <p>Home</p>
          </Link>
          <div className="relative group">
            <button className="hover:underline">Services ▾</button>
            <div className="absolute left-0 hidden w-40 mt-2 bg-white text-black shadow-md rounded group-hover:block">
              <Link
                href="services"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Lawn Care
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Landscaping
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Garden Design
              </Link>
            </div>
          </div>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/" className="hover:underline">
            Plants List
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span>(000) 000 - 0000</span>
          <Link href="/contact">
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-[#107361]">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
