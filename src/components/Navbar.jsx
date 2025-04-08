import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = ["Home", "Booking", "Contact", "Map", "Weather", "Emergency"];

  return (
    <nav className="bg-zinc-800 bg-opacity-90 fixed w-full top-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-white text-3xl font-extrabold tracking-wide"
        >
          Voyager
        </Link>
     
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`text-white text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full transition-colors duration-300 ${
                  location.pathname === `/${item.toLowerCase()}` ? "text-cyan-300" : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
   
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
 
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900 bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes size={28} />
        </button>
        <ul className="text-white text-center space-y-6 text-xl font-semibold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 hover:text-cyan-300 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
