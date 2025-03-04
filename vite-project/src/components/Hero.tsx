// components/Hero.tsx
// This is the hero banner with the "GRAD GEAR" heading
import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Struggling with your <span className="highlight">laptop</span> selections?</h2>
        <h1 className="grad-gear-title">
        <span className="main-title">Join</span>
          <span className="main-title">GRAD GEAR</span>
          <span className="subtitle">NOW NOW NOW</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;