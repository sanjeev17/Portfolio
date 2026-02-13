import React from 'react';
import SplineScene from './SplineScene';

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 ease-in-out"
    >
      {/* Headline text */}
      <h1
        className="absolute text-6xl font-bold text-gray-400 dark:text-gray-600 opacity-10 select-none pointer-events-none"
      >
        Welcome to My Portfolio
      </h1>

      {/* Spline canvas container */}
      <div className="relative w-full max-w-4xl h-3/4">
        <SplineScene url="" />
      </div>

      {/* Call-to-action button */}
      <a
        href="#work"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 -ml-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
      >
        Portfolio
      </a>
    </section>
  );
};

export default Hero;