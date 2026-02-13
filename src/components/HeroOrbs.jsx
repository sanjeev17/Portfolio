import React, { useCallback, useRef } from 'react';
import useHeroPointer from '../hooks/useHeroPointer';

const HeroOrbs = ({ containerRef }) => {
  const orbOneRef = useRef(null);
  const orbTwoRef = useRef(null);

  const handleUpdate = useCallback(({ x, y, active }) => {
    if (!orbOneRef.current || !orbTwoRef.current) return;

    const strengthOne = 28;
    const strengthTwo = 14;
    const dx1 = x * strengthOne;
    const dy1 = y * strengthOne;
    const dx2 = x * strengthTwo;
    const dy2 = y * strengthTwo;

    const opacity = active ? 1 : 0;
    orbOneRef.current.style.opacity = opacity;
    orbTwoRef.current.style.opacity = opacity;

    orbOneRef.current.style.transform = `translate3d(calc(-50% + ${dx1}px), calc(-50% + ${dy1}px), 0)`;
    orbTwoRef.current.style.transform = `translate3d(calc(-50% + ${dx2}px), calc(-50% + ${dy2}px), 0)`;
  }, []);

  useHeroPointer(containerRef, handleUpdate);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div
        ref={orbOneRef}
        className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full blur-3xl bg-white/8"
        style={{ opacity: 0, transform: 'translate3d(-50%, -50%, 0)' }}
        aria-hidden="true"
      />
      <div
        ref={orbTwoRef}
        className="absolute left-1/2 top-1/2 w-56 h-56 rounded-full blur-3xl bg-white/5"
        style={{ opacity: 0, transform: 'translate3d(-50%, -50%, 0)' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroOrbs;
