import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/originals/d3/9a/23/d39a23d8f19c6cda9412ee93e7bddc66.jpg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Twitter" />
        </a>
        <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
        </a>
      </div>
    </div>
  );
};

export default Contact;