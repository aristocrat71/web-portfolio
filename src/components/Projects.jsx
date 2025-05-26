import React from 'react';
import projects from '../data/projects.json';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
