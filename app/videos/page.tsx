"use client";

import React, { useEffect, useState } from "react";
import VideoFeed from "../components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-client";
import LayoutWithSidebar from "../components/LayoutWithSidebar";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <LayoutWithSidebar>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">My Videos</h2>
            <div className="flex items-center space-x-2">
              <select className="bg-gray-700 text-white rounded-lg p-2 border border-gray-600">
                <option>Recent</option>
                <option>Most Viewed</option>
                <option>Most Liked</option>
              </select>
            </div>
          </div>
          <VideoFeed videos={videos} />
        </>
      )}
    </LayoutWithSidebar>
  );
}