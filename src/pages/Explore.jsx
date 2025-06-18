import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Explore = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  // Hotels Data
  const hotels = [
    {
      name: "Paris",
      location: "France",
      rating: 5,
      description: "A luxurious 5-star hotel known for its premium hospitality.",
       
       image : "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Leela Palace",
      location: "Delhi",
      rating: 4.8,
      description: "An elegant and grand hotel with top-notch amenities.",
      link: "https://www.theleela.com/",
      image: "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Oberoi Udaivilas",
      location: "Udaipur",
      rating: 4.9,
      description: "A royal stay with lake views and luxurious rooms.",
      link: "https://www.oberoihotels.com/",
      image: "https://images.unsplash.com/photo-1724947052687-e580b3010aad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "ITC Grand Chola",
      location: "Chennai",
      rating: 4.7,
      description: "A lavish hotel with modern architecture and comfort.",
      link: "https://www.itchotels.com/",
      image: "https://images.unsplash.com/photo-1505334086731-6579ef4cf449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "The Oberoi",
      location: "Bengaluru",
      rating: 4.6,
      description: "A perfect blend of luxury and nature.",
      link: "https://www.oberoihotels.com/",
      image: "https://images.unsplash.com/photo-1709187516056-d4929b67e89f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "JW Marriott",
      location: "Kolkata",
      rating: 4.8,
      description: "Premium business hotel with world-class facilities.",
      link: "https://www.marriott.com/",
      image: "https://images.unsplash.com/photo-1560359614-956e26c7fbb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  // Places Data
  const places = [
    {
      name: "Taj Mahal",
      city: "Agra",
      rating: 5,
      description: "A symbol of love and a UNESCO World Heritage Site.",
      link: "https://www.tajmahal.gov.in/",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "City Palace",
      city: "Jaipur",
      rating: 4.7,
      description: "A blend of Mughal and Rajasthani architecture.",
      link: "https://www.citypalacejaipur.com/",
      image: "https://images.unsplash.com/photo-1676555358964-def8246808bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Goa Beaches",
      city: "Goa",
      rating: 4.8,
      description: "Sandy beaches, nightlife, and water sports paradise.",
      link: "https://www.goa-tourism.com/",
      image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Golden Temple",
      city: "Amritsar",
      rating: 4.9,
      description: "A spiritual place with stunning golden architecture.",
      link: "https://www.goldentempleamritsar.org/",
      image: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Mysore Palace",
      city: "Mysore",
      rating: 4.7,
      description: "A historical palace showcasing Indo-Saracenic architecture.",
      link: "https://www.mysorepalace.gov.in/",
      image: "https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Hawa Mahal",
      city: "Jaipur",
      rating: 4.6,
      description: "A palace with unique honeycomb architecture.",
      link: "https://www.hawamahal.com/",
      image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     
      <button
        onClick={() => navigate("/")}
        className="mb-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
      >
        ⬅ Back
      </button>

       
<h2 className="text-3xl font-bold mb-6 text-center">🏨 Best Places</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
  {hotels.map((hotel, index) => (
    <div 
      key={index} 
      className="border rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
    >
       
      <div className="overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="object-cover h-64 w-full transition duration-300 hover:scale-110"
        />
      </div>

  
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{hotel.name}</h3>
        <p className="text-gray-500">{hotel.location}</p>
        <p className="text-yellow-500 font-medium">⭐ {hotel.rating}</p>
        <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>
        
         
        <Link
          to= {`${hotel.name == 'Paris'?"/travelDestination":`${hotel.link}`}`} 
           
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-3 bg-blue-500 text-white text-center px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-700 hover:scale-105"
        >
           {<span> Visit</span>}
        </Link>
      </div>
    </div>
  ))}
</div>


    
<h2 className="text-3xl font-bold mt-12 mb-6 text-center">🌟 Top Traveling Places</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-12">
  {places.map((place, index) => (
    <div 
      key={index} 
      className="border rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-500"
    >
       
      <div className="overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name} 
          className="object-cover h-56 w-full transition duration-300 hover:scale-110"
        />
      </div>

       
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{place.name}</h3>
        <p className="text-gray-500">{place.city}</p>
        <p className="text-yellow-500 font-medium">⭐ {place.rating}</p>
        <p className="text-sm text-gray-600 mt-2">{place.description}</p>
        
         
        <a 
          href={place.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-3 bg-green-500 text-white text-center px-3 py-2 rounded-lg transition duration-300 hover:bg-green-700 hover:scale-105"
        >
          Explore
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Explore;
