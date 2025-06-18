"use client"

import React from "react"

const TravelDestinationDelhi = () => {
 const attractions = [
    {
      name: "India Gate",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg/960px-India_Gate_on_the_evening_of_77th_Independence_day.jpg",
      rating: 4.9,
      duration: "2-3 hours",
      price: "₹0",
      description: "Iconic war memorial and symbol of Delhi",
    },
    {
      name: "Red Fort",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-hero?qlt=82&ts=1727352293417",
      rating: 4.8,
      duration: "4-6 hours",
      price: "₹500",
      description: "Historic fort and UNESCO World Heritage site in Delhi",
    },
    {
      name: "Qutub Minar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-fBvJcqVULNExj6RoqkTJi2ykIGN1czV5A&s",
      rating: 4.7,
      duration: "1-2 hours",
      price: "₹500",
      description: "Tallest brick minaret in the world and UNESCO World Heritage site",
    },
    {
      name: "Humayun's Tomb",
      image: "https://cdn.britannica.com/54/156454-050-4E72CEE0/Humayuns-Tomb-Hamidah-Banu-Begam-Delhi-India-1569.jpg",
      rating: 4.6,
      duration: "1 hour",
      price: "₹500",
      description: "Tomb of the Mughal Emperor Humayun, a precursor to the Taj Mahal",
    },
    {
      name: "Lotus Temple",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg",
      rating: 4.5,
      duration: "1-2 hours",
      price: "₹0",
      description: "Baháʼí House of Worship known for its flower-like shape",
    },
    {
      name: "Yamuna River Boat Ride",
      image: "https://images.unsplash.com/photo-1678542561901-5d75778930ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFtdW5hJTIwcml2ZXIlMjBib2F0JTIwcmlkZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.4,
      duration: "1 hour",
      price: "₹200",
      description: "Scenic boat tour along the Yamuna River",
    },
  ]

 const monuments = [
    {
      name: "Agrasen ki Baoli",
      period: "14th Century",
      significance: "Ancient stepwell with 103 steps",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/agrasen-ki-baoli-delhi-delhi-2-attr-hero?qlt=82&ts=1727352154212",
    },
    {
      name: "Jantar Mantar",
      period: "18th Century",
      significance: "Collection of architectural astronomical instruments",
      image: "https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFudGFyJTIwbWFudGFyfGVufDB8fDB8fHww",
    },
    {
      name: "Purana Qila",
      period: "16th Century",
      significance: "One of the oldest forts in Delhi",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Purana-Qila_1400.jpg",
    },
    {
      name: "Lodhi Garden",
      period: "15th Century",
      significance: "Historical garden with tombs of Sayyid and Lodi rulers",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/lodhi-garden-delhi-delhi-4-attr-hero?qlt=82&ts=1727352152502",
    },
  ]

  const hotels = [
    {
      name: "The Leela Palace Delhi",
      category: "Luxury",
      rating: 5,
      price: "₹15000-25000",
      amenities: ["Spa", "Fine Dining", "Concierge"],
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/5648061.jpg?k=4629f919fb92436c3e19b71734d208d8e58201df7b29773f90089639f367db6d&o=&hp=1",
    },
    {
      name: "The Imperial, New Delhi",
      category: "Boutique",
      rating: 5,
      price: "₹10000-20000",
      amenities: ["Restaurant", "Bar", "WiFi"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LyH6TXdEX1CF2rvpEQrYUH29UzUOQy1TzQ&s",
    },
    {
      name: "Zostel Delhi",
      category: "Budget",
      rating: 4,
      price: "₹500-1500",
      amenities: ["Hostel", "Café", "Common Areas"],
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438646298.jpg?k=82899daa24dfa41d072247de0400438c4edb184f68cf7723f1c0224f0322ca28&o=&hp=1",
    },
    {
      name: "Taj Palace, New Delhi",
      category: "Luxury",
      rating: 5,
      price: "₹18000-30000",
      amenities: ["Michelin Star", "Spa", "Butler Service"],
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336041746.jpg?k=81ca9e45244b4f17cb199c4ac73d2094446ebd17020c5c1425a44a23e860b562&o=&hp=1",
    },
    {
      name: "Lemon Tree Premier, Delhi Airport",
      category: "Mid-Range",
      rating: 4,
      price: "₹5000-8000",
      amenities: ["Central Location", "WiFi", "Breakfast"],
      image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201203301842173153-3275c498929611ee8a710a58a9feac02.jpg",
    },
    {
      name: "goStops Delhi",
      category: "Budget",
      rating: 3,
      price: "₹400-1000",
      amenities: ["Shared Rooms", "Kitchen", "Laundry"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCWy0nD8AIenoYRT9XX56pfjIRse2xV5XQA&s",
    },
  ]

 const restaurants = [
    {
      name: "Indian Accent",
      cuisine: "Modern Indian",
      rating: 4.8,
      priceRange: "₹₹₹₹",
      specialty: "Award-winning contemporary Indian cuisine",
      image: "https://static.wixstatic.com/media/bbc2f7_95e7d6788a2642b6adc1a6b200b647d6~mv2.jpg/v1/fill/w_640,h_440,al_b,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc2f7_95e7d6788a2642b6adc1a6b200b647d6~mv2.jpg",
    },
    {
      name: "Karim's",
      cuisine: "Mughlai",
      rating: 4.5,
      priceRange: "₹",
      specialty: "Iconic traditional Mughlai dishes near Jama Masjid",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1d/72/4c/77/karim-s-iconic-entrance.jpg",
    },
    {
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.6,
      priceRange: "₹₹",
      specialty: "Authentic South Indian vegetarian food",
      image: "https://content.jdmagicbox.com/comp/ernakulam/v9/0484px484.x484.151218185503.k8v9/catalogue/hotel-sree-saravanan-bhavan-padamughal-ernakulam-restaurants-rhbdp8-250.jpg",
    },
    {
      name: "Big Chill Cafe",
      cuisine: "Italian, Continental",
      rating: 4.7,
      priceRange: "₹₹",
      specialty: "Popular for pasta, shakes, and desserts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRomhrEfCaMM8RCZ4lUB-78ze3reBj9p6NQ&s",
    },
    {
      name: "Bukhara",
      cuisine: "North Indian",
      rating: 4.4,
      priceRange: "₹₹₹",
      specialty: "Renowned for its North-West Frontier cuisine",
      image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/dining/bukhara/headmast/d/bukhara.jpg",
    },
    {
      name: "AMA Cafe",
      cuisine: "Cafe, Tibetan",
      rating: 4.9,
      priceRange: "₹",
      specialty: "Cozy cafe known for breakfast and Tibetan delights",
      image: "https://b.zmtcdn.com/data/pictures/4/307374/b2b03be3aba61b0f173aa23e1abdb42b.jpg",
    },
  ]

  const galleryImages = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbNmlE1gbJMOxI_6_RixdJig1dGXDhf612Q&s", alt: "safdarjung tomb" },
    { src: "https://media.istockphoto.com/id/1255706053/photo/central-new-delhi.jpg?s=612x612&w=0&k=20&c=ce-027Rybado64mwDzvZpO6b0BisxRau3YLyKrX9RFI=", alt: "skyline" },
    { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/11/ee/19/park.jpg?w=500&h=500&s=1", alt: "nature" },
    { src: "https://static2.tripoto.com/media/filter/tst/img/371524/TripDocument/1510079933_22814281_10204197536256357_4611011609782787460_n.jpg", alt: "Old Delhi streets" },
    { src: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-hero?qlt=82&ts=1727352293417", alt: "Red Fort" },
    { src: "https://img.etimg.com/thumb/msid-110233291,width-640,resizemode-4/news/economy/infrastructure/connaught-place-history-area-owner-rent-other-unknown-facts/connaught-place-an-icon-of-delhi.jpg", alt: "Connaught Place" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmD9fwPimnOD-b591o-BFK5RH0Zybsj89Vyw&s", alt: "Hauz Khas Village" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Dwa0kbALAsJ2cliINC5WkUdEJnUqytnSwA&s", alt: "India Gate" },
    { src: "Qutub Minar", alt: "Qutub Minar" },
  ]

  const souvenirs = [
    {
      name: "Miniature India Gate",
      price: "₹300-1000",
      description: "Classic Delhi souvenir in various sizes",
      image: "https://www.silaii.com/cdn/shop/files/India_Gate_1_1.jpg?v=1722923845",
    },
    {
      name: "Attar (Indian Perfume)",
      price: "₹500-3000",
      description: "Traditional Indian fragrances",
      image: "https://www.raahiparfums.com/cdn/shop/files/MH6A2535-5.jpg?v=1745485650&width=1946",
    },
    {
      name: "Indian Spices",
      price: "₹200-800",
      description: "Assortment of aromatic Indian spices",
      image: "https://foodtank.com/wp-content/uploads/2016/09/iStock_78983427_MEDIUM_copy_2.jpg",
    },
    {
      name: "Indian Handicrafts",
      price: "₹400-2000",
      description: "Handmade crafts like pottery, textiles, and artifacts",
      image: "https://static.toiimg.com/thumb/msid-114818958,width-748,height-499,resizemode=4,imgsize-133614/.jpg",
    },
    {
      name: "Traditional Indian Clothing",
      price: "₹500-5000",
      description: "Scarves, stoles, or small apparel with Indian designs",
      image: "https://mahezon.in/cdn/shop/files/IMG-20240823_145827_594.jpg?v=1736872815",
    },
    {
      name: "Indian Sweets",
      price: "₹100-500",
      description: "Local delicacies like Petha or various Indian mithai",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVc5tYd2DWQLP8jIQF-8-wlvD57-015dueUg&s",
    },
    {
      name: "Delhi Postcards",
      price: "₹100-300",
      description: "Vintage-style postcards of Delhi landmarks",
      image: "https://m.media-amazon.com/images/I/81AU0ngQ9PL.jpg",
    },
    {
      name: "Kashmiri Shawls",
      price: "₹1000-10000",
      description: "Fine quality Pashmina or woolen shawls",
      image: "https://d13676iop780hb.cloudfront.net/uploads/2022/10/kcs-412-sw-36-1.jpg",
    },
  ]
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
  <div className="relative h-[32rem] "> {/* better than h-100, which is not a valid Tailwind class */}
    <img
      src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D"
      alt="Paris cityscape"
      className="w-full h-full object-cover text-3xl font-bold brightness-75 "
    />

    <div className="absolute inset-0 flex items-center justify-center px-4 ">
      <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl  ">
        <h1 className="text-5xl font-semibold mb-4 tracking-tight">
         <span className="inline-block border-b-4 border-amber-400 pb-2">Delhi, India</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700 italic shadow-md  opacity-90 mt-1">
          The heart of India awaits your discovery
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
            <p className="text-sm text-gray-600">Northern India</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center shadow-blue-900  ">
              <div className="text-2xl mb-2">🕒</div>
              <h3 className="font-semibold">Best Time</h3>
            <p className="text-sm text-gray-600">Oct - Mar</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">⭐</div>
              <h3 className="font-semibold">Rating</h3>
              <p className="text-sm text-gray-600">4.8/5</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
             <h3 className="font-semibold">Language</h3>
            <p className="text-sm text-gray-600">Hindi, English</p>
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
                <h4 className="font-semibold">Indira Gandhi International Airport (DEL)</h4>
                <p className="text-sm text-gray-600">Main international airport, 16km from city center</p>
              </div>
              <div>
                <h4 className="font-semibold">Safdarjung Airport (VIDD)</h4>
                <p className="text-sm text-gray-600">General aviation airport, within city limits</p>
              </div>
            </div>
              </div>
            </Card>

           <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
                   
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚄 By Train</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">New Delhi Railway Station (NDLS)</h4>
                    <p className="text-sm text-gray-600">Major rail hub connecting to all parts of India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hazrat Nizamuddin Railway Station (NZM)</h4>
                    <p className="text-sm text-gray-600">Serves many express and superfast trains</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚌 Public Transport</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Delhi Metro</h4>
                    <p className="text-sm text-gray-600">Extensive metro network covering Delhi and NCR</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">DTC Bus Network</h4>
                    <p className="text-sm text-gray-600">Comprehensive bus routes across Delhi</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">🚗 By Car</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Car Rental</h4>
                    <p className="text-sm text-gray-600">Available at airports and various city locations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ride-sharing Services / Taxis</h4>
                    <p className="text-sm text-gray-600">Widely available (e.g., Ola, Uber) and convenient for getting around Delhi</p>
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
                        <p className="text-sm text-gray-600">+91 11 23320005</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">info.delhi@gov.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">www.delhitourism.gov.in</p>
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
                        <p className="font-semibold">Emergency Services</p>
                        <p className="text-sm text-gray-600">112 (All-in-one emergency helpline)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">👮</span>
                      <div>
                        <p className="font-semibold">Police</p>
                        <p className="text-sm text-gray-600">100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold">Medical Emergency / Ambulance</p>
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
                    <h4 className="font-semibold mb-2">Language</h4>
                    <p className="text-sm text-gray-600">Hindi, English (Widely spoken)</p>
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

export default TravelDestinationDelhi
