
import React, { useRef, useEffect } from 'react';

interface ParticleFieldProps {
  enabled: boolean;
}

export const ParticleField: React.FC<ParticleFieldProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    
    // Significantly reduced counts for mobile to ensure 60fps
    const count = isMobile ? 35 : 120;
    const maxInteractDist = isMobile ? 120 : 200;
    const connectionDist = isMobile ? 80 : 120;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      vx: number;
      vy: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        // Smaller particles on mobile for cleaner look and performance
        this.size = isMobile ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.density = (Math.random() * 20) + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(79, 70, 229, 0.12)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        // Drift
        this.x += this.vx;
        this.y += this.vy;

        // Boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction (distance squared check for performance)
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distSq = dx * dx + dy * dy;
        
        if (distSq < maxInteractDist * maxInteractDist) {
          const distance = Math.sqrt(distSq);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxInteractDist - distance) / maxInteractDist;

          // Subtle attraction
          this.x += forceDirectionX * force * this.density * 0.08;
          this.y += forceDirectionY * force * this.density * 0.08;
        } else {
          // Return towards base position with low-cost logic
          if (Math.abs(this.x - this.baseX) > 0.1) {
            this.x -= (this.x - this.baseX) / 120;
          }
          if (Math.abs(this.y - this.baseY) > 0.1) {
            this.y -= (this.y - this.baseY) / 120;
          }
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Batch drawing properties
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      
      // Fewer connections on mobile to save on nested loop overhead
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        // Optimization: limit number of connections per particle on mobile
        let connections = 0;
        const maxConnections = isMobile ? 3 : 10;
        
        for (let b = a + 1; b < particles.length; b++) {
          if (connections >= maxConnections) break;
          
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDist * connectionDist) {
            const dist = Math.sqrt(distSq);
            const opacity = 1 - (dist / connectionDist);
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity * 0.08})`;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            connections++;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const burstRadius = isMobile ? 150 : 300;
      for (let i = 0; i < particles.length; i++) {
        const dx = e.clientX - particles[i].x;
        const dy = e.clientY - particles[i].y;
        const distSq = dx * dx + dy * dy;
        if (distSq < burstRadius * burstRadius) {
          const dist = Math.sqrt(distSq);
          particles[i].vx -= (dx / dist) * 10;
          particles[i].vy -= (dy / dist) * 10;
        }
      }
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5, imageRendering: 'pixelated' }}
    />
  );
};
