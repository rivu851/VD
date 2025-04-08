
import React from "react";
import { FaPlane, FaTrain, FaTaxi, FaBus } from "react-icons/fa";

const transportOptions = [
  { icon: FaPlane, color: "from-blue-400 to-blue-600", text: "Flights" },
  { icon: FaTrain, color: "from-green-500 to-green-700", text: "Trains" },
  { icon: FaBus, color: "from-red-500 to-red-700", text: "Bus" },
  { icon: FaTaxi, color: "from-yellow-500 to-yellow-700", text: "Cabs" }
];

const BookingSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-slate-400">
      {transportOptions.map(({ icon: Icon, color, text }, index) => (
        <div
          key={index}
          className={`p-8 rounded-2xl text-center text-white shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${color}`}
        >
          <Icon className="text-6xl mx-auto drop-shadow-lg" />
          <h3 className="mt-4 text-2xl font-semibold">{text}</h3>
          <button className="mt-6 px-6 py-2.5 bg-white text-gray-900 font-medium rounded-lg shadow hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingSection;
