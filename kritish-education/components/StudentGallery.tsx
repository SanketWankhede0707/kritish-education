"use client";

import React, { useState, MouseEvent } from 'react';

// --- Configuration ---
interface GalleryItem {
  id: number;
  src: string;
  student: string;
  university: string;
  span: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    // FIX: Swapped broken image for a reliable one
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    student: "Amit Verma",
    university: "TU Munich",
    span: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&auto=format&fit=crop",
    student: "Rahul Mehta",
    university: "Berlin",
    span: "col-span-1 row-span-2"
  },
  // ... (Keep the rest of your items the same) ...
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=600&auto=format&fit=crop",
    student: "Anjali Gupta",
    university: "Heidelberg",
    span: "col-span-2 row-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop",
    student: "Vikram Rao",
    university: "Hamburg",
    span: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=400&auto=format&fit=crop",
    student: "Priya Singh",
    university: "RWTH Aachen",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=600&auto=format&fit=crop",
    student: "Neha Sharma",
    university: "Frankfurt",
    span: "col-span-2 row-span-1"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=400&auto=format&fit=crop",
    student: "Arjun Das",
    university: "Stuttgart",
    span: "col-span-1 row-span-2"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517256673644-36ad113fa422?q=80&w=400&auto=format&fit=crop",
    student: "Kavita Roy",
    university: "Dresden",
    span: "col-span-1 row-span-1"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    student: "Sameer Khan",
    university: "Bonn",
    span: "col-span-2 row-span-2"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
    student: "Meera Iyer",
    university: "Leipzig",
    span: "col-span-1 row-span-1"
  }
];

export default function StudentGallery() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    // CHANGE 1: Reduced top padding (py-20 -> pt-4 pb-20) to remove the gap
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-4 pb-20 bg-white overflow-hidden group cursor-pointer"
    >
      
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: opacity,
          background: `
            radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(255, 166, 0, 0.15), 
              transparent 40%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGE 2: REMOVED THE TEXT TITLE HERE. 
           It was redundant because the Header already introduces the section. */}

        {/* ARTISTIC GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 grid-flow-dense">
          
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`
                ${index >= 6 && !showAll ? 'hidden md:block' : ''} 
                group/item relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${item.span}
              `}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.student}
                className="h-full w-full object-cover transition-transform duration-700 group-hover/item:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 p-5 w-full translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 opacity-0 group-hover/item:opacity-100">
                <p className="text-white font-bold text-lg">{item.student}</p>
                <p className="text-yellow-300 text-sm font-medium">{item.university}</p>
              </div>
            </div>
          ))}

        </div>

        {/* VIEW ALL BUTTON (Mobile Only) */}
        {!showAll && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-full text-blue-900 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              View All Photos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}