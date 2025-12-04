'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070',
    title: 'Your Gateway to Free Education in Germany',
    subtitle: 'Expert guidance for Public Universities, Blocked Accounts & Visa.',
    btnText: 'Explore Services',
    link: '#services'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070',
    title: 'London is Calling September Intake',
    subtitle: 'Apply now to secure your scholarship at top universities.',
    btnText: 'Check Eligibility',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?q=80&w=2070',
    title: 'Crack IELTS/PTE with 8+ Bands',
    subtitle: 'Join our expert coaching classes today.',
    btnText: 'Join Class',
    link: '#'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic (Runs every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on page leave
  }, []);

  return (
    <section id="home" className="hero">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Overlay Gradient is handled by CSS ::before */}
          <div className="hero-content">
            <h1 className="hero-title">
              {/* This allows line breaks in titles */}
              {slide.title}
            </h1>
            <p className="hero-sub">{slide.subtitle}</p>
            <div className="hero-btn-wrap">
              <Link href={slide.link} className="btn btn-outline">
                {slide.btnText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}