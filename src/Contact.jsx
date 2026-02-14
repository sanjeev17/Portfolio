import React from 'react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'sanjeevwork46@gmail.com',
      link: 'mailto:sanjeevwork46@gmail.com',
      icon: '✉️',
    },
    {
      name: 'LinkedIn',
      value: 'thesanjeev-rai',
      link: 'https://www.linkedin.com/in/thesanjeev-rai/',
      icon: '💼',
    },
    {
      name: 'GitHub',
      value: 'sanjeev17',
      link: 'https://github.com/sanjeev17',
      icon: '💻',
    },
    {
      name: 'YouTube',
      value: 'Intellectual_backbencher',
      link: 'https://www.youtube.com/@Intellectual_backbencher',
      icon: '📺',
    },
    {
      name: 'Instagram',
      value: 'intellectualbackbencher',
      link: 'https://www.instagram.com/intellectualbackbencher/',
      icon: '📷',
    },
    {
      name: 'Linktree',
      value: 'the_Sanjeev_rai',
      link: 'https://linktr.ee/the_Sanjeev_rai',
      icon: '🌿',
    },
  ];

  const notionLink = {
    name: "Writer's Studio",
    value: 'Notion Workspace - Explore my creative writing, poetry, and narratives',
    link: 'https://www.notion.so/sanjeev-writing-studio/Writer-Studio-2f88cc6193d3803f9f5ff73e7965ce05',
    icon: '✍️',
  };

  return (
    <section id="contact" className="min-h-screen w-full py-32 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--text-primary) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-sm">
              <span className="text-2xl">📬</span>
              <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)] uppercase">Get in Touch</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            If something here resonated — an idea, a rhythm, a way of thinking — this is where the conversation can begin.
          </p>
        </div>

        {/* Premium Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((contact, index) => {
            const isLinktree = contact.name === 'Linktree';
            return (
              <a
                key={index}
                href={contact.link}
                target={contact.name === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[var(--bg-primary)] to-[var(--subtle)] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                  isLinktree
                    ? 'border-emerald-400/60 hover:border-emerald-400 hover:shadow-emerald-400/20'
                    : 'border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[var(--accent)]/10'
                }`}
              >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 rounded-2xl ${
                  isLinktree
                    ? 'from-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:to-emerald-400/20'
                    : 'from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-[var(--accent)]/10'
                }`}
              ></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-5">
                {/* Icon with premium styling */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                    isLinktree ? 'bg-emerald-400/15' : 'bg-[var(--accent)]/10'
                  }`}
                >
                  {contact.icon}
                </div>
                
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.15em] mb-2 ${
                      isLinktree ? 'text-emerald-400' : 'text-[var(--accent)]'
                    }`}
                  >
                    {contact.name}
                  </p>
                  <p
                    className={`text-lg font-medium text-[var(--text-primary)] transition-colors duration-300 break-words ${
                      isLinktree ? 'group-hover:text-emerald-400' : 'group-hover:text-[var(--accent)]'
                    }`}
                  >
                    {contact.value}
                  </p>
                </div>
                
                {/* Arrow indicator */}
                <div
                  className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-2xl ${
                    isLinktree ? 'text-emerald-400' : 'text-[var(--accent)]'
                  }`}
                >
                  →
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center ${
                  isLinktree
                    ? 'bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0'
                    : 'bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)] to-[var(--accent)]/0'
                }`}
              ></div>
            </a>
            );
          })}
        </div>

        {/* Featured Writer's Studio Card - Centered */}
        <div className="flex justify-center mt-6">
          <a
            href={notionLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border-2 border-[var(--accent)]/30 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--bg-primary)] to-[var(--accent)]/10 p-8 w-full md:w-[calc(50%-0.75rem)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent)]/20 hover:-translate-y-1 hover:border-[var(--accent)]"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-[var(--accent)]/20 transition-all duration-500 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative flex items-center gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {notionLink.icon}
              </div>
              
              {/* Text content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[var(--accent)] uppercase tracking-[0.15em] mb-2">
                  ⭐ {notionLink.name}
                </p>
                <p className="text-base font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  Writing & Poetry Collection
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="flex-shrink-0 text-[var(--accent)] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 text-2xl">
                →
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)] to-[var(--accent)]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
          </a>
        </div>

        {/* Additional context text */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--text-secondary)] italic">
            Available for collaborations, creative projects, and meaningful conversations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
