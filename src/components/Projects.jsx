import React from 'react';
import projects from '../data/projects.json';
import githubImg from '../assets/github.png';
import reactImg from '../assets/react.svg';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={reactImg} alt={project.title} height={180} width={200}></img>
          <span>{project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={githubImg} alt={project.title} height={30} width={30}/>
            </a>
          )}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
