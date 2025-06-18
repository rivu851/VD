"use client"

import React from "react"

const TravelDestinationKerala = () => {
  const attractions = [
  {
    name: "Alleppey Backwaters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS-_22MhcVMi1rf6JorK4MzzaaFfUyJo9tQ&s",
    rating: 4.9,
    duration: "4-5 hours",
    price: "₹1500-₹3000 (Houseboat)",
    description: "Serene backwater cruises and houseboat stays",
  },
  {
    name: "Munnar Tea Plantations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RkAD6MhnJhtzpRKBXn5xQc4TP-4cHLWpjw&s",
    rating: 4.8,
    duration: "3-4 hours",
    price: "₹100-₹200 (Entry to some plantations/museums)",
    description: "Lush green tea estates and scenic views",
  },
  {
    name: "Kovalam Beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkw7tR8sOx6Gam_u-Px2sFCBYkDUWsaGyiA&s",
    rating: 4.7,
    duration: "Full day",
    price: "Free",
    description: "Popular beach destination with lighthouse",
  },
  {
    name: "Fort Kochi",
    image: "https://break-away.in/wp-content/uploads/2024/08/Fort-Kochi-Kerela-e1724155498113.jpeg",
    rating: 4.6,
    duration: "Half day",
    price: "Free (some attractions may have entry fees)",
    description: "Historic port city with Chinese fishing nets and colonial architecture",
  },
  {
    name: "Athirappilly Waterfalls",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyia-y4-RS3h6Ow4NHke-hXqy5LVuFTD3kg&s",
    rating: 4.5,
    duration: "2-3 hours",
    price: "₹40 (Entry fee)",
    description: "Majestic waterfalls in a forest setting",
  },
  {
    name: "Periyar Wildlife Sanctuary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjLivh4a-UwENThNtNwdVsGmwGNr3sefJGQ&s",
    rating: 4.4,
    duration: "3-5 hours",
    price: "₹450 (Foreigners), ₹300 (Indians) for boat safari",
    description: "Wildlife reserve with boat safaris on Periyar Lake",
  },
];

const monuments = [
  {
    name: "Mattancherry Palace",
    period: "16th Century",
    significance: "Also known as Dutch Palace, known for murals",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2021/05/28193235/Kochi%E2%80%99s-Mattancherry-Palace-Museum-Home-to-some-of-India%E2%80%99s-best-mythological-murals-FB-1200x700-compressed-686x400.jpg",
  },
  {
    name: "Jewish Synagogue",
    period: "16th Century",
    significance: "Oldest active synagogue in the Commonwealth",
    image: "Jewish Synagogue",
  },
  {
    name: "Bekal Fort",
    period: "17th Century",
    significance: "Largest and best-preserved fort in Kerala",
    image: "https://static.toiimg.com/photo/53095543.cms",
  },
  {
    name: "Hill Palace Museum",
    period: "19th Century",
    significance: "Largest archaeological museum in Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2PVxUiwKLV3m21M4CqzxfSQRf178dRpe6A&s",
  },
];

const hotels = [
  {
    name: "The Leela Kovalam, A Raviz Hotel",
    category: "Luxury",
    rating: 5,
    price: "15000-30000",
    amenities: ["Spa", "Private Beach", "Multiple Restaurants"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/65/11/fc/the-leela-kovalam-a-raviz.jpg?w=900&h=500&s=1",
  },
  {
    name: "Spice Tree Munnar",
    category: "Boutique",
    rating: 4,
    price: "8000-15000",
    amenities: ["Infinity Pool", "Yoga", "Plantation Walks"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8MW0nFIT5VxEqdVUK51SApFbfxb00wGPsQ&s",
  },
  {
    name: "Zostel Kochi",
    category: "Budget",
    rating: 4,
    price: "500-1500",
    amenities: ["Hostel", "Common Areas", "WiFi"],
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/656020196.jpg?k=28a93de1202d351d840e04b44bded31aeba44c0840b8cbebf5f4b99dd453052d&o=&hp=1",
  },
  {
    name: "Brunton Boatyard, Fort Kochi",
    category: "Luxury",
    rating: 5,
    price: "12000-25000",
    amenities: ["Heritage Property", "Waterfront", "Ayurveda"],
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/539851212.jpg?k=bf0e1ae6b775ede6063fe8d4f5c4d170f7c94e3b69507df1944446e012b6e52a&o=&hp=1",
  },
  {
    name: "Cardamom County, Periyar",
    category: "Mid-Range",
    rating: 4,
    price: "4000-8000",
    amenities: ["Nature Resort", "Swimming Pool", "Trekking"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhXSdiflepzRMGjf6bJDuXHmvtiqcjMr0MA&s",
  },
  {
    name: "Secret Garden HomeStay, Alleppey",
    category: "Budget",
    rating: 3,
    price: "1000-2500",
    amenities: ["Backwater View", "Homely Food", "Canoeing"],
    image: "https://www.experiencetravelgroup.com/reposit/20171021055050.jpg",
  },
];

const restaurants = [
  {
    name: "Tharavadu Restaurant, Kochi",
    cuisine: "Kerala Cuisine",
    rating: 4.8,
    priceRange: "₹₹₹",
    specialty: "Authentic Kerala sadhya and seafood",
    image: "https://content.jdmagicbox.com/comp/ernakulam/a3/0484px484.x484.180225125729.i2a3/catalogue/tharavadu-restaurant-ernakulam-restaurants-025xv.jpg",
  },
  {
    name: "Dal Roti, Fort Kochi",
    cuisine: "North Indian",
    rating: 4.5,
    priceRange: "₹₹",
    specialty: "Delicious North Indian curries and rotis",
    image: "https://images.wanderon.in/blogs/new/2024/06/dal-roti.jpg",
  },
  {
    name: "Saravana Bhavan, Trivandrum",
    cuisine: "South Indian Vegetarian",
    rating: 4.6,
    priceRange: "₹",
    specialty: "Idli, Dosa, and traditional South Indian breakfast",
    image: "https://lh3.googleusercontent.com/zLJSw1o-u5i8A1Dy7XidJHjGi1XROmOg8WNfkv6kBECiwywPv057fz5VnQQXgPaHeWOUrANaM99M2di2oW801zA1v-Q6WXZXRRqTx8GK=w1200-rw",
  },
  {
    name: "Qissa Cafe, Fort Kochi",
    cuisine: "Cafe, Continental",
    rating: 4.7,
    priceRange: "₹₹",
    specialty: "Relaxed ambiance with good coffee and snacks",
    image: "https://b.zmtcdn.com/data/pictures/0/900810/889c61828beba57978e67061997ed07e.jpg",
  },
  {
    name: "Oceanos Restaurant, Kovalam",
    cuisine: "Seafood",
    rating: 4.4,
    priceRange: "₹₹₹",
    specialty: "Fresh seafood with a view of the beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCo4LWYwj_XLECjBE9dbqXg1lzZVGIljUGLg&s",
  },
  {
    name: "Dhe Puttu, Kozhikode",
    cuisine: "Kerala Traditional",
    rating: 4.9,
    priceRange: "₹₹",
    specialty: "Varieties of Puttu (steamed rice cake)",
    image: "https://content.jdmagicbox.com/comp/kozhikode/e4/0495px495.x495.141107131009.s9e4/catalogue/dhe-puttu-puthiyara-kozhikode-restaurants-1722877.jpg",
  },
];

const galleryImages = [
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=-1&s=1", alt: "Alleppey Backwaters" },
  { src: "https://res.cloudinary.com/voyehomes/image/upload/w_1280,f_auto,c_scale/v1701151914/property/26/image/e74bffbe-2469-4f2f-a94f-667efc10ec08.jpg", alt: "Munnar Tea Plantations" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/26/d2/8e/vizhinjam-lighthouse.jpg?w=900&h=500&s=1", alt: "Kovalam Beach Lighthouse" },
  { src: "https://lp-cms-production.imgix.net/2020-11/f8ccb1f5c85e6cba4b70b879ac5f4e13-chinese-fishing-nets.jpg", alt: "Chinese Fishing Nets, Fort Kochi" },
  { src: "https://www.pelago.com/img/products/IN-India/day-trip-to-athirappilly-water-falls-from-kochi/38ed0fe5-6b23-4db8-9400-eeb2431c7ae1_day-trip-to-athirappilly-water-falls-from-kochi-large.webp", alt: "Athirappilly Waterfalls" },
  { src: "https://www.periyarnationalparkonline.in/images/periyar-boat-safari.jpg", alt: "Periyar Lake boat safari" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8z4duAeLD7dEEN-kv6Jv9ffS44m7WwZN8lg&s", alt: "Kathakali performance" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6OuK6msNwo7a6VG_dPRawPTCcTJPhFtj5Q&s", alt: "Kerala Houseboat" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG1XFVCbNlHGEG9-qR78tlgAt0EfEv9OkLA&s", alt: "Kerala spices" },
];

const souvenirs = [
  {
    name: "Kathakali Mask",
    price: "₹300-₹2000",
    description: "Traditional vibrant Kathakali dance masks",
    image: "https://www.amazon.in/Angroos-Elegant-Kadhakali-Mask-Wall/dp/B0C24F9NVR",
  },
  {
    name: "Spices",
    price: "₹100-₹500 (per pack)",
    description: "Fresh and aromatic spices like cardamom, pepper, and cinnamon",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300354576/BY/JD/WE/22046938/spices-500x500.jpg",
  },
  {
    name: "Coir Products",
    price: "₹50-₹1000",
    description: "Eco-friendly products made from coconut coir like mats, bags",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGINOYMz4VNbx3cL4coQNWP7vqe3AUIpRKw&s",
  },
  {
    name: "Kerala Saree/Mundu",
    price: "₹800-₹5000",
    description: "Traditional off-white cotton attire with golden borders",
    image: "https://southloom.com/cdn/shop/articles/wedding_post.jpg?v=1634301074",
  },
  {
    name: "Aranmula Kannadi (Metal Mirror)",
    price: "₹2000-₹20000+",
    description: "Handmade metal alloy mirror, a unique craft of Kerala",
    image: "https://d35l77wxi0xou3.cloudfront.net/opencart/image/productFromFeb2020/AKS16%20(Back%20Stand)%20-%20Aranmula%20Kannadi%20(Aranmula%20Metal%20Mirror)1613734134-600x600.jpg",
  },
  {
    name: "Cashew Nuts",
    price: "₹500-₹1000 (per kg)",
    description: "High-quality roasted or flavored cashew nuts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mjeOPoT1Hzm7NondkQZq4S00jgJgXuxJVg&s",
  },
  {
    name: "Kerala Elephant Souvenirs",
    price: "₹100-₹1000",
    description: "Miniature elephants, a symbol of Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JDOHloYyK9gbajwlTSjOcUtWaTCJBZywPQ&s",
  },
  {
    name: "Ayurvedic Products",
    price: "₹200-₹1000",
    description: "Authentic Ayurvedic oils, soaps, and other wellness products",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg",
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
  <div className="relative h-[32rem] "> {/* better than h-100, which is not a valid Tailwind class */}
    <img
      src="https://w0.peakpx.com/wallpaper/809/156/HD-wallpaper-kerala-nature-kerala-landscape-thumbnail.jpg"
      alt="Kerala cityscape"
      className="w-full h-full object-cover text-3xl font-bold brightness-75 "
    />

    <div className="absolute inset-0 flex items-center justify-center px-4 ">
      <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl  ">
        <h1 className="text-5xl font-semibold mb-4 tracking-tight">
          <span className="inline-block border-b-4 border-amber-400 pb-2">Kerala, India</span>
        </h1>
        <p class="text-lg mb-6 text-gray-700 italic shadow-md opacity-90 mt-1">
          God's Own Country awaits your discovery
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
       <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <div class="p-4 text-center">
              <div class="text-2xl mb-2">📍</div>
              <h3 class="font-semibold">Location</h3>
              <p class="text-sm text-gray-600">Southern India</p>
            </div>
          </Card>
          <Card>
            <div class="p-4 text-center shadow-blue-900">
              <div class="text-2xl mb-2">🕒</div>
              <h3 class="font-semibold">Best Time</h3>
              <p class="text-sm text-gray-600">Sept - Mar</p>
            </div>
          </Card>
          <Card>
            <div class="p-4 text-center">
              <div class="text-2xl mb-2">⭐</div>
              <h3 class="font-semibold">Rating</h3>
              <p class="text-sm text-gray-600">4.8/5</p>
            </div>
          </Card>
          <Card>
            <div class="p-4 text-center">
              <div class="text-2xl mb-2">🌍</div>
              <h3 class="font-semibold">Language</h3>
              <p class="text-sm text-gray-600">Malayalam</p>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
       <div class="flex flex-wrap gap-2 mb-8 justify-center">
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
                    <h4 className="font-semibold">Cochin International Airport (COK)</h4>
                    <p className="text-sm text-gray-600">Major international airport, well-connected</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Thiruvananthapuram International Airport (TRV)</h4>
                    <p className="text-sm text-gray-600">Capital city's international airport</p>
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
                    <h4 className="font-semibold">Ernakulam Junction (ERS)</h4>
                    <p className="text-sm text-gray-600">Major railway hub, connects across India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Thiruvananthapuram Central (TVC)</h4>
                    <p className="text-sm text-gray-600">Connects to major Indian cities</p>
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
                    <h4 className="font-semibold">KSRTC Buses</h4>
                    <p className="text-sm text-gray-600">Extensive network connecting towns and cities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Local Buses & Auto-rickshaws</h4>
                    <p className="text-sm text-gray-600">Common for inter-city travel</p>
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
                    <h4 className="font-semibold">Car Rental & Taxis</h4>
                    <p className="text-sm text-gray-600">Widely available, convenient for touring</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Self-Drive</h4>
                    <p className="text-sm text-gray-600">Well-maintained roads connect major destinations</p>
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
                        <p className="text-sm text-gray-600">+91 471 2321132</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">info@keralatourism.org</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">www.keralatourism.org</p>
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
                      <span className="text-xl">👮‍</span>
                      <div>
                        <p className="font-semibold">Police</p>
                        <p className="text-sm text-gray-600">100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold">Medical Emergency</p>
                        <p className="text-sm text-gray-600">108</p>
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
                    <p className="text-sm text-gray-600">Malayalam (English widely spoken in tourist areas)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Electricity</h4>
                    <p className="text-sm text-gray-600">230V, 50Hz (Type D & M plugs)</p>
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

export default TravelDestinationKerala
