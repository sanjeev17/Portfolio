import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroMagnifier = ({ containerRef, targetSelector = '[data-hero-headline]' }) => {
  const lensRef = useRef(null);

  useEffect(() => {
    if (!containerRef?.current || !lensRef.current) return;

    const container = containerRef.current;
    const lens = lensRef.current;
    const magnifyTargets = Array.from(container.querySelectorAll('.magnify'));

    const setCursorX = gsap.quickSetter(lens, 'x', 'px');
    const setCursorY = gsap.quickSetter(lens, 'y', 'px');
    const setCursorOpacity = gsap.quickSetter(lens, 'opacity');

    const targetSetters = magnifyTargets.map((el) => ({
      el,
      setScale: gsap.quickSetter(el, 'scale'),
    }));

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isActive = false;

    const radius = 120;

    const handleMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleEnter = () => {
      isActive = true;
      setCursorOpacity(0.6);
    };

    const handleLeave = () => {
      isActive = false;
      setCursorOpacity(0);
      targetSetters.forEach(({ setScale }) => setScale(1));
    };

    const tick = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      setCursorX(currentX - 8);
      setCursorY(currentY - 8);

      if (isActive) {
        const rect = container.getBoundingClientRect();
        targetSetters.forEach(({ el, setScale }) => {
          const box = el.getBoundingClientRect();
          const cx = box.left + box.width / 2 - rect.left;
          const cy = box.top + box.height / 2 - rect.top;
          const dx = currentX - cx;
          const dy = currentY - cy;
          const dist = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - dist / radius);
          const scale = 1 + t * 0.08;
          setScale(scale);
        });
      }
    };

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);
    gsap.ticker.add(tick);

    return () => {
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      gsap.ticker.remove(tick);
    };
  }, [containerRef, targetSelector]);

  return (
    <div
      ref={lensRef}
      className="absolute top-0 left-0 pointer-events-none opacity-0"
      style={{
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transform: 'translate3d(0, 0, 0)',
      }}
      aria-hidden="true"
    />
  );
};

export default HeroMagnifier;
