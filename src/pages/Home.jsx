import React from "react";
 
import HeroSection from "../components/HeroSection";
 
import Testimonials from "../components/Testimonials";
import BookingSection from "../components/BookingSection";
import MapPage from "./MapPage";
import WeatherApp from "./Weather";
import Emergency from "./Emergency";

const Home = () => {
  return (
    <div className="bg-zinc-400">
      <HeroSection />
      <BookingSection />
      <Testimonials />
      <MapPage/>
      <WeatherApp/>
      <Emergency/>
    </div>
  );
};

export default Home;
