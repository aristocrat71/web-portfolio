import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import SampleImage from '../assets/sample.jpg';
import '../styles/hero.css';

const Hero = () => {

  return (
    <section className="hero">
      <img src={SampleImage} alt="Sample Image" height={200} width={200} className="hero-image"></img>
      <div className='hero-text'>
      <h1 className="herotext">Mitul here👋</h1>
      </div>
    </section>
  );
};

export default Hero;
