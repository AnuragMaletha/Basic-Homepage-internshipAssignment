
import React from 'react';
import './heroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to our Recruitment Page</h1>
        <i className='small'>Find the best talents for your company!</i>
        <button >Get Started</button>
        
      </div>
      
      <img className="img" src="https://imgtr.ee/images/2023/07/31/e6a19c26fccbac9c22ed4209ad9199f9.png" alt="" />
    </section>
  );
};

export default HeroSection;
