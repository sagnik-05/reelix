"use client"
import { useState } from "react"
import LayoutWithSidebar from "../components/LayoutWithSidebar"

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
    <LayoutWithSidebar>
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
    </LayoutWithSidebar>
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