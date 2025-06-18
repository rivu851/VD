"use client"

export function HotelCard({ hotel, onBookNow }) {
  return (
    <div className="border rounded-lg bg-white shadow-sm overflow-hidden transition-transform hover:scale-105 hover:bg-gray-50  border-e-gray-200 ">
      <div className="aspect-video relative overflow-hidden w-full h-50  object-cover">
        <img
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          className="h-full w-full object-cover transition-transform hover:scale-105 "
        />
        <div className="absolute top-2 right-2">
          <span className="bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            ⭐ {hotel.rating}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg leading-none">{hotel.name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-1">📍</span>
            {hotel.location}
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <p className="text-sm text-gray-500 line-clamp-2">{hotel.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="text-xs border px-2 py-1 rounded-full">
              {amenity}
            </span>
          ))}
          {hotel.amenities.length > 3 && (
            <span className="text-xs border px-2 py-1 rounded-full">+{hotel.amenities.length - 3} more</span>
          )}
        </div>
      </div>
      <div className="p-4 border-t flex items-center justify-between">
        <div>
          <span className="text-lg font-bold">Rs{hotel.price}</span>
          <span className="text-sm text-gray-500"> / night</span>
        </div>
        <button onClick={onBookNow} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  )
}

