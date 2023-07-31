import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>For Candidates</h3>
        <ul>
          <li>Candidate Sign Up</li>
          <li>Candidate FAQ</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>For Employers</h3>
        <ul>
          <li>Employer Sign Up</li>
          <li>Employer FAQ</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>COMPANY</h3>
        <ul>
          <li>Careers</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
