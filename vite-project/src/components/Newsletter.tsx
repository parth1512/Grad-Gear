// components/Newsletter.tsx
// The blue newsletter signup section
import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    // Reset form
    setEmail('');
    alert('Thank you for subscribing!');
  };
  
  return (
    <div className="newsletter-section">
      <h2 className="newsletter-title">TRY NOW AND GET BENEFITS</h2>
      <p className="newsletter-description">
        Subscribe to our newsletter and get the latest updates on the best laptop deals, 
        exclusive offers, and special coupon codes for extra discounts.
      </p>
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required 
        />
        <div className="newsletter-buttons">
          <button type="submit" className="get-started-btn">Get Started</button>
          <button type="button" className="learn-more-btn">Learn more</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;