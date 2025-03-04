// components/Selection.tsx
// The "START YOUR JOURNEY" section with the blue button
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Selection.css';

const Selection: React.FC = () => {
  return (
    <div className="selection-section">
      <h2 className="selection-title">
        START YOUR JOURNEY OF THIS <span className="highlight">SELECTION</span> NOW
      </h2>
      <p className="selection-subtitle">
        Tailored recommendations based on your needs, budget, and goals.
      </p>
      
      <Link to="/start" className="start-button">
        Start NOW
      </Link>
      
      <p className="wishlist-note">
        already added my laptop to wishlist
      </p>
    </div>
  );
};

export default Selection;