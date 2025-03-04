// pages/HomePage.tsx
// This file contains the main content shown in the image
import React from 'react';
import Hero from '../components/Hero';
import Selection from '../components/Selection';
import HowItWorks from '../components/HowItWorks';
import ShopSmart from '../components/ShopSmart';
import Newsletter from '../components/Newsletter';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Selection />
      <div className="brand-logos">
        <img src="/images/hp.png" alt="HP" />
        <img src="/images/acer.png" alt="Acer" />
        <img src="/images/msi.png" alt="MSI" />
        <img src="/images/samsung.png" alt="Samsung" />
        <img src="/images/lenovo.png" alt="Lenovo" />
        <img src="/images/asus.png" alt="Asus" />
        <img src="/images/dell.png" alt="Dell" />
      </div>
      <HowItWorks />
      <ShopSmart />
      <Newsletter />
    </div>
  );
};

export default HomePage;