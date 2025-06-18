"use client";
import React from "react";
const HiddenGemsBisnapur = () => {
  const attractions = [
    {
      name: "Jor Bangla Temple",
      image:
        "https://images.unsplash.com/photo-1574313884751-84fd8b20c919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Sm9yJTIwQmFuZ2xhJTIwVGVtcGxlfGVufDB8MXwwfHx8Mg%3D%3D",
      rating: 4.9,
      duration: "1-2 hours",
      price: "Free",
      description: "Iconic terracotta temple, a symbol of Bishnupur",
    },
    {
      name: "Rasmancha",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Rasmancha_Arnab_Dutta_2011.JPG",
      rating: 4.8,
      duration: "1-2 hours",
      price: "Free",
      description: "Unique brick temple with pyramidal structure",
    },
    {
      name: "Dal Madol Cannon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dalmadol_Canon_of_Bishnupur_03.jpg/1200px-Dalmadol_Canon_of_Bishnupur_03.jpg",
      rating: 4.7,
      duration: "30 minutes",
      price: "Free",
      description: "Historic cannon used by the Malla kings",
    },
    {
      name: "Shyamrai Temple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGdH1f-SEZ8DkcZuNb83pgblb0cI8oA9gcA&s",
      rating: 4.6,
      duration: "1 hour",
      price: "Free",
      description:
        "Pancharatna (five-towered) temple known for intricate carvings",
    },
    {
      name: "Madan Mohan Temple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKemKrL1qoe_CzmFOAGFFL6Sw3TD9fhnQTw&s",
      rating: 4.5,
      duration: "1 hour",
      price: "Free",
      description: "Ekaratna (single-towered) temple dedicated to Lord Krishna",
    },
    {
      name: "Acharya Jogesh Chandra Museum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtOk1EEJw77m211_NRt6zaIJDqnVm60LvcA&s",
      rating: 4.4,
      duration: "1-2 hours",
      price: "₹20",
      description: "Museum showcasing local art, artifacts, and terracotta",
    },
  ];

  const monuments = [
    {
      name: "Lalbandh Lake",
      period: "17th Century",
      significance: "Historic lake associated with Malla kings",
      image:
        "https://c8.alamy.com/comp/2HPGC21/lalbadth-lake-bolpur-santiniketan-in-the-district-of-birbhum-west-bengal-india-2HPGC21.jpg",
    },
    {
      name: "Gumghar",
      period: "18th Century",
      significance: "Ancient watchtower",
      image:
        "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2024/03/ksp_5542.jpg",
    },
    {
      name: "Radha Shyam Temple",
      period: "17th Century",
      significance: "Terracotta temple dedicated to Radha and Krishna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunHAp6st04cyNJJrm_026i7wi29f08q_cOw&s",
    },
    {
      name: "Kalachand Temple",
      period: "17th Century",
      significance: "Laterite stone temple with impressive architecture",
      image:
        "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2023/09/ksp_6426p6x3.jpg",
    },
  ];

  const hotels = [
    {
      name: "Hotel Bishnupur",
      category: "Mid-Range",
      rating: 4,
      price: "₹2000-4000",
      amenities: ["Restaurant", "Garden", "WiFi"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuOGVsPDksJrB1Q2wseRT-mHDyFI63vZv2g&s",
    },
    {
      name: "Annapurna Lodge",
      category: "Budget",
      rating: 3,
      price: "₹800-1500",
      amenities: ["Basic Rooms", "Local Food", "Parking"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAMEtF6B2uQvyTV0a0AYkUBtsaNlrbRg2ww&s",
    },
    {
      name: "Lemon Tree Hotel, Durgapur (Nearest major city)",
      category: "Luxury",
      rating: 4,
      price: "₹4000-7000",
      amenities: ["Pool", "Gym", "Multi-cuisine Restaurant"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpw5ebtHkMO-Pp_RPHILwdufwkavLVlpdqA&s",
    },
    {
      name: "Mallabhum Lodge",
      category: "Mid-Range",
      rating: 3,
      price: "₹1500-2500",
      amenities: ["Clean Rooms", "Attached Bath", "AC"],
      image: "https://images.unsplash.com/photo-1732347209042-9f9a59111165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9jYWwlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "WBTDC Tourist Lodge",
      category: "Budget",
      rating: 3,
      price: "₹1000-2000",
      amenities: ["Government Operated", "Restaurant", "Gardens"],
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/14/9c/cc/wbtdc-udayachal-tourist.jpg?w=700&h=-1&s=1",
    },
  ];

  const restaurants = [
    {
      name: "Terracotta Restaurant",
      cuisine: "Bengali Cuisine",
      rating: 4.2,
      priceRange: "₹₹",
      specialty: "Authentic local dishes and thalis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBQsWcy-YSiOWDZ4YeGitXsh51Yf4v-Zl8w&s",
    },
    {
      name: "Radhaballavi House",
      cuisine: "Snacks & Sweets",
      rating: 4.5,
      priceRange: "₹",
      specialty: "Famous for Radhaballavi and various Bengali sweets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVMPKFsqfYod3WBtnsxT_9835q2NHYhRdnQ&s",
    },
    {
      name: "Local Eateries near Temples",
      cuisine: "Street Food",
      rating: 4.0,
      priceRange: "₹",
      specialty: "Ghugni, Kochuri, and other local snacks",
      image:
        "https://b.zmtcdn.com/data/pictures/2/20784492/07614bee3d0246d1fe6410f681996f57_featured_v2.jpg",
    },
    {
      name: "Hotel Bishnupur Dining",
      cuisine: "Indian & Continental",
      rating: 4.1,
      priceRange: "₹₹₹",
      specialty: "Variety of dishes in a comfortable setting",
      image: "https://images.unsplash.com/photo-1742304882377-6e87b66f87ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwcmVzdHVyYW50fGVufDB8fDB8fHww",
    },
    {
      name: "Sweet Shops of Bishnupur",
      cuisine: "Sweets",
      rating: 4.6,
      priceRange: "₹",
      specialty: "Mihidana, Sitabhog, and other traditional Bengali sweets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuICkq5cea6pxmEHOmfuhIUI_LaBgjmyyag&s",
    },
  ];

  const galleryImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7Mz9LMucb4kEjQ9bTGYfejfyowXf02aKgg&s",
      alt: "Jor Bangla Temple",
    },
    {
      src: "https://i0.wp.com/bankuratourism.com/wp-content/uploads/2023/07/rasmancha-14.jpg?fit=1024%2C683&ssl=1",
      alt: "Rasmancha at dusk",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy69FCkkOnildmODOlvlQoPwrFpV2SjcSd2g&s",
      alt: "Terracotta art detail",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcd1hk809QItwSCxsmPt-sYwVHa0qnINNeSQ&s",
      alt: "Traditional Bishnupur saree",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dalmadol_Canon_of_Bishnupur_03.jpg/1200px-Dalmadol_Canon_of_Bishnupur_03.jpg",
      alt: "Dal Madol Cannon",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqQDeRaCFfhFUBj_2o53vC97EC4kEg6KSgw&s",
      alt: "Shyamrai Temple carvings",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmtkpRiG8Z6Zdoitkg3o1FS4nAoYhTeoNDw&s",
      alt: "Lalbandh Lake view",
    },
    {
      src: "https://media.assettype.com/outlooktraveller%2Fimport%2Fpublic%2Fuploads%2Ffilemanager%2Fimages%2FPt-Nag-Bishnupur.jfif",
      alt: "Bishnupur traditional music instrument",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Madan_Mohan_Temple_of_Bishnupur_District_of_West_Bengal.jpg",
      alt: "Madan Mohan Temple architecture",
    },
  ];

  const souvenirs = [
    {
      name: "Terracotta Horse",
      price: "₹150-500",
      description: "Famous Bankura horse in terracotta",
      image:
        "https://trovecraftindia.com/cdn/shop/files/Bankura_Horse_Small_06530df9-db14-46ef-8f73-e3c784809566.jpg?v=1746176951&width=1445",
    },
    {
      name: "Baluchari Saree",
      price: "₹3000-15000",
      description: "Traditional silk saree with mythological motifs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92pjaORZ0Xf0P2esKcadM7shBtrvR_fFwig&s",
    },
    {
      name: "Dokra Craft",
      price: "₹500-5000",
      description: "Metal craft from local artisans",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZgJ6mo46uIrt25uVi9iGLiMiEUClqwLEuw&s",
    },
    {
      name: "Bishnupur Silk",
      price: "₹500-2000",
      description: "Handloom silk products",
      image:
        "https://www.luxurionworld.com/cdn/shop/files/PS1P4PR423050805_Purple_Plain_Pure_Bishnupur_Silk_Saree_1.jpg?v=1683528038&width=1445",
    },
    {
      name: "Conch Shell Products",
      price: "₹100-1000",
      description: "Items made from conch shells, a local specialty",
      image:
        "https://www.poojaproducts.com/cdn/shop/products/ganeshashanghu.jpg?v=1620165855",
    },
    {
      name: "Local Sweets (Mihidana, Sitabhog)",
      price: "₹100-300",
      description: "Famous local sweet delicacies",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6haCmZm-FcKoSSKG2OM02hdg30J9VPWRYw&s",
    },
    {
      name: "Bishnupur Postcards",
      price: "₹20-50",
      description: "Postcards featuring Bishnupur's temples and art",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-DO7R4y_Fr2LmN_sO3zhvJthIu-UgzWwdg&s",
    },
    {
      name: "Handicraft Items",
      price: "₹100-800",
      description: "Various small handicraft items made by local artisans",
      image:
        "https://5.imimg.com/data5/CK/LC/GLADMIN-46377605/handicraft-items.png",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("attractions");

  const StarIcon = ({ filled = true }) => (
    <svg
      className={`w-4 h-4 ${
        filled ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ));
  };

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );

  const Badge = ({ children, variant = "default" }) => {
    const baseClasses =
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    const variants = {
      default: "bg-blue-100 text-blue-800",
      secondary: "bg-gray-100 text-gray-800",
      outline: "border border-gray-300 text-gray-700",
    };

    return (
      <span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
    );
  };

  const Button = ({
    children,
    variant = "default",
    size = "default",
    onClick,
    className = "",
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
      outline:
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    };
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      default: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[32rem] ">
        {" "}
        {/* better than h-100, which is not a valid Tailwind class */}
        <img
          src="https://images.unsplash.com/photo-1708706679975-6e54492f15bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlzaG51cHVyfGVufDB8MHwwfHx8Mg%3D%3D"
          alt="Bisnopur"
          className="w-full h-full object-cover text-3xl font-bold brightness-75 "
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 ">
          <div className="text-center text-gray-900 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl max-w-2xl  ">
            <h1 className="text-5xl font-semibold mb-4 tracking-tight">
              <span className="inline-block border-b-4 border-amber-400 pb-2">
                Bishnupur, West Bengal
              </span>
            </h1>
            <p className="text-lg mb-6 text-gray-700 italic shadow-md  opacity-90 mt-1">
              The city of Terracotta Temples awaits your discovery
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
              <p className="text-sm text-gray-600">West Bengal, India</p>
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
              <p className="text-sm text-gray-600">4.5/5</p>
            </div>
          </Card>
          <Card>
            <div className="p-4 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold">Language</h3>
              <p className="text-sm text-gray-600">Bengali, English, Hindi</p>
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
          <TabButton
            id="transport"
            label="Transport"
            isActive={activeTab === "transport"}
            onClick={setActiveTab}
          />
          <TabButton
            id="monuments"
            label="Monuments"
            isActive={activeTab === "monuments"}
            onClick={setActiveTab}
          />
          <TabButton
            id="hotels"
            label="Hotels"
            isActive={activeTab === "hotels"}
            onClick={setActiveTab}
          />
          <TabButton
            id="restaurants"
            label="Restaurants"
            isActive={activeTab === "restaurants"}
            onClick={setActiveTab}
          />
          <TabButton
            id="gallery"
            label="Gallery"
            isActive={activeTab === "gallery"}
            onClick={setActiveTab}
          />
          <TabButton
            id="souvenirs"
            label="Souvenirs"
            isActive={activeTab === "souvenirs"}
            onClick={setActiveTab}
          />
          <TabButton
            id="contact"
            label="Contact"
            isActive={activeTab === "contact"}
            onClick={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        {activeTab === "attractions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {attractions.map((attraction, index) => (
              <Card
                className="transition-transform hover:scale-105 hover:bg-gray-50"
                key={index}
              >
                <div className="relative">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover hoover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                    {attraction.price}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {attraction.description}
                  </p>
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
            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  ✈ By Air
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">
                      Netaji Subhas Chandra Bose International Airport (CCU)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Located in Kolkata, approximately 150 km from Bishnupur.
                      You can take a taxi or train from here.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚄 By Train
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">
                      Bishnupur Railway Station (VSU)
                    </h4>
                    <p className="text-sm text-gray-600">
                      Well-connected to major cities like Kolkata
                      (Howrah/Sealdah), Purulia, and Kharagpur.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Adra Junction</h4>
                    <p className="text-sm text-gray-600">
                      A major railway junction nearby, offering more train
                      connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚌 By Road
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Bus Network</h4>
                    <p className="text-sm text-gray-600">
                      Regular bus services from Kolkata (Esplanade), Durgapur,
                      Bankura, and other nearby towns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Private Cars/Taxis</h4>
                    <p className="text-sm text-gray-600">
                      Good road connectivity, allowing for comfortable travel by
                      private vehicle or hired taxi.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🚗 Local Transport
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">
                      Auto-rickshaws & Cycle-rickshaws
                    </h4>
                    <p className="text-sm text-gray-600">
                      Easily available for getting around within Bishnupur and
                      visiting the temples.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Taxis</h4>
                    <p className="text-sm text-gray-600">
                      Can be hired for local sightseeing or for longer
                      distances.
                    </p>
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
                key={index}
              >
                <img
                  src={monument.image}
                  alt={monument.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {monument.name}
                  </h3>
                  <Badge variant="outline" className="mb-2">
                    {monument.period}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    {monument.significance}
                  </p>
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
                className="transition-transform hover:scale-105 hover:bg-gray-50"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                    <div className="flex">{renderStars(hotel.rating)}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{hotel.category}</Badge>
                    <span className="text-sm font-semibold text-blue-600">
                      {hotel.price}
                    </span>
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
                key={index}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-lg font-bold text-blue-600">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <Badge variant="outline" className="mb-2">
                    {restaurant.cuisine}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.specialty}
                  </p>
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="text-sm font-semibold">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform hover:scale-105 hover:bg-gray-50">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    📷
                  </span>
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
                className="transition-transform hover:scale-105 hover:bg-gray-50"
              >
                <img
                  src={souvenir.image}
                  alt={souvenir.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{souvenir.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {souvenir.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">
                      {souvenir.price}
                    </span>
                    <Button size="sm">🛍 Buy</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Tourist Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-semibold">
                          Bankura District Tourism Office
                        </p>
                        <p className="text-sm text-gray-600">
                          +91 3242 250689 (General inquiry, may vary)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-gray-600">
                          (Specific email for Bishnupur tourism may not be
                          readily available, usually covered by district or
                          state tourism)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-gray-600">
                          www.wbtourismgov.in (West Bengal Tourism Development
                          Corporation)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Emergency Contacts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚨</span>
                      <div>
                        <p className="font-semibold">All Emergency Services</p>
                        <p className="text-sm text-gray-600">
                          112 (National Emergency Number, India)
                        </p>
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
                        <p className="font-semibold">
                          Ambulance/Medical Emergency
                        </p>
                        <p className="text-sm text-gray-600">102 / 108</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="transition-transform hover:scale-105 hover:bg-gray-50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Useful Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Currency</h4>
                    <p className="text-sm text-gray-600">Indian Rupee (₹)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Zone</h4>
                    <p className="text-sm text-gray-600">
                      Indian Standard Time (IST) - UTC+5:30
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Language</h4>
                    <p className="text-sm text-gray-600">
                      Bengali, Hindi (English understood in tourist-related
                      services)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Electricity</h4>
                    <p className="text-sm text-gray-600">
                      230V, 50Hz (Type C, D & M plugs)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default HiddenGemsBisnapur;