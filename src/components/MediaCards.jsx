import React from 'react';
import { motion } from 'framer-motion';

const baseMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: 'easeOut' },
  whileHover: { y: -4 },
};

const BaseCard = ({ ratioClass, onClick, className = '', children }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`group w-full text-left rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.45)] ${className}`}
      {...baseMotion}
    >
      <div className={`${ratioClass} w-full`}>
        <div className="h-full w-full bg-white/[0.04]" />
      </div>
      {children ? <div className="p-4">{children}</div> : null}
    </motion.button>
  );
};

const MediaCard16x9 = (props) => <BaseCard ratioClass="aspect-video" {...props} />;
const MediaCard9x16 = (props) => <BaseCard ratioClass="aspect-[9/16]" {...props} />;
const MediaCardSquare = (props) => <BaseCard ratioClass="aspect-square" {...props} />;

export { MediaCard16x9, MediaCard9x16, MediaCardSquare };
