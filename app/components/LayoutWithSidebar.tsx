"use client";
import Link from "next/link";
import {
  Play,
  Home,
  Video,
  TrendingUp,
  Bookmark,
  Settings,
  Upload,
  Bell,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function LayoutWithSidebar({ children }) {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

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
              <Link
                href="/dashboard"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive("/dashboard") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive("/videos") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <Video className="h-5 w-5" />
                <span>My Videos</span>
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive("/analytics") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <TrendingUp className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link
                href="/saved"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive("/saved") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <Bookmark className="h-5 w-5" />
                <span>Saved</span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive("/settings") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
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
            <h1 className="text-2xl font-bold text-white">
              {pathname === "/dashboard" && "Dashboard"}
              {pathname === "/videos" && "My Videos"}
              {pathname === "/analytics" && "Analytics"}
              {pathname === "/saved" && "Saved"}
              {pathname === "/settings" && "Settings"}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative">
                <Bell className="h-6 w-6 text-gray-300" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-purple-500 rounded-full text-xs flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <Link href="/upload">
                  <span>Upload</span>
                </Link>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
