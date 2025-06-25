import React, { useEffect, useState } from 'react';
import owlLogo from '../assets/owl-logo.png';
import catLogo from '../assets/cat-logo.png';
import letterM from '../assets/newM.png';
import '../styles/navbar.css';

const Navbar = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <span><img src={letterM} alt="Owl Logo" height={60} width={60}></img></span>
        <ul className="nav-links">
          {showTop && (
            <li>
              <a className="nav-button" id="top-nav" href="#">
                Top
              </a>
            </li>
          )}
          <li><a className="nav-button" href="#about">About</a></li>
          <li><a className="nav-button" href="#projects">Projects</a></li>
          <li><a className="nav-button" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div className="bleed-edge-navbar"></div>
    </>
  );
};

export default Navbar;
