import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { FaCarSide, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";

import "leaflet/dist/leaflet.css";

// Custom marker icons - green for pickup, red for drop
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Remove default icon URLs to avoid conflict
delete L.Icon.Default.prototype._getIconUrl;

const CabBooking = () => {
  const [filters, setFilters] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    carType: "",
    passengers: 1,
    minPrice: "",
    maxPrice: "",
  });

  const [pickupPos, setPickupPos] = useState(null);
  const [dropPos, setDropPos] = useState(null);

  const cabData = [
    { id: 1, type: "Sedan", name: "Toyota Camry", seats: 4, pricePerKm: 15, baseFare: 100 },
    { id: 2, type: "SUV", name: "Mahindra XUV700", seats: 6, pricePerKm: 25, baseFare: 150 },
    { id: 3, type: "Hatchback", name: "Hyundai i20", seats: 4, pricePerKm: 10, baseFare: 80 },
    { id: 4, type: "Luxury", name: "Mercedes-Benz E-Class", seats: 4, pricePerKm: 50, baseFare: 500 },
  ];

  useEffect(() => {
    if (pickupPos) {
      setFilters((f) => ({ ...f, pickup: `${pickupPos.lat.toFixed(4)}, ${pickupPos.lng.toFixed(4)}` }));
    } else {
      setFilters((f) => ({ ...f, pickup: "" }));
    }
  }, [pickupPos]);

  useEffect(() => {
    if (dropPos) {
      setFilters((f) => ({ ...f, drop: `${dropPos.lat.toFixed(4)}, ${dropPos.lng.toFixed(4)}` }));
    } else {
      setFilters((f) => ({ ...f, drop: "" }));
    }
  }, [dropPos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pickup" || name === "drop") {
      const parts = value.split(",").map((str) => str.trim());
      if (parts.length === 2) {
        const lat = parseFloat(parts[0]);
        const lng = parseFloat(parts[1]);
        if (!isNaN(lat) && !isNaN(lng)) {
          if (name === "pickup") setPickupPos(L.latLng(lat, lng));
          if (name === "drop") setDropPos(L.latLng(lat, lng));
        }
      }
      setFilters((f) => ({ ...f, [name]: value }));
      return;
    }
    setFilters((f) => ({
      ...f,
      [name]:
        name === "passengers" || name === "minPrice" || name === "maxPrice"
          ? value === ""
            ? ""
            : parseInt(value)
          : value,
    }));
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        if (!pickupPos) {
          setPickupPos(e.latlng);
        } else if (!dropPos) {
          setDropPos(e.latlng);
        }
        // else ignore clicks if both set
      },
    });
    return null;
  };

  const filteredCabs = cabData.filter((cab) => {
    const matchesCarType = !filters.carType || cab.type.toLowerCase() === filters.carType.toLowerCase();
    const matchesPassengers = !filters.passengers || cab.seats >= filters.passengers;

    let distanceKm = 10;
    if (pickupPos && dropPos) {
      distanceKm = pickupPos.distanceTo(dropPos) / 1000;
    }
    const estimatedPrice = cab.baseFare + cab.pricePerKm * distanceKm;

    const matchesMinPrice = filters.minPrice === "" || estimatedPrice >= filters.minPrice;
    const matchesMaxPrice = filters.maxPrice === "" || estimatedPrice <= filters.maxPrice;

    return matchesCarType && matchesPassengers && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="max-w-7xl mx-auto pt-28 px-6 pb-16 bg-gray-50 min-h-screen relative z-0">
      <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-4 text-gray-900">
        <FaCarSide className="text-yellow-600 text-4xl" />
        Book Your Cab
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="md:col-span-1 space-y-6 bg-white p-6 rounded-lg shadow-md z-10 relative">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              name="pickup"
              value={filters.pickup}
              onChange={handleChange}
              placeholder="Pickup Location (or click on map)"
              className="w-full outline-none placeholder-gray-400 text-gray-900 text-base"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              name="drop"
              value={filters.drop}
              onChange={handleChange}
              placeholder="Drop Location (or click on map)"
              className="w-full outline-none placeholder-gray-400 text-gray-900 text-base"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <AiOutlineCalendar className="text-gray-400 mr-3" />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 text-base"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <AiOutlineClockCircle className="text-gray-400 mr-3" />
            <input
              type="time"
              name="time"
              value={filters.time}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 text-base"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <FaCarSide className="text-gray-400 mr-3" />
            <select
              name="carType"
              value={filters.carType}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 text-base bg-transparent cursor-pointer"
            >
              <option value="">All Car Types</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-yellow-500 transition-colors duration-300">
            <MdOutlinePeople className="text-gray-400 mr-3" />
            <select
              name="passengers"
              value={filters.passengers}
              onChange={handleChange}
              className="w-full outline-none text-gray-900 text-base bg-transparent cursor-pointer"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} Passenger{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-2">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              min={0}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-900"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              min={0}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Map + Results */}
        <div className="md:col-span-3 space-y-6 relative z-0">
          <div className="h-96 rounded-lg shadow-md overflow-hidden border border-gray-300">
            <MapContainer
              center={[22.57, 88.36]} // Kolkata, West Bengal center
              zoom={11}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%", zIndex: 0 }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <MapClickHandler />
              {pickupPos && (
                <Marker
                  position={pickupPos}
                  icon={greenIcon}
                  draggable={true}
                  eventHandlers={{
                    dragend: (e) => setPickupPos(e.target.getLatLng()),
                  }}
                />
              )}
              {dropPos && (
                <Marker
                  position={dropPos}
                  icon={redIcon}
                  draggable={true}
                  eventHandlers={{
                    dragend: (e) => setDropPos(e.target.getLatLng()),
                  }}
                />
              )}
            </MapContainer>
          </div>

          {/* Cab Results */}
          <div className="space-y-5">
            {filteredCabs.length > 0 ? (
              filteredCabs.map((cab) => {
                let distanceKm = 10;
                if (pickupPos && dropPos) {
                  distanceKm = pickupPos.distanceTo(dropPos) / 1000;
                }
                const estimatedPrice = cab.baseFare + cab.pricePerKm * distanceKm;

                return (
                  <div
                    key={cab.id}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
                  >
                    <div>
                      <h3 className="text-2xl font-semibold">{cab.name}</h3>
                      <p className="text-gray-600">
                        Type: {cab.type} | Seats: {cab.seats}
                      </p>
                      <p className="mt-2 text-gray-800 font-semibold">
                        Fare: ₹{cab.pricePerKm} per km + base ₹{cab.baseFare}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-yellow-600">
                        ₹{estimatedPrice.toFixed(0)} approx.
                      </span>
                      <button className="mt-3 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 text-lg mt-8">
                No cabs available matching the filters.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Navbar fix note */}
      {/* 
        Make sure your navbar CSS has:
          position: fixed or sticky
          top: 0
          width: 100%
          z-index: 50 (or more than the map container)
        Example:
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          background-color: white;
        }
      */}
    </div>
  );
};

export default CabBooking;
