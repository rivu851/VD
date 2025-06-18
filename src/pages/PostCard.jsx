"use client"

import { useState } from "react"
import { MessageCircle, Heart, Share2, MapPin, Calendar, MoreHorizontal } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Textarea } from "../components/ui/textarea"

const PostCard = ({ post, onLike }) => {
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState("")

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleComment = () => {
    if (newComment.trim()) {
      // In a real app, you'd send this to your backend
      console.log("New comment:", newComment)
      setNewComment("")
      setShowComments(true)
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.author.avatar } alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-gray-800">{post.author.name}</h4>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <MapPin className="w-3 h-3" />
                <span>{post.author.location}</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Destination and Category */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-blue-600">{post.destination}</span>
          </div>
          <Badge variant="secondary">{post.category}</Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed">{post.content}</p>

        {/* Images */}
        {post.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image }
                alt={`Travel photo ${index + 1}`}
                className="rounded-lg object-cover w-full h-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLike(post.id)}
              className={`flex items-center space-x-2 ${post.isLiked ? "text-red-500" : "text-gray-500"}`}
            >
              <Heart className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`} />
              <span>{post.likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-500"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-2 text-gray-500"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="space-y-4 pt-4 border-t">
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Share your thoughts about this experience..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button onClick={handleComment} size="sm">
                  Post Comment
                </Button>
              </div>
            </div>

            {/* Sample Comments */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h5 className="font-medium text-sm">John Doe</h5>
                    <p className="text-sm text-gray-600">
                      Amazing photos! I'm planning a similar trip next month. Any specific recommendations for
                      accommodation?
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                    <span>2 hours ago</span>
                    <button className="hover:text-blue-600">Reply</button>
                    <button className="hover:text-red-600">Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default PostCard
