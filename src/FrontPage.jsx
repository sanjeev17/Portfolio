import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FrontPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      <iframe
        src="https://my.spline.design/hellodistortingintro-xM53Xp5Q54PHGKDMHSSBQwJo/"
        frameBorder="0"
        width="100%"
        height="100%"
        title="Spline Scene"
        className="absolute inset-0"
      ></iframe>
      <motion.button
        onClick={handleClick}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 -ml-8 z-50 px-3 py-1.5 bg-gradient-to-r from-black/20 via-black/15 to-black/20 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:from-black/30 hover:via-black/25 hover:to-black/30 hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95 transition-all duration-500 ease-out"
        aria-label="Go to Portfolio"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.button>
    </div>
  );
};

export default FrontPage;
