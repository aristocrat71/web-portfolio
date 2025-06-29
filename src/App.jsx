import SpaceParticlesBackground from './components/SpaceParticlesBackground';
import MasonryCluster from './components/MasonryCluster';
import About from './components/About';
import StartGreeting from './components/LoadingBoxes';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyNavbar from './components/StickyNavbar';
import ProjectsPage from './components/ProjectsPage';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 700); // match fade duration
  };

  const HomePage = () => (
    <>
      <StickyNavbar />
      <div className="hero-section" id="home">
        <div className="centered-masonry-wrapper">
          <MasonryCluster />
        </div>
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="app-root">
        <SpaceParticlesBackground />
        
        {loading ? (
          <div className={fadeOut ? 'fade-out' : ''}>
            <StartGreeting duration={450} onComplete={handleLoadingComplete} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App; 