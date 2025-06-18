"use client";

import { useState } from "react";
import { FaBus, FaChair } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const buses = [
  {
    id: 1,
    name: "Volvo Express",
    source: "Delhi",
    destination: "Jaipur",
    departure: "08:00 AM",
    arrival: "12:00 PM",
    duration: "4h",
    price: 499,
    availableSeats: Array(30).fill(true),
  },
  {
    id: 2,
    name: "Rajdhani Travels",
    source: "Delhi",
    destination: "Agra",
    departure: "09:30 AM",
    arrival: "01:00 PM",
    duration: "3.5h",
    price: 399,
    availableSeats: Array(30).fill(true),
  },
  {
    id: 3,
    name: "Himachal Roadways",
    source: "Shimla",
    destination: "Manali",
    departure: "07:00 AM",
    arrival: "02:00 PM",
    duration: "7h",
    price: 599,
    availableSeats: Array(30).fill(true),
  },
];

export default function BusBooking() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const filteredBuses = buses.filter(
    (bus) =>
      bus.source.toLowerCase().includes(source.toLowerCase()) &&
      bus.destination.toLowerCase().includes(destination.toLowerCase())
  );

  const toggleSeat = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((i) => i !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 pt-28">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Bus Booking Portal</h1>
          <p className="text-gray-600">Search, select seats, and reserve your ride!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Source"
            className="border p-2 rounded-md w-64"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            className="border p-2 rounded-md w-64"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {!selectedBus ? (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Available Buses</h2>
            {filteredBuses.map((bus) => (
              <div
                key={bus.id}
                className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-center hover:shadow-lg transition"
              >
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                    <FaBus /> {bus.name}
                  </h3>
                  <p className="text-gray-600">
                    {bus.source} → {bus.destination} ({bus.duration})
                  </p>
                  <p className="text-sm text-gray-500">
                    Departs at {bus.departure} | Arrives by {bus.arrival}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-blue-800 font-bold text-xl">₹{bus.price}</p>
                  <button
                    onClick={() => {
                      setSelectedBus(bus);
                      setSelectedSeats([]);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Select Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setSelectedBus(null)}
            >
              ← Back to bus list
            </button>

            <h2 className="text-2xl font-bold">Select Your Seats</h2>

            <div className="grid grid-cols-5 gap-4 w-full max-w-md mx-auto border p-4 rounded-md bg-gray-100">
              {selectedBus.availableSeats.map((_, index) => (
                <button
                  key={index}
                  onClick={() => toggleSeat(index)}
                  className={`p-2 rounded border text-sm flex items-center justify-center transition-colors duration-200
                    ${selectedSeats.includes(index) ? "bg-green-500 text-white" : "bg-white hover:bg-blue-100"}`}
                >
                  <FaChair /> {index + 1}
                </button>
              ))}
            </div>

            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold mb-2">Total Price: ₹{selectedSeats.length * selectedBus.price}</h3>
              <button
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
                onClick={() => alert("Booking Confirmed!\nSeats: " + selectedSeats.map(i => i + 1).join(", "))}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}