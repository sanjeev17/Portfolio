import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Creatives = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const featuredRef = useRef(null);
  const sliderRef = useRef(null);
  const horizontalRefs = useRef([]);
  const theatrePlaylistRef = useRef(null);
  const theatreRefs = useRef([]);
  const collabRef = useRef(null);
  const collabSliderRef = useRef(null);
  const sliderRafRef = useRef(null);
  const sliderLastTimeRef = useRef(null);
  const sliderDirRef = useRef(1);
  const collabRafRef = useRef(null);
  const collabLastTimeRef = useRef(null);
  const sliderTimeoutRef = useRef(null);
  const collabTimeoutRef = useRef(null);

  // 9:16 vertical videos (5 total) - for horizontal slider
  const verticalVideos = [
    {
      title: 'Marketing Shorts',
      intent: 'Short-form edits designed for retention, clarity, and scroll behavior.',
      thumb: new URL('../assets/images/edited/stop targeting.png', import.meta.url).href,
      link: 'https://youtu.be/hfKzqLiYmO4',
    },
    {
      title: 'Brand Ads - Star Shield Paints',
      intent: 'Commercial storytelling shaped around distinct brand identity and tone.',
      thumb: new URL('../assets/images/edited/brand promotion.jpg', import.meta.url).href,
      link: 'https://youtu.be/P0qkJWTm-vQ',
    },
    {
      title: "Brand Ads - Player's Cafe",
      intent: 'Commercial storytelling shaped around distinct brand identity and tone.',
      thumb: new URL('../assets/images/edited/players cafe.jpg', import.meta.url).href,
      link: 'https://youtu.be/_oEtJJxKSpk',
    },
    {
      title: 'CEO Salary Video',
      intent: 'A data-heavy topic edited for momentum, clarity, and engagement.',
      thumb: new URL('../assets/images/edited/why no salary.png', import.meta.url).href,
      link: 'https://youtu.be/jWmvOoxSb1s',
    },
    {
      title: 'Medical / Awareness Edit - Eyelid Swelling',
      intent: 'Information-first editing prioritizing clarity and viewer trust.',
      thumb: new URL('../assets/images/edited/eyes.png', import.meta.url).href,
      link: 'https://youtu.be/BrikUf-AqwA',
    },
  ];

  // 16:9 horizontal videos (3 total) - for standard grid
  const horizontalVideos = [
    {
      title: 'Meme Edit',
      intent: 'A study in cultural timing — where precision decides impact.',
      thumb: new URL('../assets/images/edited/viral meme.png', import.meta.url).href,
      link: 'https://youtu.be/DHpvqmCmzrI',
    },
    {
      title: 'Dark Case Edit (Jessica Chaplan / Holly Jane)',
      intent: 'A restraint-led true-crime edit focused on mood, pacing, and ethical distance.',
      thumb: new URL('../assets/images/edited/dark case.jpg', import.meta.url).href,
      link: 'https://youtu.be/BVc0Ys2FgSA',
    },
    {
      title: 'Psychological Thriller - Short Film Trailer',
      intent: 'Narrative compression through atmosphere, ambiguity, and tension.',
      thumb: new URL('../assets/images/edited/short film trailer.jpg', import.meta.url).href,
      link: 'https://youtu.be/FMQs1fR5Pio',
    },
  ];

  // Stage & Theatre performances
  const theatrePerformances = [
    {
      title: 'Abhimanyu',
      description: 'A character study on courage, inheritance, and tragic clarity — focusing on inner resolve rather than spectacle.',
      thumb: new URL('../assets/images/act/ABHIMANYU Courage Within the Chakravyuh.jpg', import.meta.url).href,
      link: 'https://youtu.be/IVzkmSAGl4w',
    },
    {
      title: 'Draupadi Haran',
      description: 'An exploration of power, silence, and moral collapse, where restraint speaks louder than dramatics.',
      thumb: new URL('../assets/images/act/cheerharan.jpg', import.meta.url).href,
      link: 'https://youtu.be/fVsjktsUVqk',
    },
    {
      title: 'Daman',
      description: 'A confrontation-driven piece built on tension, dialogue, and controlled pacing.',
      thumb: new URL('../assets/images/act/DAMAN A Cry for Protection.jpg', import.meta.url).href,
      link: 'https://youtu.be/1TrQ5Kldi1M',
    },
    {
      title: 'Rashmirathi',
      description: 'A portrayal of heroism without illusion — shaped by loyalty, pride, and irreversible choices.',
      thumb: new URL('../assets/images/act/rashmirathi.jpg', import.meta.url).href,
      link: 'https://youtu.be/ZSvoIV2Pnc0',
    },
    {
      title: 'Monologue',
      description: 'Minimal form, maximum intent — presence and vocal control carrying the narrative.',
      thumb: new URL('../assets/images/act/monologue .png', import.meta.url).href,
      link: 'https://youtu.be/HY97NoO5PYY',
    },
  ];

  // Collaborations
  const collaborations = [
    { name: 'Study With Jasmeet', link: 'https://www.youtube.com/@StudywithJasmeet' },
    { name: 'Star Shield Paints', link: 'https://www.youtube.com/@StarShield' },
    { name: 'Curesee', link: 'https://www.facebook.com/Curesee/' },
    { name: 'Coer Linguists', link: 'https://www.instagram.com/coerlinguists/' },
    { name: 'Pun Maska', link: 'https://www.linkedin.com/company/pun-maska/people/' },
    { name: 'Staypolis Pro', link: 'https://www.youtube.com/@staypolispro/shorts' },
  ];

  useEffect(() => {
    const cleanupFns = [];
    const ctx = gsap.context(() => {
      // Intro animation
      if (introRef.current) {
        gsap.from(introRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          },
        });
      }

      // Featured section animation
      if (featuredRef.current) {
        gsap.from(featuredRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
          },
        });
      }

      // Horizontal slider auto-scroll animation
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const speed = 32;

        const stopSliderAnimation = () => {
          if (sliderRafRef.current) {
            cancelAnimationFrame(sliderRafRef.current);
            sliderRafRef.current = null;
          }
          sliderLastTimeRef.current = null;
        };

        const startSliderAnimation = () => {
          stopSliderAnimation();

          const step = (time) => {
            if (!sliderLastTimeRef.current) {
              sliderLastTimeRef.current = time;
            }
            const dt = (time - sliderLastTimeRef.current) / 1000;
            sliderLastTimeRef.current = time;

            const maxScroll = Math.max(slider.scrollWidth - slider.offsetWidth, 0);
            if (maxScroll <= 0) {
              sliderRafRef.current = requestAnimationFrame(step);
              return;
            }

            let next = slider.scrollLeft + sliderDirRef.current * speed * dt;
            if (next <= 0) {
              next = 0;
              sliderDirRef.current = 1;
            } else if (next >= maxScroll) {
              next = maxScroll;
              sliderDirRef.current = -1;
            }

            slider.scrollLeft = next;
            sliderRafRef.current = requestAnimationFrame(step);
          };

          sliderRafRef.current = requestAnimationFrame(step);
        };

        const handleUserInteraction = () => {
          if (sliderTimeoutRef.current) {
            clearTimeout(sliderTimeoutRef.current);
          }

          stopSliderAnimation();

          sliderTimeoutRef.current = setTimeout(() => {
            startSliderAnimation();
          }, 2000);
        };

        startSliderAnimation();

        slider.addEventListener('wheel', handleUserInteraction, { passive: true });
        slider.addEventListener('touchstart', handleUserInteraction, { passive: true });
        slider.addEventListener('touchmove', handleUserInteraction, { passive: true });
        slider.addEventListener('pointerdown', handleUserInteraction);

        cleanupFns.push(() => {
          slider.removeEventListener('wheel', handleUserInteraction);
          slider.removeEventListener('touchstart', handleUserInteraction);
          slider.removeEventListener('touchmove', handleUserInteraction);
          slider.removeEventListener('pointerdown', handleUserInteraction);
          stopSliderAnimation();
        });
      }

      // Horizontal videos grid animation
      if (horizontalRefs.current.length) {
        gsap.from(horizontalRefs.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: horizontalRefs.current[0],
            start: 'top 80%',
          },
        });
      }

      // Theatre playlist animation
      if (theatrePlaylistRef.current) {
        gsap.from(theatrePlaylistRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: theatrePlaylistRef.current,
            start: 'top 80%',
          },
        });
      }

      // Theatre performances animation
      if (theatreRefs.current.length) {
        gsap.from(theatreRefs.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: theatreRefs.current[0],
            start: 'top 80%',
          },
        });
      }

      // Collaborations section animation
      if (collabRef.current) {
        gsap.from(collabRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: collabRef.current,
            start: 'top 80%',
          },
        });
      }

      // Collaboration slider auto-scroll - seamless loop
      if (collabSliderRef.current) {
        const slider = collabSliderRef.current;
        const firstSet = slider.children[0];
        
        if (firstSet) {
          const scrollWidth = firstSet.offsetWidth;
          const speed = 36;

          const stopCollabAnimation = () => {
            if (collabRafRef.current) {
              cancelAnimationFrame(collabRafRef.current);
              collabRafRef.current = null;
            }
            collabLastTimeRef.current = null;
          };

          const startCollabAnimation = () => {
            stopCollabAnimation();

            const step = (time) => {
              if (!collabLastTimeRef.current) {
                collabLastTimeRef.current = time;
              }
              const dt = (time - collabLastTimeRef.current) / 1000;
              collabLastTimeRef.current = time;

              const maxScroll = Math.max(slider.scrollWidth - slider.offsetWidth, 0);
              if (maxScroll <= 0) {
                collabRafRef.current = requestAnimationFrame(step);
                return;
              }

              let next = slider.scrollLeft + speed * dt;
              if (next >= scrollWidth) {
                next -= scrollWidth;
              }

              slider.scrollLeft = next;
              collabRafRef.current = requestAnimationFrame(step);
            };

            collabRafRef.current = requestAnimationFrame(step);
          };

          const handleCollabInteraction = () => {
            if (collabTimeoutRef.current) {
              clearTimeout(collabTimeoutRef.current);
            }

            stopCollabAnimation();

            collabTimeoutRef.current = setTimeout(() => {
              startCollabAnimation();
            }, 2000);
          };

          startCollabAnimation();

          slider.addEventListener('wheel', handleCollabInteraction, { passive: true });
          slider.addEventListener('touchstart', handleCollabInteraction, { passive: true });
          slider.addEventListener('touchmove', handleCollabInteraction, { passive: true });
          slider.addEventListener('pointerdown', handleCollabInteraction);

          cleanupFns.push(() => {
            slider.removeEventListener('wheel', handleCollabInteraction);
            slider.removeEventListener('touchstart', handleCollabInteraction);
            slider.removeEventListener('touchmove', handleCollabInteraction);
            slider.removeEventListener('pointerdown', handleCollabInteraction);
            stopCollabAnimation();
          });
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      cleanupFns.forEach((fn) => fn());
      if (sliderTimeoutRef.current) {
        clearTimeout(sliderTimeoutRef.current);
      }
      if (collabTimeoutRef.current) {
        clearTimeout(collabTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="creatives" ref={sectionRef} className="section section-alt w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={introRef} className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.3em] text-center">
            <span className="text-[var(--text-primary)]">CREA</span>
            <span className="text-[var(--accent)]">TIVES</span>
          </h2>
          <div className="mt-6 mx-auto h-px w-28 bg-[var(--border)]" />
          <p className="mt-8 text-base md:text-lg text-[var(--text-secondary)] text-measure mx-auto opacity-90">
            Creative is edited intent. Less collection, more clarity. Each piece is chosen for restraint, rhythm, and the quiet craft of making.
          </p>
        </div>

        {/* Subsection Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
            🎬 Video Editing & Digital Narratives
          </h3>
          <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)]">
            Ads · Shorts · Experiments · Narrative Edits
          </p>
          <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
            Editing is decision-making — about pace, attention, and meaning.
          </p>
          <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
            This work spans commercial, social, and narrative formats, unified by one principle: clarity.
          </p>
        </div>

        {/* Full Playlist Button */}
        <div ref={featuredRef} className="mb-16 md:mb-20 text-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
            Full playlist
          </h4>
          <a
            href="https://youtube.com/playlist?list=PL2iTsrCdGx9t9d9gR8DE7ABoyZ_WV6_6W"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#FF0000] px-5 py-2.5 rounded-full transition-colors hover:bg-[#E60000]"
          >
            YouTube
          </a>
        </div>

        {/* 9:16 Vertical Videos - Horizontal Slider */}
        <div className="mb-16 md:mb-24">
          <h4 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-8">
            Vertical Cut
          </h4>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {verticalVideos.map((video, index) => (
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden bg-[var(--subtle)] relative"
              >
                {/* Thumbnail */}
                <div className="relative" style={{ aspectRatio: '9/16' }}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content overlay - visible on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                      {video.title}
                    </h5>
                    <p className="text-sm text-white/90">
                      {video.intent}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 16:9 Horizontal Videos - Standard Grid */}
        <div>
          <h4 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-8">
            Wide Narrative
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {horizontalVideos.map((video, index) => (
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  horizontalRefs.current[index] = el;
                }}
                className="group block rounded-2xl overflow-hidden bg-[var(--subtle)]"
              >
                {/* Thumbnail */}
                <div className="relative" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                </div>
                
                {/* Text content below */}
                <div className="px-5 py-5">
                  <h5 className="text-base md:text-lg font-semibold text-[var(--text-primary)]">
                    {video.title}
                  </h5>
                  <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)]">
                    {video.intent}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Stage & Theatre Section */}
        <div className="mt-24 md:mt-32">
          <div className="mb-10 md:mb-14 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
              🎭 Stage & Theatre Performances
            </h3>
            <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)]">
              Performance · Classical Narrative · Spoken Word
            </p>
            <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
              Live performance is where storytelling is stripped to its essentials — voice, body, silence, and timing.
            </p>
            <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
              These works explore myth, conflict, morality, and inner struggle through stagecraft and monologue. The camera here is not decoration — it is a witness.
            </p>
          </div>

          {/* Theatre Full Playlist Button */}
          <div ref={theatrePlaylistRef} className="mb-16 md:mb-20 text-center">
            <h4 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
              Full Playlist
            </h4>
            <a
              href="https://youtube.com/playlist?list=PL2iTsrCdGx9tPb5VZC7_Qry0msDJ7D-xM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#FF0000] px-5 py-2.5 rounded-full transition-colors hover:bg-[#E60000]"
            >
              YouTube
            </a>
          </div>

          {/* Theatre Performances - 3+2 Grid */}
          <div>
            {/* First row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              {theatrePerformances.slice(0, 3).map((performance, index) => (
                <a
                  key={index}
                  href={performance.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => {
                    theatreRefs.current[index] = el;
                  }}
                  className="group block rounded-2xl overflow-hidden bg-[var(--subtle)] relative"
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={performance.thumb}
                      alt={performance.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Title - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                        {performance.title}
                      </h5>
                      {/* Description - visible only on hover */}
                      <p className="text-sm text-white/90 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {performance.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {theatrePerformances.slice(3, 5).map((performance, index) => (
                <a
                  key={index + 3}
                  href={performance.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => {
                    theatreRefs.current[index + 3] = el;
                  }}
                  className="group block rounded-2xl overflow-hidden bg-[var(--subtle)] relative"
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={performance.thumb}
                      alt={performance.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Title - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                        {performance.title}
                      </h5>
                      {/* Description - visible only on hover */}
                      <p className="text-sm text-white/90 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {performance.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Collaborations & Credentials Section */}
        <div ref={collabRef} className="mt-24 md:mt-32">
          <div className="mb-10 md:mb-14 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
              Trusted By
            </h3>
            <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
              Alongside personal work, I've collaborated with brands, educators, and organizations across digital media, education, and storytelling.
            </p>
            <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] text-measure mx-auto opacity-90">
              This section reflects trust earned through execution.
            </p>
          </div>

          {/* Selected Collaborations */}
          <div className="mb-12">
            <h4 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-6 text-center">
              Selected Collaborations
            </h4>
            <div
              ref={collabSliderRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* First set */}
              {collaborations.map((collab, index) => (
                <a
                  key={`first-${index}`}
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-colors duration-300 min-w-[200px] group"
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-white whitespace-nowrap">
                    {collab.name}
                  </span>
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {collaborations.map((collab, index) => (
                <a
                  key={`second-${index}`}
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-colors duration-300 min-w-[200px] group"
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-white whitespace-nowrap">
                    {collab.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Credentials & Engagements */}
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-4">
              Credentials & Engagements
            </h4>
            <p className="text-sm md:text-base text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Documented proof of professional engagements, internships, and creative roles — presented for transparency and verification.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1NQ5ly3iHgrIxjxN7rPLKwuI2K7HuKGvG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-colors duration-300 group"
            >
              <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-white">
                Certificates
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creatives;
