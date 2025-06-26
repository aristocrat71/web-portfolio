import SpaceParticlesBackground from './components/SpaceParticlesBackground';
import MasonryCluster from './components/MasonryCluster';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <SpaceParticlesBackground />
      <div className="centered-masonry-wrapper">
        <MasonryCluster />
      </div>
    </div>
  );
}

export default App; 