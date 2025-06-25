import React, { useEffect, useState, useRef } from 'react';
import aboutTypewriter from '../hooks/aboutTypewriter';
import '../styles/about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  
  const text = aboutTypewriter(
    isVisible ? [
      "A software engineer with a passion for problem-solving and a mindset to build a better future for the coming generations."
    ] : [""],
    50
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <h1 className="about-bg-text">ABOUT</h1>
      <p className="about-foreground">
        {text}
      </p>
    </section>
  );
};

export default About;