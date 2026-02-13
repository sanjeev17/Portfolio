import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navigation = ({ activeSection, onResumeClick, isDark, onToggleTheme }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'CREATIVES', id: 'creatives' },
    { label: 'TECH', id: 'tech' },
    { label: "WRITER'S STUDIO", id: 'writers-studio' },
    { label: 'RESUME', id: 'resume', action: 'resume' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item) => {
    if (item.action === 'resume') {
      onResumeClick();
      setMobileMenuOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent"
      >
        <div className="w-full px-8 lg:px-16 grid grid-cols-3 items-center py-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold tracking-tight cursor-pointer justify-self-start"
          >
            WHY SANJEEV RAI
          </button>
          <div className="flex gap-8 justify-self-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-link text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                  activeSection === item.id
                    ? 'nav-link-active text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)]'
                }`}
                aria-current={activeSection === item.id ? 'page' : 'false'}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 justify-self-end">
            <button
              onClick={onToggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={1.5} />
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/thesanjeev-rai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent"
      >
        <div className="px-6 flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold tracking-tight"
          >
            WHY SANJEEV RAI
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-6 h-6 flex flex-col justify-center gap-1 cursor-pointer"
          >
            <span className="block w-full h-0.5 bg-[var(--text-primary)]"></span>
            <span className="block w-full h-0.5 bg-[var(--text-primary)]"></span>
            <span className="block w-full h-0.5 bg-[var(--text-primary)]"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-transparent"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-semibold uppercase tracking-wider text-left transition-colors ${
                    activeSection === item.id
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={onToggleTheme}
                className="text-sm font-semibold uppercase tracking-wider text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navigation;
