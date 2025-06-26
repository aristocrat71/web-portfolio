import React, { useState, useEffect, useRef } from 'react';
import './MasonryCluster.css';
import githubIcon from '../assets/github_new.png';
import linkedinIcon from '../assets/linkedin_new.png';
import pinIcon from '../assets/pin.png';

const GLOW_RADIUS = 80;

const blockKeys = [
  'github', 'hi', 'location', 'empty-top-right',
  'linkedin', 'empty-left-middle', 'developer',
  'connect', 'about', 'experience', 'projects', 'empty-bottom-right'
];

const blockSelectors = [
  '.github-block', '.hi-block', '.location-block', '.linkedin-block',
  '.developer-block', '.connect-block', '.about-block', '.experience-block', '.projects-block'
];

const MasonryCluster = () => {
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);
  const [glowIndexes, setGlowIndexes] = useState([]);

  useEffect(() => {
    function handleMouseMove(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    function handleMouseLeave() {
      setCursor({ x: -1000, y: -1000 });
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const blocks = containerRef.current.querySelectorAll('.block');
    const newGlow = [];
    blocks.forEach((block, idx) => {
      if (block.classList.contains('empty-top-right') || block.classList.contains('empty-left-middle') || block.classList.contains('empty-bottom-right')) return;
      const rect = block.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((cx - cursor.x) ** 2 + (cy - cursor.y) ** 2);
      if (dist < GLOW_RADIUS) newGlow.push(idx);
    });
    setGlowIndexes(newGlow);
  }, [cursor]);

  return (
    <div className="figma-container">
      <div className="grid-layout" ref={containerRef}>
        {/* GitHub icon block (hyperlinked) */}
        <a className={`block github-block${glowIndexes.includes(0) ? ' glow-near-cursor' : ''}`} href="https://github.com/aristocrat71" target="_blank" rel="noopener noreferrer">
          <div className="github-icon">
            <img src={githubIcon} alt="GitHub" style={{ width: 44, height: 44 }} />
          </div>
        </a>
        {/* Hi There block */}
        <div className={`block hi-block${glowIndexes.includes(1) ? ' glow-near-cursor' : ''}`}>
          <div className="hi-text">
            <div>Hi There !</div>
            <div>I am Mitul Sheth.</div>
          </div>
        </div>
        {/* Location block (hyperlinked) */}
        <a className={`block location-block${glowIndexes.includes(2) ? ' glow-near-cursor' : ''}`} href="https://maps.app.goo.gl/12gnHwGSMFruFg9H6" target="_blank" rel="noopener noreferrer">
          <div className="location-icon">
            <img src={pinIcon} alt="Location" style={{ width: 31, height: 31 }} />
          </div>
          <div className="location-text">
            <div>Pune</div>
            <div>India</div>
          </div>
        </a>
        {/* Empty block top right */}
        <div className="block empty-top-right"></div>
        {/* LinkedIn block (hyperlinked) */}
        <a className={`block linkedin-block${glowIndexes.includes(4) ? ' glow-near-cursor' : ''}`} href="https://www.linkedin.com/in/mitul-sheth71/" target="_blank" rel="noopener noreferrer">
          <div className="linkedin-icon">
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: 44, height: 44 }} />
          </div>
        </a>
        {/* Empty block left middle */}
        <div className="block empty-left-middle"></div>
        {/* Software Developer block */}
        <div className={`block developer-block${glowIndexes.includes(6) ? ' glow-near-cursor' : ''}`}>
          <div className="developer-text">
            <div>Software Developer</div>
            <div>//Data Science</div>
          </div>
        </div>
        {/* Let's Connect block (hyperlinked) */}
        <a className={`block connect-block${glowIndexes.includes(7) ? ' glow-near-cursor' : ''}`} href="#contact">
          <div className="connect-text">Let's Connect</div>
        </a>
        {/* Experience block (hyperlinked) */}
        <a className={`block experience-block${glowIndexes.includes(9) ? ' glow-near-cursor' : ''}`} href="#experience">
          <div className="experience-text">Work Experience</div>
        </a>
        {/* About block (hyperlinked) */}
        <a className={`block about-block${glowIndexes.includes(8) ? ' glow-near-cursor' : ''}`} href="#about">
          <div className="about-text">About Me</div>
        </a>
        {/* Projects block (hyperlinked) */}
        <a className={`block projects-block${glowIndexes.includes(10) ? ' glow-near-cursor' : ''}`} href="#projects">
          <div className="projects-text">Projects</div>
        </a>
        {/* Empty block bottom right */}
        <div className="block empty-bottom-right"></div>
      </div>
    </div>
  );
};

export default MasonryCluster; 