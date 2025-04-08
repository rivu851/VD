import React from "react";

const MapPage = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-full"
        src="https://maps.google.com/maps?q=Kolkata&output=embed"
        allowFullScreen
        loading="lazy"
      >Map</iframe>
    </div>
  );
};

export default MapPage;
