'use client'; // This allows us to use interactivity (Clicking/Scrolling)

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 1. Handle Scroll Effect (Sticky Header)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header id="navbar" className={isSticky ? "sticky" : ""}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          {/* Ensure this image exists in your public/images folder */}
          <img src="/images/web-logo-final1.png" alt="Kritish Overseas Logo" className="logo-img" />
        </Link>
        
        {/* Desktop & Mobile Links */}
        <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`} id="nav-menu">
          <li><Link href="#home" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
          <li><Link href="#services" onClick={() => setIsMobileOpen(false)}>Services</Link></li>
          <li><Link href="#destinations" onClick={() => setIsMobileOpen(false)}>Destinations</Link></li>
          <li><Link href="#success-stories" onClick={() => setIsMobileOpen(false)}>Success Stories</Link></li>
          <li>
            <Link href="#" className="btn btn-primary trigger-modal" onClick={() => setIsMobileOpen(false)}>
              Book Consultation
            </Link>
          </li>
          
          {/* Mobile Only Socials (Only shows when menu is open) */}
          <li className="mobile-only-socials" style={{ display: isMobileOpen ? 'block' : 'none' }}>
            <div className="mobile-socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${isMobileOpen ? 'active' : ''}`} 
          id="mobile-toggle"
          onClick={toggleMenu}
        >
          {/* Logic to swap Bars to X icon */}
          <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
}