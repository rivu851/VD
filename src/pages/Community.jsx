"use client"

import { useState } from "react"
import { Users, Plus, Search } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import PostCard from "../pages/PostCard"
import CreatePost from "../pages/CreatePost"
import CommunityStats from "./CommunityStats"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"
import { useTranslation } from "react-i18next"

const Community = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("feed")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { createCom, setCreateCom } = useAppContext();
  const naviagte = useNavigate();

  // Sample data - in real app, this would come from your backend
  const [posts, setPosts] = useState([
    {
      id: "1",
      author: {
        name: t('community.posts.sarah.name'),
        avatar: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        location: t('community.posts.sarah.location'),
      },
      destination: t('community.posts.sarah.destination'),
      title: t('community.posts.sarah.title'),
      content: t('community.posts.sarah.content'),
      images: ["https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1606203627178-c7bec545dff1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvYSUyMGJlYWNofGVufDB8fDB8fHww", "https://plus.unsplash.com/premium_photo-1666286956135-0fb603dad5cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvYSUyMGJlYWNofGVufDB8fDB8fHww"],
      category: t('community.categories.beach'),
      date: t('community.timeAgo.days', { count: 2 }),
      likes: 24,
      comments: 8,
      tags: [t('community.tags.beach'), t('community.tags.hiddenGems'), t('community.tags.seafood'), t('community.tags.sunset')],
      isLiked: false,
    },
    {
      id: "2",
      author: {
        name: t('community.posts.raj.name'),
        avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        location: t('community.posts.raj.location'),
      },
      destination: t('community.posts.raj.destination'),
      title: t('community.posts.raj.title'),
      content: t('community.posts.raj.content'),
      images: ["https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFkYWtofGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8fDB8fHww"],
      category: t('community.categories.adventure'),
      date: t('community.timeAgo.week', { count: 1 }),
      likes: 45,
      comments: 12,
      tags: [t('community.tags.soloTravel'), t('community.tags.adventure'), t('community.tags.mountains'), t('community.tags.biking')],
      isLiked: true,
    },
    {
      id: "3",
      author: {
        name: t('community.posts.priya.name'),
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        location: t('community.posts.priya.location'),
      },
      destination: t('community.posts.priya.destination'),
      title: t('community.posts.priya.title'),
      content: t('community.posts.priya.content'),
      images: ["https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFufGVufDB8fDB8fHww"],
      category: t('community.categories.heritage'),
      date: t('community.timeAgo.days', { count: 3 }),
      likes: 32,
      comments: 15,
      tags: [t('community.tags.heritage'), t('community.tags.culture'), t('community.tags.familyTrip'), t('community.tags.palaces')],
      isLiked: false,
    },
  ])

  const categories = [
    t('community.categories.all'),
    t('community.categories.beach'),
    t('community.categories.adventure'),
    t('community.categories.heritage'),
    t('community.categories.hillStation'),
    t('community.categories.wildlife'),
    t('community.categories.spiritual')
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === t('community.categories.all') || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post,
      ),
    )
  }

  const handleNewPost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now().toString(),
      likes: 0,
      comments: 0,
      isLiked: false,
    }
    setPosts([post, ...posts])
    setActiveTab("feed")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('community.title')}</h1>
          <p className="text-gray-600 text-lg">
            {t('community.subtitle')}
          </p>
        </div>
        {/*Community Stats*/}
        <CommunityStats />
        {/* Navigation Tabs*/}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <Button
              variant={activeTab === "feed" ? "default" : "ghost"}
              onClick={() => setActiveTab("feed")}
              className="px-6 py-2"
            >
              <Users className="w-4 h-4 mr-2" />
              {t('community.tabs.feed')}
            </Button>
            <Button
              variant={activeTab === "create" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("create");
                setCreateCom(true);
              }}
              className="px-6 py-2"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t('community.tabs.share')}
            </Button>
          </div>
        </div>
        {activeTab === "feed" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <h3 className="font-semibold text-gray-800">{t('community.filters.title')}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder={t('community.filters.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">{t('community.filters.categories')}</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="w-full justify-start"
                        >
                          {category === t('community.categories.all') ? t('community.filters.allPosts') : category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">{t('community.filters.popularTags')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t('community.tags.hiddenGems'),
                        t('community.tags.soloTravel'),
                        t('community.tags.familyTrip'),
                        t('community.tags.adventure'),
                        t('community.tags.budgetTravel')
                      ].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => <PostCard key={post.id} post={post} onLike={handleLike} />)
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <div className="text-gray-500">
                        <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-medium mb-2">{t('community.noPosts.title')}</h3>
                        <p>{t('community.noPosts.message')}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        ) : (
          <CreatePost onSubmit={handleNewPost} />
        )}
      </div>
    </div>
  )
}

export default Community