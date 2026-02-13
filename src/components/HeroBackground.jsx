import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-black/60 hero-bg-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'140\' height=\'140\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroBackground;
