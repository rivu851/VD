"use client"

import React, { useState, useRef, useEffect } from "react"

// Game Selector Component
const GameSelector = ({ onDiscountWon, onBackToPackages, discount, packageName }) => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [gameResult, setGameResult] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const games = [
    {
      id: "spin",
      name: "Spin the Wheel",
      description: "Spin to win up to 25% discount!",
      icon: "🎡",
      discounts: [5, 10, 15, 20, 25],
    },
    {
      id: "scratch",
      name: "Scratch Card",
      description: "Scratch to reveal your discount!",
      icon: "🎫",
      discounts: [10, 15, 20],
    },
    {
      id: "dice",
      name: "Lucky Dice",
      description: "Roll the dice for instant savings!",
      icon: "🎲",
      discounts: [5, 10, 15, 20],
    },
  ]

  const playGame = (game) => {
    setIsPlaying(true)
    setSelectedGame(game)

    setTimeout(() => {
      const randomDiscount = game.discounts[Math.floor(Math.random() * game.discounts.length)]
      setGameResult(randomDiscount)
      onDiscountWon(randomDiscount)
      setIsPlaying(false)
    }, 2000)
  }

  if (discount) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Congratulations!</h3>
        <p className="text-green-700 mb-4">
          You won {discount}% discount on {packageName}!
        </p>
        <button onClick={onBackToPackages} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Apply Discount
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-center">🎮 Play a Game to Win Discounts!</h3>

      {!selectedGame ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="border rounded-lg p-4 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all"
              onClick={() => playGame(game)}
            >
              <div className="text-3xl mb-2">{game.icon}</div>
              <h4 className="font-semibold mb-2">{game.name}</h4>
              <p className="text-sm text-gray-600">{game.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          {isPlaying ? (
            <div className="space-y-4">
              <div className="text-6xl animate-spin">{selectedGame.icon}</div>
              <p className="text-lg">Playing {selectedGame.name}...</p>
              <div className="animate-pulse bg-blue-200 h-2 rounded"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl">{selectedGame.icon}</div>
              <h4 className="text-xl font-bold">You won {gameResult}% discount!</h4>
              <button
                onClick={() => {
                  setSelectedGame(null)
                  setGameResult(null)
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Play Another Game
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Digha = () => {
  const attractions = [
    {
      name: "Digha Beach",
      image: "https://i.pinimg.com/736x/f5/29/19/f529199253460d973f1fd29d04704df4.jpg",
      rating: 4.5,
      duration: "2-4 hours",
      price: "Free",
      description: "Popular sandy beach with gentle waves and scenic views",
    },
    {
      name: "New Digha Beach",
      image:
        "https://images.unsplash.com/photo-1626239217523-8e1913b7b833?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZGlnaGElMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.3,
      duration: "2-3 hours",
      price: "Free",
      description: "Less crowded extension of the main beach with cleaner sands",
    },
    {
      name: "Marine Aquarium",
      image:
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXF1YXJpdW18ZW58MHx8MHx8fDA%3D",
      rating: 4.0,
      duration: "1 hour",
      price: "₹50",
      description: "Regional marine life exhibits and research center",
    },
    {
      name: "Shankarpur Beach",
      image:
        "https://images.unsplash.com/photo-1665805397302-79f6419c2bdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hhbmthcnB1ciUyMGJlYWNofGVufDB8fDB8fHww",
      rating: 4.2,
      duration: "2-3 hours",
      price: "Free",
      description: "Peaceful beach near Digha with fishing village charm",
    },
    {
      name: "Talsari Beach",
      image:
        "https://images.unsplash.com/photo-1732053140896-b2d4824646bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.4,
      duration: "3-4 hours",
      price: "Free",
      description: "Unique beach with casuarina trees and red crabs",
    },
    {
      name: "Mandal's Island",
      image:
        "https://images.unsplash.com/photo-1644075934801-b7d04d962606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.1,
      duration: "2 hours",
      price: "₹100 (boat ride)",
      description: "Small island near Digha accessible by boat",
    },
  ]

  const monuments = [
    {
      id: "amaravati-lighthouse",
      name: "Amaravati Lighthouse",
      period: "20th Century",
      significance: "Historic lighthouse offering panoramic coastal views",
      image:
        "https://images.unsplash.com/photo-1583144134312-2b59b60ef693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1yYXZhdGklMjBsaWdodGhvdXNlfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1583144134312-2b59b60ef693?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "The Amaravati Lighthouse stands as a beacon of maritime history, offering breathtaking panoramic views of the Bay of Bengal. Built in the 20th century, this lighthouse has guided countless ships safely to shore.",
      contact: "+91 3224 266 150",
      address: "Amaravati, Near Digha Beach, West Bengal 721428",
      timings: "9:00 AM - 6:00 PM",
      entryFee: "₹20 per person",
      geolocation: {
        latitude: 21.6269,
        longitude: 87.5069,
      },
    },
    {
      id: "digha-science-center",
      name: "Digha Science Center",
      period: "21st Century",
      significance: "Interactive science exhibits with coastal ecosystem focus",
      image:
        "https://plus.unsplash.com/premium_photo-1730658556676-bcf03b6f38e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaGElMjBzY2llbmNlJTIwY2VudGVyfGVufDB8fDB8fHww",
      images: [
        "https://plus.unsplash.com/premium_photo-1730658556676-bcf03b6f38e4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "A modern science center featuring interactive exhibits focused on coastal ecosystems, marine biology, and environmental conservation. Perfect for educational visits with family.",
      contact: "+91 3224 266 250",
      address: "Science City Road, New Digha, West Bengal 721428",
      timings: "10:00 AM - 7:00 PM (Closed on Mondays)",
      entryFee: "₹50 per person",
      geolocation: {
        latitude: 21.6289,
        longitude: 87.5089,
      },
    },
    {
      id: "jubilee-bridge",
      name: "Jubilee Bridge",
      period: "19th Century",
      significance: "Historic bridge over the Rupnarayan River",
      image:
        "https://plus.unsplash.com/premium_photo-1682091918487-033a8ea72ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2hhJTIwYXF1YXJpdW18ZW58MHx8MHx8fDA%3D",
      images: [
        "https://plus.unsplash.com/premium_photo-1682091918487-033a8ea72ce7?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "A magnificent 19th-century bridge spanning the Rupnarayan River, representing the engineering marvels of colonial India. The bridge offers stunning river views and is a photographer's delight.",
      contact: "+91 3224 266 350",
      address: "Kolaghat, Near Digha Highway, West Bengal 721134",
      timings: "24 hours (viewing from designated areas)",
      entryFee: "Free",
      geolocation: {
        latitude: 22.3569,
        longitude: 87.7789,
      },
    },
    {
      id: "digha-gate",
      name: "Digha Gate",
      period: "20th Century",
      significance: "Iconic entrance arch marking the town boundary",
      image: "https://i.pinimg.com/736x/f1/20/98/f120983d452da77522f4561de90a3132.jpg",
      images: [
        "https://i.pinimg.com/736x/f1/20/98/f120983d452da77522f4561de90a3132.jpg",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "The iconic Digha Gate serves as the ceremonial entrance to this beloved beach town. Built in the 20th century, it welcomes thousands of visitors each year and has become a symbol of Digha's hospitality.",
      contact: "+91 3224 266 450",
      address: "Main Highway, Digha Entrance, West Bengal 721428",
      timings: "24 hours",
      entryFee: "Free",
      geolocation: {
        latitude: 21.6249,
        longitude: 87.5049,
      },
    },
  ]

  const hotels = [
    {
      id: "hotel-sea-hawk",
      name: "Hotel Sea Hawk",
      category: "Luxury",
      rating: 4,
      price: 4000,
      amenities: ["Sea View", "Pool", "Restaurant"],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Luxury beachfront hotel with stunning sea views and world-class amenities. Perfect for a romantic getaway or family vacation.",
      contact: "+91 3224 266 100",
      address: "Sea Beach Road, New Digha, West Bengal 721428",
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      geolocation: {
        latitude: 21.6289,
        longitude: 87.5109,
      },
    },
    {
      id: "digha-resort",
      name: "Digha Resort",
      category: "Mid-Range",
      rating: 3,
      price: 2500,
      amenities: ["Garden", "WiFi", "Breakfast"],
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&auto=format&fit=crop&q=60",
      ],
      description: "Comfortable mid-range resort with beautiful gardens and modern amenities. Great value for money.",
      contact: "+91 3224 266 200",
      address: "Hotel Road, Digha, West Bengal 721428",
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      geolocation: {
        latitude: 21.6269,
        longitude: 87.5089,
      },
    },
    {
      id: "sea-breeze-guest-house",
      name: "Sea Breeze Guest House",
      category: "Budget",
      rating: 3,
      price: 1200,
      amenities: ["Beach Access", "Basic Amenities"],
      image:
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Budget-friendly guest house with direct beach access. Clean and comfortable accommodation for budget travelers.",
      contact: "+91 3224 266 300",
      address: "Beach Road, Old Digha, West Bengal 721428",
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      geolocation: {
        latitude: 21.6249,
        longitude: 87.5069,
      },
    },
    {
      id: "wb-tourism-hotel",
      name: "West Bengal Tourism Hotel",
      category: "Government",
      rating: 3,
      price: 2000,
      amenities: ["Beachfront", "Restaurant", "Parking"],
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Government-run hotel with reliable service and beachfront location. Good facilities at reasonable rates.",
      contact: "+91 3224 266 400",
      address: "Beachfront, New Digha, West Bengal 721428",
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      geolocation: {
        latitude: 21.6299,
        longitude: 87.5119,
      },
    },
    {
      id: "hotel-samudra",
      name: "Hotel Samudra",
      category: "Mid-Range",
      rating: 3,
      price: 3000,
      amenities: ["Sea View", "AC Rooms", "Multi-Cuisine"],
      image:
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Modern hotel with sea views and multi-cuisine restaurant. Air-conditioned rooms with contemporary amenities.",
      contact: "+91 3224 266 500",
      address: "Marine Drive, New Digha, West Bengal 721428",
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      geolocation: {
        latitude: 21.6279,
        longitude: 87.5099,
      },
    },
    {
      id: "youth-hostel-digha",
      name: "Youth Hostel Digha",
      category: "Budget",
      rating: 2,
      price: 800,
      amenities: ["Dormitory", "Common Kitchen", "Basic"],
      image:
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Budget accommodation with dormitory-style rooms and common facilities. Perfect for backpackers and budget travelers.",
      contact: "+91 3224 266 600",
      address: "Station Road, Digha, West Bengal 721428",
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      geolocation: {
        latitude: 21.6259,
        longitude: 87.5079,
      },
    },
  ]

  const restaurants = [
    {
      id: "sea-view-restaurant",
      name: "Sea View Restaurant",
      cuisine: "Seafood",
      rating: 4.2,
      priceRange: "₹₹",
      specialty: "Fresh catch of the day with ocean views",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Oceanfront dining with the freshest seafood and stunning sunset views. Famous for their grilled fish and prawns.",
      contact: "+91 3224 266 700",
      address: "Beachfront, New Digha, West Bengal 721428",
      timings: "11:00 AM - 11:00 PM",
      avgCost: "₹800 for two",
      geolocation: {
        latitude: 21.6289,
        longitude: 87.5109,
      },
    },
    {
      id: "bengal-rasoi",
      name: "Bengal Rasoi",
      cuisine: "Bengali",
      rating: 4.5,
      priceRange: "₹₹",
      specialty: "Authentic Bengali thali and fish preparations",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Authentic Bengali cuisine with traditional recipes passed down through generations. Must-try fish curry and rice.",
      contact: "+91 3224 266 800",
      address: "Market Road, Digha, West Bengal 721428",
      timings: "12:00 PM - 10:00 PM",
      avgCost: "₹600 for two",
      geolocation: {
        latitude: 21.6269,
        longitude: 87.5089,
      },
    },
    {
      id: "beach-shack-cafe",
      name: "Beach Shack Cafe",
      cuisine: "Multi-Cuisine",
      rating: 3.8,
      priceRange: "₹",
      specialty: "Casual beachside dining with snacks and drinks",
      image:
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Casual beachside cafe perfect for quick bites and refreshing drinks. Great atmosphere with live music on weekends.",
      contact: "+91 3224 266 900",
      address: "Beach Road, Old Digha, West Bengal 721428",
      timings: "10:00 AM - 12:00 AM",
      avgCost: "₹400 for two",
      geolocation: {
        latitude: 21.6249,
        longitude: 87.5069,
      },
    },
    {
      id: "puri-hotel",
      name: "Puri Hotel",
      cuisine: "Indian",
      rating: 4.0,
      priceRange: "₹₹",
      specialty: "Famous for its veg thali and sweets",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Traditional Indian vegetarian restaurant known for its elaborate thalis and authentic Bengali sweets.",
      contact: "+91 3224 267 000",
      address: "Station Road, Digha, West Bengal 721428",
      timings: "11:00 AM - 10:00 PM",
      avgCost: "₹500 for two",
      geolocation: {
        latitude: 21.6259,
        longitude: 87.5079,
      },
    },
    {
      id: "fishermans-wharf",
      name: "Fisherman's Wharf",
      cuisine: "Seafood",
      rating: 4.3,
      priceRange: "₹₹₹",
      specialty: "Premium seafood dining experience",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlYWZvb2R8ZW58MHx8MHx8fDA%3D",
      images: [
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Upscale seafood restaurant with an extensive menu of fresh catches. Known for their lobster and crab preparations.",
      contact: "+91 3224 267 100",
      address: "Marine Drive, New Digha, West Bengal 721428",
      timings: "6:00 PM - 11:00 PM",
      avgCost: "₹1200 for two",
      geolocation: {
        latitude: 21.6279,
        longitude: 87.5099,
      },
    },
    {
      id: "chaiwala-corner",
      name: "Chaiwala Corner",
      cuisine: "Beverages",
      rating: 4.1,
      priceRange: "₹",
      specialty: "Authentic Bengali tea and snacks",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhfGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      ],
      description:
        "Local tea stall famous for its masala chai and traditional Bengali snacks. A must-visit for tea lovers.",
      contact: "+91 3224 267 200",
      address: "Bus Stand, Digha, West Bengal 721428",
      timings: "6:00 AM - 10:00 PM",
      avgCost: "₹100 for two",
      geolocation: {
        latitude: 21.6239,
        longitude: 87.5059,
      },
    },
  ]

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1559671888-af88d0c275bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaGF8ZW58MHx8MHx8fDA%3D",
      alt: "Digha Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlnaGF8ZW58MHx8MHx8fDA%3D",
      alt: "Talsari Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1605853166869-7967373db45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaGF8ZW58MHx8MHx8fDA%3D",
      alt: "Mandal's Island",
    },
    {
      src: "https://images.unsplash.com/photo-1605853422175-670791058971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaGF8ZW58MHx8MHx8fDA%3D",
      alt: "Amaravati Lighthouse",
    },
    {
      src: "https://images.unsplash.com/photo-1698387353840-97cc29428082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2hhfGVufDB8fDB8fHww",
      alt: "Marine Aquarium",
    },
    { src: "https://i.pinimg.com/736x/fa/3e/2a/fa3e2ab0c80453009eecbf811d99c7c7.jpg", alt: "Sea View Restaurant" },
    { src: "https://i.pinimg.com/736x/98/e1/28/98e1280abadabdd2b634df4389fbf3a2.jpg", alt: "Fresh seafood" },
    { src: "https://i.pinimg.com/736x/79/53/85/795385deec36397ac207433f5af81f2a.jpg", alt: "Sunset at Digha" },
    { src: "https://i.pinimg.com/736x/b1/83/84/b18384e20e48c0e5885dd538a897e5cd.jpg", alt: "Beach activities" },
  ]

  const souvenirs = [
    {
      id: "conch-shells",
      name: "Conch Shells",
      price: 100,
      description: "Decorative shells collected from local beaches",
      image: "https://i.pinimg.com/736x/9f/39/91/9f39913fe6836fe6264a536348319c30.jpg",
      images: [
        "https://i.pinimg.com/736x/9f/39/91/9f39913fe6836fe6264a536348319c30.jpg",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Beautiful conch shells in various sizes, perfect for home decoration or as gifts. Each shell is naturally formed and unique.",
      seller: "Beach Craft Shop",
      contact: "+91 9876543210",
      geolocation: {
        latitude: 21.6269,
        longitude: 87.5089,
      },
    },
    {
      id: "handmade-jewelry",
      name: "Handmade Jewelry",
      price: 300,
      description: "Local artisan-made shell and bead jewelry",
      image: "https://i.pinimg.com/736x/7c/ce/44/7cce440b014f0dafda6e6bd49269024b.jpg",
      images: [
        "https://i.pinimg.com/736x/7c/ce/44/7cce440b014f0dafda6e6bd49269024b.jpg",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Handcrafted jewelry made by local artisans using shells, beads, and traditional techniques. Each piece is unique.",
      seller: "Digha Handicrafts",
      contact: "+91 9876543211",
      geolocation: {
        latitude: 21.6249,
        longitude: 87.5069,
      },
    },
    {
      id: "bengal-handicrafts",
      name: "Bengal Handicrafts",
      price: 600,
      description: "Traditional terracotta and dokra art pieces",
      image: "https://i.pinimg.com/736x/54/c4/d2/54c4d21abb38b441f7aa88758768b567.jpg",
      images: [
        "https://i.pinimg.com/736x/54/c4/d2/54c4d21abb38b441f7aa88758768b567.jpg",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Authentic Bengali handicrafts including terracotta figurines and dokra metal art. Made by skilled local craftsmen.",
      seller: "Bengal Art Gallery",
      contact: "+91 9876543212",
      geolocation: {
        latitude: 21.6259,
        longitude: 87.5079,
      },
    },
    {
      id: "digha-tshirts",
      name: "Digha T-shirts",
      price: 275,
      description: "Commemorative t-shirts with Digha prints",
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
      images: [
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "High-quality cotton t-shirts with beautiful Digha-themed prints. Available in various sizes and colors.",
      seller: "Souvenir Central",
      contact: "+91 9876543213",
      geolocation: {
        latitude: 21.6279,
        longitude: 87.5099,
      },
    },
    {
      id: "local-sweets",
      name: "Local Sweets",
      price: 200,
      description: "Packaged Bengali sweets like sandesh and rosogolla",
      image: "https://i.pinimg.com/736x/b1/e0/b3/b1e0b3a0034d0b9cc4398612ebc27a2e.jpg",
      images: [
        "https://i.pinimg.com/736x/b1/e0/b3/b1e0b3a0034d0b9cc4398612ebc27a2e.jpg",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Authentic Bengali sweets made with traditional recipes. Vacuum-packed for freshness and easy transport.",
      seller: "Sweet Corner",
      contact: "+91 9876543214",
      geolocation: {
        latitude: 21.6289,
        longitude: 87.5109,
      },
    },
    {
      id: "sea-salt",
      name: "Sea Salt",
      price: 100,
      description: "Locally harvested sea salt in decorative packaging",
      image: "https://i.pinimg.com/736x/17/1c/93/171c9345052b2b085a7be700623987e0.jpg",
      images: [
        "https://i.pinimg.com/736x/17/1c/93/171c9345052b2b085a7be700623987e0.jpg",
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Pure sea salt harvested from the Bay of Bengal. Rich in minerals and comes in beautiful decorative packaging.",
      seller: "Coastal Products",
      contact: "+91 9876543215",
      geolocation: {
        latitude: 21.6299,
        longitude: 87.5119,
      },
    },
    {
      id: "beach-hats",
      name: "Beach Hats",
      price: 250,
      description: "Colorful hats and caps for sun protection",
      image: "https://i.pinimg.com/736x/52/ed/84/52ed8457f061c825261adba566f15078.jpg",
      images: [
        "https://i.pinimg.com/736x/52/ed/84/52ed8457f061c825261adba566f15078.jpg",
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=60",
      ],
      details:
        "Stylish and functional beach hats made from natural materials. Perfect for sun protection during beach activities.",
      seller: "Beach Accessories",
      contact: "+91 9876543216",
      geolocation: {
        latitude: 21.6239,
        longitude: 87.5059,
      },
    },
  ]

  const [activeTab, setActiveTab] = React.useState("attractions")
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [hoveredCard, setHoveredCard] = React.useState(null)
  const [mainImage, setMainImage] = React.useState(null)
  const [showGameSelector, setShowGameSelector] = React.useState(false)
  const [discount, setDiscount] = React.useState(null)
  const gameSelectorRef = useRef(null)
  const [bookingForm, setBookingForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    quantity: 1,
    specialRequests: "",
  })

  // Set main image when selected card changes
  useEffect(() => {
    if (selectedCard?.item?.images) {
      setMainImage(selectedCard.item.images[0])
    }
  }, [selectedCard])

  const handleCardClick = (type, item) => {
    setSelectedCard({ type, item })
    setShowGameSelector(false)
    setDiscount(null)
  }

  const handleCardHover = (type, item) => {
    if (type === "hotels" || type === "restaurants" || type === "souvenirs" || type === "monuments") {
      setHoveredCard({ type, item })
    }
  }

  const handleCardLeave = () => {
    setHoveredCard(null)
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    const finalPrice = calculateFinalPrice()
    alert(
      `Booking submitted for ${selectedCard.item.name}!\nTotal: ₹${finalPrice}\nWe will contact you at ${bookingForm.email} soon.`,
    )
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
      rooms: 1,
      quantity: 1,
      specialRequests: "",
    })
    setSelectedCard(null)
    setShowGameSelector(false)
    setDiscount(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDiscountClick = () => {
    setShowGameSelector(true)
    setTimeout(() => gameSelectorRef.current?.scrollIntoView({ behavior: "smooth" }), 100)
  }

  const handleDiscountWon = (discountAmount) => {
    setDiscount(discountAmount)
  }

  // Helper functions for pricing
  const calculateDays = () => {
    if (!bookingForm.checkIn || !bookingForm.checkOut) return 1
    const start = new Date(bookingForm.checkIn)
    const end = new Date(bookingForm.checkOut)
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays || 1
  }

  const getBasePrice = () => {
    if (!selectedCard?.item) return 0
    return selectedCard.item.price || 0
  }

  const calculateTotalPrice = () => {
    const basePrice = getBasePrice()
    const { type } = selectedCard

    if (type === "hotels") {
      const days = calculateDays()
      return basePrice * days * bookingForm.rooms
    } else if (type === "restaurants") {
      return basePrice * bookingForm.guests
    } else if (type === "souvenirs") {
      return basePrice * bookingForm.quantity
    } else if (type === "monuments") {
      return basePrice * bookingForm.guests
    }
    return basePrice
  }

  const calculateFinalPrice = () => {
    const total = calculateTotalPrice()
    const discounted = discount ? total - total * (discount / 100) : total
    return Math.round(discounted * 1.12) // 12% tax
  }

  // Helper function to generate Google Maps link
  const getGoogleMapsLink = (item) => {
    if (item.geolocation) {
      return `https://www.google.com/maps/search/?api=1&query=${item.geolocation.latitude},${item.geolocation.longitude}`
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || item.name + " Digha")}`
  }

  const StarIcon = ({ filled = true }) => (
    <svg className={`w-4 h-4 ${filled ? "text-yellow-400 fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < rating} />)
  }

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )

  const Card = ({
    children,
    className = "",
    onClick,
    onMouseEnter,
    onMouseLeave,
    isHovered = false,
    isClickable = false,
  }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isClickable ? "cursor-pointer" : ""
      } ${
        isHovered ? "ring-2 ring-blue-500 scale-[1.02] shadow-xl" : "hover:shadow-lg hover:-translate-y-1"
      } ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )

  const Badge = ({ children, variant = "default" }) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    const variants = {
      default: "bg-blue-100 text-blue-800",
      secondary: "bg-gray-100 text-gray-800",
      outline: "border border-gray-300 text-gray-700",
    }

    return <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
  }

  const Button = ({ children, variant = "default", size = "default", onClick, className = "", type = "button" }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    }
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      default: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    )
  }

  // Image Album Component
  const ImageAlbum = ({ item }) => (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video group">
        <img
          src={mainImage || item.images?.[0] || item.image || "/placeholder.svg"}
          alt={`${item.name} main view`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>

      {item.images?.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {item.images.map((img, idx) => (
            <img
              key={idx}
              src={img || "/placeholder.svg"}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setMainImage(img)}
              className={`h-20 w-32 flex-shrink-0 cursor-pointer rounded-md object-cover ring-2 transition-all hover:ring-blue-500 ${
                img === mainImage ? "ring-blue-600 scale-105" : "ring-transparent"
              }`}
            />
          ))}
        </div>
      )}
    </>
  )

  const DetailView = ({ item, type, onClose }) => {
    if (!item) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 mt-24">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-64 object-cover" />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div>
                <h2 className="text-3xl font-bold mb-4">{item.name}</h2>

                {/* Location with Map Link */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span>📍</span>
                  <span>{item.address || item.location || "Digha, West Bengal"}</span>
                  <a
                    href={getGoogleMapsLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    (View on Map)
                  </a>
                </div>

                {/* Image Album */}
                {item.images && (
                  <div className="mb-6">
                    <ImageAlbum item={item} />
                  </div>
                )}

                {/* Type-specific details */}
                {type === "hotels" && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex">{renderStars(item.rating)}</div>
                      <span className="text-xl font-semibold text-blue-600">₹{item.price}/night</span>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📞 Contact:</span>
                        <span className="text-gray-600">{item.contact}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🕐 Check-in:</span>
                          <span className="text-gray-600">{item.checkIn}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">🕐 Check-out:</span>
                          <span className="text-gray-600">{item.checkOut}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Amenities:</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.amenities?.map((amenity, i) => (
                          <Badge key={i}>{amenity}</Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {type === "restaurants" && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge>{item.cuisine}</Badge>
                      <div className="flex items-center gap-1">
                        <StarIcon />
                        <span className="font-semibold">{item.rating}</span>
                      </div>
                      <span className="font-semibold text-blue-600">{item.priceRange}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-lg mb-4">
                      <strong>Specialty:</strong> {item.specialty}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📞 Contact:</span>
                        <span className="text-gray-600">{item.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🕐 Timings:</span>
                        <span className="text-gray-600">{item.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">💰 Average Cost:</span>
                        <span className="text-blue-600 font-semibold">{item.avgCost}</span>
                      </div>
                    </div>
                  </>
                )}

                {type === "souvenirs" && (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">₹{item.price}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-lg mb-4">{item.details}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🏪 Seller:</span>
                        <span className="text-gray-600">{item.seller}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📞 Contact:</span>
                        <span className="text-gray-600">{item.contact}</span>
                      </div>
                    </div>
                  </>
                )}

                {type === "monuments" && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{item.period}</Badge>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <p className="text-lg mb-4">
                      <strong>Historical Significance:</strong> {item.significance}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">📞 Contact:</span>
                        <span className="text-gray-600">{item.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🕐 Timings:</span>
                        <span className="text-gray-600">{item.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">🎫 Entry Fee:</span>
                        <span className="text-blue-600 font-semibold">{item.entryFee}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Right Column - Booking Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {type === "hotels"
                    ? "Book This Hotel"
                    : type === "restaurants"
                      ? "Reserve Table"
                      : type === "monuments"
                        ? "Book Visit"
                        : "Purchase Item"}
                </h3>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {(type === "hotels" || type === "restaurants" || type === "monuments") && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {type === "hotels" ? "Check-in Date" : "Visit Date"} *
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={bookingForm.checkIn}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        {type === "hotels" && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date *</label>
                            <input
                              type="date"
                              name="checkOut"
                              value={bookingForm.checkOut}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        )}

                        {type === "restaurants" && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <input
                              type="time"
                              name="checkOut"
                              value={bookingForm.checkOut}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {type === "hotels" ? "Number of Guests" : "Number of People"} *
                        </label>
                        <select
                          name="guests"
                          value={bookingForm.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Person" : "People"}
                            </option>
                          ))}
                        </select>
                      </div>

                      {type === "hotels" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Rooms *</label>
                          <select
                            name="rooms"
                            value={bookingForm.rooms}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {[1, 2, 3, 4].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "Room" : "Rooms"}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </>
                  )}

                  {type === "souvenirs" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                      <select
                        name="quantity"
                        value={bookingForm.quantity}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={bookingForm.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Any special requests or notes..."
                    />
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-4 border-t bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium">Price Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Base Price</span>
                        <span>₹{getBasePrice()}</span>
                      </div>
                      {type === "hotels" && (
                        <div className="flex justify-between">
                          <span>
                            {calculateDays()} nights × {bookingForm.rooms} rooms
                          </span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                      )}
                      {type === "restaurants" && (
                        <div className="flex justify-between">
                          <span>{bookingForm.guests} people</span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                      )}
                      {type === "souvenirs" && (
                        <div className="flex justify-between">
                          <span>Quantity: {bookingForm.quantity}</span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                      )}
                      {type === "monuments" && (
                        <div className="flex justify-between">
                          <span>{bookingForm.guests} people</span>
                          <span>₹{calculateTotalPrice()}</span>
                        </div>
                      )}
                      {discount && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({discount}%)</span>
                          <span>-₹{Math.round(calculateTotalPrice() * (discount / 100))}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Taxes & fees (12%)</span>
                        <span>
                          ₹
                          {Math.round(
                            (discount ? calculateTotalPrice() * (1 - discount / 100) : calculateTotalPrice()) * 0.12,
                          )}
                        </span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>₹{calculateFinalPrice()}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleDiscountClick}
                    className="w-full"
                    size="lg"
                    variant={discount ? "secondary" : "default"}
                  >
                    {discount ? `Complete Booking (₹${calculateFinalPrice()})` : "Get Discount & Book"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Game Selector Section */}
            {showGameSelector && (
              <div ref={gameSelectorRef} className="mt-8 border-t pt-8">
                <GameSelector
                  onDiscountWon={handleDiscountWon}
                  onBackToPackages={() => setShowGameSelector(false)}
                  discount={discount}
                  packageName={item.name}
                />

                {discount && (
                  <div className="mt-6 flex justify-center">
                    <Button onClick={handleBookingSubmit} className="bg-green-600 hover:bg-green-700" size="lg">
                      Complete Booking (₹{calculateFinalPrice()})
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[32rem]">
        <img
          src="https://images.unsplash.com/photo-1657282928361-ec9de3f2bc74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Digha beach"
          className="w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl">
            <h1 className="text-5xl font-semibold mb-4 tracking-tight">
              <span className="inline-block border-b-4 border-amber-400 pb-2">Digha, West Bengal</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700 italic shadow-md opacity-90 mt-1">
              Bengal's beloved beach destination with golden sands
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="secondary" size="sm">
                ❤ Save
              </Button>
              <Button variant="secondary" size="sm">
                📤 Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">East Coast of India</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center shadow-blue-900">
              <div className="text-2xl mb-2">🕒</div>
              <h3 className="font-semibold">Best Time</h3>
              <p className="text-sm text-gray-600">Oct - Mar</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold">Rating</h3>
              <p className="text-sm text-gray-600">4.3/5</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold">Language</h3>
              <p className="text-sm text-gray-600">Bengali, Hindi</p>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <TabButton
            id="attractions"
            label="Attractions"
            isActive={activeTab === "attractions"}
            onClick={setActiveTab}
          />
          <TabButton id="transport" label="Transport" isActive={activeTab === "transport"} onClick={setActiveTab} />
          <TabButton id="monuments" label="Monuments" isActive={activeTab === "monuments"} onClick={setActiveTab} />
          <TabButton id="hotels" label="Hotels" isActive={activeTab === "hotels"} onClick={setActiveTab} />
          <TabButton
            id="restaurants"
            label="Restaurants"
            isActive={activeTab === "restaurants"}
            onClick={setActiveTab}
          />
          <TabButton id="gallery" label="Gallery" isActive={activeTab === "gallery"} onClick={setActiveTab} />
          <TabButton id="souvenirs" label="Souvenirs" isActive={activeTab === "souvenirs"} onClick={setActiveTab} />
          <TabButton id="contact" label="Contact" isActive={activeTab === "contact"} onClick={setActiveTab} />
        </div>

        {/* Tab Content */}
        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index}>
                <div className="relative">
                  <img
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white">{attraction.price}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{attraction.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{attraction.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <span>{attraction.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🕒 {attraction.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "transport" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚆 By Train</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Digha Railway Station</h4>
                    <p className="text-sm text-gray-600">Connected to Howrah via Tamluk and Mecheda</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Howrah-Digha Express</h4>
                    <p className="text-sm text-gray-600">Direct train from Kolkata (5-6 hours)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚌 By Bus</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">WBSTC Buses</h4>
                    <p className="text-sm text-gray-600">Government buses from Esplanade, Kolkata</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Private Buses</h4>
                    <p className="text-sm text-gray-600">Multiple operators from Kolkata (5-6 hours)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚗 By Car</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Route</h4>
                    <p className="text-sm text-gray-600">Kolkata - Kharagpur - Digha (180km, 4-5 hours)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-sm text-gray-600">Available near beaches and hotels</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚲 Local Transport</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Cycle Rickshaws</h4>
                    <p className="text-sm text-gray-600">Ideal for short distances in town</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Auto Rickshaws</h4>
                    <p className="text-gray-600">Available for beach hopping</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "monuments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monuments.map((monument, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick("monuments", monument)}
                onMouseEnter={() => handleCardHover("monuments", monument)}
                onMouseLeave={handleCardLeave}
                isHovered={hoveredCard?.type === "monuments" && hoveredCard?.item.id === monument.id}
                isClickable={true}
              >
                <img
                  src={monument.image || "/placeholder.svg"}
                  alt={monument.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{monument.name}</h3>
                  <Badge variant="outline" className="mb-2">
                    {monument.period}
                  </Badge>
                  <p className="text-sm text-gray-600">{monument.significance}</p>
                  {hoveredCard?.type === "monuments" && hoveredCard?.item.id === monument.id && (
                    <div className="mt-3 text-center">
                      <span className="text-sm text-blue-600 font-medium">Click to book visit →</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick("hotels", hotel)}
                onMouseEnter={() => handleCardHover("hotels", hotel)}
                onMouseLeave={handleCardLeave}
                isHovered={hoveredCard?.type === "hotels" && hoveredCard?.item.id === hotel.id}
                isClickable={true}
              >
                <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex">{renderStars(hotel.rating)}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{hotel.category}</Badge>
                    <span className="text-sm font-semibold text-blue-600">₹{hotel.price}/night</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities?.map((amenity, i) => (
                      <Badge key={i} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  {hoveredCard?.type === "hotels" && hoveredCard?.item.id === hotel.id && (
                    <div className="mt-3 text-center">
                      <span className="text-sm text-blue-600 font-medium">Click to book now →</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick("restaurants", restaurant)}
                onMouseEnter={() => handleCardHover("restaurants", restaurant)}
                onMouseLeave={handleCardLeave}
                isHovered={hoveredCard?.type === "restaurants" && hoveredCard?.item.id === restaurant.id}
                isClickable={true}
              >
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{restaurant.priceRange}</span>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {restaurant.cuisine}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-3">{restaurant.specialty}</p>
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                  </div>
                  {hoveredCard?.type === "restaurants" && hoveredCard?.item.id === restaurant.id && (
                    <div className="mt-3 text-center">
                      <span className="text-sm text-blue-600 font-medium">Click to reserve table →</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">📷</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "souvenirs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {souvenirs.map((souvenir, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick("souvenirs", souvenir)}
                onMouseEnter={() => handleCardHover("souvenirs", souvenir)}
                onMouseLeave={handleCardLeave}
                isHovered={hoveredCard?.type === "souvenirs" && hoveredCard?.item.id === souvenir.id}
                isClickable={true}
              >
                <img
                  src={souvenir.image || "/placeholder.svg"}
                  alt={souvenir.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{souvenir.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{souvenir.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">₹{souvenir.price}</span>
                    <Button size="sm">🛍 Buy</Button>
                  </div>
                  {hoveredCard?.type === "souvenirs" && hoveredCard?.item.id === souvenir.id && (
                    <div className="mt-3 text-center">
                      <span className="text-sm text-blue-600 font-medium">Click to purchase →</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Tourist Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-semibold">Tourist Office</p>
                        <p className="text-sm text-gray-600">+91 3224 266 000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">digha.tourism@wb.gov.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">www.wbtourism.gov.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚨</span>
                      <div>
                        <p className="font-semibold">Police</p>
                        <p className="text-sm text-gray-600">100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold">Medical Emergency</p>
                        <p className="text-sm text-gray-600">102</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚒</span>
                      <div>
                        <p className="font-semibold">Fire</p>
                        <p className="text-sm text-gray-600">101</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Currency</h4>
                    <p className="text-sm text-gray-600">Indian Rupee (₹)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Zone</h4>
                    <p className="text-sm text-gray-600">IST (UTC+5:30)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Language</h4>
                    <p className="text-sm text-gray-600">Bengali (Hindi & English widely understood)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Electricity</h4>
                    <p className="text-sm text-gray-600">230V, 50Hz (Type C, D & M plugs)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Detail View Modal */}
      {selectedCard && (
        <DetailView item={selectedCard.item} type={selectedCard.type} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  )
}

export default Digha
