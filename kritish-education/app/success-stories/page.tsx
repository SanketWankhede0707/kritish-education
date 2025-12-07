import React from 'react';
import GoogleReviews from '@/components/GoogleReviews'; // Make sure this path matches where you saved the component
import StudentGallery from '@/components/StudentGallery';

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      
      {/* Title */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Success Stories
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          From visa applications to university halls.
        </p>
      </div>

      {/* 1. The Image Grid */}
      <StudentGallery /> 

      {/* 2. Divider Line (Optional) */}
      <div className="max-w-7xl mx-auto px-4"><hr className="border-gray-200"/></div>

      {/* 3. The Reviews */}
      <GoogleReviews />

    </main>
  );
}