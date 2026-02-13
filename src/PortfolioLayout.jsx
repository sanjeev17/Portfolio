import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import Creatives from './Creatives';
import Tech from './Tech';
import WritersStudio from './WritersStudio';
import Contact from './Contact';
import ResumeModal from './ResumeModal';

const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const sections = ['home', 'creatives', 'tech', 'writers-studio', 'contact'];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom > 200) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation
        activeSection={activeSection}
        onResumeClick={() => setIsResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <main>
        <HeroSection />
        <Creatives />
        <Tech />
        <WritersStudio />
        <Contact />
        <footer className="border-t border-[var(--border)] py-8 md:py-12 mt-16 md:mt-24">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[var(--text-secondary)]">
                © {new Date().getFullYear()} Sanjeev Rai. Built with intention.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/thesanjeev-rai/" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" title="LinkedIn">
                  LinkedIn
                </a>
                <a href="https://github.com/sanjeev17" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" title="GitHub">
                  GitHub
                </a>
                <a href="https://www.youtube.com/@Intellectual_backbencher" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" title="YouTube">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PortfolioLayout;
