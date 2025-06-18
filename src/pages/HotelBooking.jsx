"use client";
import { useState, useRef, useEffect } from "react";
import { HotelCard } from "./hotel-card";
import GameSelector from "./GameSelector";
import { MapPin, Calendar, Users } from "./icons";

// ------------------------------------------------------------
// 🏨 SAMPLE HOTEL DATA (now with an images[] album and geolocation)
// ------------------------------------------------------------
const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "New York City, NY",
    price: 299,
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyYW5kJTIwcGxhemElMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1653280675477-878425ecb5f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyYW5kcGxhemElMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1674651240687-92b4ad15d0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYW5kcGxhemElMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
    ],
    amenities: ["Free WiFi", "Pool", "Spa", "Gym", "Restaurant"],
    description: "Experience luxury in the heart of Manhattan with stunning city views and world-class service.",
    duration: "1 night",
    people: "2 adults",
    geolocation: {
      latitude: 40.7580,
      longitude: -73.9855
    }
  },
  {
    id: 2,
    name: "Oceanview Resort",
    location: "Miami Beach, FL",
    price: 349,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1646598446711-e320fe4af62e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW4lMjB2aWV3JTIwcmVzb3J0fGVufDB8fDB8fHww",
    images: [
      "https://images.unsplash.com/photo-1646598446711-e320fe4af62e?w=600",
      "https://images.unsplash.com/photo-1576678927489-4b1aa6c3ab9b?w=600",
      "https://images.unsplash.com/photo-1600585154505-9808f73bd1c7?w=600"
    ],
    amenities: ["Beachfront", "Pool", "Spa", "Free Breakfast", "Bar"],
    description: "Beachfront paradise with private balconies and direct access to pristine white sand beaches.",
    duration: "1 night",
    people: "2 adults",
    geolocation: {
      latitude: 25.7932,
      longitude: -80.1306
    }
  },
  {
    id: 3,
    name: "Mountain Lodge",
    location: "Aspen, CO",
    price: 279,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1621765663900-f132db309fda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1621765663900-f132db309fda?q=80&w=600",
      "",
      ""
    ],
    amenities: ["Fireplace", "Ski-in/Ski-out", "Hot Tub", "Restaurant", "Bar"],
    description: "Cozy mountain retreat with ski-in/ski-out access and breathtaking alpine views.",
    duration: "1 night",
    people: "2 adults",
    geolocation: {
      latitude: 39.1911,
      longitude: -106.8175
    }
  }
];

