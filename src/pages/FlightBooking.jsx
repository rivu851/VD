import React, { useState } from "react";
import { FaPlane, FaSearch } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";

const dummyFlights = [
  {
    id: 1,
    from: "Kolkata",
    to: "Mumbai",
    airline: "IndiGo",
    date: "2025-06-15T10:00:00",
    price: 6200,
  },
  {
    id: 2,
    from: "Kolkata",
    to: "Delhi",
    airline: "Air India",
    date: "2025-06-16T14:00:00",
    price: 7500,
  },
  {
    id: 3,
    from: "Mumbai",
    to: "Kolkata",
    airline: "SpiceJet",
    date: "2025-06-17T09:00:00",
    price: 5800,
  },
];

const FlightBooking = () => {
  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [airlineSearch, setAirlineSearch] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const filteredFlights = dummyFlights.filter((flight) => {
    const matchesFrom = flight.from.toLowerCase().includes(fromSearch.toLowerCase());
    const matchesTo = flight.to.toLowerCase().includes(toSearch.toLowerCase());
    const matchesAirline = flight.airline.toLowerCase().includes(airlineSearch.toLowerCase());
    const matchesDate = date ? flight.date.startsWith(date) : true;

    return matchesFrom && matchesTo && matchesAirline && matchesDate;
  });

  const handleBooking = (flight) => {
    console.log("Booking flight:", {
      ...flight,
      passengers,
    });

    // Add logic here to redirect to checkout page, API call, or toast
    alert(`Flight booked: ${flight.from} → ${flight.to} for ${passengers} passenger(s)!`);
  };

  return (
    <div className="max-w-7xl mx-auto pt-28 px-4 pb-12">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
        <FaPlane className="text-blue-500" />
        Book Your Flight
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="md:col-span-1 space-y-4">
          <div className="border px-3 py-2 rounded-md flex items-center">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="From"
              value={fromSearch}
              onChange={(e) => setFromSearch(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <div className="border px-3 py-2 rounded-md flex items-center">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="To"
              value={toSearch}
              onChange={(e) => setToSearch(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <div className="border px-3 py-2 rounded-md flex items-center">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Airline"
              value={airlineSearch}
              onChange={(e) => setAirlineSearch(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <div className="border px-3 py-2 rounded-md flex items-center">
            <AiOutlineCalendar className="text-gray-500 mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none w-full"
            />
          </div>

          <div className="border px-3 py-2 rounded-md flex items-center">
            <MdOutlinePeople className="text-gray-500 mr-2" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value))}
              className="outline-none w-full"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Passenger{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Flight Results */}
        <div className="md:col-span-3 space-y-6">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="p-6 border rounded-md shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {flight.from} → {flight.to}
                  </h3>
                  <p className="text-sm text-gray-500">{flight.airline}</p>
                  <p className="text-sm text-gray-500">
                    Departure:{" "}
                    {new Date(flight.date).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <p className="text-lg font-bold text-green-600">
                    ₹{flight.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleBooking(flight)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No flights found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
