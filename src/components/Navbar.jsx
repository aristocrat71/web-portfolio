import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo">MyPortfolio</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
