"use client"
import { useState } from "react"
import { Calendar, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
// Sample location details (in a real app, this would come from an API or database)
const locationDetails = {
  // Sea locations
  Digha: {
    description: "Digha is a seaside resort town in the state of West Bengal, known for its beaches and scenic beauty.",
    bestTime: "October to March",
    attractions: ["Digha Beach", "Marine Aquarium", "Amarabati Park", "Digha Science Centre"],
    image: "https://images.unsplash.com/photo-1605853166869-7967373db45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaGF8ZW58MHx8MHx8fDA%3D",
  },
  Puri: {
    description:
      "Puri is a coastal city and a holy pilgrimage site famous for Jagannath Temple and its beautiful beaches.",
    bestTime: "October to February",
    attractions: ["Puri Beach", "Jagannath Temple", "Chilika Lake", "Konark Sun Temple"],
    image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Hilly locations
  Darjeeling: {
    description:
      "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills, known for its tea plantations.",
    bestTime: "March to May, September to November",
    attractions: ["Tiger Hill", "Darjeeling Himalayan Railway", "Tea Gardens", "Batasia Loop"],
    image: "https://images.unsplash.com/photo-1637737118663-f1a53ee1d5a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  Shimla: {
    description:
      "Shimla is the capital of Himachal Pradesh and a popular hill station known for its Victorian architecture.",
    bestTime: "March to June, September to November",
    attractions: ["The Ridge", "Mall Road", "Jakhu Temple", "Christ Church"],
    image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpbWxhfGVufDB8fDB8fHww",
  },

  // Default for other locations
  Mirik: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1748073938330-8074ea382091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pcmlrfGVufDB8fDB8fHww",
  },
   Kalimpong: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1589082675045-34b979730940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FsaW1wb25nfGVufDB8fDB8fHww",
  },
     Kurseong: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://plus.unsplash.com/premium_photo-1697729890503-bcb24e606a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3Vyc2Vvbmd8ZW58MHx8MHx8fDA%3D",
  },
     Manali: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww",
  },
     Dharamshala: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGhhcmFtc2hhbGF8ZW58MHx8MHx8fDA%3D",
  },
     default: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "/placeholder.svg?height=200&width=300",
  },
     Dalhousie: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1580633268691-192c868c83eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFsaG91c2llfGVufDB8fDB8fHww",
  },
     Mandarmani: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1633714972458-5c968de4bb19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZGFybWFuaXxlbnwwfHwwfHx8MA%3D%3D",
  },
     Tajpur: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1656087476770-2a7427deff63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqcHVyfGVufDB8fDB8fHww",
  },
     Bakkhali: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1573197423872-5a8daf3e74e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFra2hhbGl8ZW58MHx8MHx8fDA%3D",
  },
     Gopalpur: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1729534386763-ab9d871e2fe1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29wYWxwdXJ8ZW58MHx8MHx8fDA%3D",
  },
     Chandipur: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://images.unsplash.com/photo-1696022907860-7f54474c495a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbmRpcHVyfGVufDB8fDB8fHww",
  },
     Konark: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "https://i.pinimg.com/736x/f8/a2/5f/f8a25f0f22e513ced3fc49ff033aa4c4.jpg",
  },
     default: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "/placeholder.svg?height=200&width=300",
  },
     default: {
    description: "Discover the unique beauty and culture of this destination.",
    bestTime: "Varies by season",
    attractions: ["Local sightseeing", "Cultural experiences", "Natural beauty", "Local cuisine"],
    image: "/placeholder.svg?height=200&width=300",
  },
}

export function LocationList({ locations, state, region }) {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const navigate = useNavigate();

  const getLocationDetails = (location) => {
    return locationDetails[location] || locationDetails.default
  }
  const handleLocationClick = (location) => {
    setSelectedLocation(location)
    console.log(location)
    if(location == "Digha") {
      navigate('/digha');
      console.log("moved to digha ")
    }
  }
  const handleCloseDetails = () => {
    setSelectedLocation(null)
  }

  return (
    <div>
      {selectedLocation ? (
        <LocationDetails
          location={selectedLocation}
          details={getLocationDetails(selectedLocation)}
          state={state}
          region={region}
          onClose={handleCloseDetails}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => {
            const details = getLocationDetails(location)
            return (
              <div
                key={location}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white  "
                onClick={() => handleLocationClick(location)}
              >
                <div className="relative h-40 w-full">
                  <img
                    src={details.image || "/placeholder.svg?height=200&width=300"}
                    alt={location}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{location}</h3>
                    <p className="text-sm">{state}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 line-clamp-2 mb-4">{details.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Best time: {details.bestTime}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
function LocationDetails({ location, details, state, region, onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <img
          src={details.image || "/placeholder.svg?height=400&width=800"}
          alt={location}
          className="object-cover w-full h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 p-1 rounded-full hover:bg-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
          <h2 className="text-3xl font-bold">{location}</h2>
          <p className="text-lg">
            {state} - {region} Region
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-700">{details.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
          <div className="flex items-center text-gray-700">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{details.bestTime}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Top Attractions</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {details.attractions.map((attraction) => (
              <li key={attraction}>{attraction}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <button 
          onClick={handleLocationClick(location)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  )
}
