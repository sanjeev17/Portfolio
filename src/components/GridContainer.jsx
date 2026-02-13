import React from 'react';

const GridContainer = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

const Grid = ({ children, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-8 ${className}`}
    >
      {children}
    </div>
  );
};

export { GridContainer, Grid };
