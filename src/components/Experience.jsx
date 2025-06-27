import React, { useEffect, useState } from 'react';
import './Experience.css';
import exp_file from '../data/experience.json';

const Experience = () => {
  const [experiences] = useState(exp_file);

  return (
    <section className="experience-root" id="experience">
      <div className="experience-content">
        <h1 className="experience-title">&gt;_exp<span className="dot-accent">.</span></h1>
        <div className="experience-cards-row">
          {experiences.map((exp, idx) => (
            <TiltedCard key={idx} company={exp.company} role={exp.role} duration={exp.duration} desc={exp.desc} tech={exp.tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

// TiltedCard component based on https://reactbits.dev/components/tilted-card
const TiltedCard = ({ company, role, duration, desc, tech }) => {
  const ref = React.useRef(null);
  const [showDesc, setShowDesc] = React.useState(false);

  // Parse tech string to array
  let techList = [];
  if (tech) {
    techList = tech.replace(/[{}]/g, '').split(',').map(t => t.trim());
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 15;
      const rotateY = ((x - centerX) / centerX) * 15;
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
    };
    const handleMouseLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`tilted-card${showDesc ? ' show-desc' : ''}`} ref={ref} onClick={() => setShowDesc(v => !v)} style={{cursor: 'pointer'}}>
      <div className="tilted-card-company">{company}</div>
      <div className="tilted-card-role">{role}</div>
      <div className="tilted-card-duration">{duration}</div>
      <div className="tilted-card-desc">{desc}</div>
      {techList.length > 0 && (
        <div className="tilted-card-tech">
          {techList.map((t, i) => (
            <span className="tilted-card-tech-tag" key={i}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience; 