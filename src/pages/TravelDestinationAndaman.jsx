"use client"

import React from "react"

const TravelDestinationAndaman = () => {
const attractions = [
  {
    name: "Radhanagar Beach",
    image: "https://images.unsplash.com/photo-1599325601183-042bed55081c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFkaGFuYWdhciUyMEJlYWNofGVufDB8fDB8fHwy",
    rating: 4.9,
    duration: "2-3 hours",
    price: "Free",
    description: "One of Asia's most beautiful beaches, known for its pristine sands and clear waters.",
  },
  {
    name: "Cellular Jail",
    image: "https://images.unsplash.com/photo-1678810982062-5badaabf0e9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTIyQ2VsbHVsYXIlMjBKYWlsfGVufDB8fDB8fHwy",
    rating: 4.8,
    duration: "2-3 hours",
    price: "₹30",
    description: "Historic colonial prison, now a national memorial.",
  },
  {
    name: "Ross Island",
    image: "https://images.unsplash.com/photo-1719642447899-74c06147c4e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvc3MlMjBpc2xhbmR8ZW58MHx8MHx8fDI%3D",
    rating: 4.7,
    duration: "3-4 hours",
    price: "₹50",
    description: "Former administrative headquarters for the British in Andaman, with ruins and peacocks.",
  },
  {
    name: "Elephant Beach",
    image: "https://images.unsplash.com/photo-1737859986851-30c9c350957a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlcGhhbnQlMjBCZWFjaHxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.6,
    duration: "2-3 hours",
    price: "₹100 (for boat ride)",
    description: "Popular for water sports like snorkeling and jet skiing, with vibrant coral reefs.",
  },
  {
    name: "Limestone Caves (Baratang Island)",
    image: "https://images.unsplash.com/photo-1603037872804-200b519ec0db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGltZXN0b25lJTIwQ2F2ZXMlMjAoQmFyYXRhbmclMjBJc2xhbmQpfGVufDB8fDB8fHwy",
    rating: 4.5,
    duration: "Half-day trip",
    price: "₹50 (for ferry)",
    description: "Natural caves formed by sedimentary rocks, accessible by boat through mangrove creeks.",
  },
  {
    name: "Bharatpur Beach",
    image: "https://images.unsplash.com/photo-1732946889180-6fde61e58390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmhhcmF0cHVyJTIwQmVhY2h8ZW58MHx8MHx8fDI%3D",
    instruction: "",
    rating: 4.4,
    duration: "1-2 hours",
    price: "Free",
    description: "Ideal for swimming and coral viewing, with a calm and serene atmosphere.",
  },
];

  const monuments = [
    {
      name: "Cellular Jail",
      period: "19th Century",
      significance: "Colonial prison used by the British to incarcerate political prisoners",
      image: "https://images.unsplash.com/photo-1630569688747-0e3b60f6430f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2VsbHVsYXIlMjBKYWlsfGVufDB8fDB8fHwy",
    },
    {
      name: "Ross Island Penal Colony",
      period: "19th Century",
      significance: "Former administrative headquarters of the British in Andaman; ruins of colonial buildings remain",
      image: "https://images.unsplash.com/photo-1495388470843-33cfded6eed2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Um9zcyUyMElzbGFuZCUyMFBlbmFsJTIwQ29sb255fGVufDB8fDB8fHwy",
    },
    {
      name: "Japanese Bunkers",
      period: "World War II",
      significance: "Remnants of bunkers built by Japanese forces during their occupation of the islands",
      image: "https://images.unsplash.com/photo-1727635812114-12bb87b05ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmFwYW5lc2UlMjBCdW5rZXJzfGVufDB8fDB8fHwy",
    },
    {
      name: "Chatham Saw Mill",
      period: "19th Century",
      significance: "One of the oldest and largest sawmills in Asia, established by the British",
      image: "https://images.unsplash.com/photo-1715201716393-c6b400e1bd4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhdGhhbSUyMFNhdyUyME1pbGx8ZW58MHx8MHx8fDI%3D",
    },
  ];

 const hotels = [
  {
    name: "Taj Exotica Resort & Spa",
    category: "Luxury",
    rating: 5,
    price: "₹25000-40000",
    amenities: ["Spa", "Private Beach", "Water Sports"],
    image: "https://images.unsplash.com/photo-1676720922190-6d42908d6766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFqJTIwRXhvdGljYSUyMFJlc29ydCUyMCUyNiUyMFNwYXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Coral Reef Resort",
    category: "Boutique",
    rating: 4,
    price: "₹8000-15000",
    amenities: ["Restaurant", "Dive Center", "Swimming Pool"],
    image: "https://images.unsplash.com/photo-1662792721650-545a15f07ff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29yYWwlMjBSZWVmJTIwUmVzb3J0fGVufDB8fDB8fHwy",
  },
  {
    name: "Blue Marlin Resort",
    category: "Budget",
    rating: 3,
    price: "₹3000-6000",
    amenities: ["Basic Rooms", "Café", "Common Areas"],
    image: "https://images.unsplash.com/photo-1711513288975-cb8ca3c6152b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZSUyME1hcmxpbiUyMFJlc29ydHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Fortune Resort Bay Island",
    category: "Luxury",
    rating: 5,
    price: "₹18000-30000",
    amenities: ["Sea View Rooms", "Spa", "Multi-cuisine Restaurant"],
    image: "https://images.unsplash.com/photo-1724044443982-9091c1a3ef7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9ydHVuZSUyMFJlc29ydCUyMEJheSUyMElzbGFuZHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    name: "Hotel Shompen",
    category: "Mid-Range",
    rating: 4,
    price: "₹6000-10000",
    amenities: ["Central Location", "WiFi", "Breakfast"],
    image: "https://images.unsplash.com/photo-1729515748017-093b43088365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG90ZWwlMjBTaG9tcGVufGVufDB8fDB8fHwy",
  },
  {
    name: "Megapode Resort",
    category: "Budget",
    rating: 3,
    price: "₹3000-5000",
    amenities: ["Cottages", "Garden", "Basic Amenities"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/73/4d/88/megapode-resort-portblairamazi.jpg?w=1400&h=800&s=1",
  },
];

  const restaurants = [
  {
    name: "Full Moon Cafe",
    cuisine: "Multi-cuisine, Seafood",
    rating: 4.8,
    priceRange: "700+",
    specialty: "Fresh seafood and panoramic sea views",
    image: "https://content.jdmagicbox.com/comp/port-blair/t8/9999p3192.3192.140608192245.j9t8/catalogue/full-moon-cafe-port-blair-ho-port-blair-restaurants-dygeay.jpg",
  },
  {
    name: "Annapurna Restaurant",
    cuisine: "Indian, Vegetarian",
    rating: 4.5,
    priceRange: "100-200",
    specialty: "Authentic South Indian thalis and local dishes",
    image: "https://content.jdmagicbox.com/comp/def_content_category/restaurants/photo-1517248135467-4c7edcad34c4-restaurants-3-abymb.jpg",
  },
  {
    name: "Something Different - A Beachside Cafe",
    cuisine: "Cafe, Continental",
    rating: 4.6,
    priceRange: "200-400",
    specialty: "Relaxed ambiance with ocean views and light bites",
    image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2c/bb/e0/eb/the-restaurant.jpg",
  },
  {
    name: "Mandalay Restaurant",
    cuisine: "Indian, Chinese",
    rating: 4.7,
    priceRange: "200-400",
    specialty: "Varied menu with Indian and Chinese favorites",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/10/d3/0c/a-view-of-mandalay-restaurant.jpg?w=900&h=500&s=1",
  },
  {
    name: "New Lighthouse Restaurant",
    cuisine: "Seafood, Indian",
    rating: 4.4,
    priceRange: "400-700",
    specialty: "Grilled seafood and local preparations",
    image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/45/c5/ab/new-lighthouse-restaurant.jpg",
  },
  {
    name: "Golden Dragon",
    cuisine: "Chinese",
    rating: 4.9,
    priceRange: "200-400",
    specialty: "Authentic Chinese dishes with a local twist",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/52/07/6b/sunsets-at-the-andaman.jpg?w=1200&h=900&s=1",
  },
];


 const galleryImages = [
  { src: "https://havelockislandbeachresort.com/storage/logo/sight-seeing-at-havelock/radhanagar-beach.jpg", alt: "Radhanagar Beach" },
  { src: "https://s7ap1.scene7.com/is/image/incredibleindia/cellular-jail-port-blair-andaman-and-nicobar-islands-2-attr-hero?qlt=82&ts=1726816790676", alt: "Cellular Jail" },
  { src: "https://www.go2andaman.com/wp-content/uploads/2021/01/Copy-of-Copy-of-Copy-of-1R6A1099-scaled-e1735714885168.jpg", alt: "Ross Island" },
  { src: "https://www.andamanisland.in/blog/detail/elephant-beach-at-havelock-island", alt: "Elephant Beach" },
  { src: "https://www.andamanisland.in/storage/blogs/271224035001-baratang-limestone-caves.webp", alt: "Limestone Caves" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs11Nim9wb3vXUL9psMMCeGMNiCu1hUEbJg&s", alt: "Bharatpur Beach" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a4/e8/03/corbyn-s-cove-beach-waer.jpg?w=1200&h=-1&s=1", alt: "Corbyn's Cove Beach" },
  { src: "https://cdn.experienceandamans.com/images/entrance-to-wandoor-beach-andaman.jpg", alt: "Mahatma Gandhi Marine National Park" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/90/2c/41/diving-and-snorkeling.jpg?w=900&h=500&s=1", alt: "North Bay Island" },
];

 const souvenirs = [
  {
    name: "Seashell Crafts",
    price: "₹100-500",
    description: "Handcrafted items made from local seashells",
    image: "https://asiainch.org/wp-content/uploads/2007/04/2-5.png",
  },
  {
    name: "Pearl Jewelry",
    price: "₹500-5000",
    description: "Jewelry made from pearls sourced from the Andaman Sea",
    image: "https://www.andamantourism.org/wp-content/uploads/2024/02/Watch-Out-for-Pearl-Jewellery.jpg",
  },
  {
    name: "Coconut Shell Products",
    price: "₹200-800",
    description: "Utensils, decorative items, and jewelry crafted from coconut shells",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-gZi9pZU2I-9dYr6CIcwDEUHSCYgsSfKSA&s",
  },
  {
    name: "Wooden Handicrafts",
    price: "₹300-1500",
    description: "Intricately carved wooden artifacts depicting local flora and fauna",
    image: "https://m.media-amazon.com/images/I/512rCCfH5YL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Nicobari Mats",
    price: "₹400-1000",
    description: "Traditional woven mats made by the Nicobari tribes",
    image: "https://www.andamanisland.in/storage/ck/301224112547-141124074928-nicobarimats-min.jpg",
  },
  {
    name: "Spices",
    price: "₹150-400",
    description: "Locally grown spices like black pepper, cinnamon, and cloves",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-_7HQU5NtOobN0qGya6ewlfAOe4WfsADCg&s",
  },
  {
    name: "Andaman T-shirts",
    price: "₹250-600",
    description: "T-shirts featuring Andaman and Nicobar themed designs",
    image: "https://static.wixstatic.com/media/9037c5_57a1cb4026824a6ea51bd7607c257729~mv2.png/v1/fill/w_544,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9037c5_57a1cb4026824a6ea51bd7607c257729~mv2.png",
  },
  {
    name: "Beachwear and Sarongs",
    price: "₹300-800",
    description: "Light and colorful beachwear perfect for the island climate",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxb6fGWAMXSAJLLOvC5e_gTT6vKaJJdFLxQ&s",
  },
];

  const [activeTab, setActiveTab] = React.useState("attractions")

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

  const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
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

  const Button = ({ children, variant = "default", size = "default", onClick, className = "" }) => {
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
      <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </button>
    )
  }

  return (
  <div className="min-h-screen bg-gray-50">
  {/* Hero Section */}
  <div className="relative h-[32rem] ">
    <img
      src="https://images.unsplash.com/photo-1545762374-d18079617da8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Andaman and Nicobar Islands seascape"
      className="w-full h-full object-cover text-3xl font-bold brightness-75 "
    />

    <div className="absolute inset-0 flex items-center justify-center px-4 ">
      <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl  ">
        <h1 className="text-5xl font-semibold mb-4 tracking-tight">
         <span className="inline-block border-b-4 border-amber-400 pb-2">Andaman & Nicobar Islands, India</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700 italic shadow-md opacity-90 mt-1">
          The Emerald Isles await your discovery
        </p>
        <div className="flex items-center justify-center gap-4">

              <Button variant="secondary" size="sm">
                ❤️ Save
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
            <p className="text-sm text-gray-600">Bay of Bengal, India</p>
          </div>
        </Card>
        <Card>
          <div className="p-4 text-center shadow-blue-900 ">
            <div className="text-2xl mb-2">🕒</div>
            <h3 className="font-semibold">Best Time</h3>
            <p className="text-sm text-gray-600">Oct - May</p>
          </div>
        </Card>
        <Card>
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">⭐</div>
            <h3 className="font-semibold">Rating</h3>
            <p className="text-sm text-gray-600">4.7/5</p>
          </div>
        </Card>
        <Card>
          <div className="p-4 text-center">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="font-semibold">Language</h3>
            <p className="text-sm text-gray-600">Hindi, English, Bengali</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {attractions.map((attraction, index) => (
              <Card
              className="transition-transform hover:scale-105 hover:bg-gray-50"
               key={index}>
                <div className="relative">
                  <img
                    src={attraction.image }
                    alt={attraction.name}
                    className="w-full h-48 object-cover hoover"
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
            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">✈️ By Air</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Veer Savarkar International Airport (Port Blair)</h4>
                    <p className="text-sm text-gray-600">Main airport connecting to mainland India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Flights from Chennai, Kolkata, Delhi, Bengaluru, Mumbai</h4>
                    <p className="text-sm text-gray-600">Direct flights available from major Indian cities</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚢 By Sea</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Passenger Ships</h4>
                    <p className="text-sm text-gray-600">Regular services from Chennai, Kolkata, and Visakhapatnam</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-sm text-gray-600">Approximately 3-4 days by sea</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🛥️ Inter-Island Transport</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Ferries</h4>
                    <p className="text-sm text-gray-600">Connects major islands like Havelock, Neil, and Baratang</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Private Boats & Speedboats</h4>
                    <p className="text-sm text-gray-600">Faster options for island hopping and tours</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚕 Local Transport</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Taxis & Auto-rickshaws</h4>
                    <p className="text-sm text-gray-600">Available for getting around towns and within islands</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Two-wheelers for Rent</h4>
                    <p className="text-sm text-gray-600">Popular for exploring islands like Havelock and Neil at your own pace</p>
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
               className="transition-transform hover:scale-105 hover:bg-gray-50"
              key={index}>
                <img
                  src={monument.image }
                  alt={monument.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{monument.name}</h3>
                  <Badge variant="outline" className="mb-2">
                    {monument.period}
                  </Badge>
                  <p className="text-sm text-gray-600">{monument.significance}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <Card key={index}
               className="transition-transform hover:scale-105 hover:bg-gray-50">
                <img src={hotel.image } alt={hotel.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex">{renderStars(hotel.rating)}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{hotel.category}</Badge>
                    <span className="text-sm font-semibold text-blue-600">{hotel.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {hotel.amenities.map((amenity, i) => (
                      <Badge key={i} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "restaurants" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card 
               className="transition-transform hover:scale-105 hover:bg-gray-50"
              key={index}>
                <img
                  src={restaurant.image }
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
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform hover:scale-105 hover:bg-gray-50">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg ">
                <img
                  src={image.src}
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
              <Card key={index}
               className="transition-transform hover:scale-105 hover:bg-gray-50">
                <img
                  src={souvenir.image }
                  alt={souvenir.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{souvenir.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{souvenir.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">{souvenir.price}</span>
                    <Button size="sm">🛍️ Buy</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card 
                className="transition-transform hover:scale-105 hover:bg-gray-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Tourist Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-semibold">Tourist Hotline</p>
                        <p className="text-sm text-gray-600">+91 3192 232694</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">tourism.andaman@nic.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">www.andamantourism.gov.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card 
                className="transition-transform hover:scale-105 hover:bg-gray-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚨</span>
                      <div>
                        <p className="font-semibold">Police/Emergency</p>
                        <p className="text-sm text-gray-600">100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">👩‍🚒</span>
                      <div>
                        <p className="font-semibold">Fire Service</p>
                        <p className="text-sm text-gray-600">101</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold">Ambulance</p>
                        <p className="text-sm text-gray-600">102</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card 
            className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Currency</h4>
                    <p className="text-sm text-gray-600">Indian Rupee (₹)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Zone</h4>
                    <p className="text-sm text-gray-600">Indian Standard Time (IST)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <p className="text-sm text-gray-600">Hindi, English, Bengali (among others)</p>
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
    </div>
  )
}

export default TravelDestinationAndaman
