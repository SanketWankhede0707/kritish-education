'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BookingModal from './BookingModal'; // <--- Import the new modal

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // NEW STATE: Controls the popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="navbar" className={isSticky ? "sticky" : ""}>
        <div className="container nav-container">
          <Link href="/" className="logo">
            <img src="/images/web-logo-final1.png" alt="Kritish Overseas Logo" className="logo-img" />
          </Link>
          
          <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`} id="nav-menu">
            <li><Link href="/#home" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
            <li><Link href="/#services" onClick={() => setIsMobileOpen(false)}>Services</Link></li>
            <li><Link href="/#destinations" onClick={() => setIsMobileOpen(false)}>Destinations</Link></li>
            <li><Link href="/#success-stories" onClick={() => setIsMobileOpen(false)}>Success Stories</Link></li>
            <li>
              <button 
                // Button Logic: Opens the modal
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileOpen(false);
                }}
                className="btn btn-primary trigger-modal !px-12 hover:!text-white flex items-center justify-center cursor-pointer"
              >
                Book Consultation
              </button>
            </li>
            
            <li className="mobile-only-socials" style={{ display: isMobileOpen ? 'block' : 'none' }}>
              <div className="mobile-socials flex gap-6">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </li>
          </ul>

          <div 
            className={`hamburger ${isMobileOpen ? 'active' : ''}`} 
            id="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      {/* RENDER THE MODAL HERE */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}