import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-500 text-black py-10 px-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
        
        {/* Visit Us (Left Side) */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> BimFrox
          </p>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" /> +91xxxxxxxxxx
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" /> bimfrox@gmail.com
          </p>
        </div>

        {/* Connect Us (Right Side) */}
        <div className="flex flex-col items-start sm:items-end">
          <h2 className="text-xl font-semibold mb-4">Connect Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              className="  hover:text-red-500 transition"
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-black text-sm">
        © {new Date().getFullYear()} Clothing Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
