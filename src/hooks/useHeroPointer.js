import { useEffect, useRef } from 'react';

const useHeroPointer = (containerRef, onUpdate) => {
  const rafRef = useRef(null);
  const boundsRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const activeRef = useRef(false);
  const hasScrolledRef = useRef(false);
  const scrollDirRef = useRef('down');
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return undefined;

    const finePointer = window.matchMedia('(pointer: fine)');
    const hoverCapable = window.matchMedia('(hover: hover)');
    if (!finePointer.matches || !hoverCapable.matches) return undefined;

    const updateBounds = () => {
      boundsRef.current = container.getBoundingClientRect();
      if (boundsRef.current) {
        const { width, height } = boundsRef.current;
        targetRef.current.x = width / 2;
        targetRef.current.y = height / 2;
        currentRef.current.x = width / 2;
        currentRef.current.y = height / 2;
      }
    };

    const onEnter = () => {
      activeRef.current = true;
    };

    const onLeave = () => {
      activeRef.current = false;
      if (boundsRef.current) {
        targetRef.current.x = boundsRef.current.width / 2;
        targetRef.current.y = boundsRef.current.height / 2;
      }
    };

    const onMove = (event) => {
      if (!boundsRef.current) return;
      targetRef.current.x = event.clientX - boundsRef.current.left;
      targetRef.current.y = event.clientY - boundsRef.current.top;
    };

    const handleScroll = () => {
      const y = window.scrollY || 0;
      scrollDirRef.current = y > lastScrollYRef.current ? 'down' : 'up';
      if (y > 0) hasScrolledRef.current = true;
      lastScrollYRef.current = y;
    };

    const tick = () => {
      const bounds = boundsRef.current;
      if (bounds) {
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;

        const nx = (currentRef.current.x / bounds.width - 0.5) * 2;
        const ny = (currentRef.current.y / bounds.height - 0.5) * 2;

        onUpdate?.({
          x: nx,
          y: ny,
          active: activeRef.current,
          hasScrolled: hasScrolledRef.current,
          scrollDir: scrollDirRef.current,
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);
    container.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', updateBounds);
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      container.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef, onUpdate]);
};

export default useHeroPointer;
