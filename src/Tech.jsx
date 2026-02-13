import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const projectRefs = useRef([]);
  const stackSliderRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      name: 'Garam Galli',
      subtitle: 'Indian Street Food — Frontend Experience',
      description: 'A clean, responsive website celebrating Indian street food culture through layout, color, and hierarchy.',
      focus: ['Frontend fundamentals', 'Responsive UI', 'Visual storytelling'],
      link: 'https://garamgalli-6xhkmo604-sanjeevs-projects-62814366.vercel.app/',
      thumb: new URL('../assets/images/tech/garam-galli.png', import.meta.url).href,
    },
    {
      name: 'SmartAI-Expense',
      subtitle: 'AI-Powered Expense Management',
      description: 'A modern expense-tracking app helping users manage spending, split bills, and build financial discipline with AI assistance.',
      focus: ['Practical UX', 'AI-assisted insights', 'Real-world workflows'],
      link: 'https://smart-ai-expense.vercel.app/',
      thumb: new URL('../assets/images/tech/smartai-expense.png', import.meta.url).href,
    },
    {
      name: 'sanket.ai',
      subtitle: 'Speech → Indian Sign Language (ISL)',
      description: 'An accessibility-focused system converting live speech into Indian Sign Language animations.',
      focus: ['Speech recognition & NLP', 'ISL mapping', '3D sign animations'],
      link: 'https://github.com/sanjeev17/Sanket.AI',
      thumb: new URL('../assets/images/tech/sanket-ai.png', import.meta.url).href,
    },
    {
      name: 'GestureSpeak',
      subtitle: 'Sign Language → Text (Computer Vision)',
      description: 'A real-time gesture recognition system translating hand signs into readable English text.',
      focus: ['Computer vision', 'Deep learning', 'Accessibility through AI'],
      link: 'https://github.com/sanjeev17/GestureSpeak',
      thumb: new URL('../assets/images/tech/gesturespeak.png', import.meta.url).href,
    },
  ];

  const techStack = [
    'React', 'Tailwind CSS', 'JavaScript', 'Python', 'NLP', 
    'Computer Vision', 'Web Speech API', 'Blender', 'GitHub', 
    'Vercel', 'HTML', 'CSS'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
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

      // Project cards animation
      if (projectRefs.current.length) {
        gsap.from(projectRefs.current, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: projectRefs.current[0],
            start: 'top 80%',
          },
        });
      }

      // Tech stack slider auto-scroll
      if (stackSliderRef.current) {
        const slider = stackSliderRef.current;
        const scrollWidth = slider.scrollWidth / 2; // Divide by 2 because we duplicated
        
        gsap.to(slider, {
          scrollLeft: `+=${scrollWidth}`,
          duration: 20,
          ease: 'none',
          repeat: -1,
          modifiers: {
            scrollLeft: (scrollLeft) => {
              return parseFloat(scrollLeft) % scrollWidth;
            },
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={sectionRef} className="section w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div ref={introRef} className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-center font-mono">
            <span className="text-[var(--accent)]">💻 TECH</span>
          </h2>
          <div className="mt-6 mx-auto h-0.5 w-32 bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/50" />
          <p className="mt-8 text-base md:text-lg text-[var(--text-secondary)] text-measure mx-auto opacity-90">
            I use technology as a creative and problem-solving medium, building systems that translate intent into usable, human-centered experiences.
          </p>
          <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] text-measure mx-auto opacity-90">
            My work spans frontend development, applied AI, computer vision, and accessibility-driven design.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-24">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="block relative"
            >
              <div className="relative border-2 border-[var(--border)] bg-[var(--bg-primary)] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] hover:bg-[var(--subtle)] transition-all duration-300 group">
                {/* Tech grid pattern overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="w-full h-full" 
                    style={{
                      backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] font-mono group-hover:text-[var(--accent)] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm md:text-base text-[var(--accent)] mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-xs md:text-sm font-semibold text-[var(--text-primary)] mb-2 font-mono">
                      Focus:
                    </p>
                    <ul className="space-y-1">
                      {project.focus.map((item, i) => (
                        <li key={i} className="text-xs md:text-sm text-[var(--text-secondary)] flex items-start">
                          <span className="text-[var(--accent)] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Floating thumbnail on hover */}
        {hoveredProject !== null && (
          <div
            className="fixed pointer-events-none z-50 rounded-xl overflow-hidden shadow-2xl border-2 border-[var(--accent)]"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              width: '450px',
              transition: 'opacity 0.2s ease-out',
            }}
          >
            <img
              src={projects[hoveredProject].thumb}
              alt={projects[hoveredProject].name}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Tech Stack Slider */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-6 text-center font-mono">
            Tech Stack
          </h4>
          <div
            ref={stackSliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First set */}
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--accent)] bg-[var(--bg-primary)] min-w-[140px]"
              >
                <span className="text-sm font-semibold text-[var(--accent)] whitespace-nowrap font-mono">
                  {tech}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--accent)] bg-[var(--bg-primary)] min-w-[140px]"
              >
                <span className="text-sm font-semibold text-[var(--accent)] whitespace-nowrap font-mono">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
