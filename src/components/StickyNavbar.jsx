import React, { useEffect, useState } from 'react';
import './StickyNavbar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Work' },
  { id: 'contact', label: 'Connect' },
];

const StickyNavbar = () => {
  const [active, setActive] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      
      // Check if we should show the navbar (when about section starts)
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutOffset = aboutSection.offsetTop;
        const shouldShow = window.scrollY >= aboutOffset - 100; // Show 100px before about section
        setIsVisible(shouldShow);
      }
      
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
    <nav className={`sticky-navbar ${isVisible ? 'visible' : ''}`}>
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