// components/Services.js
import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className='service'>
          <img className="logo-1" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" alt="" />
          <div className="bold">STEP 1: COMPLETE PROFILE</div>
          <div>Once you are approved, we showcase you to leading Indian technology startups</div>
        </div>

        <div className='service'>
          <img className="logo-1"src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" alt="" />
          <div className="bold">STEP 2: RECEIVE JOB OFFERS</div>
          <div>Companies start sending interview requests. Talk to only the ones you like.</div>
        </div>

        <div className='service'>
          <img className="logo-1" src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" alt="" />
          <div className="bold">STEP 3: ACCEPT DREAM JOB</div>
          <div>Compare your offers and accept the best one. Hired!

</div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Services;
