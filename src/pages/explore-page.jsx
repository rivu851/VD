"use client"

import { useState } from "react"
import { RegionCategory } from "./region-category"
import { StateSelection } from "./state-selection"
import { LocationList } from "./location-list"
import { ChevronLeft } from "lucide-react"

// Define region types and their associated states and locations
const regionData = {
  Sea: {
    "West Bengal": ["Digha", "Mandarmani", "Tajpur", "Bakkhali"],
    Odisha: ["Puri", "Gopalpur", "Chandipur", "Konark"],
    Goa: ["Calangute", "Baga", "Anjuna", "Vagator"],
    Kerala: ["Kovalam", "Varkala", "Marari", "Bekal"],
    "Tamil Nadu": ["Marina", "Mahabalipuram", "Rameshwaram", "Kanyakumari"],
  },
  Hilly: {
    "West Bengal": ["Darjeeling", "Kalimpong", "Kurseong", "Mirik"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Dalhousie"],
    Uttarakhand: ["Mussoorie", "Nainital", "Auli", "Lansdowne"],
    Sikkim: ["Gangtok", "Pelling", "Lachung", "Ravangla"],
    Meghalaya: ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki"],
  },
  Mountains: {
    Uttarakhand: ["Kedarnath", "Badrinath", "Valley of Flowers", "Chopta"],
    "Himachal Pradesh": ["Rohtang Pass", "Spiti Valley", "Kinnaur", "Kufri"],
    "Jammu & Kashmir": ["Gulmarg", "Sonmarg", "Pahalgam", "Patnitop"],
    Sikkim: ["Yumthang Valley", "Gurudongmar Lake", "Nathula Pass", "Kanchenjunga Base Camp"],
    "Arunachal Pradesh": ["Tawang", "Ziro Valley", "Bomdila", "Mechuka"],
  },
  Beaches: {
    Goa: ["Baga", "Calangute", "Palolem", "Anjuna"],
    Kerala: ["Kovalam", "Varkala", "Marari", "Bekal"],
    "Tamil Nadu": ["Marina", "Mahabalipuram", "Rameshwaram", "Kanyakumari"],
    "Andaman & Nicobar": ["Radhanagar", "Elephant", "Corbyn's Cove", "Vijaynagar"],
    Maharashtra: ["Alibaug", "Ganpatipule", "Tarkarli", "Diveagar"],
  },
  Urban: {
    Delhi: ["Connaught Place", "Chandni Chowk", "Hauz Khas", "Saket"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
    "West Bengal": ["Kolkata", "Siliguri", "Durgapur", "Asansol"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  },
  Heritage: {
    Rajasthan: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
    "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Fatehpur Sikri"],
    "Madhya Pradesh": ["Khajuraho", "Orchha", "Sanchi", "Mandu"],
    Gujarat: ["Ahmedabad", "Lothal", "Modhera", "Champaner"],
    Bihar: ["Bodh Gaya", "Nalanda", "Rajgir", "Vaishali"],
  },
}
// Define images for each region type
const regionImages = {
  Sea: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  Hilly: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8fDA%3D",
  Mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fHww",
  Beaches: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
  Urban: "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVyYmFufGVufDB8fDB8fHww",
  Heritage: "https://images.unsplash.com/photo-1636525060161-7ac1f74510c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlcml0YWdlJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
}
// Define descriptions for each region type
const regionDescriptions = {
  Sea: "Explore beautiful coastlines and enjoy the calming waves of the sea",
  Hilly: "Discover serene hill stations with breathtaking views and pleasant climate",
  Mountains: "Experience the majestic mountains and thrilling adventure activities",
  Beaches: "Relax on sandy shores with crystal clear waters and stunning sunsets",
  Urban: "Immerse yourself in the vibrant culture and lifestyle of India's major cities",
  Heritage: "Step back in time and explore India's rich historical and cultural heritage",
}

export function ExplorePage() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedState, setSelectedState] = useState(null)

  const handleRegionClick = (region) => {
    setSelectedRegion(region)
    setSelectedState(null)
  }

  const handleStateClick = (state) => {
    setSelectedState(state)
  }

  const handleBackToRegions = () => {
    setSelectedRegion(null)
    setSelectedState(null)
  }

  const handleBackToStates = () => {
    setSelectedState(null)
  }

  return (
  <div className="min-h-screen relative mt-20 p-8">
    {/* Background image with 50% opacity */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0)',
        opacity: 0.7,
      }}
    ></div>
    {/* Content container, positioned above the background */}
    <div className="relative z-10 container mx-auto px-4 py-8">
<h1 className="text-4xl font-extrabold text-center mb-12 text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
  Explore Destinations
</h1>
      {selectedRegion ? (
        selectedState ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleBackToRegions}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                All regions
              </button>
              <span className="text-gray-500">/</span>
              <button
                onClick={handleBackToStates}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                {selectedRegion}
              </button>
              <span className="text-gray-500">/</span>
              <span>{selectedState}</span>
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              {selectedRegion} Destinations in {selectedState}
            </h2>

            <LocationList
              locations={regionData[selectedRegion][selectedState]}
              state={selectedState}
              region={selectedRegion}
            />
          </div>
        ) : (
          <div className="space-y-6">
            <button
              onClick={handleBackToRegions}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to all regions
            </button>

            <h2 className="text-2xl font-semibold mb-4">Select a State for {selectedRegion} Destinations</h2>

            <StateSelection
              region={selectedRegion}
              states={Object.keys(regionData[selectedRegion])}
              onStateClick={handleStateClick}
            />
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(regionData).map((region) => (
            <RegionCategory
              key={region}
              name={region}
              image={regionImages[region]}
              description={regionDescriptions[region]}
              stateCount={Object.keys(regionData[region]).length}
              onClick={() => handleRegionClick(region)}
            />
          ))}
        </div>
      )}
    </div>
  </div>
)
}
