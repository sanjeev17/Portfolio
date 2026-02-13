import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section
      id="resume"
      className="container py-24 md:py-32 border-t border-[var(--border)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 md:mb-24">Resume</h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            {/* Resume Image */}
            <img
              src="/assets/resume/Sanjeev_Rai_Creative_Technologist.png"
              alt="Sanjeev Rai Resume"
              className="w-full border border-[var(--border)] rounded-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
