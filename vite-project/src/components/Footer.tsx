// components/Footer.tsx
// The bottom section with logo and contact info
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src="/images/logo.png" alt="GradGear Logo" className="footer-logo" />
        <h2 className="footer-title">GRAD GEAR</h2>
      </div>
      
      <div className="footer-content">
        <div className="footer-section">
          <h3>Location to HQ</h3>
          <p>VIT Vellore L block 102G</p>
          <p>24x7 Service</p>
        </div>
        
        <div className="footer-section">
          <h3>Customer Support</h3>
          <p>Arnav : 9999999999</p>
          <p>Parth : 9898989898</p>
          <p>Samarth:9999999999</p>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/service">Service</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
      
      <div className="copyright">
        <p>© All Rights Reserved 2023</p>
      </div>
    </footer>
  );
};

export default Footer;