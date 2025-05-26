import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import SampleImage from '../assets/sample.jpg';

const Hero = () => {
  const greeting = useTypewriter(['Hiii', 'Bonjour', 'Wassup','Hola']);

  return (
    <section className="hero">
      <img src={SampleImage} alt="Sample Image" height={200} width={200} className="hero-image"></img>
      <div className='hero-text'>
      <h1 className="greeting">// {greeting}</h1>
      <h1 className="herotext">My name is Mitul</h1>
      </div>
    </section>
  );
};

export default Hero;
