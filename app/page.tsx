import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
// import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import '../styles/page.scss';
import '../styles/particlesbg.scss';
import Services from './components/Services/services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ParticlesComponent from './components/particles/particles';

const page = () => {
  return (
    <>
     
      <div className="main-container">
         <div className="particles-bg">
        <ParticlesComponent id="tsparticles-bg" />
      </div>
        <Navbar />
        {/* First Section with Gradient Background */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1>RadAssist Teleradiology</h1>
              <p>Advanced AI-powered radiology solutions for healthcare professionals</p>
              <button className="cta-button">Get Started</button>
            </div>
            <div className="hero-image"   style={{"zIndex": 40}}>
              <Image 
                src="/ImageAssets/landingPageImage.png" 
                alt="RadAssist Teleradiology Solutions" 
                className="landing-image"
              
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
          {/* Wavy divider */}
          <div className="wavy-divider">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="wave-svg"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C150,120 350,0 600,60 C750,90 900,30 1200,60 L1200,120 L0,120 Z"
                fill="url(#waveGradient)"
                className="wave-path-1"
              />
              <path
                d="M0,80 C200,140 400,20 800,80 C950,110 1100,50 1200,80 L1200,120 L0,120 Z"
                fill="#ffffff"
                className="wave-path-2"
                style={{opacity: 0.7}}
              />
            </svg>
          </div>
        </section>
        <Services />
        <WhyChooseUs />
        {/* Under Construction Section */}
        {/* <UnderConstruction /> */}
      </div>
    </>
  );
};

export default page;