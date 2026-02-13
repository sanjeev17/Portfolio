import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const VideoModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 rounded-2xl border border-white/10 bg-[#0B0B0F] shadow-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="h-full w-full p-6 md:p-8">
              <div className="h-full w-full rounded-xl bg-black/40 flex items-center justify-center">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
