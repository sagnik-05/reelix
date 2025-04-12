"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useNotification } from "./Notification";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { apiClient } from "@/lib/api-client";
import FileUpload from "./FileUpload";

interface VideoFormData {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoUploadForm() {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<VideoFormData>({
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
    },
    mode: "onChange"
  });

  const videoUrl = watch("videoUrl");

  const handleUploadSuccess = (res: IKUploadResponse) => {
    setValue("videoUrl", res.filePath);
    setValue("thumbnailUrl", res.thumbnailUrl || res.filePath);
    showNotification("Video uploaded successfully!", "success");
  };

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
  };

  const onSubmit = async (data: VideoFormData) => {
    if (!data.videoUrl) {
      showNotification("Please upload a video first", "error");
      return;
    }

    setLoading(true);
    try {
      await apiClient.createVideo(data);
      showNotification("Video published successfully!", "success");

      // Reset form
      setValue("title", "");
      setValue("description", "");
      setValue("videoUrl", "");
      setValue("thumbnailUrl", "");
      setUploadProgress(0);
    } catch (err) {
      showNotification(
        err instanceof Error ? err.message : "Failed to publish video",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-[#111827] text-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">Upload New Video</h2>

        <div>
          <label className="block mb-1 text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full bg-[#1F2937] border border-[#374151] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Enter video title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            className="w-full bg-[#1F2937] border border-[#374151] rounded-lg px-4 py-2 h-24 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Write a short description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Upload Video</label>
          <FileUpload
            fileType="video"
            onSuccess={handleUploadSuccess}
            onProgress={handleUploadProgress}
          />
          {uploadProgress > 0 && (
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-3">
              <div
                className="bg-purple-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || (!videoUrl && !isValid)}
          className={`w-full flex justify-center items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            loading || (!videoUrl && !isValid)
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Publishing...
            </>
          ) : (
            "Publish Video"
          )}
        </button>
      </form>
    </div>
  );
}
