import React from 'react';
import './About.css';
import myPhoto from '../assets/my-photo.jpg';

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
          <div className="about-left-section">
            <div className="about-image-container">
              <img src={myPhoto} alt="Mitul Sheth" className="about-image" />
            </div>
            <div className="about-perks-container">
              <ul className="about-perks-list">
                <li>&gt;Philomath</li>
                <li>{"{"} Aesthete {"}"}</li>
                <li>&lt;Workaholic /&gt;</li>
              </ul>
            </div>
          </div>
          <div className="about-right-section">
            <div className="about-description">
              <p>while(True) {"{"} <span className="about-highlight">Design</span>; <span className="about-highlight">Code</span>; <span className="about-highlight">Refine</span>; {`}`}</p>
              <p><span className="about-highlight">Teaching machines</span> to see, hear, and think, while also giving them a <span className="about-highlight">platform</span> to express themselves. Like a <span className="about-highlight">webpage</span> maybe.</p>
              <p>Yeah... Is it just me or do I need to work on my photography skills?</p>
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
      </div>
    </section>
  );
};

export default About; 