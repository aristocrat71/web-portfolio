import React from 'react';
import './About.css';

const programmingTools = [
  'C++', 'Python', 'TensorFlow', 'Keras', 'PyTorch', 'PostgreSQL', 'MySQL', 'React', 'NodeJS',
  'Docker', 'Git', 'GitHub', 'Linux'
];

const About = () => {
  return (
    <section className="about-root" id="about">
      {/* No background here, will be handled globally */}
      <div className="about-content">
        <h1 className="about-title"> &gt;_about me<span className="dot-accent">.</span></h1>
        <div className="about-main-row">
          <div className="about-description">
            <p>I am Mitul Sheth, a software developer who specializes in <span className="about-highlight">Data Science and Machine Learning.</span> <br/>I am currently pursuing my Bachelor's degree in <span className="about-highlight">Computer Science and Engineering</span> at the Indian Institute of Information Technology, Trichy.</p>
            <p>I am a <span className="about-highlight">quick learner</span> so I can adapt to new technologies quickly. I am <span className="about-highlight">flexible team player</span> who can work on any given project.</p>
          </div>
          <div className="about-skills">
            <div className="about-section">
              <div className="about-section-title">
                &gt;_Can cook with:
              </div>
              <div className="about-tags">
                {programmingTools.map((tool) => (
                  <span className="about-tag" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 