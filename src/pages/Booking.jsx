import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlane, FaTrain, FaTaxi, FaBus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const bookingOptions = [
  { id: 1, icon: FaPlane, color: "text-blue-500", title: "Flights", bgColor: "bg-blue-500" },
  { id: 2, icon: FaTrain, color: "text-green-500", title: "Trains", bgColor: "bg-green-500" },
  { id: 3, icon: FaBus, color: "text-red-500", title: "Bus", bgColor: "bg-red-500" },
  { id: 4, icon: FaTaxi, color: "text-yellow-500", title: "Cabs", bgColor: "bg-yellow-500" },
];

const BookingCard = ({ Icon, title, color, bgColor, onBookNow }) => (
  <div className="p-6 bg-white shadow-lg rounded-xl text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
    <Icon className={`text-5xl ${color} mx-auto`} aria-label={title} />
    <h3 className="mt-3 font-semibold text-lg">{title}</h3>
    <button
      className={`mt-4 px-5 py-2 rounded-md text-white font-medium ${bgColor} hover:opacity-90`}
      onClick={() => onBookNow(title)}
    >
      Book Now
    </button>
  </div>
);

const Booking = () => {
  const navigate = useNavigate();

  const handleBooking = (bookingType) => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(resolve, 1500);  
      }),
      {
        loading: `Starting your ${bookingType} booking... 🚀`,
        success: ` go to chat-bot section for book ${bookingType} ✅`,
        error: "Something went wrong!",
      }
    );

    setTimeout(() => {
      // navigate(`/book/${bookingType.toLowerCase()}`);
    }, 1500);
  };

  return ( 
    <div className="relative min-h-screen flex items-center justify-center">
    
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
       
      <div className="relative z-10 max-w-5xl text-center p-8">
        <h2 className="text-4xl font-bold text-white mb-10">
          <span>Visit ChatBot for Booking</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bookingOptions.map(({ id, icon, title, color, bgColor }) => (
            <BookingCard key={id} Icon={icon} title={title} color={color} bgColor={bgColor} onBookNow={handleBooking} />
          ))}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Booking;
