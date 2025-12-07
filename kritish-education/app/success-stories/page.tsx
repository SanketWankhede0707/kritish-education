import React from 'react';
import GoogleReviews from '@/components/GoogleReviews'; // Make sure this path matches where you saved the component
import StudentGallery from '@/components/StudentGallery';
import VideoTestimonials from '@/components/VideoTestimonials';

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      
      {/* Compact "Magazine Style" Header */}
<div className="w-full bg-blend-multiply pt-28 pb-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Flex Container for alignment */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-6 border-b border-gray-100">
      
      {/* LEFT: Tight Title */}
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
          Success Stories
          {/* A small artistic gold dot */}
          <span className="text-yellow-400">.</span>
        </h1>
        <p className="mt-2 text-sm font-medium text-blue-900 uppercase tracking-widest">
          Hall of Fame
        </p>
      </div>

      {/* RIGHT: Small Image Cluster & Text */}
      <div className="flex items-center gap-4">
        
        {/* Tiny Avatar Group (The "Image" part, but small) */}
        <div className="flex -space-x-3">
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="" />
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="" />
          <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="" />
        </div>

        {/* Short Text */}
        <div className="hidden md:block text-right">
          <p className="text-sm text-gray-500 leading-tight">
            Join <span className="text-gray-900 font-bold">500+</span> students <br/>
            studying in Germany.
          </p>
        </div>

      </div>

    </div>
  </div>
</div>

      {/* 1. The Image Grid */}
      <StudentGallery /> 

      {/* 2. Divider Line (Optional) */}
      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200"/></div>

      {/* 3. The Reviews */}
      <GoogleReviews />
      <VideoTestimonials />

    </main>
  );
}