export default function HotelBooking() {
  // [Previous state declarations remain the same...]
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([200, 400]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [discount, setDiscount] = useState(null);
  const [showGameSelector, setShowGameSelector] = useState(false);
  const [roomType, setRoomType] = useState("standard");
  const gameSelectorRef = useRef(null);

  // [Previous useEffect remains the same...]
  useEffect(() => {
    if (selectedHotel) {
      setMainImage(selectedHotel.images?.[0] || null);
    }
  }, [selectedHotel]);

  // [Previous utility functions remain the same...]
  const calculateDays = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const getBasePrice = () => {
    if (!selectedHotel) return 0;
    switch (roomType) {
      case "deluxe":
        return Math.round(selectedHotel.price * 1.3);
      case "suite":
        return Math.round(selectedHotel.price * 1.8);
      default:
        return selectedHotel.price;
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = getBasePrice();
    const days = calculateDays();
    return basePrice * days * rooms;
  };

  const calculateFinalPrice = () => {
    const total = calculateTotalPrice();
    const discounted = discount ? total - total * (discount / 100) : total;
    return Math.round(discounted * 1.12); // 12% tax
  };

  // [Previous filter function remains the same...]
  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
    return matchesSearch && matchesPrice;
  });

  // [Previous event handlers remain the same...]
  const handleBookNow = (hotelId) => {
    const hotel = hotels.find((h) => h.id === hotelId);
    setSelectedHotel(hotel);
    setMainImage(hotel.images?.[0] || null);
    setShowGameSelector(false);
    setDiscount(null);
  };

  const handleBackToResults = () => {
    setSelectedHotel(null);
    setShowGameSelector(false);
  };

  const handleDiscountWon = (discountAmount) => setDiscount(discountAmount);

  const handleDiscountClick = () => {
    setShowGameSelector(true);
    setTimeout(() => gameSelectorRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  useEffect(() => {
    if (showGameSelector && gameSelectorRef.current) {
      gameSelectorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showGameSelector]);

  // Helper function to generate Google Maps link
  const getGoogleMapsLink = (hotel) => {
    return `https://www.google.com/maps/search/?api=1&query=${hotel.geolocation.latitude},${hotel.geolocation.longitude}`;
  };

  // [ImageAlbum component remains the same...]
  const ImageAlbum = ({ hotel }) => (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video group">
        <img
          src={mainImage || hotel.images?.[0] || "/placeholder.svg"}
          alt={`${hotel.name} main view`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>

      {hotel.images?.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {hotel.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setMainImage(img)}
              className={`h-20 w-32 flex-shrink-0 cursor-pointer rounded-md object-cover ring-2 transition-all hover:ring-blue-500 ${
                img === mainImage ? "ring-blue-600 scale-105" : "ring-transparent"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="bg-blue-50 min-h-screen mt-10 p-10">
      <div className="container mx-auto py-6 space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="h-12 flex items-center justify-center rounded-xl bg-blue-800 text-3xl font-bold tracking-tight text-white shadow-md">
            Find Your Perfect Stay
          </h1>
          <p className="rounded-lg bg-blue-200 py-2 text-black">
            Search for hotels, compare prices, and book your ideal accommodation.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* [Search/filter panel remains the same...] */}
          <aside className="space-y-6">
            <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm">
              <div className="space-y-2">
                <h3 className="font-medium">Search</h3>
                <input
                  type="search"
                  placeholder="Destination, hotel name..."
                  className="w-full rounded-md border px-3 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Check‑in / Check‑out</h3>
                <div className="grid gap-2">
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                  <input
                    type="date"
                    className="w-full rounded-md border px-3 py-2"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Guests</h3>
                <select
                  className="w-full rounded-md border px-3 py-2"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Price Range</h3>
                  <span className="text-sm text-gray-500">
                    Rs{priceRange[0]} - Rs{priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number.parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number.parseInt(e.target.value), priceRange[1]])
                  }
                  className="w-full"
                />
              </div>

              <button className="w-full rounded-md bg-blue-600 py-2 px-4 font-medium text-white hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </aside>

          <main className="space-y-6">
            {selectedHotel ? (
              <section className="space-y-6">
                <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b p-4">
                    <button
                      onClick={handleBackToResults}
                      className="text-blue-600 hover:underline"
                    >
                      ← Back to results
                    </button>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      ⭐ {selectedHotel.rating}
                    </div>
                  </div>

                  {/* Updated location section with map link */}
                  <div className="space-y-1 p-4">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {selectedHotel.name}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedHotel.location}</span>
                      <a 
                        href={getGoogleMapsLink(selectedHotel)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1"
                      >
                        (View on Map)
                      </a>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <ImageAlbum hotel={selectedHotel} />
                  </div>

                  {/* [Rest of the booking form remains the same...] */}
                  <div className="space-y-4 p-4">
                    <div>
                      <label className="mb-1 block font-medium">Room Type</label>
                      <select
                        className="w-full rounded-md border px-3 py-2"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                      >
                        <option value="standard">
                          Standard (Rs{selectedHotel.price}/night)
                        </option>
                        <option value="deluxe">
                          Deluxe (Rs{Math.round(selectedHotel.price * 1.3)}/night)
                        </option>
                        <option value="suite">
                          Suite (Rs{Math.round(selectedHotel.price * 1.8)}/night)
                        </option>
                      </select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1 block font-medium">Check‑in</label>
                        <input
                          type="date"
                          className="w-full rounded-md border px-3 py-2"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="mb-1 block font-medium">Check‑out</label>
                        <input
                          type="date"
                          className="w-full rounded-md border px-3 py-2"
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block font-medium">Number of Rooms</label>
                      <select
                        className="w-full rounded-md border px-3 py-2"
                        value={rooms}
                        onChange={(e) => setRooms(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Room" : "Rooms"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block font-medium">Special Requests</label>
                      <textarea
                        className="min-h-[100px] w-full rounded-md border px-3 py-2"
                        placeholder="Any special requests or preferences..."
                      />
                    </div>
                  </div>

                  <div className="space-y-4 border-t bg-gray-50 p-4">
                    <h4 className="font-medium">Price Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>
                          Room rate ({roomType})
                        </span>
                        <span>
                          Rs{getBasePrice()} × {calculateDays()} nights × {rooms} rooms
                        </span>
                      </div>
                      {discount && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({discount}%)</span>
                          <span>
                            -Rs{Math.round(calculateTotalPrice() * (discount / 100))}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Taxes & fees (12%)</span>
                        <span>
                          Rs{Math.round(
                            (discount ? calculateTotalPrice() * (1 - discount / 100) : calculateTotalPrice()) *
                              0.12,
                          )}
                        </span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>Rs{calculateFinalPrice()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t bg-gray-50 p-4">
                    <button
                      className="w-full rounded-lg bg-blue-600 py-3 px-6 font-semibold text-white shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-[1.02]"
                      onClick={handleDiscountClick}
                    >
                      {discount ? `Complete Booking (Rs${calculateFinalPrice()})` : "Get Discount"}
                    </button>
                  </div>
                </div>

                {showGameSelector && (
                  <div ref={gameSelectorRef} className="space-y-4">
                    <GameSelector
                      onDiscountWon={handleDiscountWon}
                      onBackToPackages={() => setShowGameSelector(false)}
                      discount={discount}
                      packageName={selectedHotel.name}
                    />

                    <div className="flex justify-between gap-4">
                      <button
                        className="rounded border border-gray-300 bg-white px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50"
                        onClick={() => setShowGameSelector(false)}
                      >
                        Back to Booking
                      </button>
                      {discount && (
                        <button
                          className="rounded bg-green-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-700"
                          onClick={() => {
                            alert(`Booking completed! You saved ${discount}% on your stay.`);
                            setSelectedHotel(null);
                            setShowGameSelector(false);
                          }}
                        >
                          Finalize Booking (Rs{calculateFinalPrice()})
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </section>
            ) : (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {filteredHotels.length} hotel{filteredHotels.length !== 1 && "s"} found
                  </h2>
                  <select className="rounded-md border px-3 py-2">
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} onBookNow={() => handleBookNow(hotel.id)} />
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}