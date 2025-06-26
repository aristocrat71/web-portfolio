import { useRef, useEffect } from 'react';
import '../App.css';

const PARTICLE_COUNT = 120;
const COLORS = ['#fff', '#b3e5fc', '#90caf9', '#f3e5f5'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const SpaceParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(1.2, 2.2),
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
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
  }, []);

  return (
    <canvas ref={canvasRef} className="space-particles-bg-canvas" />
  );
};

export default SpaceParticlesBackground; 