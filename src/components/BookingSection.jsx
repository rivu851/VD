 
import React from "react";
import { useTranslation } from "react-i18next";
import { FaPlane, FaTrain, FaTaxi,   FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";

const transportOptions = [
  { icon: FaHotel, color: "from-blue-400 to-blue-600", text: "Hotel" },
  { icon: FaPlane, color: "from-blue-400 to-blue-600", text: "Flights" },
  { icon: FaTrain, color: "from-green-500 to-green-700", text: "Trains" },
  { icon: FaHotel, color: "from-red-500 to-red-700", text: "Hotel" },
  { icon: FaTaxi, color: "from-yellow-500 to-yellow-700", text: "Cabs" }
];
const BookingSection = () => {
   
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-slate-400">
      {transportOptions.map(({ icon: Icon, color, text }, index) => (
        <div
          key={index}
          className={`p-8 rounded-2xl text-center gap-y-4 text-white shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${color}`}
        >
          <Icon className="text-6xl mx-auto drop-shadow-lg" />
          <h3 className="mt-4 text-2xl font-semibold">{text}</h3>
          <button className="mt-5">
             <Link 
           to={`${text == "Hotel"  ? "/hotelbooking" : ""}  `}
          className="mt-6 px-6 py-2.5 bg-white text-gray-900 font-medium rounded-lg shadow hover:bg-gray-200 transition">
            Book Now
          </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingSection;
