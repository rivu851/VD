import { Users, MapPin, MessageCircle, Heart } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Travelers",
      value: "12,450",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      label: "Destinations Shared",
      value: "2,340",
      color: "text-green-600",
    },
    {
      icon: MessageCircle,
      label: "Travel Stories",
      value: "8,920",
      color: "text-purple-600",
    },
    {
      icon: Heart,
      label: "Community Likes",
      value: "45,670",
      color: "text-red-600",
    },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center hover:shadow-md transition-shadow">
          <CardContent className="p-6 mt-4">
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CommunityStats
