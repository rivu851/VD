import React, { useState } from "react";
import { FaTrain, FaSearch } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";

const TrainBooking = () => {
  const [filters, setFilters] = useState({
    source: "",
    destination: "",
    train: "",
    trainNumber: "",
    date: "",
    passengers: 1,
    minPrice: "",
    maxPrice: "",
  });

  const trainData = [
    {
      id: 1,
      number: "12345",
      source: "Kolkata",
      destination: "Delhi",
      name: "Rajdhani Express",
      departure: "2025-06-15T18:30:00",
      price: 2400,
    },
    {
      id: 2,
      number: "54321",
      source: "Kolkata",
      destination: "Patna",
      name: "Howrah-Patna Express",
      departure: "2025-06-16T08:00:00",
      price: 980,
    },
    {
      id: 3,
      number: "67890",
      source: "Delhi",
      destination: "Mumbai",
      name: "Mumbai Rajdhani",
      departure: "2025-06-17T20:45:00",
      price: 3200,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]:
        name === "passengers" || name === "minPrice" || name === "maxPrice"
          ? value === ""
            ? ""
            : parseInt(value)
          : value,
    });
  };

  const filteredTrains = trainData.filter((train) => {
    const matchesSource =
      !filters.source ||
      train.source.toLowerCase().includes(filters.source.toLowerCase());
    const matchesDestination =
      !filters.destination ||
      train.destination.toLowerCase().includes(filters.destination.toLowerCase());
    const matchesTrain =
      !filters.train ||
      train.name.toLowerCase().includes(filters.train.toLowerCase());
    const matchesTrainNumber =
      !filters.trainNumber || train.number.includes(filters.trainNumber);
    const matchesDate = !filters.date || train.departure.startsWith(filters.date);
    const matchesMinPrice = filters.minPrice === "" || train.price >= filters.minPrice;
    const matchesMaxPrice = filters.maxPrice === "" || train.price <= filters.maxPrice;

    return (
      matchesSource &&
      matchesDestination &&
      matchesTrain &&
      matchesTrainNumber &&
      matchesDate &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });

  return (
    <div className="max-w-7xl mx-auto pt-28 px-6 pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <h2 className="text-5xl font-black mb-12 flex items-center gap-4 text-green-800 drop-shadow">
        <FaTrain className="text-green-600 text-5xl" />
        Train Booking Portal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-xl p-6 space-y-6 border-2 border-green-100">
          <h3 className="text-xl font-bold text-green-700">Search Filters</h3>
          {[
            { name: "source", placeholder: "Source", icon: <FaSearch /> },
            { name: "destination", placeholder: "Destination", icon: <FaSearch /> },
            { name: "train", placeholder: "Train Name", icon: <FaSearch /> },
            { name: "trainNumber", placeholder: "Train Number", icon: <FaSearch /> },
          ].map(({ name, placeholder, icon }) => (
            <div
              key={name}
              className="flex items-center border border-green-300 rounded-xl px-3 py-2 bg-green-50 focus-within:border-green-600 transition"
            >
              <div className="text-green-500 mr-3">{icon}</div>
              <input
                type="text"
                name={name}
                value={filters[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full outline-none placeholder-green-400 text-gray-900 text-base bg-transparent"
              />
            </div>
          ))}

          <div className="flex items-center border border-green-300 rounded-xl px-3 py-2 bg-green-50">
            <AiOutlineCalendar className="text-green-500 mr-3" />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 bg-transparent"
            />
          </div>

          <div className="flex items-center border border-green-300 rounded-xl px-3 py-2 bg-green-50">
            <MdOutlinePeople className="text-green-500 mr-3" />
            <select
              name="passengers"
              value={filters.passengers}
              onChange={handleChange}
              className="w-full outline-none bg-transparent text-gray-900 cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} Passenger{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center border border-green-300 rounded-xl px-3 py-2 bg-green-50 w-1/2">
              <span className="text-green-500 mr-2">Min ₹</span>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleChange}
                min={0}
                placeholder="0"
                className="w-full outline-none bg-transparent"
              />
            </div>

            <div className="flex items-center border border-green-300 rounded-xl px-3 py-2 bg-green-50 w-1/2">
              <span className="text-green-500 mr-2">Max ₹</span>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleChange}
                min={0}
                placeholder="Any"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Train Results */}
        <div className="md:col-span-3 space-y-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Available Trains</h3>
          {filteredTrains.length > 0 ? (
            filteredTrains.map((train) => (
              <div
                key={train.id}
                className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {train.source} → {train.destination}
                    </h3>
                    <p className="text-lg text-green-700 font-semibold">{train.name}</p>
                    <p className="text-sm text-gray-600 font-mono tracking-wide">
                      Train No: <span className="font-bold">{train.number}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Departure:{" "}
                      {new Date(train.departure).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <p className="text-3xl font-extrabold text-green-700">
                      ₹{train.price.toLocaleString()}
                    </p>
                    <button
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform duration-200"
                      onClick={() =>
                        alert(`Booking train ${train.name} (#${train.number})`)
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 font-semibold text-lg mt-10">
              No trains found. Try adjusting the filters!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;
