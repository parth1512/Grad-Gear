// components/ShopSmart.tsx
// The "SHOP SMART SHOP TRUSTED" section with two options
import React from 'react';
import '../styles/ShopSmart.css';

interface ShopOptionProps {
  title: string;
  description: string[];
}

const ShopOption: React.FC<ShopOptionProps> = ({ title, description }) => {
  return (
    <div className="shop-option">
      <h3 className="shop-option-title">{title}</h3>
      {description.map((paragraph, index) => (
        <p key={index} className="shop-option-description">{paragraph}</p>
      ))}
    </div>
  );
};

const ShopSmart: React.FC = () => {
  return (
    <div className="shop-smart-section">
      <h2 className="shop-smart-title">
        SHOP SMART
        <span className="highlight">SHOP TRUSTED</span>
      </h2>
      <p className="shop-smart-subtitle">
        Your One-Stop Laptop Shopping Experience
      </p>
      <p className="shop-smart-description">
        We understand the importance of getting the right laptop for your needs,
        and that's why we offer two options to make sure you're making an informed decision.
      </p>
      
      <div className="shop-options-container">
        <ShopOption 
          title="Redirect to Trusted Online Platforms:"
          description={[
            "Be directed to well-known and secure e-commerce websites like Amazon, Flipkart, etc.",
            "Our partners are carefully selected to guarantee a smooth, safe, and genuine shopping experience.",
            "No more guesswork—just reliable options at your fingertips."
          ]}
        />
        
        <ShopOption 
          title="Find Local Vendors Near You:"
          description={[
            "Sometimes, nothing beats the feel of seeing and testing the laptop in person.",
            "Our GPS-enabled tool will show you the nearest local vendors who have the specific model you're interested in.",
            "You can check out the laptop's design, features, and performance, and even make a purchase on the spot from a trusted store near you."
          ]}
        />
      </div>
    </div>
  );
};

export default ShopSmart;