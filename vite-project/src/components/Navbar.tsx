// components/Navbar.tsx
// This is the top navigation bar with search and menu items
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="GradGear Logo" />
        </Link>
        
        <div className="search-bar">
          <input type="text" placeholder="Search within in results?" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        <div className="nav-menu">
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/service" className="nav-link">Service</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/wishlist" className="nav-link wishlist-btn">Wishlist</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;