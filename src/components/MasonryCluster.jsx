import React from 'react';
import './MasonryCluster.css';

const MasonryCluster = () => {
  return (
    <div className="figma-container">
      <div className="grid-layout">
        {/* GitHub icon block (hyperlinked) */}
        <a className="block github-block" href="https://github.com/aristocrat71" target="_blank" rel="noopener noreferrer">
          <div className="github-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        </a>
        {/* Hi There block */}
        <div className="block hi-block">
          <div className="hi-text">
            <div>Hi There !</div>
            <div>I am Mitul Sheth.</div>
          </div>
        </div>
        {/* Location block (hyperlinked) */}
        <a className="block location-block" href="https://maps.app.goo.gl/12gnHwGSMFruFg9H6" target="_blank" rel="noopener noreferrer">
          <div className="location-icon">📍</div>
          <div className="location-text">
            <div>Pune</div>
            <div>India</div>
          </div>
        </a>
        {/* Empty block top right */}
        <div className="block empty-top-right"></div>
        {/* LinkedIn block (hyperlinked) */}
        <a className="block linkedin-block" href="https://www.linkedin.com/in/mitul-sheth71/" target="_blank" rel="noopener noreferrer">
          <div className="linkedin-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </a>
        {/* Empty block left middle */}
        <div className="block empty-left-middle"></div>
        {/* Software Developer block */}
        <div className="block developer-block">
          <div className="developer-text">
            <div>Software Developer</div>
            <div>//Data Science</div>
          </div>
        </div>
        {/* Let's Connect block (hyperlinked) */}
        <a className="block connect-block" href="#contact">
          <div className="connect-text">Let's Connect</div>
        </a>
        {/* About me block (hyperlinked) */}
        <a className="block about-block" href="#about">
          <div className="about-text">About me</div>
        </a>
        {/* Experience block (hyperlinked) */}
        <a className="block experience-block" href="#experience">
          <div className="experience-text">Experience</div>
        </a>
        {/* Projects block (hyperlinked) */}
        <a className="block projects-block" href="#projects">
          <div className="projects-text">Projects</div>
        </a>
        {/* Empty block bottom right */}
        <div className="block empty-bottom-right"></div>
      </div>
    </div>
  );
};

export default MasonryCluster; 