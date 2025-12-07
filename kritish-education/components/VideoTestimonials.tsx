"use client";

import React, { useState } from 'react';

// --- Configuration ---
interface Video {
  id: number;
  youtubeId: string; // The ID from the YouTube URL (e.g. dQw4w9WgXcQ)
  thumbnail: string;
  title: string;
  student: string;
  duration: string;
}

const VIDEOS: Video[] = [
  {
    id: 1,
    youtubeId: "LXb3EKWsInQ", // Replace with real ID
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    title: "How I got my Visa in 2 weeks",
    student: "Rohan's Journey",
    duration: "4:20"
  },
  {
    id: 2,
    youtubeId: "dummy_id_2", 
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    title: "Cost of Living in Munich",
    student: "Priya Explains",
    duration: "6:15"
  },
  {
    id: 3,
    youtubeId: "dummy_id_3",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    title: "My First Week at University",
    student: "Team Discussion",
    duration: "12:00"
  }
];

export default function VideoTestimonials() {
  // Track which video is currently playing
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Watch Their Stories</h2>
            <p className="mt-2 text-gray-500">Candid conversations with our alumni.</p>
          </div>
          
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group">
            Visit our YouTube Channel
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-black group"
            >
              {playingId === video.id ? (
                // 1. ACTIVE YOUTUBE PLAYER
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // 2. PREMIUM THUMBNAIL FACADE (Click to Play)
                <div 
                  onClick={() => setPlayingId(video.id)}
                  className="cursor-pointer w-full h-full relative"
                >
                  {/* Image */}
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Play Button Center */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* FROSTED GLASS INFO BAR (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                      <h3 className="text-white font-bold text-sm truncate pr-2">
                        {video.title}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-200 text-xs font-medium">{video.student}</span>
                        <span className="bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-md font-medium tracking-wide">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}