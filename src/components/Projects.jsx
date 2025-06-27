import React from 'react';
import './Experience.css';
import projects from '../data/projects.json';
import githubLogo from '../assets/github_inv.png';
import liveLogo from '../assets/live.png';
import ImageSlider from './ImageSlider';

const Projects = () => {
  return (
    <section className="experience-root" id="projects">
      <div className="experience-content">
        <h1 className="experience-title">&gt;_projects<span className="dot-accent">.</span></h1>
        <div className="experience-cards-row">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ name, tech, github, livebool, live, desc, images }) => {
  let techList = [];
  if (tech) {
    techList = tech.replace(/[{}]/g, '').split(',').map(t => t.trim());
  }
  return (
    <div className="tilted-card project-card">
      <div className="tilted-card-company">{name}</div>
      <div className="tilted-card-desc">{desc}</div>
      {techList.length > 0 && (
        <div className="tilted-card-tech">
          {techList.map((t, i) => (
            <span className="tilted-card-tech-tag" key={i}>{t}</span>
          ))}
        </div>
      )}
      <ImageSlider images={images} />
      <div className="project-card-links">
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <img src={githubLogo} alt="GitHub" className="project-card-logo" />
        </a>
        {livebool && (
          <a href={live.startsWith('http') ? live : 'https://' + live} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <img src={liveLogo} alt="Live" className="project-card-logo" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects; 