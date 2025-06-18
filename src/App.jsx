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
import TravelDestination from "./pages/TravelDestination";
import Testimonials from "./components/Testimonials";
import HotelBooking from "./pages/HotelBooking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Community from "./pages/Community";
import { ExplorePage } from "./pages/explore-page";
import FlightBooking from "./pages/FlightBooking";
import TrainBooking from "./pages/TrainBookings";
import CabBooking from "./pages/CabsBookings";
import BusBooking from "./pages/BusBooking";
import TravelDestinationPurulia from "./pages/TravelDestinationPurulia";
import TravelDestinationKerala from "./pages/TravelDestinationKerala";
import TravelDestinationJK from "./pages/TravelDestinationJK";
import TravelDestinationDelhi from "./pages/TravelDestinationDelhi";
import TravelDestinationAndaman from "./pages/TravelDestinationAndaman";
import HiddenGemsBisnapur from "./pages/HiddenGemsBisnapur";
import HiddenGemsDooars from "./pages/HiddenGemsDooars";
import Digha from "./pages/Digha";
 
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/flightbook" element={<FlightBooking />} />
        <Route path="/trainbook" element={<TrainBooking />} />
        <Route path="/busbook" element={<BusBooking />} />
        <Route path="/cabbook" element={<CabBooking />} />
        <Route path="/paris" element={<TravelDestination />} />
        <Route path="/purulia" element={<TravelDestinationPurulia />} />
        <Route path="/kerala" element={<TravelDestinationKerala />} />
        <Route path="/kashmir" element={<TravelDestinationJK />} />
        <Route path="/delhi" element={<TravelDestinationDelhi />} />
        <Route path="/andaman" element={<TravelDestinationAndaman />} />
        <Route path="/bishupur" element={< HiddenGemsBisnapur />} />
         <Route path="/doars" element={<  HiddenGemsDooars />} />
        <Route path="/hotelbook" element={<  HotelBooking />} />
        <Route path="/digha" element={< Digha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Testimonials />
      <Footer />
    </div>
  );
};
export default App;
