"use client"
import { MapPin } from "lucide-react"

export function RegionCategory({ name, image, description, stateCount, onClick }) {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer  border border-black rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-blue-500"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <img src={image } alt={`${name} destinations`} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            {stateCount} states
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
