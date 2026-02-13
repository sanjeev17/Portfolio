import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WritersStudio = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const mainLinkRef = useRef(null);
  const stageScreenRef = useRef(null);
  const narrativesRef = useRef(null);
  const poetryRef = useRef(null);

  const writerStudioMain = new URL('../assets/images/studio/writerstudio.png', import.meta.url).href;
  const stageImage = new URL('../assets/images/studio/stage.png', import.meta.url).href;
  const narrativesImage = new URL('../assets/images/studio/narratives.png', import.meta.url).href;
  const poetryImage = new URL('../assets/images/studio/poetry.png', import.meta.url).href;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      if (introRef.current) {
        gsap.from(introRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          },
        });
      }

      // Main link animation
      if (mainLinkRef.current) {
        gsap.from(mainLinkRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainLinkRef.current,
            start: 'top 80%',
          },
        });
      }

      // Stage & Screen, Narratives animation
      if (stageScreenRef.current && narrativesRef.current) {
        gsap.from([stageScreenRef.current, narrativesRef.current], {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: stageScreenRef.current,
            start: 'top 80%',
          },
        });
      }

      // Poetry animation
      if (poetryRef.current) {
        gsap.from(poetryRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: poetryRef.current,
            start: 'top 80%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="writers-studio" ref={sectionRef} className="section section-alt w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header - Poetic & Beautiful */}
        <div ref={introRef} className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="text-[var(--text-primary)] italic">✍️ </span>
            <span className="text-[var(--text-primary)] font-serif">WRITER'S STUDIO</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-[var(--text-secondary)] font-light italic mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            This is where ideas slow down.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              The Writer's Studio is a space for long-form thinking and narrative exploration — spanning performance writing, moving-image narratives, and poetry.
            </p>
            <p className="text-base md:text-lg text-[var(--text-secondary)] italic font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Written to be felt, staged, and remembered.
            </p>
          </div>
        </div>

        {/* Main Writer's Studio Link - Large Horizontal Image */}
        <a
          ref={mainLinkRef}
          href="https://sanjeev-writing-studio.notion.site/Writer-Studio-2f88cc6193d3803f9f5ff73e7965ce05"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-16 md:mb-24 group"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={writerStudioMain}
              alt="Writer's Studio"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        </a>

        {/* Stage & Screen + Narratives - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24">
          {/* Written for Stage & Screen */}
          <a
            ref={stageScreenRef}
            href="https://sanjeev-writing-studio.notion.site/Written-for-Stage-Screen-2f88cc6193d3819e8e3ac6561feaa1ed"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="mb-6 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={stageImage}
                alt="Written for Stage & Screen"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
              Written for Stage & Screen
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Scripts, monologues, and performance texts shaped for voice, rhythm, and embodiment.
            </p>
          </a>

          {/* Narratives in Motion */}
          <a
            ref={narrativesRef}
            href="https://sanjeev-writing-studio.notion.site/Narratives-in-Motion-2f88cc6193d38176ba8bfdb6a63ee2ef"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="mb-6 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={narrativesImage}
                alt="Narratives in Motion"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
              Narratives in Motion
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Story concepts and visual narratives developed for film, performance, and moving media.
            </p>
          </a>
        </div>

        {/* Poetry - Full Width Horizontal */}
        <a
          ref={poetryRef}
          href="https://sanjeev-writing-studio.notion.site/POETRY-2f88cc6193d380fc901bc6b3cf5b1c75"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={poetryImage}
              alt="Poetry"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--text-primary)] mb-3 text-center group-hover:text-[var(--accent)] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
            Poetry
          </h3>
          <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed text-center max-w-2xl mx-auto italic" style={{ fontFamily: 'Georgia, serif' }}>
            Language distilled — exploring interiority, memory, and transformation.
          </p>
        </a>
      </div>
    </section>
  );
};

export default WritersStudio;
