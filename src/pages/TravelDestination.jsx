"use client"
import React from "react"
const TravelDestination = () => {
  const attractions = [
    {
      name: "Eiffel Tower",
      image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
      duration: "2-3 hours",
      price: "€29",
      description: "Iconic iron lattice tower and symbol of Paris",
    },
    {
      name: "Louvre Museum",
      image: "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG91dnJlJTIwTXVzZXVtfGVufDB8fDB8fHww",
      rating: 4.8,
      duration: "4-6 hours",
      price: "€17",
      description: "World's largest art museum and historic monument",
    },
    {
      name: "Notre-Dame Cathedral",
      image: "https://images.unsplash.com/photo-1661681253595-03d37dbf65e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5vdHJlJTIwRGFtZSUyMENhdGhlZHJhbHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.7,
      duration: "1-2 hours",
      price: "Free",
      description: "Medieval Catholic cathedral with Gothic architecture",
    },
    {
      name: "Arc de Triomphe",
      image: "https://images.unsplash.com/photo-1585831281105-1742c8c12bd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFyYyUyMGRlJTIwVHJpb21waGV8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      duration: "1 hour",
      price: "€13",
      description: "Triumphal arch honoring those who fought for France",
    },
    {
      name: "Sacré-Cœur Basilica",
      image: "https://plus.unsplash.com/premium_photo-1678233300998-fbaad0d22404?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FjciVDMyVBOSUyMEMlQzUlOTN1ciUyMEJhc2lsaWNhfGVufDB8fDB8fHww",
      rating: 4.5,
      duration: "1-2 hours",
      price: "Free",
      description: "Roman Catholic church and minor basilica",
    },
    {
      name: "Seine River Cruise",
      image: "https://images.unsplash.com/photo-1567187155374-cd9135b1f247?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VpbmUlMjBSaXZlciUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.4,
      duration: "1 hour",
      price: "€15",
      description: "Scenic boat tour along the Seine River",
    },
  ]

  const monuments = [
    {
      name: "Palace of Versailles",
      period: "17th Century",
      significance: "Royal residence of French kings",
      image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFsYWNlJTIwb2YlMjBWZXJzYWlsbGVzfGVufDB8fDB8fHww",
    },
    {
      name: "Panthéon",
      period: "18th Century",
      significance: "Mausoleum containing remains of distinguished French citizens",
      image: "https://plus.unsplash.com/premium_photo-1661962912126-2e72429a3f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBhbnRoJUMzJUE5b258ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Sainte-Chapelle",
      period: "13th Century",
      significance: "Gothic chapel famous for its stained glass windows",
      image: "https://images.unsplash.com/photo-1546444809-d64eccd9fb88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FpbnRlJTIwQ2hhcGVsbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Conciergerie",
      period: "14th Century",
      significance: "Former royal palace and prison during French Revolution",
      image: "https://plus.unsplash.com/premium_photo-1661914097200-65469aa701d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvbmNpZXJnZXJpZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  const hotels = [
    {
      name: "Hotel Plaza Athénée",
      category: "Luxury",
      rating: 5,
      price: "€800-1200",
      amenities: ["Spa", "Fine Dining", "Concierge"],
      image: "https://images.unsplash.com/photo-1709192248610-b83ee18067d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Hotel des Grands Boulevards",
      category: "Boutique",
      rating: 4,
      price: "€200-400",
      amenities: ["Restaurant", "Bar", "WiFi"],
      image: "https://images.unsplash.com/photo-1664985335522-8c00b5c9dae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzJTIwaW4lMjBwYXJpc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Generator Paris",
      category: "Budget",
      rating: 4,
      price: "€50-100",
      amenities: ["Hostel", "Café", "Common Areas"],
      image: "https://images.unsplash.com/photo-1706879184552-f282cb5c7c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVscyUyMGluJTIwcGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Le Meurice",
      category: "Luxury",
      rating: 5,
      price: "€900-1500",
      amenities: ["Michelin Star", "Spa", "Butler Service"],
      image: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVscyUyMGluJTIwcGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Hotel Malte Opera",
      category: "Mid-Range",
      rating: 4,
      price: "€150-250",
      amenities: ["Central Location", "WiFi", "Breakfast"],
      image: "https://images.unsplash.com/photo-1693145011819-6ff339d17325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVscyUyMGluJTIwcGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "MIJE Hostels",
      category: "Budget",
      rating: 3,
      price: "€30-60",
      amenities: ["Shared Rooms", "Kitchen", "Laundry"],
      image: "https://images.unsplash.com/photo-1726315335378-ee793f6f7350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVscyUyMGluJTIwcGFyaXN8ZW58MHx8MHx8fDA%3D",
    },
  ]

  const restaurants = [
    {
      name: "Le Jules Verne",
      cuisine: "French Fine Dining",
      rating: 4.8,
      priceRange: "€€€€",
      specialty: "Michelin starred restaurant in Eiffel Tower",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "L'As du Fallafel",
      cuisine: "Middle Eastern",
      rating: 4.5,
      priceRange: "€",
      specialty: "Famous falafel in the Marais district",
      image: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Breizh Café",
      cuisine: "Crêperie",
      rating: 4.6,
      priceRange: "€€",
      specialty: "Modern take on traditional Breton crêpes",
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pierre Hermé",
      cuisine: "Patisserie",
      rating: 4.7,
      priceRange: "€€",
      specialty: "World-renowned macarons and pastries",
      image: "https://images.unsplash.com/photo-1497644083578-611b798c60f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Le Comptoir du Relais",
      cuisine: "Bistro",
      rating: 4.4,
      priceRange: "€€€",
      specialty: "Traditional French bistro cuisine",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Du Pain et des Idées",
      cuisine: "Bakery",
      rating: 4.9,
      priceRange: "€",
      specialty: "Artisanal bread and pastries",
      image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
  ]

  const galleryImages = [
    { src: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXxlbnwwfHwwfHx8MA%3D%3D", alt: "" },
    { src: "https://images.unsplash.com/photo-1629758460174-7e9e3d9979c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFyaXMlMjBnYWxsZXJ5fGVufDB8fDB8fHww", alt: "" },
    { src: "https://images.unsplash.com/photo-1554663731-b6468c68d3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXMlMjB2aW50YWdlfGVufDB8fDB8fHww", alt: "" },
    { src: "https://images.unsplash.com/photo-1686422080153-d329d0098059?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Montmartre streets" },
    { src: "https://plus.unsplash.com/premium_photo-1688114984765-308599ec1e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Notre-Dame Cathedral" },
    { src: "https://images.unsplash.com/photo-1686317507335-c472df229e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Champs-Élysées" },
    { src: "https://images.unsplash.com/photo-1684092496785-63c367b2de14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Latin Quarter" },
    { src: "https://images.unsplash.com/photo-1686317507335-c472df229e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Trocadéro Gardens" },
    { src: "https://images.unsplash.com/photo-1686317507335-c472df229e95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBhcmlzJTIwdmludGFnZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Arc de Triomphe" },
  ]

  const souvenirs = [
    {
      name: "Eiffel Tower Miniature",
      price: "€15-50",
      description: "Classic Paris souvenir in various sizes",
      image: "https://images.unsplash.com/photo-1715535576227-73ae2dab1e15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVpZmZlbCUyMFRvd2VyJTIwTWluaWF0dXJlfGVufDB8fDB8fHww",
    },
    {
      name: "French Perfume",
      price: "€30-200",
      description: "Authentic French fragrances",
      image: "https://images.unsplash.com/photo-1682450038207-1461ab051563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJlbmNoJTIwUGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Macarons",
      price: "€20-40",
      description: "Colorful French macarons in gift boxes",
      image: "https://images.unsplash.com/photo-1681589211919-4d74ed4871c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYXJvbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "French Wine",
      price: "€25-100",
      description: "Selection of French wines",
      image: "https://media.istockphoto.com/id/484330622/photo/wine-cellars.webp?a=1&b=1&s=612x612&w=0&k=20&c=6Y1ws68X27sYSnRu9B7SpwKDsqthtl7VTLLthd0n5gU=",
    },
    {
      name: "Beret",
      price: "€15-35",
      description: "Traditional French beret",
      image: "https://images.unsplash.com/photo-1713952705197-795611d3c593?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVyZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "French Cheese",
      price: "€10-30",
      description: "Artisanal French cheeses",
      image: "https://images.unsplash.com/photo-1722718461923-c69728f7640b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwY2hlZXNlfGVufDB8fDB8fHww",
    },
    {
      name: "Paris Postcards",
      price: "€5-15",
      description: "Vintage-style postcards of Paris landmarks",
      image: "https://images.unsplash.com/photo-1644758925728-ab7fd1e30e5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaSUyMHBvc3RjYXJkc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "French Scarves",
      price: "€25-80",
      description: "Silk scarves with Parisian designs",
      image: "https://images.unsplash.com/photo-1676949352042-917f099802ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlbmNoJTIwc2NhcnZlc3xlbnwwfHwwfHx8MA%3D%3D",
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
          <span className="inline-block border-b-4 border-amber-400 pb-2">Paris, France</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700 italic shadow-md  opacity-90 mt-1">
          The City of Light awaits your discovery
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
              <p className="text-sm text-gray-600">Western Europe</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center shadow-blue-900  ">
              <div className="text-2xl mb-2">🕒</div>
              <h3 className="font-semibold">Best Time</h3>
              <p className="text-sm text-gray-600">Apr - Oct</p>
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
              <p className="text-sm text-gray-600">French</p>
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
                    <h4 className="font-semibold">Charles de Gaulle Airport (CDG)</h4>
                    <p className="text-sm text-gray-600">Main international airport, 25km from city center</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Orly Airport (ORY)</h4>
                    <p className="text-sm text-gray-600">Secondary airport, 13km from city center</p>
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
                    <h4 className="font-semibold">Gare du Nord</h4>
                    <p className="text-sm text-gray-600">Eurostar terminal from London</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">TGV High-Speed Rail</h4>
                    <p className="text-sm text-gray-600">Connects to major European cities</p>
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
                    <h4 className="font-semibold">Metro System</h4>
                    <p className="text-sm text-gray-600">14 lines covering the entire city</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bus Network</h4>
                    <p className="text-sm text-gray-600">Extensive bus routes throughout Paris</p>
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
                    <p className="text-sm text-gray-600">Available at airports and city locations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-sm text-gray-600">Limited street parking, use parking garages</p>
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
                        <p className="text-sm text-gray-600">+33 1 42 96 70 00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">info@parisinfo.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">www.parisinfo.com</p>
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
                        <p className="text-sm text-gray-600">112 (EU Emergency Number)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">👮</span>
                      <div>
                        <p className="font-semibold">Police</p>
                        <p className="text-sm text-gray-600">17</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏥</span>
                      <div>
                        <p className="font-semibold">Medical Emergency</p>
                        <p className="text-sm text-gray-600">15</p>
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
                    <p className="text-sm text-gray-600">Euro (€)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Zone</h4>
                    <p className="text-sm text-gray-600">Central European Time (CET)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Language</h4>
                    <p className="text-sm text-gray-600">French (English widely spoken in tourist areas)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Electricity</h4>
                    <p className="text-sm text-gray-600">230V, 50Hz (Type C & E plugs)</p>
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

export default TravelDestination
