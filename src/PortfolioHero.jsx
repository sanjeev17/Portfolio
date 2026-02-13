import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0B0B0F] dark:bg-[#0B0B0F]" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%,rgba(0,0,0,0.35))]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Portfolio</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-gray-50">
            Sanjeev Rai
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
            Creative technologist shaping performance, narrative, and systems with controlled emotion and clear intent.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Focus</div>
                Performance
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Focus</div>
                Narrative
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Focus</div>
                Digital Storytelling
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Focus</div>
                Systems
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
