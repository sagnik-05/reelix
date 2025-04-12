"use client"
import Link from "next/link"
import { Play, Home, Video,TrendingUp , Bookmark, Settings, Upload, Bell } from "lucide-react"
import { useState } from "react"

export default function Dashboard() {
  const [notifications] = useState([
    { id: 1, message: "Your video 'Summer Vibes' is trending!", time: "2h ago" },
    { id: 2, message: "New follower: @creativemind", time: "5h ago" },
  ])

  const [recentVideos] = useState([
    { id: 1, title: "Summer Vibes", views: "1.2K", likes: 234, duration: "0:30" },
    { id: 2, title: "City Lights", views: "856", likes: 156, duration: "0:45" },
    { id: 3, title: "Morning Routine", views: "2.1K", likes: 432, duration: "1:00" },
  ])

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-gray-100 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold text-white">Reelix</span>
          </Link>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-3 p-2 rounded-lg bg-gray-700">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/videos" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Video className="h-5 w-5" />
                <span>My Videos</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <TrendingUp className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Bookmark className="h-5 w-5" />
                <span>Saved</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative">
                <Bell className="h-6 w-6 text-gray-300" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-purple-500 rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <Link href="/upload"><span>Upload</span></Link>
                
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatsCard title="Total Views" value="45.2K" change="+12.3%" />
            <StatsCard title="Followers" value="2,845" change="+5.8%" />
            <StatsCard title="Engagement Rate" value="8.9%" change="+2.1%" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Videos */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Recent Videos</h2>
              <div className="space-y-4">
                {recentVideos.map((video) => (
                  <div key={video.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">{video.title}</h3>
                      <p className="text-sm text-gray-400">{video.views} views • {video.likes} likes</p>
                    </div>
                    <span className="text-sm text-gray-400">{video.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-gray-700 rounded-lg">
                    <p className="text-white">{notification.message}</p>
                    <p className="text-sm text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatsCard({ title, value, change }) {
  const isPositive = change.startsWith("+")
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-gray-400 font-medium">{title}</h3>
      <div className="flex items-baseline mt-2">
        <p className="text-2xl font-bold text-white">{value}</p>
        <span className={`ml-2 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
    </div>
  )
}