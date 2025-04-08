import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import MapPage from "./pages/MapPage";
import Weather from "./pages/Weather";
import Emergency from "./pages/Emergency";  
import Explore from "./pages/Explore";
 
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/explore" element={<Explore />} /> 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
