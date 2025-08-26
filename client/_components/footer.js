import React from 'react';
import Image from 'next/image'; // <--- Make sure you have this import!

import logo from "@/public/logo.svg";
import Phone from './phone';
import CircularPhone from './circularPhone';
import EmailIcon from './emailIcon';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      {/* Newsletter Section (no changes here) */}
      <div className="py-16 px-4 md:px-8 lg:px-16 text-center border-b border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Newsletter</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Be the first one to know about discounts, offers and events weekly in your mailbox.
          Unsubscribe whenever you like with one click.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black border border-gray-600 text-white p-3 rounded-md w-full sm:w-auto flex-grow focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

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
            <span className='text-xl font-bold'>Garden Gems</span>
          </div>
          <div className="flex space-x-4">
           
            <a href="#" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg" // <--- Update this path
                alt="Twitter"
                width={32} // <--- Adjust size
                height={32} // <--- Adjust size
                className="rounded-full border border-white p-1" // Keep these classes for the border/padding
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/icons/linkedin.svg" // <--- Update this path
                alt="LinkedIn"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg" // <--- Update this path
                alt="Facebook"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/icons/instagram.svg" // <--- Update this path
                alt="Instagram"
                width={32}
                height={32}
                className="rounded-full border border-white p-1"
              />
            </a>
          </div>
        </div>

        {/* Navigation Columns (no changes here) */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Home</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Projects</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Plants List</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Outdoor Living</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Pools</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Hardscaping</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Patios</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Outdoor Kitchens</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Resources</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Contact Us</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Terms</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Policy</a></li>
            <li><a href="#" className="hover:text-teal-400 transition duration-200">Payments</a></li>
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
          <p>&copy; {new Date().getFullYear()} Webtechsolution.in, All Rights Reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
