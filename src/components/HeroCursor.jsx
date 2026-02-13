import React, { useEffect, useRef, useState } from 'react';

const HeroCursor = ({ containerRef }) => {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)');
    const hoverCapable = window.matchMedia('(hover: hover)');
    setEnabled(finePointer.matches && hoverCapable.matches);
  }, []);

  useEffect(() => {
    if (!enabled || !containerRef?.current || !cursorRef.current) return;

    const container = containerRef.current;
    const cursor = cursorRef.current;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId;
    let scale = 1;

    const update = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      rafId = requestAnimationFrame(update);
    };

    const handleMove = (event) => {
      const rect = container.getBoundingClientRect();
      targetX = event.clientX - rect.left - 4;
      targetY = event.clientY - rect.top - 4;
    };

    const handleEnter = () => {
      cursor.style.opacity = '0.6';
    };

    const handleLeave = () => {
      cursor.style.opacity = '0';
    };

    const headline = container.querySelector('[data-hero-headline]');
    const handleHeadlineEnter = () => {
      scale = 1.18;
      cursor.style.opacity = '0.75';
    };

    const handleHeadlineLeave = () => {
      scale = 1;
      cursor.style.opacity = '0.6';
    };

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);
    headline?.addEventListener('mouseenter', handleHeadlineEnter);
    headline?.addEventListener('mouseleave', handleHeadlineLeave);

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      headline?.removeEventListener('mouseenter', handleHeadlineEnter);
      headline?.removeEventListener('mouseleave', handleHeadlineLeave);
    };
  }, [enabled, containerRef]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[var(--text-primary)] blur-[0.5px] pointer-events-none"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
};

export default HeroCursor;
