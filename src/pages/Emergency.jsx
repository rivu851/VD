import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Emergency = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const nearbyServices = [
    { name: "Police Station", phone: "+919800000001" },
    { name: "City Hospital", phone: "+919800000002" },
    { name: "Ambulance Service", phone: "+919800000003" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLocation({ lat: 22.5726, lng: 88.3639 });  
      setLoading(false);
    }, 2000);
  }, []);

  const handleSOS = () => {
    toast.error("🚨 SOS Alert Sent to Emergency Contacts!", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-6" style={{ backgroundImage: "url('https://calchamberalert.com/wp-content/uploads/emergency.png')" }}>
      <h1 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg">🚨 Emergency Section</h1>
      
      {loading ? (
        <div className="text-lg text-white animate-pulse">Fetching Location...</div>
      ) : (
        <div className="w-full max-w-md bg-white p-5 shadow-2xl rounded-xl text-center transition-all duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800">Live Location</h2>
          <p className="text-gray-600">Lat: {location.lat}, Lng: {location.lng}</p>
          <a
            href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            🌍 View on Map
          </a>
        </div>
      )}

      
      <div className="mt-6 w-full max-w-md bg-white p-5 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Nearby Services</h2>
        {nearbyServices.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 border-b last:border-none"
          >
            <span className="text-lg font-medium">{service.name}</span>
            <a
              
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              📞 Call
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 w-full max-w-md bg-white p-5 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Medical Information</h2>
        <p className="text-gray-700">🩸 Blood Group: <span className="font-semibold">O+</span></p>
        <p className="text-gray-700">⚕ Medical Condition: <span className="font-semibold">None</span></p>
      </div>

      <button
        onClick={handleSOS}
        className="mt-8 px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-lg shadow-md hover:bg-red-700 transition-all duration-300 hover:scale-105"
      >
        🚨 Send SOS Alert
      </button>
    </div>
  );
};

export default Emergency;
