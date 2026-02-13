import React, { useMemo } from 'react';

const HeroContent = ({
  headline = 'Creative Technologist',
  subtext = 'I work at the intersection of narrative, interaction, and human behavior.',
}) => {
  const headlineLines = useMemo(() => {
    if (Array.isArray(headline)) {
      return headline;
    }
    return String(headline).split('\n');
  }, [headline]);
  return (
    <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center">
      <div className="relative text-center px-6 md:px-12" data-hero-text>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight text-[var(--text-primary)] tracking-tight hero-headline magnify"
          data-hero-headline
        >
          {headlineLines.map((line, index) => (
            <span key={`${line}-${index}`} className="block hero-headline-line">
              {line.split(' ').map((word, wordIndex) => {
                const lower = word.toLowerCase();
                const isCreative = lower === 'creative';
                const isTechnologist = lower === 'technologist';

                return (
                  <span
                    key={`${word}-${wordIndex}`}
                    className={
                      isCreative
                        ? 'text-[var(--text-primary)] hero-underline'
                        : isTechnologist
                        ? 'text-[var(--accent)] dark:text-[var(--text-primary)]'
                        : 'text-[var(--text-primary)]'
                    }
                  >
                    {word}
                    {wordIndex < line.split(' ').length - 1 ? ' ' : ''}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        {subtext && (
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-[var(--text-primary)]/75 dark:text-[var(--text-secondary)] leading-relaxed font-light tracking-[0.01em] magnify">
            I work at the intersection of{' '}
            <span className="text-[var(--text-primary)] dark:bg-gradient-to-r dark:from-[var(--accent)] dark:to-[var(--text-primary)] dark:bg-clip-text dark:text-transparent">
              narrative, interaction, and human behavior
            </span>
            .
          </p>
        )}

        <p className="mt-4 text-[0.7rem] md:text-xs uppercase tracking-[0.5em] text-[var(--text-primary)]/60 dark:text-[var(--accent)]/80 magnify">
          Story · Structure · Experience
        </p>

        <p className="mt-10 text-sm text-[var(--text-secondary)]/90 magnify">Quiet work. Clear intent.</p>

        <div className="hero-magnify-layer" aria-hidden="true">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 md:mb-10 leading-tight text-[var(--text-primary)] tracking-tight">
            {headlineLines.map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>
          {subtext && (
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mx-auto text-measure">
              {subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
