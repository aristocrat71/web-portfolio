import React, { useEffect, useState } from 'react';

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
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">//MyPortfolio</h1>
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
  );
};

export default Navbar;
