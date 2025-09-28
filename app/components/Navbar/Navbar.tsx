'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../../styles/navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
          RadAssist
        </Link>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
          <li className="navbar-item">
            <Link href="/join-us" className="navbar-link">Join Us</Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-menu-items">
            <li>
              <a href="#home" onClick={closeMobileMenu}>Home</a>
            </li>
            <li>
              <a href="#services" onClick={closeMobileMenu}>Services</a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </li>
            <li>
              <Link href="/join-us" onClick={closeMobileMenu}>Join Us</Link>
            </li>
            <li>
              <a href="#contact" className="mobile-cta" onClick={closeMobileMenu}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
        
        <a href="#contact" className="navbar-cta desktop-only">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;