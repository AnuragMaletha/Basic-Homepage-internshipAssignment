import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <img className="logo" src="https://img.freepik.com/free-icon/diamond_318-195445.jpg" alt="sad" />
    <h3 className='title'>COURSIFY</h3>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        
      </ul>
      <div className='button'>
        <button className='btn'>Sign In</button>
        <button className='btn'>Hire</button>
      </div>
      
    </nav>
  );
};

export default Navbar;