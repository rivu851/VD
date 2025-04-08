import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="flex items-center gap-2"><FaPhone /> +91 8292986414</p>
          <p className="flex items-center gap-2"><FaEnvelope /> support@voyager.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Kolkata, India</p>
        </div>
 
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-3">Stay Updated</h2>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-48 md:w-64 bg-gray-700 text-white focus:outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2">Subscribe</button>
          </div>
        </div>
 
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center gap-5">
            <a href="#" className="hover:text-cyan-400 transition"><FaFacebook size={28} /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaTwitter size={28} /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FaInstagram size={28} /></a>
          </div>
        </div>

      </div>
      <div className="mt-8 border-t border-gray-600 pt-4">
        <p>&copy; {new Date().getFullYear()} Voyager. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
