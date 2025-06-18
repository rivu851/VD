import React from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import BookingSection from "../components/BookingSection";
import MapPage from "./MapPage";
import WeatherApp from "./Weather";
import Emergency from "./Emergency";
import DestinationSlider from "./DestinationSlider ";
import Community from "../pages/Community";
import { useAppContext } from "../context/AppContext";
import CreatePost from "./CreatePost";

const Home = () => {
  const {createCom , setCreateCom} = useAppContext();
  return (
    <div  className="  px-0" >
      <HeroSection />
      <DestinationSlider/>
      <Community/>
      <MapPage/>
      <WeatherApp/>
      <Emergency/>
      {createCom &&  <CreatePost/>}
    </div>
  );
};
export default Home;
