import React, { useEffect, useRef } from 'react';
import HeroBackground from './components/HeroBackground';
import HeroContent from './components/HeroContent';
import HeroParticles from './components/HeroParticles';
import HeroMagnifier from './components/HeroMagnifier';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.querySelector('[data-hero-text]');
    const overlay = container.querySelector('.hero-bg-overlay');

    const ctx = gsap.context(() => {
      if (content) {
        gsap.to(content, {
          y: -40,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }

      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.75,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen w-full">
      <HeroBackground />
      <HeroParticles containerRef={containerRef} />
      <HeroContent />
      <HeroMagnifier containerRef={containerRef} />
    </section>
  );
};

export default HeroSection;
