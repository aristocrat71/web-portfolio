import React, { useEffect, useState } from 'react';
import './StickyNavbar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Exp' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Connect' },
];

const StickyNavbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      // Determine active section
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec && window.scrollY + 100 >= sec.offsetTop) {
          setActive(sections[i].id);
          found = true;
          break;
        }
      }
      if (!found) setActive('home');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky-navbar">
      {sections.map((sec) => (
        <button
          key={sec.id}
          className={`sticky-nav-btn${active === sec.id ? ' active' : ''}`}
          onClick={() => handleNavClick(sec.id)}
        >
          {sec.label}
        </button>
      ))}
    </nav>
  );
};

export default StickyNavbar; 