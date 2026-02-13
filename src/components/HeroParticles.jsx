import React, { useCallback, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import useHeroPointer from '../hooks/useHeroPointer';

const HeroParticles = ({ containerRef }) => {
  const particleRefs = useRef([]);
  const opacitySetters = useRef([]);
  const xSetters = useRef([]);
  const ySetters = useRef([]);

  const particles = useMemo(() => {
    const centerX = 50;
    const centerY = 50;
    const rx = 30;
    const ry = 20;
    const cols = 20;
    const rows = 10;

    const rand = (i) => {
      const x = Math.sin(i * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    const points = [];
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const tX = (c + 0.5) / cols;
        const tY = (r + 0.5) / rows;
        const x = (tX - 0.5) * 2;
        const y = (tY - 0.5) * 2;
        if (x * x + y * y <= 1) {
          const jitterX = (rand(r * cols + c) - 0.5) * 1.4;
          const jitterY = (rand(r * cols + c + 7) - 0.5) * 1.4;
          const px = centerX + x * rx + jitterX;
          const py = centerY + y * ry + jitterY;
          points.push({ px, py, i: points.length });
        }
      }
    }

    return points.map((p) => {
      const size = p.i % 4 === 0 ? 3 : 2;
      const opacity = p.i % 5 === 0 ? 0.42 : 0.32;
      const depth = p.i % 3 === 0 ? 22 : 16;
      return {
        size,
        opacity,
        depth,
        left: `${p.px}%`,
        top: `${p.py}%`,
      };
    });
  }, []);

  const registerSetters = useCallback(() => {
    particleRefs.current.forEach((el, index) => {
      if (!el) return;
      xSetters.current[index] = gsap.quickSetter(el, 'x', 'px');
      ySetters.current[index] = gsap.quickSetter(el, 'y', 'px');
      opacitySetters.current[index] = gsap.quickSetter(el, 'opacity');
    });
  }, []);

  const handleUpdate = useCallback(
    ({ x, y, active }) => {
      if (!particleRefs.current.length) return;
      if (!xSetters.current.length) registerSetters();

      particleRefs.current.forEach((_, index) => {
        const particle = particles[index];
        const dx = x * particle.depth;
        const dy = y * particle.depth;
        xSetters.current[index]?.(active ? dx : 0);
        ySetters.current[index]?.(active ? dy : 0);
        opacitySetters.current[index]?.(active ? particle.opacity : particle.opacity * 0.6);
      });
    },
    [particles, registerSetters]
  );

  useHeroPointer(containerRef, handleUpdate);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={`particle-${index}`}
          ref={(el) => {
            particleRefs.current[index] = el;
          }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            backgroundColor: 'var(--particle-color)',
            opacity: 0,
            transform: 'translate3d(0, 0, 0)',
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default HeroParticles;
