import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = 'text-sm font-light text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200';

  return (
    <header className="sticky top-0 z-40 bg-[#FFFCF3]/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/60 dark:border-white/10">
      <nav className="flex justify-between items-center py-4 px-4 max-w-6xl mx-auto">
        <div className="text-sm font-light tracking-wide text-gray-800 dark:text-gray-200">Why Sanjeev Rai</div>
        <div className="hidden md:flex items-center space-x-7">
          <Link to="/portfolio" className={navItem}>Home</Link>
          <Link to="/portfolio#creatives" className={navItem}>Creatives</Link>
          <Link to="/portfolio#tech" className={navItem}>Tech</Link>
          <Link to="/portfolio#writers-studio" className={navItem}>Writer&apos;s Studio</Link>
          <Link to="/resume" className={navItem}>Resume</Link>
          <Link to="/portfolio#contact" className={navItem}>Contact</Link>
          <ThemeToggle />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#FFFCF3] dark:bg-black border-t border-gray-200/60 dark:border-white/10 px-4 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex flex-col space-y-3">
              <Link to="/portfolio" className={navItem} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/portfolio#creatives" className={navItem} onClick={() => setMenuOpen(false)}>Creatives</Link>
              <Link to="/portfolio#tech" className={navItem} onClick={() => setMenuOpen(false)}>Tech</Link>
              <Link to="/portfolio#writers-studio" className={navItem} onClick={() => setMenuOpen(false)}>Writer&apos;s Studio</Link>
              <Link to="/resume" className={navItem} onClick={() => setMenuOpen(false)}>Resume</Link>
              <Link to="/portfolio#contact" className={navItem} onClick={() => setMenuOpen(false)}>Contact</Link>
              <div onClick={() => setMenuOpen(false)}>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteNav;
