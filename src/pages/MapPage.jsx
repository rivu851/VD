import React, { useEffect, useState } from "react";

const MapPage = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });
      },
      (err) => {
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("Location permission denied.");
            break;
          case err.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.");
            break;
          case err.TIMEOUT:
            setError("The request to get your location timed out.");
            break;
          default:
            setError("An unknown error occurred while getting location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {error ? (
        <div className="text-red-600 text-center px-4">
          <h2 className="text-lg font-semibold">Error</h2>
          <p>{error}</p>
        </div>
      ) : coords ? (
        <iframe
          className="w-full h-full border-0"
          src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
          allowFullScreen
          loading="lazy"
          title="User Location Map"
        />
      ) : (
        <p className="text-gray-600 text-lg">Fetching your location...</p>
      )}
    </div>
  );
};

export default MapPage;