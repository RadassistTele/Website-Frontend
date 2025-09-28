'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../../styles/navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          RadAssist
        </Link>
        
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
        
        <a href="#contact" className="navbar-cta">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;