"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/utils/api";

import logo from "@/public/logo.svg";
import ServiceLinks from "./header/serviceLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchData("services");
      setServices(data);
    };
    loadServices();
  }, []);


  return (
    <div className="bg-[#0C7769] text-white">
      <nav className="flex items-center justify-between px-4 md:px-10 py-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Garden Gems" width={58} height={58} />
            <span className="text-xl font-bold">Garden Gems</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <div className="relative group">
            <Link href="/services" className="hover:underline">Services ▾</Link>
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
          </div>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/" className="hover:underline">
            Plants List
          </Link>
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm">(000) 000 - 0000</span>
          <Link href="/schedule-consultation">
            <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-[#107361] text-sm">
              Schedule a Consultation
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0C7769] border-t border-white/20">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/projects" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Plants List
            </Link>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm mb-2">(000) 000 - 0000</p>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-[#107361] text-sm">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
