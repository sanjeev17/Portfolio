import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[var(--bg-primary)] z-50 flex items-start justify-center p-6 md:p-12 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Close
              </button>
            </div>

            {/* Resume Image */}
            <motion.img
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              src="/assets/resume/Sanjeev_Rai_Creative_Technologist.png"
              alt="Sanjeev Rai Resume"
              className="w-full h-auto rounded-lg border border-[var(--accent)] hover:border-[var(--accent)] card-hover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
