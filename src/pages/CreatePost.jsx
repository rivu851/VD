"use client"
import { useState, useCallback } from "react"
import { MapPin, Camera, Tag, Send, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/Button"
import { useAppContext } from "../context/AppContext"

const CreatePost = ({ onSubmit }) => {
  const {createCom , setCreateCom , currentcity , 
        setCurrentcity} = useAppContext();
  const [formData, setFormData] = useState({
    destination: "",
    title: "",
    content: "",
    category: "",
    tagInput: "",
    tags: [],
    photos: []
  })
  const categories = ["Beach", "Adventure", "Heritage", "Hill Station", "Wildlife", "Spiritual", "Urban", "Food"]
  const handleAddTag = () => {
    if (formData.tagInput.trim() && !formData.tags.includes(formData.tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.tagInput.trim()],
        tagInput: "",
      })
    }
  }
  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const handleImageChange = useCallback((e) => {
    if (e.target.files) {
      const validFiles = Array.from(e.target.files).filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!validTypes.includes(file.type)) {
          alert(`${file.name} is not a supported image type (JPEG, PNG, GIF only)`);
          return false;
        }
        
        if (file.size > maxSize) {
          alert(`${file.name} is too large (max 5MB)`);
          return false;
        }
        
        return true;
      });

      const filesArray = validFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file
      }));
      
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...filesArray]
      }));
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const validFiles = Array.from(e.dataTransfer.files).filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return validTypes.includes(file.type);
      });
      
      const filesArray = validFiles.map((file) => ({
        url: URL.createObjectURL(file),
        file
      }));
      
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...filesArray]
      }));
    }
  }, []);

  const removeImage = useCallback((index) => {
    setFormData(prev => {
      const newPhotos = [...prev.photos];
      newPhotos.splice(index, 1);
      return {
        ...prev,
        photos: newPhotos
      };
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.destination || !formData.title || !formData.content || !formData.category) {
      alert("Please fill in all required fields")
      return
    }

    const newPost = {
      author: {
        name: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Your Location",
      },
      destination: formData.destination,
      title: formData.title,
      content: formData.content,
      images: formData.photos.map(photo => photo.url),
      category: formData.category,
      date: "Just now",
      tags: formData.tags,
    }

    onSubmit(newPost)

    // Reset form
    setFormData({
      destination: "",
      title: "",
      content: "",
      category: "",
      tagInput: "",
      tags: [],
      photos: []
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Share Your Travel Experience</span>
          </CardTitle>
          <p className="text-gray-600">Help fellow travelers discover amazing destinations through your experiences</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Destination *
                </label>
                <Input
                  placeholder="e.g., Goa, India"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category *</label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select travel category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Experience Title *</label>
              <Input
                placeholder="Give your experience a catchy title..."
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Share Your Experience *</label>
              <Textarea
                placeholder="Tell us about your journey, what you discovered, tips for other travelers, memorable moments..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="min-h-[150px]"
                required
              />
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Camera className="w-4 h-4 mr-1" />
                Photos
              </label>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors duration-300"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label 
                  htmlFor="file-upload" 
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Choose Photos
                </label>
                <p className="text-gray-500 mt-2">Drag and drop or click to browse</p>
              </div>

              {/* Photo Previews */}
              {formData.photos.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-square">
                      <img
                        src={photo.url}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                Tags
              </label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Add tags (e.g., budget-travel, solo-trip)"
                  value={formData.tagInput}
                  onChange={(e) => setFormData({ ...formData, tagInput: e.target.value })}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                />
                <Button type="button" onClick={handleAddTag} variant="outline">
                  Add
                </Button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-gray-200"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      #{tag} <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
              <Button 
              
              type="submit" className="bg-blue-600 hover:bg-blue-700" >
                 <span onClick={()=>setCreateCom(false)}>
                  <Send className="w-4 h-4 mr-2" />
                Share Experience
                 </span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreatePost