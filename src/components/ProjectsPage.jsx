import React from 'react';
import './Projects.css';
import projects from '../data/projects.json';
import githubLogo from '../assets/github_inv.png';
import liveLogo from '../assets/live-icon.png';
import ImageSlider from './ImageSlider';
import StickyNavbar from './StickyNavbar';
import { Link, useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="projects-page">
      <StickyNavbar />
      <div className="projects-page-header">
        <button onClick={handleBackClick} className="back-link">← Back</button>
        <h1 className="project-title">&gt;_all_projects<span className="dot-accent">.</span></h1>
      </div>
      <div className="project-content">
        <div className="project-cards-row">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </div>
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

export default ProjectsPage; 