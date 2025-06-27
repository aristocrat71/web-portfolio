import SpaceParticlesBackground from './components/SpaceParticlesBackground';
import MasonryCluster from './components/MasonryCluster';
import About from './components/About';
import StartGreeting from './components/LoadingBoxes';
import './App.css';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 700); // match fade duration
  };

  return (
    <div className="app-root">
      <SpaceParticlesBackground />
      {loading ? (
        <div className={fadeOut ? 'fade-out' : ''}>
          <StartGreeting duration={300} onComplete={handleLoadingComplete} />
        </div>
      ) : (
        <>
          <div className="hero-section">
            <div className="centered-masonry-wrapper">
              <MasonryCluster />
            </div>
          </div>
          <About />
        </>
      )}
    </div>
  );
}

export default App; 