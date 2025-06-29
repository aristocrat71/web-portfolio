import React from 'react';
import './Projects.css';
import projects from '../data/projects.json';
import githubLogo from '../assets/github_inv.png';
import liveLogo from '../assets/live-icon.png';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Show only the first 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <section className="project-root" id="projects">
      <div className="project-content">
        <h1 className="project-title">&gt;_projects<span className="dot-accent">.</span></h1>
        <div className="project-cards-row">
          {displayedProjects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
        <div className="more-projects-link">
          <Link to="/projects" className="more-projects-text">View All Projects</Link>
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
      <div className="tilted-card-project">{name}</div>
      <div className="project-card-content">
        <div className="project-card-image-section">
          <ImageSlider images={images} />
        </div>
        <div className="project-card-info-section">
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
          <div className="tilted-card-desc">{desc}</div>
          {techList.length > 0 && (
            <div className="tilted-card-tech">
              {techList.map((t, i) => (
                <span className="tilted-card-tech-tag" key={i}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects; 