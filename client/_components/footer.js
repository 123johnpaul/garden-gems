import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.svg";
import CircularPhone from "./circularPhone";
import EmailIcon from "./emailIcon";
import Newsletter from "./newsletter";

const Footer = ({ services }) => {
  return (
    <footer className="bg-black text-white font-sans">
      <Newsletter />
      {/* Main Footer Content (Logo/Social + Nav Links) */}
      <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Company Logo and Social Media */}
        <div className="flex flex-col items-start">
          <div className="mb-6 flex items-center gap-2">
            <Image
              src={logo}
              alt="Garden Gems Logo"
              width="auto"
              height="auto"
            />
            <span className="text-xl font-bold">Garden Gems</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg" // <--- Update this path
                alt="Twitter"
                width={32} // <--- Adjust size
                height={32} // <--- Adjust size
                className="rounded-full border border-white p-1" // Keep these classes for the border/padding
              />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Image
                src="/icons/linkedin.svg" // <--- Update this path
                alt="LinkedIn"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg" // <--- Update this path
                alt="Facebook"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image
                src="/icons/instagram.svg" // <--- Update this path
                alt="Instagram"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </Link>
          </div>
        </div>

        {/* Navigation Columns */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                href="/#"
                className="hover:text-teal-400 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-teal-400 transition duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="hover:text-teal-400 transition duration-200"
              >
                Plants List
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-teal-400 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#blog"
                className="hover:text-teal-400 transition duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-gray-300">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className="hover:text-teal-400 transition duration-200"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Resources</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                href="/#contact"
                className="hover:text-teal-400 transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-teal-400 transition duration-200"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-teal-400 transition duration-200"
              >
                Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-teal-400 transition duration-200"
              >
                Payments
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info and Copyright */}
      <div className="border-t border-gray-800 py-8 px-4 md:px-8 lg:px-16 text-sm">
        <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center text-gray-400">
          {/* Contact Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              {/* --- CUSTOM QUESTION ICON --- */}
              <CircularPhone width={40} height={40} />
              Have a question? <span className="text-white">310-437-2766</span>
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              {/* --- CUSTOM CONTACT ICON --- */}
              <EmailIcon width={40} height={40} />
              Contact us at <span className="text-white">310-437-2766</span>
            </p>
          </div>
          {/* Copyright */}
          <p>
            &copy; {new Date().getFullYear()} Webtechsolution.in, All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
