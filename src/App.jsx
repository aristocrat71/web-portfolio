import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
