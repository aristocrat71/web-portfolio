import { useRef, useEffect, useState } from 'react';
import '../App.css';

const COLORS = ['#fff', '#b3e5fc', '#90caf9', '#e3e3e3'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const getResponsiveParticleCount = () => {
  if (window.innerWidth <= 600) return 40;
  if (window.innerWidth <= 900) return 80;
  return 120;
};

const SpaceParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const [particleCount, setParticleCount] = useState(getResponsiveParticleCount());

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(getResponsiveParticleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      let dpr = window.devicePixelRatio || 1;
      let width = Math.max(window.innerWidth, document.documentElement.clientWidth);
      let height = Math.max(window.innerHeight, document.documentElement.clientHeight);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height, dpr, ctx };
    };

    let { width, height, dpr, ctx } = setCanvasSize();

    let particles = Array.from({ length: particleCount }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(1.9, 3.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      dx: randomBetween(-0.3, 0.3),
      dy: randomBetween(-0.3, 0.3),
      opacity: randomBetween(0.5, 1)
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = distance(p1.x, p1.y, p2.x, p2.y);
          if (dist < 100) {
            ctx.globalAlpha = 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#fff';
            ctx.stroke();
          }
        }
      }
      // Draw lines to mouse
      if (mouse.current.x !== null && mouse.current.y !== null) {
        for (let p of particles) {
          const dist = distance(p.x, p.y, mouse.current.x, mouse.current.y);
          if (dist < 120) {
            ctx.globalAlpha = 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.strokeStyle = '#fff';
            ctx.stroke();
          }
        }
      }
      // Draw particles
      for (let p of particles) {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        
        // Single block dot star
        const size = p.r * 2; // Use diameter as square size
        ctx.fillRect(p.x - p.r, p.y - p.r, size, size);
        
        // Alternative: Cross pattern star (uncomment to use)
        // const pixelSize = 2.2; // Size of each pixel
        // const spacing = 3; // Space between pixels
        // 
        // // Center pixel
        // ctx.fillRect(p.x - pixelSize/2, p.y - pixelSize/2, pixelSize, pixelSize);
        // 
        // // Top pixel
        // ctx.fillRect(p.x - pixelSize/2, p.y - pixelSize/2 - spacing, pixelSize, pixelSize);
        // 
        // // Bottom pixel
        // ctx.fillRect(p.x - pixelSize/2, p.y + pixelSize/2 + spacing - pixelSize, pixelSize, pixelSize);
        // 
        // // Left pixel
        // ctx.fillRect(p.x - pixelSize/2 - spacing, p.y - pixelSize/2, pixelSize, pixelSize);
        // 
        // // Right pixel
        // ctx.fillRect(p.x + pixelSize/2 + spacing - pixelSize, p.y - pixelSize/2, pixelSize, pixelSize);
        
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      ({ width, height, dpr, ctx } = setCanvasSize());
    }
    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function handleMouseLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount]);

  return (
    <canvas ref={canvasRef} className="space-particles-bg-canvas" style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0}} />
  );
};

export default SpaceParticlesBackground; 